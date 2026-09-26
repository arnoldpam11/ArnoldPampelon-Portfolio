import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import {
  isLeadStatus,
  leadInquirySchema,
  type LeadEvent,
  type LeadRow,
} from "@/lib/leads";
import type { LeadStatus } from "@/lib/site";

function clean(value: string, max: number) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function asLead(row: LeadRow): LeadRow {
  return {
    ...row,
    created_at: String(row.created_at),
    archived_at: row.archived_at ? String(row.archived_at) : null,
  };
}

async function sqlClient() {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

async function requireAdmin(userId: string) {
  const sql = await sqlClient();
  const rows = await sql<{ user_id: string }>`
    select user_id from admins where user_id = ${userId} limit 1
  `;
  if (!rows[0]) {
    const error = new Error("Forbidden");
    (error as Error & { status?: number }).status = 403;
    throw error;
  }
}

async function qualifyInquiry(input: {
  service: string;
  current_process: string;
  desired_result: string;
  budget: string;
  message: string;
}): Promise<{ notes: string | null; status: "complete" | "unavailable" | "skipped" }> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { notes: null, status: "unavailable" };

  const prompt = [
    "Summarize this inbound automation inquiry for Arnold Pampelon in 3 short bullets:",
    "1) current manual process",
    "2) desired automated result",
    "3) a practical first workflow to consider.",
    "Be concise. No fluff. No claims about results.",
    `Service: ${input.service}`,
    `Budget: ${input.budget}`,
    `Current process: ${input.current_process}`,
    `Desired result: ${input.desired_result}`,
    input.message ? `Message: ${input.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 140,
        temperature: 0.2,
        messages: [{ role: "user", content: prompt }],
      }),
      signal: AbortSignal.timeout(4500),
    });
    if (!res.ok) return { notes: null, status: "unavailable" };
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { notes: null, status: "unavailable" };
    return { notes: text.slice(0, 900), status: "complete" };
  } catch {
    return { notes: null, status: "unavailable" };
  }
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }) => {
    const parsed = leadInquirySchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false as const,
        error: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
      };
    }

    const input = parsed.data;
    if (input.website && input.website.trim().length > 0) {
      return { ok: true as const, duplicate: false };
    }

    const sql = await sqlClient();
    const email = clean(input.email.toLowerCase(), 120);

    const recent = await sql<{ id: string }>`
      select id from leads
      where email = ${email}
        and created_at > now() - interval '10 minutes'
      limit 1
    `;
    if (recent[0]) {
      return { ok: true as const, duplicate: true };
    }

    const id = crypto.randomUUID();
    const name = clean(input.name, 80);
    const company = clean(input.company ?? "", 120);
    const service = input.service;
    const currentProcess = clean(input.current_process, 2000);
    const desiredResult = clean(input.desired_result, 2000);
    const budget = input.budget;
    const message = clean(input.message ?? "", 4000);

    await sql`
      insert into leads (
        id, name, email, company, service, current_process, desired_result, budget, message, status, ai_status
      ) values (
        ${id}, ${name}, ${email}, ${company}, ${service}, ${currentProcess},
        ${desiredResult}, ${budget}, ${message}, ${"new"}, ${"pending"}
      )
    `;

    await sql`
      insert into lead_events (id, lead_id, event_type, detail)
      values (${crypto.randomUUID()}, ${id}, ${"submitted"}, ${"Inquiry stored in PostgreSQL."})
    `;

    const ai = await qualifyInquiry({
      service,
      current_process: currentProcess,
      desired_result: desiredResult,
      budget,
      message,
    });

    await sql`
      update leads
      set ai_notes = ${ai.notes}, ai_status = ${ai.status}
      where id = ${id}
    `;

    await sql`
      insert into lead_events (id, lead_id, event_type, detail)
      values (
        ${crypto.randomUUID()},
        ${id},
        ${ai.status === "complete" ? "ai_analyzed" : "ai_skipped"},
        ${ai.status === "complete" ? "AI qualification notes generated." : "AI analysis skipped or unavailable."}
      )
    `;

    await sql`
      insert into lead_events (id, lead_id, event_type, detail)
      values (${crypto.randomUUID()}, ${id}, ${"dashboard_notified"}, ${"Lead available in the private admin dashboard."})
    `;

    return { ok: true as const, duplicate: false };
  });

export const getAdminContext = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await sqlClient();
    const admins = await sql<{ user_id: string }>`select user_id from admins`;
    return {
      userId: context.userId,
      isAdmin: admins.some((row) => row.user_id === context.userId),
      unclaimed: admins.length === 0,
    };
  });

export const claimAdmin = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await sqlClient();
    await sql`
      insert into admins (user_id)
      select ${context.userId}
      where not exists (select 1 from admins)
    `;
    const rows = await sql<{ user_id: string }>`
      select user_id from admins where user_id = ${context.userId} limit 1
    `;
    if (!rows[0]) {
      return { ok: false as const, error: "This dashboard has already been claimed." };
    }
    return { ok: true as const };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((input: { search?: string; status?: string; service?: string } | undefined) => input ?? {})
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    const sql = await sqlClient();
    const search = clean(data.search ?? "", 80)
      .toLowerCase()
      .replace(/[%_]/g, "");
    const status = data.status && isLeadStatus(data.status) ? data.status : "";
    const service = clean(data.service ?? "", 80);

    const rows = await sql<LeadRow>`
      select id, created_at, name, email, company, service, current_process,
             desired_result, budget, message, status, ai_notes, ai_status, archived_at
      from leads
      where (${status} = '' or status = ${status})
        and (${service} = '' or service = ${service})
        and (
          ${search} = ''
          or lower(name) like ${"%" + search + "%"}
          or lower(email) like ${"%" + search + "%"}
          or lower(company) like ${"%" + search + "%"}
          or lower(service) like ${"%" + search + "%"}
        )
      order by created_at desc
      limit 200
    `;

    const counts = await sql<{ status: string; total: number }>`
      select status, count(*)::int as total from leads group by status
    `;

    const metrics: Record<LeadStatus, number> = {
      new: 0,
      contacted: 0,
      proposal: 0,
      won: 0,
      lost: 0,
      archived: 0,
    };
    for (const row of counts) {
      if (isLeadStatus(row.status)) metrics[row.status] = Number(row.total) || 0;
    }

    return { leads: rows.map(asLead), metrics };
  });

export const getLead = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: string) => id)
  .handler(async ({ context, data: id }) => {
    await requireAdmin(context.userId);
    const sql = await sqlClient();
    const rows = await sql<LeadRow>`
      select id, created_at, name, email, company, service, current_process,
             desired_result, budget, message, status, ai_notes, ai_status, archived_at
      from leads where id = ${id} limit 1
    `;
    if (!rows[0]) return { lead: null as LeadRow | null, events: [] as LeadEvent[] };
    const events = await sql<LeadEvent>`
      select id, lead_id, event_type, detail, created_at
      from lead_events where lead_id = ${id}
      order by created_at asc
    `;
    return {
      lead: asLead(rows[0]),
      events: events.map((event) => ({ ...event, created_at: String(event.created_at) })),
    };
  });

export const updateLeadStatus = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { id: string; status: LeadStatus }) => input)
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    if (!isLeadStatus(data.status)) {
      return { ok: false as const, error: "Invalid status." };
    }
    const sql = await sqlClient();
    const archivedAt = data.status === "archived" ? new Date().toISOString() : null;
    await sql`
      update leads
      set status = ${data.status}, archived_at = ${archivedAt}
      where id = ${data.id}
    `;
    await sql`
      insert into lead_events (id, lead_id, event_type, detail)
      values (${crypto.randomUUID()}, ${data.id}, ${"status_changed"}, ${"Status set to " + data.status + "."})
    `;
    return { ok: true as const };
  });

export const deleteLead = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: string) => id)
  .handler(async ({ context, data: id }) => {
    await requireAdmin(context.userId);
    const sql = await sqlClient();
    await sql`delete from leads where id = ${id}`;
    return { ok: true as const };
  });

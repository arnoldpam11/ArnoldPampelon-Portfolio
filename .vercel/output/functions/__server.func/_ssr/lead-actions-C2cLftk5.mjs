import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-DCtf_Cdb.mjs";
import { n as leadInquirySchema, t as isLeadStatus } from "./leads-CoEAuKqx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-actions-C2cLftk5.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function clean(value, max) {
	return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}
function asLead(row) {
	return {
		...row,
		created_at: String(row.created_at),
		archived_at: row.archived_at ? String(row.archived_at) : null
	};
}
async function sqlClient() {
	const { getSql } = await import("./db-ilSU9g5i.mjs").then((n) => n.t).then((n) => n.t);
	return getSql();
}
async function requireAdmin(userId) {
	if (!(await (await sqlClient())`
    select user_id from admins where user_id = ${userId} limit 1
  `)[0]) {
		const error = /* @__PURE__ */ new Error("Forbidden");
		error.status = 403;
		throw error;
	}
}
async function qualifyInquiry(input) {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		notes: null,
		status: "unavailable"
	};
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
		input.message ? `Message: ${input.message}` : ""
	].filter(Boolean).join("\n");
	try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				max_tokens: 140,
				temperature: .2,
				messages: [{
					role: "user",
					content: prompt
				}]
			}),
			signal: AbortSignal.timeout(4500)
		});
		if (!res.ok) return {
			notes: null,
			status: "unavailable"
		};
		const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
		if (!text) return {
			notes: null,
			status: "unavailable"
		};
		return {
			notes: text.slice(0, 900),
			status: "complete"
		};
	} catch {
		return {
			notes: null,
			status: "unavailable"
		};
	}
}
var submitInquiry_createServerFn_handler = createServerRpc({
	id: "7f6eda556f79c4f47d233f2dcd55c73adecd230ca3a70d59bdbc552ff1135a59",
	name: "submitInquiry",
	filename: "src/lib/lead-actions.ts"
}, (opts) => submitInquiry.__executeServer(opts));
var submitInquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(submitInquiry_createServerFn_handler, async ({ data }) => {
	const parsed = leadInquirySchema.safeParse(data);
	if (!parsed.success) return {
		ok: false,
		error: parsed.error.issues[0]?.message ?? "Please check the form and try again."
	};
	const input = parsed.data;
	if (input.website && input.website.trim().length > 0) return {
		ok: true,
		duplicate: false
	};
	const sql = await sqlClient();
	const email = clean(input.email.toLowerCase(), 120);
	if ((await sql`
      select id from leads
      where email = ${email}
        and created_at > now() - interval '10 minutes'
      limit 1
    `)[0]) return {
		ok: true,
		duplicate: true
	};
	const id = crypto.randomUUID();
	const name = clean(input.name, 80);
	const company = clean(input.company ?? "", 120);
	const service = input.service;
	const currentProcess = clean(input.current_process, 2e3);
	const desiredResult = clean(input.desired_result, 2e3);
	const budget = input.budget;
	const message = clean(input.message ?? "", 4e3);
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
		message
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
	return {
		ok: true,
		duplicate: false
	};
});
var getAdminContext_createServerFn_handler = createServerRpc({
	id: "04f54142ca6aa009b484a47536ec0019d0242ef824c45a0cdadf625f682a117b",
	name: "getAdminContext",
	filename: "src/lib/lead-actions.ts"
}, (opts) => getAdminContext.__executeServer(opts));
var getAdminContext = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getAdminContext_createServerFn_handler, async ({ context }) => {
	const admins = await (await sqlClient())`select user_id from admins`;
	return {
		userId: context.userId,
		isAdmin: admins.some((row) => row.user_id === context.userId),
		unclaimed: admins.length === 0
	};
});
var claimAdmin_createServerFn_handler = createServerRpc({
	id: "4c9b262da236364ce2799c572c8c1554a6851721e1f164348da7d4e4e6fbe1d7",
	name: "claimAdmin",
	filename: "src/lib/lead-actions.ts"
}, (opts) => claimAdmin.__executeServer(opts));
var claimAdmin = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(claimAdmin_createServerFn_handler, async ({ context }) => {
	const sql = await sqlClient();
	await sql`
      insert into admins (user_id)
      select ${context.userId}
      where not exists (select 1 from admins)
    `;
	if (!(await sql`
      select user_id from admins where user_id = ${context.userId} limit 1
    `)[0]) return {
		ok: false,
		error: "This dashboard has already been claimed."
	};
	return { ok: true };
});
var listLeads_createServerFn_handler = createServerRpc({
	id: "d1b205ff79b83ebb83618a84674d7af22a265eef2a1945f0896bf3aa39e019fe",
	name: "listLeads",
	filename: "src/lib/lead-actions.ts"
}, (opts) => listLeads.__executeServer(opts));
var listLeads = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((input) => input ?? {}).handler(listLeads_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await sqlClient();
	const search = clean(data.search ?? "", 80).toLowerCase().replace(/[%_]/g, "");
	const status = data.status && isLeadStatus(data.status) ? data.status : "";
	const service = clean(data.service ?? "", 80);
	const rows = await sql`
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
	const counts = await sql`
      select status, count(*)::int as total from leads group by status
    `;
	const metrics = {
		new: 0,
		contacted: 0,
		proposal: 0,
		won: 0,
		lost: 0,
		archived: 0
	};
	for (const row of counts) if (isLeadStatus(row.status)) metrics[row.status] = Number(row.total) || 0;
	return {
		leads: rows.map(asLead),
		metrics
	};
});
var getLead_createServerFn_handler = createServerRpc({
	id: "397bf9b2c77d2e9070521dce7c0fe1c651aaf83d6166e317e45d4683940adcee",
	name: "getLead",
	filename: "src/lib/lead-actions.ts"
}, (opts) => getLead.__executeServer(opts));
var getLead = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(getLead_createServerFn_handler, async ({ context, data: id }) => {
	await requireAdmin(context.userId);
	const sql = await sqlClient();
	const rows = await sql`
      select id, created_at, name, email, company, service, current_process,
             desired_result, budget, message, status, ai_notes, ai_status, archived_at
      from leads where id = ${id} limit 1
    `;
	if (!rows[0]) return {
		lead: null,
		events: []
	};
	const events = await sql`
      select id, lead_id, event_type, detail, created_at
      from lead_events where lead_id = ${id}
      order by created_at asc
    `;
	return {
		lead: asLead(rows[0]),
		events: events.map((event) => ({
			...event,
			created_at: String(event.created_at)
		}))
	};
});
var updateLeadStatus_createServerFn_handler = createServerRpc({
	id: "fd3065a022f97a2d3cf1b61f28151e8aba379eed5bae5d4649e2921e2ecd094e",
	name: "updateLeadStatus",
	filename: "src/lib/lead-actions.ts"
}, (opts) => updateLeadStatus.__executeServer(opts));
var updateLeadStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(updateLeadStatus_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	if (!isLeadStatus(data.status)) return {
		ok: false,
		error: "Invalid status."
	};
	const sql = await sqlClient();
	const archivedAt = data.status === "archived" ? (/* @__PURE__ */ new Date()).toISOString() : null;
	await sql`
      update leads
      set status = ${data.status}, archived_at = ${archivedAt}
      where id = ${data.id}
    `;
	await sql`
      insert into lead_events (id, lead_id, event_type, detail)
      values (${crypto.randomUUID()}, ${data.id}, ${"status_changed"}, ${"Status set to " + data.status + "."})
    `;
	return { ok: true };
});
var deleteLead_createServerFn_handler = createServerRpc({
	id: "8609a5036cdcf900f81e6979a1b452a3642fe1c42ed5b9cf3d3800c4b1e63ac6",
	name: "deleteLead",
	filename: "src/lib/lead-actions.ts"
}, (opts) => deleteLead.__executeServer(opts));
var deleteLead = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteLead_createServerFn_handler, async ({ context, data: id }) => {
	await requireAdmin(context.userId);
	await (await sqlClient())`delete from leads where id = ${id}`;
	return { ok: true };
});
//#endregion
export { claimAdmin_createServerFn_handler, deleteLead_createServerFn_handler, getAdminContext_createServerFn_handler, getLead_createServerFn_handler, listLeads_createServerFn_handler, submitInquiry_createServerFn_handler, updateLeadStatus_createServerFn_handler };

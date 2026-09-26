import { useEffect, useState } from "react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { RedirectToSignIn, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { deleteLead, getLead, updateLeadStatus } from "@/lib/lead-actions";
import type { LeadEvent, LeadRow } from "@/lib/leads";
import { STATUS_LABEL, type LeadStatus } from "@/lib/site";
import { Button, StatusBadge } from "@/components/ui";

export const Route = createFileRoute("/admin/$leadId")({ component: LeadDetailPage });

function LeadDetailPage() {
  const { leadId } = Route.useParams();
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <div className="min-h-dvh bg-page" />;
  if (!user) return <RedirectToSignIn />;
  return <LeadDetail leadId={leadId} />;
}

function LeadDetail({ leadId }: { leadId: string }) {
  const navigate = useNavigate();
  const [lead, setLead] = useState<LeadRow | null>(null);
  const [events, setEvents] = useState<LeadEvent[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const refresh = async () => {
    const result = await getLead({ data: leadId });
    setLead(result.lead);
    setEvents(result.events);
  };

  useEffect(() => {
    refresh().catch((err) => setError(err instanceof Error ? err.message : "Unable to load inquiry."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadId]);

  const setStatus = async (status: LeadStatus) => {
    setBusy(true);
    setError("");
    try {
      await updateLeadStatus({ data: { id: leadId, status } });
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update status.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-dvh bg-page text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
          <Link to="/admin" className="text-sm text-ink-soft hover:text-ink">
            ← All inquiries
          </Link>
          <UserButton />
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-10">
        {!lead ? (
          <p className="text-sm text-ink-soft">{error || "Inquiry not found."}</p>
        ) : (
          <article>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">Inquiry</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">{lead.name}</h1>
            <p className="mt-2 text-lg text-ink-soft">{lead.company || "No company listed"}</p>
            <div className="mt-4">
              <StatusBadge status={lead.status} />
            </div>

            <dl className="mt-10 space-y-6 border-t border-line pt-8">
              <Item label="Email" value={lead.email} />
              <Item label="Service" value={lead.service} />
              <Item label="Current process" value={lead.current_process} />
              <Item label="Desired result" value={lead.desired_result} />
              <Item label="Budget" value={lead.budget} />
              <Item label="Message" value={lead.message || "—"} />
              <Item
                label="Submitted"
                value={new Date(lead.created_at).toLocaleString()}
              />
            </dl>

            {lead.ai_notes ? (
              <section className="mt-10 rounded-xl border border-line bg-surface p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                  AI qualification notes
                </p>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink-soft">
                  {lead.ai_notes}
                </p>
                <p className="mt-4 text-xs text-ink-mute">
                  Generated as an internal draft. Not a client result or guarantee.
                </p>
              </section>
            ) : null}

            {events.length > 0 ? (
              <section className="mt-10">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">System log</p>
                <ol className="mt-4 space-y-3">
                  {events.map((event) => (
                    <li key={event.id} className="text-sm text-ink-soft">
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                        {event.event_type.replaceAll("_", " ")}
                      </span>
                      <span className="mx-2 text-ink-mute">·</span>
                      {event.detail}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {error ? <p className="mt-6 text-sm text-danger">{error}</p> : null}

            <div className="mt-10 flex flex-wrap gap-3">
              {lead.status !== "contacted" ? (
                <Button disabled={busy} onClick={() => setStatus("contacted")}>
                  Mark Contacted
                </Button>
              ) : null}
              {lead.status !== "proposal" ? (
                <Button variant="secondary" disabled={busy} onClick={() => setStatus("proposal")}>
                  Mark Proposal
                </Button>
              ) : null}
              {lead.status !== "won" ? (
                <Button variant="secondary" disabled={busy} onClick={() => setStatus("won")}>
                  Mark Won
                </Button>
              ) : null}
              {lead.status !== "archived" ? (
                <Button variant="secondary" disabled={busy} onClick={() => setStatus("archived")}>
                  Archive
                </Button>
              ) : null}
              <Button
                variant="danger"
                disabled={busy}
                onClick={async () => {
                  if (!confirm("Delete this inquiry permanently?")) return;
                  setBusy(true);
                  try {
                    await deleteLead({ data: leadId });
                    await navigate({ to: "/admin" });
                  } catch (err) {
                    setError(err instanceof Error ? err.message : "Could not delete inquiry.");
                    setBusy(false);
                  }
                }}
              >
                Delete
              </Button>
            </div>
            <p className="mt-4 text-xs text-ink-mute">
              Status: {STATUS_LABEL[lead.status]}
            </p>
          </article>
        )}
      </main>
    </div>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-ink-mute">{label}</dt>
      <dd className="mt-2 whitespace-pre-wrap text-base leading-relaxed text-ink">{value}</dd>
    </div>
  );
}

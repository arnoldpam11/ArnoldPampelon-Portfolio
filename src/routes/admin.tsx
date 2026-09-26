import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { RedirectToSignIn, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  claimAdmin,
  getAdminContext,
  listLeads,
} from "@/lib/lead-actions";
import type { LeadRow } from "@/lib/leads";
import { LEAD_STATUSES, SERVICES, STATUS_LABEL, type LeadStatus } from "@/lib/site";
import { Button, Input, Select, StatusBadge } from "@/components/ui";

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <AdminShell><div className="h-40 animate-pulse rounded-xl bg-elevated" /></AdminShell>;
  }
  if (!user) return <RedirectToSignIn />;
  return <AdminDashboard />;
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-page text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <div>
            <p className="font-display text-sm font-semibold tracking-tight">Arnold Pampelon</p>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">Lead management</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-ink-soft hover:text-ink">
              Portfolio
            </Link>
            <UserButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">{children}</main>
    </div>
  );
}

function AdminDashboard() {
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [unclaimed, setUnclaimed] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [metrics, setMetrics] = useState<Record<LeadStatus, number> | null>(null);
  const [error, setError] = useState("");

  const load = async (next?: { search?: string; status?: string; service?: string }) => {
    const result = await listLeads({
      data: {
        search: next?.search ?? search,
        status: next?.status ?? status,
        service: next?.service ?? service,
      },
    });
    setLeads(result.leads);
    setMetrics(result.metrics);
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const context = await getAdminContext();
        if (cancelled) return;
        setIsAdmin(context.isAdmin);
        setUnclaimed(context.unclaimed);
        if (context.isAdmin) await load();
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Unable to load dashboard.");
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
    // Initial context load only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const metricItems = useMemo(
    () =>
      [
        ["new", "New"],
        ["contacted", "Contacted"],
        ["won", "Won"],
      ] as const,
    [],
  );

  if (!ready) {
    return <AdminShell><div className="h-40 animate-pulse rounded-xl bg-elevated" /></AdminShell>;
  }

  if (!isAdmin) {
    return (
      <AdminShell>
        <div className="max-w-lg rounded-xl border border-line bg-surface p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">Private</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            {unclaimed ? "Claim this dashboard" : "Access restricted"}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {unclaimed
              ? "No administrator is set yet. Claim the dashboard only if you are Arnold Pampelon. After that, other signed-in visitors cannot see inquiries."
              : "This lead workspace is limited to the site administrator. Public inquiries still go to the contact form."}
          </p>
          {unclaimed ? (
            <Button
              className="mt-8"
              disabled={claiming}
              onClick={async () => {
                setClaiming(true);
                setError("");
                try {
                  const result = await claimAdmin();
                  if (!result.ok) {
                    setError(result.error);
                    setClaiming(false);
                    return;
                  }
                  setIsAdmin(true);
                  setUnclaimed(false);
                  await load();
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Could not claim dashboard.");
                } finally {
                  setClaiming(false);
                }
              }}
            >
              {claiming ? "Claiming…" : "Claim dashboard"}
            </Button>
          ) : null}
          {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="grid gap-4 sm:grid-cols-3">
        {metricItems.map(([key, label]) => (
          <article key={key} className="rounded-xl border border-line bg-surface px-5 py-5">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">{label}</p>
            <p className="mt-3 font-display text-4xl font-semibold tabular-nums tracking-tight">
              {String(metrics?.[key] ?? 0).padStart(2, "0")}
            </p>
          </article>
        ))}
      </div>

      <form
        className="mt-10 grid gap-3 md:grid-cols-[1fr_160px_180px_auto]"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          try {
            await load();
          } catch (err) {
            setError(err instanceof Error ? err.message : "Could not refresh leads.");
          }
        }}
      >
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search name, email, company"
          aria-label="Search inquiries"
        />
        <Select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter status">
          <option value="">All statuses</option>
          {LEAD_STATUSES.map((item) => (
            <option key={item} value={item}>
              {STATUS_LABEL[item]}
            </option>
          ))}
        </Select>
        <Select value={service} onChange={(event) => setService(event.target.value)} aria-label="Filter service">
          <option value="">All services</option>
          {SERVICES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button type="submit" variant="secondary">
          Filter
        </Button>
      </form>

      {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}

      <div className="mt-8 overflow-hidden rounded-xl border border-line">
        {leads.length === 0 ? (
          <p className="px-5 py-16 text-center text-sm text-ink-soft">
            No inquiries yet. When someone submits the contact form, they appear here.
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {leads.map((lead) => (
              <li key={lead.id}>
                <Link
                  to="/admin/$leadId"
                  params={{ leadId: lead.id }}
                  className="grid gap-2 px-5 py-4 hover:bg-elevated sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_160px_auto] sm:items-center"
                >
                  <div>
                    <p className="font-medium text-ink">{lead.name}</p>
                    <p className="text-sm text-ink-mute">{lead.email}</p>
                  </div>
                  <p className="text-sm text-ink-soft">{lead.company || "—"}</p>
                  <p className="text-sm text-ink-soft">{lead.service}</p>
                  <StatusBadge status={lead.status} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AdminShell>
  );
}

import { o as __toESM } from "../_runtime.mjs";
import { i as SERVICES, n as LEAD_STATUSES, o as STATUS_LABEL } from "./site-DvMkYlXS.mjs";
import { C as require_jsx_runtime, X as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Select, f as useCurrentUserState, i as RedirectToSignIn, r as Input, s as StatusBadge, t as Button, u as UserButton } from "./ui-pg13BgMq.mjs";
import { a as listLeads, r as getAdminContext, t as claimAdmin } from "./lead-actions-DoP-RJIz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BTXmPRqG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-xl bg-elevated" }) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {});
}
function AdminShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-page text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold tracking-tight",
					children: "Arnold Pampelon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
					children: "Lead management"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-ink-soft hover:text-ink",
						children: "Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-6xl px-5 py-10 sm:px-8",
			children
		})]
	});
}
function AdminDashboard() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [unclaimed, setUnclaimed] = (0, import_react.useState)(false);
	const [claiming, setClaiming] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [service, setService] = (0, import_react.useState)("");
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [metrics, setMetrics] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const load = async (next) => {
		const result = await listLeads({ data: {
			search: next?.search ?? search,
			status: next?.status ?? status,
			service: next?.service ?? service
		} });
		setLeads(result.leads);
		setMetrics(result.metrics);
	};
	(0, import_react.useEffect)(() => {
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
	}, []);
	const metricItems = (0, import_react.useMemo)(() => [
		["new", "New"],
		["contacted", "Contacted"],
		["won", "Won"]
	], []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-xl bg-elevated" }) });
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-lg rounded-xl border border-line bg-surface p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-cyan",
				children: "Private"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight",
				children: unclaimed ? "Claim this dashboard" : "Access restricted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-ink-soft",
				children: unclaimed ? "No administrator is set yet. Claim the dashboard only if you are Arnold Pampelon. After that, other signed-in visitors cannot see inquiries." : "This lead workspace is limited to the site administrator. Public inquiries still go to the contact form."
			}),
			unclaimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				disabled: claiming,
				onClick: async () => {
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
				},
				children: claiming ? "Claiming…" : "Claim dashboard"
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				children: error
			}) : null
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: metricItems.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-surface px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-4xl font-semibold tabular-nums tracking-tight",
					children: String(metrics?.[key] ?? 0).padStart(2, "0")
				})]
			}, key))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-10 grid gap-3 md:grid-cols-[1fr_160px_180px_auto]",
			onSubmit: async (event) => {
				event.preventDefault();
				setError("");
				try {
					await load();
				} catch (err) {
					setError(err instanceof Error ? err.message : "Could not refresh leads.");
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: search,
					onChange: (event) => setSearch(event.target.value),
					placeholder: "Search name, email, company",
					"aria-label": "Search inquiries"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onChange: (event) => setStatus(event.target.value),
					"aria-label": "Filter status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All statuses"
					}), LEAD_STATUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: STATUS_LABEL[item]
					}, item))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: service,
					onChange: (event) => setService(event.target.value),
					"aria-label": "Filter service",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All services"
					}), SERVICES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item
					}, item))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "secondary",
					children: "Filter"
				})
			]
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-danger",
			children: error
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden rounded-xl border border-line",
			children: leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-5 py-16 text-center text-sm text-ink-soft",
				children: "No inquiries yet. When someone submits the contact form, they appear here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line",
				children: leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/$leadId",
					params: { leadId: lead.id },
					className: "grid gap-2 px-5 py-4 hover:bg-elevated sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_160px_auto] sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: lead.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-mute",
							children: lead.email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: lead.company || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: lead.service
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: lead.status })
					]
				}) }, lead.id))
			})
		})
	] });
}
//#endregion
export { AdminPage as component };

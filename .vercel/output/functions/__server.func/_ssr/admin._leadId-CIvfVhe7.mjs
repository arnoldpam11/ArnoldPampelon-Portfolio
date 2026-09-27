import { o as __toESM } from "../_runtime.mjs";
import { o as STATUS_LABEL } from "./site-DvMkYlXS.mjs";
import { C as require_jsx_runtime, X as require_react, x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as useCurrentUserState, i as RedirectToSignIn, s as StatusBadge, t as Button, u as UserButton } from "./ui-pg13BgMq.mjs";
import { i as getLead, n as deleteLead, s as updateLeadStatus } from "./lead-actions-DoP-RJIz.mjs";
import { n as Route$1 } from "./router-CcEah6Us.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin._leadId-CIvfVhe7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadDetailPage() {
	const { leadId } = Route$1.useParams();
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-page" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadDetail, { leadId });
}
function LeadDetail({ leadId }) {
	const navigate = useNavigate();
	const [lead, setLead] = (0, import_react.useState)(null);
	const [events, setEvents] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const refresh = async () => {
		const result = await getLead({ data: leadId });
		setLead(result.lead);
		setEvents(result.events);
	};
	(0, import_react.useEffect)(() => {
		refresh().catch((err) => setError(err instanceof Error ? err.message : "Unable to load inquiry."));
	}, [leadId]);
	const setStatus = async (status) => {
		setBusy(true);
		setError("");
		try {
			await updateLeadStatus({ data: {
				id: leadId,
				status
			} });
			await refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not update status.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-page text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "text-sm text-ink-soft hover:text-ink",
					children: "← All inquiries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-3xl px-5 py-10",
			children: !lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: error || "Inquiry not found."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-cyan",
					children: "Inquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight",
					children: lead.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg text-ink-soft",
					children: lead.company || "No company listed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: lead.status })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 space-y-6 border-t border-line pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Email",
							value: lead.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Service",
							value: lead.service
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Current process",
							value: lead.current_process
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Desired result",
							value: lead.desired_result
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Budget",
							value: lead.budget
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Message",
							value: lead.message || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Submitted",
							value: new Date(lead.created_at).toLocaleString()
						})
					]
				}),
				lead.ai_notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-cyan",
							children: "AI qualification notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink-soft",
							children: lead.ai_notes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-ink-mute",
							children: "Generated as an internal draft. Not a client result or guarantee."
						})
					]
				}) : null,
				events.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: "System log"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs uppercase tracking-widest text-cyan",
									children: event.event_type.replaceAll("_", " ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-ink-mute",
									children: "·"
								}),
								event.detail
							]
						}, event.id))
					})]
				}) : null,
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [
						lead.status !== "contacted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: busy,
							onClick: () => setStatus("contacted"),
							children: "Mark Contacted"
						}) : null,
						lead.status !== "proposal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							disabled: busy,
							onClick: () => setStatus("proposal"),
							children: "Mark Proposal"
						}) : null,
						lead.status !== "won" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							disabled: busy,
							onClick: () => setStatus("won"),
							children: "Mark Won"
						}) : null,
						lead.status !== "archived" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							disabled: busy,
							onClick: () => setStatus("archived"),
							children: "Archive"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							disabled: busy,
							onClick: async () => {
								if (!confirm("Delete this inquiry permanently?")) return;
								setBusy(true);
								try {
									await deleteLead({ data: leadId });
									await navigate({ to: "/admin" });
								} catch (err) {
									setError(err instanceof Error ? err.message : "Could not delete inquiry.");
									setBusy(false);
								}
							},
							children: "Delete"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-ink-mute",
					children: ["Status: ", STATUS_LABEL[lead.status]]
				})
			] })
		})]
	});
}
function Item({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 whitespace-pre-wrap text-base leading-relaxed text-ink",
		children: value
	})] });
}
//#endregion
export { LeadDetailPage as component };

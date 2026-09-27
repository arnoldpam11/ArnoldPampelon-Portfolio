import { C as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TechLabel } from "./ui-pg13BgMq.mjs";
import { a as WorkflowRow, i as SiteNav, n as Container, r as SiteFooter } from "./workflow-BxObhbLO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lab-Are5aXLJ.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		label: "PRACTICE",
		title: "AI Lead Qualification",
		copy: "A practice workflow that reads an inquiry and drafts a short qualification note.",
		flow: [
			"FORM",
			"AI",
			"NOTES",
			"DASHBOARD"
		]
	},
	{
		label: "PRACTICE",
		title: "Lead Capture Automation",
		copy: "Form intake, validation, and database storage — the same pattern used on this site.",
		flow: [
			"FORM",
			"VALIDATE",
			"DATABASE",
			"NOTIFY"
		]
	},
	{
		label: "CONCEPT",
		title: "CRM Workflow",
		copy: "A conceptual routing model for moving qualified leads into a CRM.",
		flow: [
			"LEAD",
			"RULES",
			"CRM",
			"OWNER"
		]
	},
	{
		label: "CONCEPT / PROTOTYPE",
		title: "AI Chatbot",
		copy: "A prototype pattern for answering common questions from a knowledge source.",
		flow: [
			"QUESTION",
			"AI",
			"KNOWLEDGE",
			"RESPONSE"
		]
	}
];
function LabPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line py-16 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Lab" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Practice and concept work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-ink-soft",
						children: "These are not client projects. They are labeled so it stays clear what is live client work and what is practice or concept exploration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline",
						children: "← Back to portfolio"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-surface p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-cyan",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl font-semibold tracking-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-ink-soft",
								children: item.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowRow, { steps: item.flow })
							})
						]
					}, item.title))
				}) })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { LabPage as component };

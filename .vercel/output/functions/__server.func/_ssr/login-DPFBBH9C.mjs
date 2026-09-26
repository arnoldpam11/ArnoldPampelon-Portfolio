import { a as SITE } from "./site-DwsUX1kK.mjs";
import { C as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn } from "./client-IWHfIGH2.mjs";
import { t as GROK_PROVIDERS } from "./server-lSgG7kIP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DPFBBH9C.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-page px-6 text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-cyan",
					children: "Private access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl font-semibold tracking-tight",
					children: "Lead dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-ink-soft",
					children: [
						"Sign in to manage automation inquiries for ",
						SITE.name,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(provider.providerId, { callbackURL: "/admin" }),
						className: "w-full min-h-11 rounded-md border border-line-strong px-4 text-sm font-medium text-ink hover:bg-elevated",
						children: ["Continue with ", provider.label]
					}, provider.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex text-sm text-ink-soft hover:text-ink",
					children: "Back to portfolio"
				})
			]
		})
	});
}
//#endregion
export { Login as component };

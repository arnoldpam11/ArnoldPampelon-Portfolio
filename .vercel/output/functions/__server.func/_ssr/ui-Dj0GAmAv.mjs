import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { i as signOut, t as authClient } from "./client-IWHfIGH2.mjs";
import { a as hasGateSessionMarker } from "./server-lSgG7kIP.mjs";
import { t as authMiddleware } from "./middleware-DCtf_Cdb.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-Dj0GAmAv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* With auth on, visitors are signed out until they authenticate — in the sandbox
* live preview too, which does real sign-in. The shared dev user appears only
* when auth is disabled (`VITE_AUTH_ENABLED=false`, the shipped default).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/** Render children only when a user is present (real session, or the disabled-auth dev user). */
function SignedIn({ children }) {
	const { user } = useCurrentUserState();
	return user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }) : null;
}
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitInquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("7f6eda556f79c4f47d233f2dcd55c73adecd230ca3a70d59bdbc552ff1135a59"));
var getAdminContext = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("04f54142ca6aa009b484a47536ec0019d0242ef824c45a0cdadf625f682a117b"));
var claimAdmin = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("4c9b262da236364ce2799c572c8c1554a6851721e1f164348da7d4e4e6fbe1d7"));
var listLeads = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((input) => input ?? {}).handler(createSsrRpc("d1b205ff79b83ebb83618a84674d7af22a265eef2a1945f0896bf3aa39e019fe"));
var getLead = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("397bf9b2c77d2e9070521dce7c0fe1c651aaf83d6166e317e45d4683940adcee"));
var updateLeadStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("fd3065a022f97a2d3cf1b61f28151e8aba379eed5bae5d4649e2921e2ecd094e"));
var deleteLead = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("8609a5036cdcf900f81e6979a1b452a3642fe1c42ed5b9cf3d3800c4b1e63ac6"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function TechLabel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-mono text-xs font-medium uppercase tracking-widest text-cyan", className),
		children
	});
}
function Button({ className, variant = "primary", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50", variant === "primary" && "bg-ink text-page hover:bg-ink/90", variant === "accent" && "bg-cyan text-page hover:bg-cyan/90", variant === "secondary" && "border border-line-strong bg-transparent text-ink hover:border-ink/30 hover:bg-elevated", variant === "ghost" && "text-ink-soft hover:text-ink", variant === "danger" && "border border-danger/40 bg-danger/10 text-danger hover:bg-danger/20", className),
		...props
	});
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-2",
		htmlFor,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-ink",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm text-danger",
				children: error
			}) : null
		]
	});
}
var fieldClass = "min-h-11 w-full rounded-md border border-line bg-page-alt px-3.5 text-sm text-ink placeholder:text-ink-mute transition-colors duration-150 hover:border-line-strong focus-visible:border-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/30";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldClass, className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "min-h-28 resize-y py-3", className),
		...props
	});
}
function Select({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(fieldClass, "appearance-none bg-[length:12px] pr-10", className),
		...props
	});
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full border px-2.5 py-1 font-mono text-xs uppercase tracking-widest", status === "new" ? "border-cyan/30 bg-cyan-dim text-cyan" : status === "won" ? "border-ok/30 bg-ok/10 text-ok" : status === "lost" || status === "archived" ? "border-line bg-elevated text-ink-mute" : "border-line-strong bg-elevated text-ink-soft"),
		children: status
	});
}
//#endregion
export { submitInquiry as _, Select as a, TechLabel as c, claimAdmin as d, cn as f, listLeads as g, getLead as h, RedirectToSignIn as i, Textarea as l, getAdminContext as m, Field as n, SignedIn as o, deleteLead as p, Input as r, StatusBadge as s, Button as t, UserButton as u, updateLeadStatus as v, useCurrentUserState as y };

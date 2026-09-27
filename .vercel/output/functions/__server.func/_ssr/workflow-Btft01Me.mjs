import { o as __toESM } from "../_runtime.mjs";
import { a as SITE, r as NAV_LINKS } from "./site-DvMkYlXS.mjs";
import { C as require_jsx_runtime, X as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as cn, o as SignedIn } from "./ui-pg13BgMq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workflow-Btft01Me.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initialDark = window.localStorage.getItem("theme") === "dark";
		setDark(initialDark);
		document.documentElement.dataset.theme = initialDark ? "dark" : "light";
		document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", initialDark ? "#101713" : "#F7F6F2");
	}, []);
	const toggle = () => {
		const nextDark = !dark;
		setDark(nextDark);
		document.documentElement.dataset.theme = nextDark ? "dark" : "light";
		window.localStorage.setItem("theme", nextDark ? "dark" : "light");
		document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", nextDark ? "#101713" : "#F7F6F2");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 text-sm font-medium text-ink transition-colors hover:bg-page-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40",
		"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
		title: dark ? "Switch to light mode" : "Switch to dark mode",
		"aria-pressed": dark,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium",
			children: dark ? "Light mode" : "Dark mode"
		}), dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 shrink-0",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.7",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 shrink-0",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.7",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z" })
		})]
	});
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b border-transparent transition-colors duration-200", (scrolled || open) && "border-line bg-page/80 backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#home",
					className: "min-w-0 font-display text-sm font-semibold tracking-tight text-ink sm:text-base",
					children: SITE.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-ink-soft transition-colors hover:text-ink",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "text-sm text-ink-soft hover:text-ink",
							children: "Dashboard"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#contact",
							className: "inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-page transition-colors hover:bg-ink/90",
							children: "Let's Talk"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-ink lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-4 flex-col gap-1.5",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-px w-full bg-ink transition-transform", open && "translate-y-[5px] rotate-45") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-px w-full bg-ink transition-opacity", open && "opacity-0") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-px w-full bg-ink transition-transform", open && "-translate-y-[5px] -rotate-45") })
							]
						})]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-page lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-1 py-4",
				children: [
					NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-md px-2 py-3 text-base text-ink",
						onClick: () => setOpen(false),
						children: link.label
					}, link.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "rounded-md px-2 py-3 text-base text-ink",
						onClick: () => setOpen(false),
						children: "Dashboard"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between gap-3 border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-ink-soft",
							children: "Appearance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-page",
						onClick: () => setOpen(false),
						children: "Let's Talk"
					})
				]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-page-alt",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/artech-logo.webp",
					alt: "",
					className: "artech-mark size-9 rounded object-contain p-1",
					width: 36,
					height: 36
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: SITE.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-ink-mute",
					children: [
						SITE.brand,
						" · ",
						SITE.role
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-6 gap-y-3",
				"aria-label": "Footer",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "text-sm text-ink-soft hover:text-ink",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#contact",
					className: "text-sm text-ink-soft hover:text-ink",
					children: "Contact"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col gap-2 border-t border-line py-6 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Arnold Pampelon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest",
				children: SITE.tagline
			})]
		})]
	});
}
function WorkflowRow({ steps, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-wrap items-center gap-2 text-sm", className),
		children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "contents",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-md border border-line bg-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink",
				children: step
			}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-cyan",
				"aria-hidden": "true",
				children: "→"
			}) : null]
		}, `${step}-${index}`))
	});
}
function BrowserFrame({ src, alt, url }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-xl border border-line bg-elevated shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-line px-3 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-danger/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-ink-mute/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-ok/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ml-2 min-w-0 flex-1 truncate rounded-md border border-line bg-page px-3 py-1 font-mono text-xs text-ink-soft",
					children: url
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "block h-auto w-full object-cover object-top",
			loading: "lazy"
		})]
	});
}
//#endregion
export { WorkflowRow as a, SiteNav as i, Container as n, SiteFooter as r, BrowserFrame as t };

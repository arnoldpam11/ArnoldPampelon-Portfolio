import { o as __toESM } from "../_runtime.mjs";
import { a as SITE, i as SERVICES$1, r as NAV_LINKS, t as BUDGETS } from "./site-DwsUX1kK.mjs";
import { C as require_jsx_runtime, X as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as submitInquiry, a as Select, c as TechLabel, f as cn, l as Textarea, n as Field, o as SignedIn, r as Input, t as Button } from "./ui-Dj0GAmAv.mjs";
import { n as leadInquirySchema } from "./leads-CoEAuKqx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SS_bAp7I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "text-sm text-ink-soft hover:text-ink",
						children: "Dashboard"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-page transition-colors hover:bg-ink/90",
						children: "Let's Talk"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
			className: "grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold tracking-tight",
						children: SITE.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: SITE.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/artech-logo.webp",
							alt: "ARTECH mark",
							className: "size-10 rounded-md bg-ink object-contain p-1",
							width: 40,
							height: 40
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: SITE.brand
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
							children: SITE.tagline
						})] })]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-ink-soft hover:text-ink",
						children: link.label
					}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "text-sm text-ink-soft hover:text-ink",
						children: "Contact"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: "Work with Arnold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-ink-soft",
						children: "Practical automation for businesses that want fewer repetitive steps and clearer workflows."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "mt-5 inline-flex text-sm text-cyan hover:text-ink",
						children: "Let's automate it →"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col gap-2 border-t border-line py-6 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Arnold Pampelon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest",
				children: SITE.brand
			})]
		})]
	});
}
function WorkflowStack({ title, nodes, status = "WORKFLOW ACTIVE", live = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-xl border border-line bg-surface/90 p-4 shadow-panel sm:p-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-ink-soft",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ok",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full bg-ok", live && "status-pulse") }), status]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-0",
			children: nodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-elevated px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-cyan",
					children: node.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink",
					children: node.sub
				})]
			}), index < nodes.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-7 justify-center",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "12",
					height: "28",
					viewBox: "0 0 12 28",
					fill: "none",
					className: "text-cyan",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 0v22",
						className: "flow-line",
						stroke: "currentColor",
						strokeWidth: "1.2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 18l4 6 4-6",
						stroke: "currentColor",
						strokeWidth: "1.2",
						fill: "none"
					})]
				})
			}) : null] }, `${node.label}-${index}`))
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
var HERO_FLOW = [
	{
		label: "NEW LEAD",
		sub: "Form input"
	},
	{
		label: "AI",
		sub: "Analyze lead"
	},
	{
		label: "DATABASE",
		sub: "Create lead"
	},
	{
		label: "NOTIFICATION",
		sub: "Alert Arnold"
	}
];
var PRINCIPLES = [
	{
		num: "01",
		title: "UNDERSTAND",
		copy: "Find the actual business problem before choosing a tool."
	},
	{
		num: "02",
		title: "AUTOMATE",
		copy: "Build the workflow around the problem, not the other way around."
	},
	{
		num: "03",
		title: "IMPROVE",
		copy: "Test, monitor, and improve the system after it is live."
	}
];
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-fade" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "AI Automation & Workflow Specialist" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl",
					children: SITE.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl",
					children: [
						"Automate the Work.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Focus on the Business."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg",
					children: SITE.positioning
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#work",
						className: "inline-flex min-h-12 items-center justify-center rounded-md border border-line-strong px-6 text-sm font-medium text-ink transition-colors hover:bg-elevated",
						children: "View My Work →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page transition-colors hover:bg-ink/90",
						children: "Let's Work Together →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 flex items-center gap-2 text-sm text-ink-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "status-pulse size-2 rounded-full bg-ok",
						"aria-hidden": "true"
					}), "Available for automation projects"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center gap-3 border-t border-line pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/artech-logo.webp",
						alt: "ARTECH",
						className: "size-11 rounded-md bg-ink object-contain p-1",
						width: 44,
						height: 44
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-ink-soft",
						children: SITE.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: SITE.tagline
					})] })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowStack, {
				title: "LEAD AUTOMATION",
				nodes: HERO_FLOW
			})]
		})]
	});
}
function CapabilityStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-page-alt",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center font-mono text-xs uppercase tracking-widest text-ink-mute",
				children: "Practical automation · Real systems · Business workflows"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
				children: [
					"AI",
					"AUTOMATION",
					"APIs",
					"WEBHOOKS",
					"DATABASES",
					"CRM"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "font-mono text-xs uppercase tracking-widest text-ink",
					children: item
				}, item))
			})]
		})
	});
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl border border-line bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/arnold-pampelon.jpg",
						alt: "Arnold Pampelon, AI Automation and Workflow Specialist",
						className: "aspect-[4/5] w-full object-cover object-[50%_12%]",
						width: 800,
						height: 1e3
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: SITE.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[16ch] text-sm leading-snug text-ink-soft",
						children: "AI Automation & Workflow Specialist"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ok",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-pulse size-1.5 rounded-full bg-ok" }), "Available for projects"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "About me" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Automation should solve a problem."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg leading-relaxed text-ink-soft",
					children: "I'm Arnold Pampelon, an AI Automation & Workflow Specialist focused on building practical systems that reduce repetitive work, organize information, and connect business tools."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
					children: "I work on AI automation, CRM workflows, lead routing, API integrations, webhooks, chatbots, and the databases that keep those systems reliable. The goal is simple: less copying between tools, more time for the actual business."
				})
			] })]
		})
	});
}
function PrinciplesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "How I work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-10 md:grid-cols-3 md:gap-12",
			children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-t border-line pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-semibold tracking-tight text-ink-mute",
						children: item.num
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-mono text-xs uppercase tracking-widest text-cyan",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-ink-soft",
						children: item.copy
					})
				]
			}, item.num))
		})] })
	});
}
var SERVICES = [
	{
		title: "AI Workflow Automation",
		copy: "Practical AI-powered workflows that handle repetitive steps without adding unnecessary complexity."
	},
	{
		title: "Lead & CRM Automation",
		copy: "Capture, qualify, organize, and route leads so follow-up is not stuck in a spreadsheet."
	},
	{
		title: "Business Process Automation",
		copy: "Reduce repetitive manual work across the tools a business already uses."
	},
	{
		title: "API & Webhook Integrations",
		copy: "Connect business tools and services so data moves without copy-paste."
	},
	{
		title: "AI Chatbots & Assistants",
		copy: "Build useful AI-powered assistants for questions, intake, and internal support."
	},
	{
		title: "Automation Maintenance",
		copy: "Monitor, troubleshoot, and improve workflows after they are live."
	}
];
var MANUAL = [
	"CUSTOMER",
	"EMAIL",
	"MANUAL COPY",
	"SPREADSHEET",
	"CRM",
	"MANUAL FOLLOW-UP"
];
var AUTOMATED = [
	"CUSTOMER",
	"TRIGGER",
	"AI",
	"DATABASE",
	"NOTIFICATION",
	"FOLLOW-UP"
];
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-line py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "From repetitive work to reliable workflows."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 divide-y divide-line border-y border-line",
			children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-3 py-8 md:grid-cols-[88px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-ink-mute",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-ink-soft",
						children: service.copy
					})
				]
			}, service.title))
		})] })
	});
}
function ManualVsAutomated() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-page-alt py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "The shift" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "From Manual to Automated"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: "Manual"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: MANUAL.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm uppercase tracking-widest text-ink",
							children: step
						}), index < MANUAL.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-xs text-ink-mute",
							children: "↓"
						}) : null] }, step))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-cyan/25 bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-cyan",
						children: "Automated"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: AUTOMATED.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm uppercase tracking-widest text-ink",
							children: step
						}), index < AUTOMATED.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-xs text-cyan",
							children: "↓"
						}) : null] }, step))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 max-w-xl text-lg text-ink-soft",
				children: "Less manual work. More time for the business."
			})
		] })
	});
}
function SwiftFixSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Real client project" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
							children: "SwiftFix Building Maintenance Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-ink-soft",
							children: "A professional business website and service-request system created for SwiftFix Building Maintenance Services in Biñan, Laguna."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: SITE.swiftfixUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page hover:bg-ink/90",
					children: "View Live Website →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserFrame, {
					src: "/images/swiftfix-home.jpg",
					alt: "Live SwiftFix Building Maintenance Services website",
					url: SITE.swiftfixUrl.replace("https://", "")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-line bg-ink p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/swiftfix-logo.jpg",
							alt: "SwiftFix Building Maintenance Services logo",
							className: "mx-auto h-auto w-full max-w-xs object-contain",
							width: 480,
							height: 400
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: "Built with"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							"Supabase",
							"Vercel",
							"GitHub",
							"Responsive website",
							"Service request system"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-line bg-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft",
							children: item
						}, item))
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "The challenge"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-ink-soft",
					children: "SwiftFix needed a professional online presence where customers could learn about its building-maintenance services and submit service requests."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "The solution"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-ink-soft",
					children: "A responsive business website with structured service-request handling and backend data storage."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ink-mute",
						children: "System flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowRow, { steps: [
							"CUSTOMER",
							"SWIFTFIX WEBSITE",
							"SERVICE REQUEST",
							"BACKEND",
							"SUPABASE",
							"BUSINESS DATA"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm leading-relaxed text-ink-mute",
						children: "Implemented: public website, service pages, and a service-request form with backend storage. This case study does not add capabilities that are not on the live site."
					})
				]
			})
		] })
	});
}
function ExperienceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "border-t border-line bg-page-alt py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Professional Experience"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-ink-soft",
				children: "Operations work is where most broken processes show up. That experience informs how I map a workflow before automating it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-0",
				children: [
					{
						title: "Customer Service Representative",
						org: "TaskUs",
						points: [
							"Customer support",
							"Process adherence",
							"Documentation",
							"Communication",
							"Problem solving",
							"Handling customer requests"
						]
					},
					{
						title: "BPO / Customer Support",
						org: "IBEX",
						points: [
							"Non-voice chat and email support",
							"Zendesk",
							"Customer issue resolution",
							"Documentation",
							"Customer communication"
						]
					},
					{
						title: "Data Entry",
						org: "Operations support",
						points: [
							"Data processing",
							"Accuracy",
							"Information organization",
							"Administrative workflows"
						]
					}
				].map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-4 border-t border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: role.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: role.org
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: role.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft",
							children: point
						}, point))
					})]
				}, role.title))
			})
		] })
	});
}
function PracticeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Other work" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Practice and concept projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-ink-soft",
				children: "These are not client projects. They are labeled so it stays clear what is live client work and what is practice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-6",
				children: [
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
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-cyan",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
			})
		] })
	});
}
var ARCH = [
	{
		label: "WEBSITE",
		sub: "Portfolio interface"
	},
	{
		label: "FORM",
		sub: "Automation inquiry"
	},
	{
		label: "SERVER FUNCTION",
		sub: "Validate & store"
	},
	{
		label: "POSTGRESQL",
		sub: "Leads table"
	},
	{
		label: "ADMIN DASHBOARD",
		sub: "Private lead management"
	}
];
var DEMO_STEPS = [
	{
		label: "CUSTOMER SUBMITS FORM",
		sub: "Inquiry captured"
	},
	{
		label: "AI ANALYZES REQUEST",
		sub: "Qualification notes"
	},
	{
		label: "LEAD QUALIFIED",
		sub: "Structured record"
	},
	{
		label: "POSTGRESQL",
		sub: "Lead stored"
	},
	{
		label: "DASHBOARD NOTIFICATION",
		sub: "Arnold can follow up"
	}
];
var USE_CASES = [
	{
		title: "Lead Management",
		steps: [
			"FORM",
			"AI",
			"CRM",
			"NOTIFICATION"
		]
	},
	{
		title: "Customer Support",
		steps: [
			"QUESTION",
			"AI",
			"KNOWLEDGE",
			"RESPONSE"
		]
	},
	{
		title: "Appointment Flow",
		steps: [
			"BOOKING",
			"CONFIRMATION",
			"REMINDER",
			"FOLLOW-UP"
		]
	},
	{
		title: "Data Processing",
		steps: [
			"INPUT",
			"AI",
			"DATABASE",
			"REPORT"
		]
	}
];
var STACK = [
	{
		group: "Automation",
		items: ["Make"]
	},
	{
		group: "AI",
		items: [
			"AI APIs",
			"AI Assistants",
			"Chatbots"
		]
	},
	{
		group: "Backend",
		items: ["PostgreSQL", "SQL"]
	},
	{
		group: "Integration",
		items: [
			"REST APIs",
			"Webhooks",
			"JSON"
		]
	},
	{
		group: "Development",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"React"
		]
	},
	{
		group: "Deployment",
		items: ["GitHub", "Vercel"]
	}
];
var PROCESS = [
	{
		num: "01",
		title: "UNDERSTAND",
		copy: "Find the actual problem."
	},
	{
		num: "02",
		title: "MAP",
		copy: "Identify the repetitive process."
	},
	{
		num: "03",
		title: "BUILD",
		copy: "Connect the tools."
	},
	{
		num: "04",
		title: "TEST",
		copy: "Check the workflow and edge cases."
	},
	{
		num: "05",
		title: "IMPROVE",
		copy: "Monitor and optimize."
	}
];
function BackendSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Connected system" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "The portfolio is a system too."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg leading-relaxed text-ink-soft",
					children: "This portfolio doesn't just show my work. It demonstrates how I build connected systems behind the interface."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-ink-mute",
					children: "Live on this site: the public form writes to PostgreSQL through a server function, then the inquiry appears in a private authenticated dashboard. Email delivery can sit on the same server-function hop when an email provider is connected — it is not claimed as a live send from this build."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowStack, {
				title: "ARNOLD PORTFOLIO",
				nodes: ARCH,
				status: "SYSTEM LIVE"
			})]
		})
	});
}
function DemoSection() {
	const [step, setStep] = (0, import_react.useState)(0);
	const visible = DEMO_STEPS.slice(0, step + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-page-alt py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid items-start gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Demo" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "See Automation in Action"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-ink-soft",
					children: "This stepper is a labeled demo of the intake pattern. Submitting the contact form below is the live version: validate, store, optional AI notes, dashboard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-page",
						onClick: () => setStep((value) => (value + 1) % DEMO_STEPS.length),
						children: "Advance demo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-5 text-sm font-medium text-ink",
						onClick: () => setStep(0),
						children: "Reset"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowStack, {
				title: "DEMO",
				nodes: visible,
				status: "SIMULATED",
				live: false
			})]
		})
	});
}
function UseCasesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Workflow patterns" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Practical use cases"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-4",
				children: USE_CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col gap-4 rounded-xl border border-line bg-surface px-5 py-5 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold tracking-tight",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowRow, { steps: item.steps })]
				}, item.title))
			})
		] })
	});
}
function StackSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-page-alt py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Stack" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Tools behind the workflows"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: STACK.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-line pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-xs uppercase tracking-widest text-cyan",
						children: group.group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-base text-ink",
							children: item
						}, item))
					})]
				}, group.group))
			})
		] })
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Process" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "From problem to working workflow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-8 md:grid-cols-5",
				children: PROCESS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative border-t border-line pt-5",
					children: [
						index < PROCESS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 right-[-1.25rem] hidden h-px w-8 bg-cyan/40 md:block" }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-semibold text-ink-mute",
							children: item.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-mono text-xs uppercase tracking-widest text-cyan",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink-soft",
							children: item.copy
						})
					]
				}, item.num))
			})
		] })
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-[linear-gradient(180deg,#0d131c_0%,#111923_100%)] px-6 py-14 text-center sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Ready to automate the repetitive work?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-lg text-ink-soft",
						children: "Let's turn the manual process into a reliable workflow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan px-6 text-sm font-medium text-page hover:bg-cyan/90",
						children: "Let's Work Together →"
					})
				]
			})
		})
	});
}
var EMPTY = {
	name: "",
	email: "",
	company: "",
	service: "",
	current_process: "",
	desired_result: "",
	budget: "",
	message: "",
	website: ""
};
function ContactSection() {
	const [values, setValues] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const disabled = status === "loading";
	const set = (key, value) => {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		setErrors({});
		setMessage("");
		const parsed = leadInquirySchema.safeParse({
			...values,
			service: values.service || void 0,
			budget: values.budget || void 0
		});
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0] ?? "form");
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			setStatus("error");
			setMessage("Please check the highlighted fields.");
			return;
		}
		setStatus("loading");
		try {
			const result = await submitInquiry({ data: parsed.data });
			if (!result.ok) {
				setStatus("error");
				setMessage(result.error);
				return;
			}
			setStatus("success");
			setValues(EMPTY);
		} catch {
			setStatus("error");
			setMessage("Something went wrong sending the inquiry. Please try again.");
		}
	};
	const errorSummary = (0, import_react.useMemo)(() => Object.values(errors)[0], [errors]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-line bg-page-alt py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Have a repetitive process?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Let's automate it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-lg leading-relaxed text-ink-soft",
					children: "Tell me what you're currently doing manually and what you'd like to happen automatically."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-mono text-xs uppercase tracking-widest text-ink-mute",
					children: "Trigger → AI → Data → Action → Result"
				})
			] }), status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-ok/30 bg-surface p-8",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-ok",
						children: "Inquiry received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-ink",
						children: "Thanks for reaching out. Your automation inquiry has been received. I'll review the details and get back to you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						variant: "secondary",
						onClick: () => setStatus("idle"),
						children: "Send another inquiry"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-5 rounded-xl border border-line bg-surface p-5 sm:p-8",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							htmlFor: "name",
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								autoComplete: "name",
								value: values.name,
								disabled,
								onChange: (event) => set("name", event.target.value)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							htmlFor: "email",
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								value: values.email,
								disabled,
								onChange: (event) => set("email", event.target.value)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business / Company",
						htmlFor: "company",
						error: errors.company,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "company",
							name: "company",
							autoComplete: "organization",
							value: values.company,
							disabled,
							onChange: (event) => set("company", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Service",
							htmlFor: "service",
							error: errors.service,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "service",
								name: "service",
								value: values.service,
								disabled,
								onChange: (event) => set("service", event.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a service"
								}), SERVICES$1.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: service,
									children: service
								}, service))]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Budget",
							htmlFor: "budget",
							error: errors.budget,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "budget",
								name: "budget",
								value: values.budget,
								disabled,
								onChange: (event) => set("budget", event.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a range"
								}), BUDGETS.map((budget) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: budget,
									children: budget
								}, budget))]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Current process",
						htmlFor: "current_process",
						error: errors.current_process,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "current_process",
							name: "current_process",
							value: values.current_process,
							disabled,
							onChange: (event) => set("current_process", event.target.value),
							placeholder: "What happens manually today?"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Desired result",
						htmlFor: "desired_result",
						error: errors.desired_result,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "desired_result",
							name: "desired_result",
							value: values.desired_result,
							disabled,
							onChange: (event) => set("desired_result", event.target.value),
							placeholder: "What should happen automatically?"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message",
						htmlFor: "message",
						error: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							value: values.message,
							disabled,
							onChange: (event) => set("message", event.target.value),
							placeholder: "Anything else I should know?"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							tabIndex: -1,
							autoComplete: "off",
							value: values.website,
							onChange: (event) => set("website", event.target.value)
						})
					}),
					status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						role: "alert",
						children: message || errorSummary
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "primary",
						className: "w-full min-h-12 sm:w-auto",
						disabled,
						children: disabled ? "Sending…" : "Send Automation Inquiry →"
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilityStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrinciplesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManualVsAutomated, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiftFixSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackendSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UseCasesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };

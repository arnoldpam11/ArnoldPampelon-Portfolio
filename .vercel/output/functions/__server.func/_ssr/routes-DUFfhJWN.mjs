import { o as __toESM } from "../_runtime.mjs";
import { a as SITE, i as SERVICES$1, t as BUDGETS } from "./site-DvMkYlXS.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Select, c as TechLabel, l as Textarea, n as Field, r as Input, t as Button } from "./ui-pg13BgMq.mjs";
import { o as submitInquiry } from "./lead-actions-DoP-RJIz.mjs";
import { i as SiteNav, n as Container, r as SiteFooter, t as BrowserFrame } from "./workflow-BxObhbLO.mjs";
import { n as leadInquirySchema } from "./leads-C5WLjq4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUFfhJWN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] lg:gap-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-[0.18em] text-cyan",
					children: "AI Automation & Workflow Specialist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl",
					children: SITE.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-7 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl",
					children: "Practical automation for the work that slows your business down."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
					children: SITE.positioning
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#work",
						className: "inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page transition-colors hover:bg-ink/90",
						children: "View selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "inline-flex min-h-12 items-center justify-center rounded-md border border-line-strong px-6 text-sm font-medium text-ink transition-colors hover:bg-page-alt",
						children: "Get in touch"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center gap-3 border-t border-line pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/artech-logo.webp",
						alt: "",
						className: "artech-mark size-9 rounded object-contain p-1",
						width: 36,
						height: 36
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-ink",
						children: SITE.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[0.14em] text-ink-mute",
						children: SITE.tagline
					})] })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mx-auto w-full max-w-md lg:justify-self-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/arnold-pampelon.jpg",
					alt: "Arnold Pampelon",
					className: "aspect-[4/5] w-full object-cover object-[50%_12%]",
					width: 800,
					height: 1e3
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 text-sm text-ink-mute",
					children: [
						SITE.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						" ",
						SITE.role
					]
				})]
			})]
		})
	});
}
var SERVICES = [
	{
		title: "AI workflow automation",
		copy: "Practical AI-powered workflows for repetitive steps, built around the process at hand."
	},
	{
		title: "Lead and CRM workflows",
		copy: "Capture, qualify, organize, and route leads to support timely follow-up."
	},
	{
		title: "API and webhook integrations",
		copy: "Connect business tools so information can move between the services you use."
	},
	{
		title: "AI assistants and chatbots",
		copy: "Focused assistants for common questions, information intake, and internal support."
	},
	{
		title: "Workflow maintenance",
		copy: "Troubleshoot and refine automations as business needs change."
	}
];
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl",
				children: "Useful systems, made to fit the work."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl leading-relaxed text-ink-soft sm:justify-self-end",
				children: "I help make everyday processes easier to manage by connecting the tools and steps a business already relies on."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 divide-y divide-line border-y border-line",
			children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tabular-nums text-ink-mute",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-medium tracking-tight text-ink",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-ink-soft",
						children: service.copy
					})
				]
			}, service.title))
		})] })
	});
}
function SwiftFixSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-y border-line bg-page-alt py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Featured client project" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "SwiftFix Building Maintenance Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl leading-relaxed text-ink-soft",
						children: "A business website and service-request system for SwiftFix Building Maintenance Services in Biñan, Laguna."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: SITE.swiftfixUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-surface",
				children: ["Visit the live website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2",
					"aria-hidden": "true",
					children: "↗"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.7fr)] lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserFrame, {
				src: "/images/swiftfix-home.jpg",
				alt: "Screenshot of the live SwiftFix Building Maintenance Services website",
				url: SITE.swiftfixUrl.replace("https://", "")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-9 items-center justify-center rounded-full border border-line bg-cyan-dim text-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							"aria-hidden": "true",
							viewBox: "0 0 24 24",
							fill: "none",
							className: "size-[18px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M7 7.5h3.25A3.75 3.75 0 0 1 14 11.25v1.5a3.75 3.75 0 0 0 3.75 3.75H18M7 16.5h3.25A3.75 3.75 0 0 0 14 12.75v-1.5A3.75 3.75 0 0 1 17.75 7.5H18",
									stroke: "currentColor",
									strokeWidth: "1.6",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "5",
									cy: "7.5",
									r: "2",
									stroke: "currentColor",
									strokeWidth: "1.6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "19",
									cy: "7.5",
									r: "2",
									stroke: "currentColor",
									strokeWidth: "1.6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "5",
									cy: "16.5",
									r: "2",
									stroke: "currentColor",
									strokeWidth: "1.6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "19",
									cy: "16.5",
									r: "2",
									stroke: "currentColor",
									strokeWidth: "1.6"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-xs uppercase tracking-[0.16em] text-ink-mute",
						children: "Project snapshot"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-ink-mute",
								children: "Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm leading-relaxed text-ink",
								children: "SwiftFix Building Maintenance Services"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-ink-mute",
								children: "Scope"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm leading-relaxed text-ink",
								children: "Responsive business website and service-request system"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-ink-mute",
								children: "Tools used"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm leading-relaxed text-ink",
								children: "Supabase · Vercel · GitHub"
							})]
						})
					]
				})]
			})]
		})] })
	});
}
function ExperienceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-8 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechLabel, { children: "Background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-sm font-display text-3xl font-semibold tracking-tight sm:text-4xl",
				children: "Professional experience"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line border-y border-line",
				children: [{
					title: "BPO / Customer Service Representative",
					companies: [{
						name: "IBEX",
						period: "2024–2025",
						logo: "https://mms.businesswire.com/media/20210127005188/en/811226/23/ibex-Logo.jpg"
					}, {
						name: "TaskUs",
						period: "2025–2026",
						logo: "https://mms.businesswire.com/media/20260224268151/en/2730206/22/taskus-logo.jpg"
					}]
				}, {
					title: "Data Entry",
					org: "Operations support"
				}].map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-ink",
							children: role.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:shrink-0 sm:items-end",
							children: [role.companies ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-x-5 gap-y-2",
								children: role.companies.map((company) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-[4.5rem] items-center justify-center overflow-hidden rounded bg-white px-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: company.logo,
											alt: `${company.name} logo`,
											className: "max-h-full max-w-full object-contain",
											loading: "lazy",
											referrerPolicy: "no-referrer"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tabular-nums text-ink-mute",
										children: company.period
									})]
								}, company.name))
							}) : role.org ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink-soft",
								children: role.org
							}) : null, role.period ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								className: "font-mono text-xs tabular-nums text-ink-mute",
								children: role.period
							}) : null]
						})]
					})
				}, role.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-line pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-xs uppercase tracking-[0.16em] text-ink-mute",
					children: "Tools & technology"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-4 grid gap-x-8 sm:grid-cols-2",
					children: [
						{
							label: "Automation & CRM",
							tools: [{
								name: "Make.com",
								mark: "M",
								color: "bg-violet-100 text-violet-700"
							}, {
								name: "GoHighLevel",
								mark: "H",
								color: "bg-amber-100 text-amber-700"
							}],
							icon: "workflow"
						},
						{
							label: "AI",
							tools: [
								{
									name: "AI APIs",
									mark: "AI",
									color: "bg-indigo-100 text-indigo-700"
								},
								{
									name: "Assistants",
									mark: "A",
									color: "bg-fuchsia-100 text-fuchsia-700"
								},
								{
									name: "Chatbots",
									mark: "C",
									color: "bg-sky-100 text-sky-700"
								}
							],
							icon: "spark"
						},
						{
							label: "Data",
							tools: [
								{
									name: "Supabase",
									mark: "S",
									color: "bg-emerald-100 text-emerald-700"
								},
								{
									name: "PostgreSQL",
									mark: "P",
									color: "bg-blue-100 text-blue-700"
								},
								{
									name: "SQL",
									mark: "SQL",
									color: "bg-cyan-100 text-cyan-800"
								}
							],
							icon: "data"
						},
						{
							label: "Integrations",
							tools: [
								{
									name: "REST APIs",
									mark: "API",
									color: "bg-orange-100 text-orange-700"
								},
								{
									name: "Webhooks",
									mark: "↗",
									color: "bg-teal-100 text-teal-700"
								},
								{
									name: "JSON",
									mark: "{}",
									color: "bg-lime-100 text-lime-800"
								}
							],
							icon: "integrations"
						},
						{
							label: "Development & deployment",
							tools: [
								{
									name: "HTML",
									mark: "5",
									color: "bg-orange-100 text-orange-700"
								},
								{
									name: "CSS",
									mark: "3",
									color: "bg-blue-100 text-blue-700"
								},
								{
									name: "JavaScript",
									mark: "JS",
									color: "bg-yellow-100 text-yellow-800"
								},
								{
									name: "React",
									mark: "R",
									color: "bg-cyan-100 text-cyan-800"
								},
								{
									name: "GitHub",
									mark: "GH",
									color: "bg-slate-200 text-slate-800"
								},
								{
									name: "Vercel",
									mark: "V",
									color: "bg-neutral-200 text-neutral-800"
								}
							],
							icon: "code"
						},
						{
							label: "Customer support",
							tools: [{
								name: "Zendesk",
								mark: "Z",
								color: "bg-green-100 text-green-800"
							}],
							icon: "support"
						}
					].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 border-t border-line py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex size-9 items-center justify-center rounded-xl border border-line bg-surface ${group.icon === "workflow" ? "text-violet-600" : group.icon === "spark" ? "text-fuchsia-600" : group.icon === "data" ? "text-emerald-600" : group.icon === "integrations" ? "text-orange-600" : group.icon === "code" ? "text-blue-600" : "text-green-600"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								"aria-hidden": "true",
								viewBox: "0 0 24 24",
								fill: "none",
								className: "size-[18px]",
								children: [
									group.icon === "workflow" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "6",
											cy: "7",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "18",
											cy: "7",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "17",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M8 7h2a2 2 0 0 1 2 2v6m2-8h-2a2 2 0 0 0-2 2",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinecap: "round"
										})
									] }) : null,
									group.icon === "spark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinejoin: "round"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z",
										stroke: "currentColor",
										strokeWidth: "1.4",
										strokeLinejoin: "round"
									})] }) : null,
									group.icon === "data" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "12",
										cy: "6",
										rx: "7",
										ry: "3",
										stroke: "currentColor",
										strokeWidth: "1.6"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
										stroke: "currentColor",
										strokeWidth: "1.6"
									})] }) : null,
									group.icon === "integrations" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M8 8.5 16 15.5M16 8.5 8 15.5",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "6",
											cy: "6.5",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "18",
											cy: "6.5",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "6",
											cy: "17.5",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "18",
											cy: "17.5",
											r: "2",
											stroke: "currentColor",
											strokeWidth: "1.6"
										})
									] }) : null,
									group.icon === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									}) : null,
									group.icon === "support" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M4 13v-1a8 8 0 0 1 16 0v1m-16 0v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinejoin: "round"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M9 20h3",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round"
									})] }) : null
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs font-medium text-ink-mute",
							children: group.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: group.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2 py-1 text-xs font-medium text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: `flex size-[1.125rem] items-center justify-center rounded-md text-[9px] font-bold leading-none ${tool.color}`,
									children: tool.mark
								}), tool.name]
							}, tool.name))
						})] })]
					}, group.label))
				})]
			})] })]
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
		className: "border-t border-line bg-page-alt py-16 sm:py-20 lg:py-24",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiftFixSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };

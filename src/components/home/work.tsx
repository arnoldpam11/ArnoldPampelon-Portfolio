import { SITE } from "@/lib/site";
import { TechLabel } from "@/components/ui";
import { Container } from "@/components/chrome";
import { BrowserFrame } from "@/components/workflow";

const SERVICES = [
  {
    title: "AI workflow automation",
    copy: "Practical AI-powered workflows for repetitive steps, built around the process at hand.",
  },
  {
    title: "Lead and CRM workflows",
    copy: "Capture, qualify, organize, and route leads to support timely follow-up.",
  },
  {
    title: "API and webhook integrations",
    copy: "Connect business tools so information can move between the services you use.",
  },
  {
    title: "AI assistants and chatbots",
    copy: "Focused assistants for common questions, information intake, and internal support.",
  },
  {
    title: "Workflow maintenance",
    copy: "Troubleshoot and refine automations as business needs change.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-end">
          <div>
            <TechLabel>Services</TechLabel>
            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Useful systems, made to fit the work.
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-ink-soft sm:justify-self-end">
            I help make everyday processes easier to manage by connecting the tools and
            steps a business already relies on.
          </p>
        </div>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-5"
            >
              <p className="font-mono text-xs tabular-nums text-ink-mute">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{service.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SwiftFixSection() {
  return (
    <section id="work" className="border-y border-line bg-page-alt py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <TechLabel>Featured client project</TechLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              SwiftFix Building Maintenance Services
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              A business website and service-request system for SwiftFix Building
              Maintenance Services in Biñan, Laguna.
            </p>
          </div>
          <a
            href={SITE.swiftfixUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            Visit the live website <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.7fr)] lg:gap-12">
          <BrowserFrame
            src="/images/swiftfix-home.jpg"
            alt="Screenshot of the live SwiftFix Building Maintenance Services website"
            url={SITE.swiftfixUrl.replace("https://", "")}
          />
          <div className="border-t border-line pt-5">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full border border-line bg-cyan-dim text-cyan">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-[18px]"
                >
                  <path
                    d="M7 7.5h3.25A3.75 3.75 0 0 1 14 11.25v1.5a3.75 3.75 0 0 0 3.75 3.75H18M7 16.5h3.25A3.75 3.75 0 0 0 14 12.75v-1.5A3.75 3.75 0 0 1 17.75 7.5H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="19" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="5" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="19" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
                Project snapshot
              </h3>
            </div>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              <div className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                <dt className="text-sm text-ink-mute">Client</dt>
                <dd className="text-sm leading-relaxed text-ink">
                  SwiftFix Building Maintenance Services
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                <dt className="text-sm text-ink-mute">Scope</dt>
                <dd className="text-sm leading-relaxed text-ink">
                  Responsive business website and service-request system
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-4">
                <dt className="text-sm text-ink-mute">Tools used</dt>
                <dd className="text-sm leading-relaxed text-ink">Supabase · Vercel · GitHub</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ExperienceSection() {
  type WorkRole = {
    title: string;
    org?: string;
    period?: string;
    companies?: { name: string; period: string }[];
  };

  const roles: WorkRole[] = [
    {
      title: "BPO / Customer Service Representative",
      companies: [
        { name: "IBEX", period: "2024–2025" },
        { name: "TaskUs", period: "2025–2026" },
      ],
    },
    {
      title: "Data Entry",
      org: "Operations support",
    },
  ];

  const toolGroups = [
    { label: "Automation & CRM", tools: "Make.com · GoHighLevel", icon: "workflow" },
    { label: "AI", tools: "AI APIs · Assistants · Chatbots", icon: "spark" },
    { label: "Data", tools: "Supabase · PostgreSQL · SQL", icon: "data" },
    { label: "Integrations", tools: "REST APIs · Webhooks · JSON", icon: "integrations" },
    { label: "Development & deployment", tools: "HTML · CSS · JavaScript · React · GitHub · Vercel", icon: "code" },
    { label: "Customer support", tools: "Zendesk", icon: "support" },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-8 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-12">
        <div>
          <TechLabel>Background</TechLabel>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional experience
          </h2>
        </div>
        <div>
          <ul className="divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li key={role.title} className="py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                  <h3 className="font-medium text-ink">{role.title}</h3>
                  <div className="flex items-baseline justify-between gap-5 sm:shrink-0 sm:justify-end sm:gap-8">
                    {role.companies ? (
                      <p className="text-sm text-ink-soft">
                        {role.companies.map((company, index) => (
                          <span key={company.name}>
                            {index > 0 ? " · " : ""}
                            {company.name} <span className="font-mono text-xs text-ink-mute">{company.period}</span>
                          </span>
                        ))}
                      </p>
                    ) : role.org ? (
                      <p className="text-sm text-ink-soft">{role.org}</p>
                    ) : null}
                    {role.period ? (
                      <time className="font-mono text-xs tabular-nums text-ink-mute">
                        {role.period}
                      </time>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-line pt-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
              Tools &amp; technology
            </h3>
            <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {toolGroups.map((group) => (
                <div key={group.label} className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 border-t border-line py-4">
                  <span className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-cyan">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px]">
                      {group.icon === "workflow" ? (
                        <>
                          <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M8 7h2a2 2 0 0 1 2 2v6m2-8h-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </>
                      ) : null}
                      {group.icon === "spark" ? (
                        <>
                          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                        </>
                      ) : null}
                      {group.icon === "data" ? (
                        <>
                          <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="1.6" />
                        </>
                      ) : null}
                      {group.icon === "integrations" ? (
                        <>
                          <path d="M8 8.5 16 15.5M16 8.5 8 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <circle cx="6" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="18" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="6" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="18" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.6" />
                        </>
                      ) : null}
                      {group.icon === "code" ? (
                        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : null}
                      {group.icon === "support" ? (
                        <>
                          <path d="M4 13v-1a8 8 0 0 1 16 0v1m-16 0v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M9 20h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      ) : null}
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs font-medium text-ink-mute">{group.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{group.tools}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

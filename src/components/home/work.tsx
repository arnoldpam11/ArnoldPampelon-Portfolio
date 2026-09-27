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
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
              Project snapshot
            </h3>
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
                <dt className="text-sm text-ink-mute">Stack</dt>
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
  const roles = [
    { title: "Customer Service Representative", org: "TaskUs" },
    { title: "BPO / Customer Support", org: "IBEX" },
    { title: "Data Entry", org: "Operations support" },
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
        <ul className="divide-y divide-line border-y border-line">
          {roles.map((role) => (
            <li key={role.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
              <h3 className="font-medium text-ink">{role.title}</h3>
              <p className="text-sm text-ink-soft">{role.org}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

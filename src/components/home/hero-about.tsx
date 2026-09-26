import { SITE } from "@/lib/site";
import { TechLabel } from "@/components/ui";
import { Container } from "@/components/chrome";
import { WorkflowStack } from "@/components/workflow";

const HERO_FLOW = [
  { label: "NEW LEAD", sub: "Form input" },
  { label: "AI", sub: "Analyze lead" },
  { label: "DATABASE", sub: "Create lead" },
  { label: "NOTIFICATION", sub: "Alert Arnold" },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "UNDERSTAND",
    copy: "Find the actual business problem before choosing a tool.",
  },
  {
    num: "02",
    title: "AUTOMATE",
    copy: "Build the workflow around the problem, not the other way around.",
  },
  {
    num: "03",
    title: "IMPROVE",
    copy: "Test, monitor, and improve the system after it is live.",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16 lg:py-24">
        <div>
          <TechLabel>AI Automation & Workflow Specialist</TechLabel>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-8 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Automate the Work.
            <br />
            Focus on the Business.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {SITE.positioning}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-line-strong px-6 text-sm font-medium text-ink transition-colors hover:bg-elevated"
            >
              View My Work →
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page transition-colors hover:bg-ink/90"
            >
              Let's Work Together →
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
            <span className="status-pulse size-2 rounded-full bg-ok" aria-hidden="true" />
            Available for automation projects
          </p>
          <div className="mt-12 flex items-center gap-3 border-t border-line pt-8">
            <img
              src="/images/artech-logo.webp"
              alt="ARTECH"
              className="size-11 rounded-md bg-ink object-contain p-1"
              width={44}
              height={44}
            />
            <div>
              <p className="text-sm font-medium text-ink-soft">{SITE.brand}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">{SITE.tagline}</p>
            </div>
          </div>
        </div>
        <WorkflowStack title="LEAD AUTOMATION" nodes={HERO_FLOW} />
      </Container>
    </section>
  );
}

export function CapabilityStrip() {
  const items = ["AI", "AUTOMATION", "APIs", "WEBHOOKS", "DATABASES", "CRM"];
  return (
    <section className="border-y border-line bg-page-alt">
      <Container className="py-8">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-ink-mute">
          Practical automation · Real systems · Business workflows
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li key={item} className="font-mono text-xs uppercase tracking-widest text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <img
              src="/images/arnold-pampelon.jpg"
              alt="Arnold Pampelon, AI Automation and Workflow Specialist"
              className="aspect-[4/5] w-full object-cover object-[50%_12%]"
              width={800}
              height={1000}
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">{SITE.name}</p>
              <p className="max-w-[16ch] text-sm leading-snug text-ink-soft">
                AI Automation & Workflow Specialist
              </p>
            </div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ok">
              <span className="status-pulse size-1.5 rounded-full bg-ok" />
              Available for projects
            </p>
          </div>
        </div>
        <div>
          <TechLabel>About me</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Automation should solve a problem.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I'm Arnold Pampelon, an AI Automation & Workflow Specialist focused on
            building practical systems that reduce repetitive work, organize information,
            and connect business tools.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            I work on AI automation, CRM workflows, lead routing, API integrations,
            webhooks, chatbots, and the databases that keep those systems reliable.
            The goal is simple: less copying between tools, more time for the actual
            business.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <Container>
        <TechLabel>How I work</TechLabel>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {PRINCIPLES.map((item) => (
            <article key={item.num} className="border-t border-line pt-6">
              <p className="font-display text-4xl font-semibold tracking-tight text-ink-mute">{item.num}</p>
              <h3 className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}



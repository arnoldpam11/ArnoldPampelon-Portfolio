import { SITE } from "@/lib/site";
import { Container } from "@/components/chrome";
import { Database, Workflow, PanelsTopLeft } from "lucide-react";

const featuredTools = [
  { name: "Make.com", Icon: Workflow, color: "text-tool-workflow" },
  { name: "GoHighLevel", Icon: PanelsTopLeft, color: "text-tool-crm" },
  { name: "Supabase", Icon: Database, color: "text-tool-data" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="portfolio-hero relative isolate overflow-hidden border-b border-line"
    >
      <p className="portfolio-watermark" aria-hidden="true">
        SYSTEMS
      </p>
      <Container className="portfolio-hero-inner relative z-10 grid items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:py-12 xl:gap-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-highlight sm:text-sm">
            AI Automation &amp; Workflow Specialist
          </p>
          <p className="font-display text-2xl italic tracking-tight text-ink-soft sm:text-3xl">
            Hello, I’m
          </p>
          <h1 className="portfolio-title mt-2 font-display font-semibold text-ink">
            <span className="block">Arnold</span>
            <span className="block">Pampelon</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Practical automation for the work that slows your business down.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              Explore my work <span aria-hidden="true">→</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong px-6 text-sm font-semibold text-ink transition-colors hover:bg-page-alt"
            >
              Let’s talk
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span
                className="flex size-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent"
                aria-hidden="true"
              >
                A
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{SITE.brand}</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                  {SITE.tagline}
                </p>
              </div>
            </div>
            <ul className="flex items-center gap-3 sm:gap-4" aria-label="Selected tools">
              {featuredTools.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft"
                  title={name}
                >
                  <Icon className={`size-4 ${color}`} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end">
          <img
            src="/images/arnold-pampelon.jpg"
            alt="Arnold Pampelon"
            className="aspect-[4/5] w-full object-cover object-[50%_12%]"
            width={800}
            height={1000}
          />
          <figcaption className="mt-3 text-xs tracking-wide text-ink-mute">
            {SITE.name} <span aria-hidden="true">·</span> {SITE.role}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

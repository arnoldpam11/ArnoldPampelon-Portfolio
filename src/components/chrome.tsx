import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BriefcaseBusiness, Clock3, Home, Mail, Workflow } from "lucide-react";
import { SignedIn } from "@/lib/auth/gates";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const initialDark = saved !== "light";
    setDark(initialDark);
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", initialDark ? "#100d14" : "#F7F6F2");
  }, []);

  const toggle = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", nextDark ? "#100d14" : "#F7F6F2");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:bg-page-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
    >
      {dark ? (
        <svg
          viewBox="0 0 24 24"
          className="size-[18px] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="size-[18px] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z" />
        </svg>
      )}
    </button>
  );
}

const RAIL_LINKS = [
  { href: "/#home", label: "Home", Icon: Home },
  { href: "/#services", label: "Services", Icon: Workflow },
  { href: "/#work", label: "Work", Icon: BriefcaseBusiness },
  { href: "/#experience", label: "Experience", Icon: Clock3 },
  { href: "/#contact", label: "Contact", Icon: Mail },
] as const;

export function PortfolioRail() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = RAIL_LINKS.map(({ href }) =>
      document.getElementById(href.split("#")[1] ?? "home"),
    ).filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="fixed inset-y-0 left-0 z-50 hidden w-rail flex-col items-center border-r border-line bg-page py-5 lg:flex"
      aria-label="Portfolio navigation"
    >
      <a
        href="/#home"
        className="flex size-10 items-center justify-center font-display text-base font-bold tracking-tight text-ink transition-colors hover:text-accent"
        aria-label={`${SITE.name} — home`}
        title={SITE.name}
      >
        AP
      </a>
      <span className="my-5 h-px w-7 bg-line" aria-hidden="true" />
      <nav className="flex flex-col items-center gap-2" aria-label="Sections">
        {RAIL_LINKS.map(({ href, label, Icon }) => {
          const section = href.split("#")[1] ?? "home";
          const active = activeSection === section;
          return (
            <a
              key={href}
              href={href}
              className={cn(
                "group relative flex size-11 items-center justify-center rounded-full transition-colors hover:bg-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                active ? "bg-accent text-accent-foreground" : "text-ink-mute",
              )}
              aria-label={label}
              aria-current={active ? "location" : undefined}
              title={label}
            >
              <Icon className="size-[19px]" strokeWidth={1.7} aria-hidden="true" />
              <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 text-xs font-medium text-page shadow-panel group-hover:block group-focus-visible:block">
                {label}
              </span>
            </a>
          );
        })}
      </nav>
      <div className="mt-auto flex flex-col items-center gap-3">
        <ThemeToggle />
        <a
          href="/#contact"
          className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          aria-label="Get in touch"
          title="Get in touch"
        >
          <Mail className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-colors duration-200",
        (scrolled || open) && "border-line bg-page/80 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="/#home"
          className="min-w-0 font-display text-sm font-semibold tracking-tight text-ink sm:text-base"
        >
          {SITE.name}
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <SignedIn>
            <Link to="/admin" className="text-sm text-ink-soft hover:text-ink">
              Dashboard
            </Link>
          </SignedIn>
          <ThemeToggle />
          <a
            href="/#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-page transition-colors hover:bg-ink/90"
          >
            Let's Talk
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  "h-px w-full bg-ink transition-transform",
                  open && "translate-y-[5px] rotate-45",
                )}
              />
              <span className={cn("h-px w-full bg-ink transition-opacity", open && "opacity-0")} />
              <span
                className={cn(
                  "h-px w-full bg-ink transition-transform",
                  open && "-translate-y-[5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-line bg-page lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <SignedIn>
              <Link
                to="/admin"
                className="rounded-md px-2 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </SignedIn>
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-line pt-4">
              <span className="text-sm text-ink-soft">Appearance</span>
              <ThemeToggle />
            </div>
            <a
              href="/#contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-page"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-page-alt">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex size-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent"
            aria-hidden="true"
          >
            A
          </span>
          <div>
            <p className="text-sm font-medium text-ink">{SITE.name}</p>
            <p className="text-xs text-ink-mute">
              {SITE.brand} · {SITE.role}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink-soft hover:text-ink">
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="text-sm text-ink-soft hover:text-ink">
            Contact
          </a>
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Arnold Pampelon</p>
        <p className="font-mono text-xs uppercase tracking-widest">{SITE.tagline}</p>
      </Container>
    </footer>
  );
}

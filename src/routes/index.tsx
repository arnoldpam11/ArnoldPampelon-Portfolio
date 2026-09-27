import { createFileRoute } from "@tanstack/react-router";
import { PortfolioRail, SiteFooter, SiteNav } from "@/components/chrome";
import { HeroSection } from "@/components/home/hero-about";
import { ExperienceSection, ServicesSection, SwiftFixSection } from "@/components/home/work";
import { ContactSection } from "@/components/home/contact";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-page">
      <PortfolioRail />
      <div className="lg:pl-rail">
        <div className="lg:hidden">
          <SiteNav />
        </div>
        <main>
          <HeroSection />
          <ServicesSection />
          <SwiftFixSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

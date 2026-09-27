import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteNav } from "@/components/chrome";
import {
  AboutSection,
  CapabilityStrip,
  HeroSection,
  PrinciplesSection,
} from "@/components/home/hero-about";
import {
  ExperienceSection,
  ManualVsAutomated,
  PracticeSection,
  ServicesSection,
  SwiftFixSection,
} from "@/components/home/work";
import {
  BackendSection,
  DemoSection,
  FinalCta,
  ProcessSection,
  StackSection,
  UseCasesSection,
} from "@/components/home/system";
import { ContactSection } from "@/components/home/contact";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-page">
      <SiteNav />
      <main>
        <HeroSection />
        <CapabilityStrip />
        <AboutSection />
        <PrinciplesSection />
        <ServicesSection />
        <ManualVsAutomated />
        <SwiftFixSection />
        <ExperienceSection />
        <BackendSection />
        <DemoSection />
        <UseCasesSection />
        <PracticeSection />
        <StackSection />
        <ProcessSection />
        <ContactSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

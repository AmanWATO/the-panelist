import ComingSoonSection from "@/components/landing-page/coming-soon";
import HeroSection from "@/components/landing-page/hero-section";
import JoinMovementSection from "@/components/landing-page/join-movement";
import PhilosophySection from "@/components/landing-page/philosophy-section";
import PowerOfOneSection from "@/components/landing-page/power-of-one-section";
import BlogPreview from "@/components/landing-page/blog-preview";
import PanelApplication from "@/components/landing-page/panel-application";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <PhilosophySection />
      <PowerOfOneSection />
      <PanelApplication />
      <BlogPreview />
      <ComingSoonSection />
      <JoinMovementSection />
    </div>
  );
}
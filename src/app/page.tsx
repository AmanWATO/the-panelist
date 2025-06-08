import ArtistsSection from "@/components/landing-page/artists-section";
import ComingSoonSection from "@/components/landing-page/coming-soon";
import HeroSection from "@/components/landing-page/hero-section";
import JoinMovementSection from "@/components/landing-page/join-movement";
import PhilosophySection from "@/components/landing-page/philosophy-section";
import PowerOfOneSection from "@/components/landing-page/power-of-one-section";
import SamplePanelsSection from "@/components/landing-page/sample-panel-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
       <HeroSection />
      <PhilosophySection />
      <PowerOfOneSection />
      <ArtistsSection />
      <SamplePanelsSection />
      <ComingSoonSection />
      <JoinMovementSection />
    </div>
  );
}

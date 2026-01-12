import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TeamPreview from "@/components/TeamPreview";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <TeamPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { FirstDropSection } from "@/components/sections/FirstDropSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FirstDropSection />
      <MissionSection />
      <ProductPreviewSection />
      <AboutSection />
    </>
  );
}

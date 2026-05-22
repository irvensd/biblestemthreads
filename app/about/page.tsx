import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { MissionSupportSection } from "@/components/sections/about/MissionSupportSection";
import { PhilosophySection } from "@/components/sections/about/PhilosophySection";
import { DesignValuesSection } from "@/components/sections/about/DesignValuesSection";
import { EcosystemSection } from "@/components/sections/about/EcosystemSection";
import { AboutCtaSection } from "@/components/sections/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About — BibleStem Threads",
  description:
    "BibleStem Threads is the premium apparel branch of BibleStem, created to help support free Scripture-first Bible studies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSupportSection />
      <PhilosophySection />
      <DesignValuesSection />
      <EcosystemSection />
      <AboutCtaSection />
    </>
  );
}

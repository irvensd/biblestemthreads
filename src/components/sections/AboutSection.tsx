import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Card className="max-w-4xl">
          <SectionLabel>The ecosystem</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The apparel branch of BibleStem.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            BibleStem begins with free Bible studies and grows through Scripture-centered
            resources, creative projects, and apparel. BibleStem Threads carries the
            message into everyday life while helping support the study platform.
          </p>
        </Card>
      </div>
    </section>
  );
}

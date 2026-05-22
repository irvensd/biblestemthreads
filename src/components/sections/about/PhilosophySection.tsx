import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";

export function PhilosophySection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>The philosophy</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Mission support, not hype.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          BibleStem Threads is not built around loud slogans, trend chasing, or
          surface-level Christian merch. The goal is to create premium apparel that feels
          wearable, thoughtful, and rooted in Scripture while helping fund the work of
          BibleStem.
        </p>

        <Card className="mt-14 max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-ink">
            The shirt should carry the message without cheapening it.
          </p>
        </Card>
      </div>
    </section>
  );
}

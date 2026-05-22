import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";

const missionCards = [
  {
    title: "Scripture first",
    description: "Every piece begins with biblical truth.",
  },
  {
    title: "Premium restraint",
    description: "Clean design. No noise. No gimmicks.",
  },
  {
    title: "Mission funded",
    description: "Apparel helps support free Bible studies.",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="border-b border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>Why Threads exists</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Every purchase helps keep Bible study free.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          BibleStem Threads exists to support BibleStem&apos;s free Scripture-first study
          platform. Apparel funds the work, the studies, the tools, and the mission of
          making deep Bible study accessible without cost barriers.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {missionCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

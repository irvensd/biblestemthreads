import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";

const supportCards = [
  {
    title: "Funds free studies",
    description:
      "Purchases help support the development of free Bible studies, study paths, and Scripture-based learning tools.",
  },
  {
    title: "Carries Scripture daily",
    description:
      "Each piece is designed to carry biblical truth into everyday life with restraint, clarity, and purpose.",
  },
  {
    title: "Supports the ecosystem",
    description:
      "Threads helps strengthen the wider BibleStem ecosystem, including studies, resources, and future creative branches.",
  },
];

export function MissionSupportSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>How Threads supports BibleStem</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Every purchase helps keep Bible study free.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          BibleStem was built to make deep, structured Bible study accessible without
          cost barriers. BibleStem Threads helps support that mission by turning apparel
          into a funding branch for free studies, digital tools, teaching resources, and
          future Scripture-centered creative projects.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {supportCards.map((card) => (
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

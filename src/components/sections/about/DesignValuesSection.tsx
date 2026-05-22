import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";

const valueCards = [
  {
    title: "Scripture first",
    description:
      "Every release begins with a biblical idea, not a random slogan.",
  },
  {
    title: "Premium restraint",
    description:
      "Clean typography, careful placement, and minimal design choices keep the focus on the message.",
  },
  {
    title: "Everyday wearable",
    description:
      "The pieces are designed to feel natural in daily life, not like costume merch.",
  },
  {
    title: "Purpose driven",
    description:
      "The brand exists to support Bible study, not just sell products.",
  },
];

export function DesignValuesSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>Design values</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Quiet design. Clear message.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {valueCards.map((card) => (
            <Card key={card.title} className="p-6 md:p-7">
              <h3 className="text-base font-semibold text-ink">{card.title}</h3>
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

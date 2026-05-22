import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";

const ecosystemCards = [
  {
    title: "BibleStem Studies",
    description:
      "Free Scripture-first Bible studies built for clarity, context, and reflection.",
    status: "Live",
    statusVariant: "live" as const,
  },
  {
    title: "BibleStem Threads",
    description:
      "Premium apparel that helps fund free Bible study resources.",
    status: "First drop",
    statusVariant: "active" as const,
  },
  {
    title: "BibleStem Studios",
    description:
      "A future creative branch for cinematic Bible teaching and visual storytelling.",
    status: "In development",
    statusVariant: "pending" as const,
  },
];

const statusStyles = {
  live: "border-royal/20 bg-royal/5 text-royal",
  active: "border-border bg-surface text-ink",
  pending: "border-border bg-white text-muted",
};

export function EcosystemSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>The BibleStem ecosystem</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          One mission. Multiple branches.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ecosystemCards.map((card) => (
            <Card key={card.title}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-label",
                    statusStyles[card.statusVariant]
                  )}
                >
                  {card.status}
                </span>
              </div>
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

import Link from "next/link";

const highlightCards = [
  {
    slug: "core",
    title: "Core Statements Capsule",
    description:
      "Signature BibleStem affirmations rendered on heavyweight tees. Launch-day exclusive colors.",
    actionLabel: "Reserve your spot",
  },
  {
    slug: "rooted",
    title: "Rooted Layers",
    description:
      "Seasonal hoodies and crews designed for community nights and discipleship gatherings.",
    actionLabel: "Preview the lineup",
  },
  {
    slug: "mission",
    title: "Mission Capsule",
    description:
      "Limited numbers, each piece stamped 1 Shirt = 1 Study Sponsored to keep the mission front and center.",
    actionLabel: "Join the capsule waitlist",
  },
];

export function ComingSoonHighlights() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {highlightCards.map((card) => (
        <div
          key={card.slug}
          className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-secondary/5 p-6 shadow-subtle"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              {card.slug}
            </p>
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
          </div>
          <p className="text-sm text-secondary/70">{card.description}</p>
          <Link
            href="/#notify"
            className="mt-auto inline-flex text-xs font-semibold text-accent hover:text-accent/90"
          >
            {card.actionLabel}
          </Link>
        </div>
      ))}
    </div>
  );
}


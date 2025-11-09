import Link from "next/link";
import { Badge } from "@/components/Badge";
import { buttonClasses } from "@/styles/button";
import { LaunchForm } from "@/components/LaunchForm";

const impactCards = [
  {
    title: "Mission-first",
    description: "Purchases help keep BibleStem studies free.",
  },
  {
    title: "Premium blanks",
    description: "Not print-on-demand. Small-batch quality.",
  },
  {
    title: "Gospel-centered design",
    description: "Minimal, Scripture-rooted statements.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(105,55,255,0.25),transparent_55%)]" />
          <div className="h-full w-full bg-[radial-gradient(circle_at_80%_30%,rgba(15,23,42,0.85),transparent_60%)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-28 text-secondary lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-8">
            <Badge className="bg-secondary text-navy">Coming soon</Badge>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                BibleStem Threads
              </h1>
              <p className="text-lg text-secondary/80">
                Faith-inspired apparel, crafted in small batches, so every piece funds
                free Bible studies. We&apos;re preparing the first drop—join the list to
                be notified.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="#notify" className={buttonClasses("primary")}>
                Join the launch list
              </Link>
              <Link
                href="/impact"
                className={buttonClasses("ghost", "border-secondary/30 text-secondary")}
              >
                Learn about the impact
              </Link>
            </div>
          </div>
          <div className="relative hidden w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-secondary/10 p-6 shadow-subtle lg:block">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary/60">
                Capsule preview
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-navy/80 p-6">
                  <p className="text-sm font-semibold text-white">Core Statements</p>
                  <p className="mt-2 text-xs text-secondary/60">
                    Limited tees featuring foundational BibleStem affirmations.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-navy/80 p-6">
                  <p className="text-sm font-semibold text-white">Rooted Layers</p>
                  <p className="mt-2 text-xs text-secondary/60">
                    Premium hoodies and crews for community nights and study groups.
                  </p>
                </div>
              </div>
              <p className="text-xs text-secondary/50">
                {/* TODO: Swap with actual hero imagery when production samples are ready */}
                Visual mockups coming closer to launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6" id="notify">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Be the first to know</h2>
            <p className="mt-2 text-secondary/70">
              We&apos;ll invite launch-day supporters into the first drop before it goes public.
            </p>
          </div>
          <span className="text-sm text-secondary/60">Launching winter 2025</span>
        </div>
        <LaunchForm />
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/5 bg-secondary/5 p-10">
          <h3 className="text-2xl font-semibold text-white">Why Threads exists</h3>
          <p className="mt-3 max-w-2xl text-secondary/70">
            BibleStem Threads is the apparel expression of the BibleStem movement.
            Every piece keeps Scripture accessible, visual, and unforgettable.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-navy/80 p-6 shadow-subtle"
              >
                <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                <p className="mt-3 text-secondary/70">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/5 bg-secondary/5 p-10">
          <h3 className="text-2xl font-semibold text-white">
            From the BibleStem ecosystem
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Link
              href="https://biblestem.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-navy/85 p-6 transition hover:border-accent/40"
            >
              <p className="text-sm uppercase tracking-wide text-secondary/60">
                Platform
              </p>
              <p className="mt-2 text-xl font-semibold text-white">BibleStem.io</p>
              <p className="mt-3 text-secondary/70">
                Explore visual, interactive Bible studies that inspire Scripture
                fluency.
              </p>
            </Link>
            <Link
              href="https://biblestem.io/studios"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-navy/85 p-6 transition hover:border-accent/40"
            >
              <p className="text-sm uppercase tracking-wide text-secondary/60">
                Creative
              </p>
              <p className="mt-2 text-xl font-semibold text-white">BibleStem Studios</p>
              <p className="mt-3 text-secondary/70">
                Design and storytelling arm crafting Scripture-rooted visuals.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


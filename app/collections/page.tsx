import Link from "next/link";
import { ComingSoonHighlights } from "@/components/ComingSoonHighlights";
import { buttonClasses } from "@/styles/button";

export const metadata = {
  title: "Collections | BibleStem Threads",
};

export default function CollectionsPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 text-secondary">
          <p className="text-sm uppercase tracking-wide text-secondary/70">
            Curated drops
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Collections (Coming Soon)
          </h1>
          <p className="max-w-2xl text-lg text-secondary/80">
            We&apos;re designing thematic capsules that pair Scripture-rooted messaging
            with premium blanks. Subscribe to the launch list to hear when each capsule
            drops.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#notify" className={buttonClasses("primary")}>
              Join the launch list
            </Link>
            <Link
              href="/impact"
              className={buttonClasses("ghost", "border-accent/40 text-secondary")}
            >
              See the impact
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Sneak peek capsules</h2>
            <p className="mt-2 text-secondary/70">
              A preview of the capsules we&apos;re crafting with the BibleStem community.
              Final photography drops closer to launch.
            </p>
          </div>
          <p className="text-sm text-secondary/60">
            {/* TODO: Connect to CMS for live collection launches */}
            Launching soon
          </p>
        </div>
        <ComingSoonHighlights />
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-accent/20 bg-accent/10 p-10 text-center text-secondary/90">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Limited releases
          </p>
          <p className="mt-4 text-3xl font-semibold text-white">
            Collections unlock with each drop
          </p>
          <p className="mt-4">
            We&apos;re keeping the first run intimate—once sold out, the capsules rest
            until the next season. Join the list to secure your size.
          </p>
          <Link
            href="/#notify"
            className={buttonClasses("ghost", "mt-6 text-white border-accent/50")}
          >
            Notify me when collections go live
          </Link>
        </div>
      </section>
    </div>
  );
}


import Link from "next/link";
import { Badge } from "@/components/Badge";
import { buttonClasses } from "@/styles/button";

export const metadata = {
  title: "Shop | BibleStem Threads",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <div className="space-y-6 text-center">
        <Badge className="bg-accent/20 text-accent">First drop in the works</Badge>
        <h1 className="text-4xl font-semibold text-white">Shop coming soon</h1>
        <p className="mx-auto max-w-2xl text-secondary/70">
          We&apos;re sewing together the first BibleStem Threads capsule. Expect
          premium blanks, Scripture-rooted statements, and a launch that sponsors
          Bible studies across the globe.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#notify" className={buttonClasses("primary")}>
            Get launch updates
          </Link>
          <Link
            href="/collections"
            className={buttonClasses("ghost", "border-accent/40 text-secondary")}
          >
            Preview collections
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-navy/85 p-10">
        <h2 className="text-2xl font-semibold text-white">What to expect</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Mission-made",
              description:
                "Every SKU sponsors a BibleStem.io study. Impact reporting will ship with the drop.",
            },
            {
              title: "Small-batch quality",
              description:
                "Cut-and-sew partners with ethical production so your pieces last—and mean more.",
            },
            {
              title: "Gospel conversation starters",
              description:
                "Subtle, modern typography inspired by Scripture to spark everyday discipleship.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-secondary/5 p-6 text-left shadow-subtle"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-accent/20 bg-accent/10 p-10 text-center text-secondary/80">
        {/* TODO: Replace with actual launch countdown when date is locked */}
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Launch window
        </p>
        <p className="mt-4 text-3xl font-semibold text-white">Winter 2025</p>
        <p className="mt-4">
          We&apos;ll drop exact timing to the launch list first. Join above to get
          early access.
        </p>
      </div>
    </div>
  );
}


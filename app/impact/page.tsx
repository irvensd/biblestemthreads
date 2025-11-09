export const metadata = {
  title: "Impact | BibleStem Threads",
};

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
      <section>
        <h1 className="text-3xl font-semibold text-white">The impact</h1>
        <p className="mt-4 max-w-2xl text-secondary/70">
          BibleStem Threads exists to financially support the BibleStem.io study
          platform. We&apos;re in pre-launch and mapping the model transparently—once
          the first drop lands, we&apos;ll publish verified metrics here.
        </p>
      </section>
      <section className="rounded-3xl border border-white/5 bg-secondary/5 p-10">
        <h2 className="text-2xl font-semibold text-white">Impact roadmap</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              label: "Verified studies sponsored",
              description: "Published after first drop",
            },
            {
              label: "Communities outfitted",
              description: "Tracking begins Q1 2026",
            },
            {
              label: "Small-batch runs",
              description: "Announced alongside each collection",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-navy/80 p-6 text-center shadow-subtle"
            >
              <p className="text-3xl font-bold text-white">TBA</p>
              <p className="mt-2 text-sm text-secondary/60">{item.label}</p>
              <p className="mt-3 text-xs text-secondary/50">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6 rounded-3xl border border-white/10 bg-navy/80 p-8">
        <p className="text-lg font-semibold text-white">
          The heartbeat of BibleStem Threads
        </p>
        <ul className="space-y-3 text-secondary/70">
          <li>
            BibleStem Threads exists to financially support the BibleStem.io study
            platform.
          </li>
          <li>We produce in small batches. No print-on-demand shortcuts.</li>
          <li>1 Shirt = 1 Study Sponsored. Every drop fuels free discipleship.</li>
        </ul>
      </section>
    </div>
  );
}


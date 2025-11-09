export const metadata = {
  title: "About | BibleStem Threads",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Our story</h1>
        <p className="text-secondary/70">
          BibleStem is a modern faith brand committed to making Scripture visual,
          interactive, and unforgettable. The BibleStem.io platform is a study home
          for communities exploring the Bible through beautiful design and thoughtful
          theology.
        </p>
      </section>
      <section className="rounded-3xl border border-white/5 bg-secondary/5 p-8">
        <h2 className="text-2xl font-semibold text-white">
          BibleStem Threads: the apparel expression
        </h2>
        <p className="mt-4 text-secondary/70">
          Threads takes the core affirmations of BibleStem and turns them into
          wearable statements. Each piece keeps Scripture close and reminds you that
          every moment can start a conversation about Jesus.
        </p>
      </section>
      <section className="space-y-4 rounded-3xl border border-white/10 bg-navy/85 p-8">
        <h3 className="text-xl font-semibold text-white">The vision ahead</h3>
        <p className="text-secondary/70">
          We envision a future where faith-driven design is the norm, not the
          exception. Where believers wear their theology with integrity and support
          resources that keep the gospel accessible.
        </p>
        <p className="text-secondary/70">
          Threads is just the beginning—an on-ramp into the wider BibleStem ecosystem
          that includes the study platform and studios. Together, they make Scripture
          feel alive in everyday rhythms.
        </p>
      </section>
    </div>
  );
}


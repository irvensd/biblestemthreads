import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { buttonClasses } from "@/styles/button";

export function AboutHeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <SectionLabel>About BibleStem Threads</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Premium apparel with a study mission.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            BibleStem Threads is the apparel branch of BibleStem, created to help
            support free Scripture-first Bible studies through premium, minimalist
            clothing designed around biblical truth.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#first-drop" className={buttonClasses("primary")}>
              Shop first drop
            </Link>
            <Link
              href="https://biblestem.io"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("secondary")}
            >
              Visit BibleStem Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

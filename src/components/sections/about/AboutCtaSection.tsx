import Link from "next/link";
import { buttonClasses } from "@/styles/button";

export function AboutCtaSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Wear the message. Support the mission.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            BibleStem Threads exists so Scripture-centered apparel can do more than look
            good. It can help fund studies, resources, and tools that point people back
            to the Word.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#product" className={buttonClasses("primary")}>
              Shop Seen By God
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

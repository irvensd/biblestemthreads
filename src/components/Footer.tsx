import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/90 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-secondary/80 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-secondary">BibleStem Threads</p>
          <p className="mt-2 max-w-sm text-secondary/70">
            Every purchase funds free Bible studies.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://instagram.com/biblestem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href="https://biblestem.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            BibleStem.io
          </Link>
        </div>
      </div>
    </footer>
  );
}


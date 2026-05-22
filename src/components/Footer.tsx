import Link from "next/link";

const footerLinks = [
  { href: "/#first-drop", label: "Shop" },
  { href: "/#mission", label: "Mission" },
  { href: "/#about", label: "About" },
  { href: "https://biblestem.io", label: "BibleStem Studies", external: true },
  { href: "https://biblestem.io/donate", label: "Donate", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-semibold text-ink">BibleStem Threads</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Premium Scripture-inspired apparel that helps keep BibleStem studies free
              for everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} BibleStem Threads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

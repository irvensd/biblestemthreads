import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-navy/95 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-secondary">
          BibleStem Threads
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-secondary/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3" />
      </div>
    </header>
  );
}


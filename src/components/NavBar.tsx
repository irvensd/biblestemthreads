"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { buttonClasses } from "@/styles/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#first-drop", label: "Shop" },
  { href: "/#mission", label: "Mission" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-ink"
        >
          BibleStem Threads
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition hover:text-ink",
                link.href === "/about" && pathname === "/about"
                  ? "font-medium text-ink"
                  : "text-muted hover:bg-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://biblestem.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted transition hover:text-ink sm:inline"
          >
            BibleStem Studies
          </Link>
          <button
            type="button"
            onClick={openCart}
            className={buttonClasses("secondary", "relative px-4")}
            aria-label="Open cart"
          >
            Cart
            {itemCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-royal px-1.5 text-xs font-medium text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-border px-6 py-3 md:hidden">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition hover:bg-surface hover:text-ink",
              link.href === "/about" && pathname === "/about"
                ? "font-medium text-ink"
                : "text-muted"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://biblestem.io"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-ink"
        >
          Studies
        </Link>
      </nav>
    </header>
  );
}

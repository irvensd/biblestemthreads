import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BibleStem Threads",
  description:
    "Premium faith-inspired apparel that funds the BibleStem study ecosystem.",
  metadataBase: new URL("https://biblestem.shop"),
  openGraph: {
    title: "BibleStem Threads",
    description:
      "Faith-inspired apparel that keeps BibleStem studies free for everyone.",
    url: "https://biblestem.shop",
    siteName: "BibleStem Threads",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BibleStem Threads apparel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BibleStem Threads",
    description: "Faith-inspired apparel that funds BibleStem studies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-secondary antialiased">
        <NavBar />
        <main className="bg-navy">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


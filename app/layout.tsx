import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BibleStem Threads",
  description:
    "Premium Scripture-inspired apparel that helps fund free Bible studies through BibleStem.",
  metadataBase: new URL("https://biblestem.shop"),
  openGraph: {
    title: "BibleStem Threads",
    description:
      "Faith you can wear. Studies you can support. Premium apparel that funds free Bible studies.",
    url: "https://biblestem.shop",
    siteName: "BibleStem Threads",
    images: [
      {
        url: "/products/seen-by-god-lineup.png",
        width: 1402,
        height: 1122,
        alt: "Seen By God oversized tee by BibleStem Threads",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BibleStem Threads",
    description: "Premium Scripture-inspired apparel that funds free Bible studies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-ink antialiased">
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

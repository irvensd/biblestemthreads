import Link from "next/link";
import { Card } from "@/components/Card";
import { ProductImageViewer } from "@/components/ProductImageViewer";
import { SectionLabel } from "@/components/SectionLabel";
import { buttonClasses } from "@/styles/button";
import { featuredProduct } from "@/data/products";

export function FirstDropSection() {
  return (
    <section id="first-drop" className="border-b border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <SectionLabel>First drop</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Seen By God
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          A premium heavyweight black tee inspired by Genesis 16:13. Designed as a quiet
          reminder that before the world notices you, God already sees you.
        </p>

        <Card className="mt-12 overflow-hidden p-0 md:grid md:grid-cols-2">
          <ProductImageViewer
            src={featuredProduct.image}
            alt={featuredProduct.name}
            aspectClassName="aspect-[5/4] md:aspect-auto md:min-h-[420px]"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-none border-0 md:rounded-none"
          />
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-sm font-medium text-ink">{featuredProduct.name}</p>
            <p className="mt-2 text-2xl font-semibold text-ink">
              ${featuredProduct.price}
            </p>
            <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted">
              {featuredProduct.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <Link
              href="#product"
              className={buttonClasses("primary", "mt-8 w-full sm:w-auto")}
            >
              View product
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}

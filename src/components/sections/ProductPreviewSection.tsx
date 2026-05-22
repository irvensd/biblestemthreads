import { AddToCartForm } from "@/components/AddToCartForm";
import { ProductImageViewer } from "@/components/ProductImageViewer";
import { featuredProduct } from "@/data/products";

const productBullets = [
  "Oversized fit",
  "Heavyweight cotton",
  "Front chest print",
  "Large back print",
  "Sleeve detail",
  "Limited first release",
  "Ships from Houston, Texas",
];

export function ProductPreviewSection() {
  return (
    <section id="product" className="border-b border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductImageViewer
              src={featuredProduct.image}
              alt={featuredProduct.name}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>

          <div className="relative min-w-0">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {featuredProduct.name}
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-label text-muted">
              {featuredProduct.scripture}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {featuredProduct.description}
            </p>
            <ul className="mt-8 space-y-3 border-t border-border pt-8 text-sm text-muted">
              {productBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-10">
              <p className="text-2xl font-semibold text-ink">${featuredProduct.price}</p>
              <AddToCartForm sizes={featuredProduct.sizes} />
              <p className="mt-4 text-xs text-muted">
                First release quantities will be limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

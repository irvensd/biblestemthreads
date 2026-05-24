import Link from "next/link";
import { ProductImageViewer } from "@/components/ProductImageViewer";
import { buttonClasses } from "@/styles/button";
import { featuredProduct } from "@/data/products";

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Faith you can wear. Studies you can support.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Premium Scripture inspired apparel created to help fund free Bible studies
            through BibleStem.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#first-drop" className={buttonClasses("primary")}>
              Shop first drop
            </Link>
            <Link href="#mission" className={buttonClasses("secondary")}>
              Learn the mission
            </Link>
          </div>
        </div>

        <ProductImageViewer
          src={featuredProduct.image}
          alt="Seen By God oversized tee product collage"
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
    </section>
  );
}

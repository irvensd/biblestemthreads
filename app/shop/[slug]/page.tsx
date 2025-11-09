import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/data/products";
import { AddToCartForm } from "@/components/AddToCartForm";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found | BibleStem Threads",
    };
  }

  return {
    title: `${product.name} | BibleStem Threads`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-secondary/10 shadow-subtle">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wide text-secondary/60">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white">{product.name}</h1>
            <p className="mt-3 text-secondary/70">{product.description}</p>
            <div className="mt-6 flex items-center gap-3 text-lg text-white">
              <span>${product.price}</span>
              <span className="text-secondary/50">·</span>
              <span className="text-secondary/60">
                This purchase helps keep Bible studies free.
              </span>
            </div>
          </div>
          <AddToCartForm sizes={product.sizes} productName={product.name} />
          <div className="space-y-6 rounded-3xl border border-white/10 bg-secondary/5 p-6">
            <div>
              <h2 className="text-lg font-semibold text-white">Care instructions</h2>
              <p className="mt-2 text-sm text-secondary/70">
                Machine wash cold inside out. Hang or lay flat to dry. Do not iron
                embellishments.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">About this collection</h2>
              <p className="mt-2 text-sm text-secondary/70">
                Part of the BibleStem Threads core drop featuring timeless statements
                from our study platform. Crafted in limited runs for durability and
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


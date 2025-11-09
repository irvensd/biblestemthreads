import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-secondary/5 shadow-subtle transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 320px, 100vw"
        />
        {product.inStock && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-secondary/90 text-navy">In stock</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-secondary/60">
            {product.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">{product.name}</h3>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="text-secondary/80">${product.price}</span>
          <span className="text-secondary/60">Shop now</span>
        </div>
      </div>
    </Link>
  );
}


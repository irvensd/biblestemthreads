import { Product } from "@/types/product";

export const featuredProduct: Product = {
  id: "seen-by-god-oversized-tee",
  name: "Seen By God Oversized Tee",
  slug: "seen-by-god-oversized-tee",
  price: 44,
  category: "Tees",
  scripture: "Genesis 16:13",
  description:
    "A premium heavyweight black tee designed around the truth that God sees, knows, and remembers His people.",
  image: "/products/seen-by-god-lineup.png",
  sizes: ["S", "M", "L", "XL", "XXL"],
  details: [
    "Heavyweight cotton",
    "Oversized fit",
    "Front chest print",
    "Back statement print",
    "Sleeve detail",
  ],
  inStock: true,
};

export const products: Product[] = [featuredProduct];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

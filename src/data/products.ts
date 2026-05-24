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
  gallery: [
    {
      src: "/products/seen-by-god-lineup.png",
      alt: "Seen By God oversized tee product collage",
    },
    {
      src: "/products/seen_by_god_selected_2_3_5_7_collage.png",
      alt: "Seen By God tee worn and detail views",
    },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  details: [
    "Heavyweight cotton",
    "Unisex oversized fit",
    "Front chest print",
    "Back statement print",
    "Sleeve detail",
  ],
  inStock: true,
};

export const products: Product[] = [featuredProduct];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

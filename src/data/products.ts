import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "faith-reimagined-tee",
    name: "Faith Reimagined Tee",
    slug: "faith-reimagined-tee",
    price: 38,
    category: "Tees",
    description:
      "A premium mid-weight tee featuring the Faith Reimagined statement from BibleStem studies.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "rooted-in-scripture-hoodie",
    name: "Rooted in Scripture Hoodie",
    slug: "rooted-in-scripture-hoodie",
    price: 65,
    category: "Hoodies",
    description:
      "Heavyweight fleece hoodie with Rooted in Scripture typography to keep you warm and anchored.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "biblestem-logo-cap",
    name: "BibleStem Logo Cap",
    slug: "biblestem-logo-cap",
    price: 30,
    category: "Accessories",
    description:
      "Structured six-panel cap with an embroidered BibleStem insignia for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1516478177764-9fe5bdc7e86c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: "one-study-sponsored-tee",
    name: "1 Shirt = 1 Study Sponsored Tee",
    slug: "one-study-sponsored-tee",
    price: 38,
    category: "Tees",
    description:
      "Wear the mission. Every purchase sponsors a BibleStem study for someone exploring Scripture.",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);


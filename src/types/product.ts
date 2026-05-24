export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  description: string;
  scripture?: string;
  image: string;
  gallery: ProductImage[];
  sizes: string[];
  details: string[];
  inStock: boolean;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
};

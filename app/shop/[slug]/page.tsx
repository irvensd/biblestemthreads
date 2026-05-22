import { redirect } from "next/navigation";
import { getProductBySlug } from "@/data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    redirect("/");
  }

  redirect("/#product");
}

"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type AddToCartFormProps = {
  sizes: string[];
  productName: string;
};

export function AddToCartForm({ sizes, productName }: AddToCartFormProps) {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] ?? "");
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    // TODO: Wire to Stripe or Shopify checkout session.
    console.log("Add to cart", { productName, selectedSize, quantity });
    setMessage(`${productName} added to cart.`);
    setTimeout(() => setMessage(null), 2800);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-secondary/70">Select size</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                selectedSize === size
                  ? "border-accent bg-accent text-white focus-visible:outline-accent"
                  : "border-secondary/30 text-secondary/70 hover:border-secondary hover:text-secondary"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-secondary/70">Quantity</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 text-lg text-secondary hover:border-secondary"
            aria-label="Decrease quantity"
          >
            –
          </button>
          <span className="min-w-[2ch] text-center text-lg font-semibold text-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 text-lg text-secondary hover:border-secondary"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <Button className="w-full" onClick={handleAddToCart}>
        Add to cart
      </Button>
      {message && (
        <div className="rounded-xl border border-accent/40 bg-accent/20 px-4 py-3 text-sm text-white shadow-subtle">
          {message}
        </div>
      )}
    </div>
  );
}


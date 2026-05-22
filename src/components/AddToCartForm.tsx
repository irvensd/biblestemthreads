"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const MAX_QUANTITY = 10;

type AddToCartFormProps = {
  sizes: string[];
};

export function AddToCartForm({ sizes }: AddToCartFormProps) {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] ?? "");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuyNow = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size: selectedSize, quantity }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setError("Something went wrong. Please try again.");
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-sm font-medium text-ink">Size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              disabled={loading}
              className={cn(
                "min-w-[3rem] rounded-lg border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                selectedSize === size
                  ? "border-ink bg-ink text-white focus-visible:outline-ink"
                  : "border-border text-muted hover:border-ink/20 hover:text-ink focus-visible:outline-ink"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-ink">Quantity</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            disabled={loading || quantity <= 1}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-lg text-ink hover:border-ink/20 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="min-w-[2ch] text-center text-base font-medium text-ink">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(MAX_QUANTITY, value + 1))}
            disabled={loading || quantity >= MAX_QUANTITY}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-lg text-ink hover:border-ink/20 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <Button
        className="w-full sm:w-auto sm:min-w-[220px]"
        onClick={handleBuyNow}
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Buy now"}
      </Button>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

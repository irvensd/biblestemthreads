"use client";

import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/Button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    itemCount,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-ink/20"
        onClick={closeCart}
        aria-hidden={false}
      />
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md translate-x-0 flex-col border-l border-border bg-white shadow-xl"
        aria-hidden={false}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-label text-muted">
              Cart
            </p>
            <h2 className="mt-1 text-lg font-semibold text-ink">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition hover:border-ink/20 hover:text-ink"
            aria-label="Close cart"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="rounded-xl border border-border bg-surface px-5 py-8 text-center">
              <p className="text-sm font-medium text-ink">Your cart is empty.</p>
              <p className="mt-2 text-sm text-muted">
                Add the Seen By God tee to support free Bible studies.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-4 border-b border-border pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-ink">{item.name}</p>
                        <p className="mt-1 text-xs text-muted">Size {item.size}</p>
                      </div>
                      <p className="text-sm font-medium text-ink">${item.price}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-sm text-ink hover:border-ink/20"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-sm text-ink hover:border-ink/20"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.size)}
                        className="text-xs text-muted transition hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-ink">${subtotal.toFixed(2)}</span>
          </div>
          <Button className="mt-5 w-full" disabled={items.length === 0}>
            Checkout
          </Button>
          <p className="mt-3 text-center text-xs text-muted">
            Checkout coming soon. Cart is saved for this session.
          </p>
        </div>
      </aside>
    </>
  );
}

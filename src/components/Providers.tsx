"use client";

import { useEffect } from "react";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}

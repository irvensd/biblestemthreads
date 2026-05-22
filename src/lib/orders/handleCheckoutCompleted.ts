type CheckoutSessionPayload = {
  id: string;
  metadata?: {
    product?: string;
    size?: string;
    sizes?: string;
    quantity?: string;
  } | null;
  customer_details?: {
    email?: string | null;
  } | null;
  amount_total?: number | null;
  currency?: string | null;
  shipping_details?: unknown;
};

export async function handleCheckoutSessionCompleted(
  session: CheckoutSessionPayload
) {
  const product = session.metadata?.product ?? "Unknown product";
  const size = session.metadata?.size ?? "Unknown size";
  const sizes = session.metadata?.sizes ?? size;
  const quantity = session.metadata?.quantity ?? "1";
  const customerEmail = session.customer_details?.email ?? "No email";
  const amountTotal = session.amount_total ?? 0;
  const currency = session.currency ?? "usd";

  // TODO: Persist order, send confirmation email, notify fulfillment.
  console.log("Checkout completed:", {
    sessionId: session.id,
    product,
    size,
    sizes,
    quantity,
    customerEmail,
    amountTotal,
    currency,
    shipping: session.shipping_details,
  });
}

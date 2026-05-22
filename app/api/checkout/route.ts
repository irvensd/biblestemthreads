import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";

const VALID_SIZES = ["S", "M", "L", "XL", "XXL"] as const;
const MAX_QUANTITY = 10;

type ValidSize = (typeof VALID_SIZES)[number];

type CheckoutItem = {
  size: ValidSize;
  quantity: number;
};

function isValidSize(value: unknown): value is ValidSize {
  return typeof value === "string" && VALID_SIZES.includes(value as ValidSize);
}

function isValidQuantity(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= MAX_QUANTITY
  );
}

function parseCheckoutItems(body: unknown): CheckoutItem[] | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const payload = body as {
    size?: unknown;
    quantity?: unknown;
    items?: unknown;
  };

  if (Array.isArray(payload.items)) {
    if (payload.items.length === 0) {
      return null;
    }

    const parsed: CheckoutItem[] = [];

    for (const entry of payload.items) {
      if (!entry || typeof entry !== "object") {
        return null;
      }

      const { size, quantity } = entry as { size?: unknown; quantity?: unknown };

      if (!isValidSize(size) || !isValidQuantity(quantity)) {
        return null;
      }

      parsed.push({ size, quantity });
    }

    return parsed;
  }

  if (isValidSize(payload.size) && isValidQuantity(payload.quantity)) {
    return [{ size: payload.size, quantity: payload.quantity }];
  }

  return null;
}

function buildOrderSummary(items: CheckoutItem[]) {
  const sizes = items.map((item) => `${item.size}:${item.quantity}`).join(", ");
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return {
    sizes,
    totalQuantity: String(totalQuantity),
    description:
      items.length === 1
        ? `Seen By God Oversized Tee — Size ${items[0].size}`
        : `Seen By God Oversized Tee — ${sizes}`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = process.env.STRIPE_SEEN_BY_GOD_PRICE_ID;
    const siteUrl = getSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

    if (!secretKey || !priceId || !siteUrl) {
      return NextResponse.json(
        { error: "Checkout is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const items = parseCheckoutItems(body);

    if (!items) {
      return NextResponse.json(
        { error: "Invalid checkout items." },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();
    const summary = buildOrderSummary(items);

    const orderMetadata = {
      product: "Seen By God Oversized Tee",
      size: items.length === 1 ? items[0].size : "Multiple",
      sizes: summary.sizes,
      quantity: summary.totalQuantity,
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((item) => ({
        price: priceId,
        quantity: item.quantity,
      })),
      metadata: orderMetadata,
      payment_intent_data: {
        description: summary.description,
        metadata: orderMetadata,
      },
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${siteUrl}/threads/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to create checkout session." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);

    if (error instanceof Stripe.errors.StripeError) {
      const message =
        error.code === "resource_missing" &&
        error.message.includes("live mode") &&
        error.message.includes("test mode key")
          ? "Stripe test/live mismatch: use a test Price ID with test keys, or a live Price ID with live keys."
          : error.message;

      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

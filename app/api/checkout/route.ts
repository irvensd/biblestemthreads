import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";

const VALID_SIZES = ["S", "M", "L", "XL", "XXL"] as const;

type ValidSize = (typeof VALID_SIZES)[number];

function isValidSize(value: unknown): value is ValidSize {
  return typeof value === "string" && VALID_SIZES.includes(value as ValidSize);
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
    const { size, quantity } = body;

    if (!isValidSize(size)) {
      return NextResponse.json(
        { error: "Invalid size selected." },
        { status: 400 }
      );
    }

    if (
      typeof quantity !== "number" ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10
    ) {
      return NextResponse.json(
        { error: "Quantity must be between 1 and 10." },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();

    const orderMetadata = {
      product: "Seen By God Oversized Tee",
      size,
      quantity: String(quantity),
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      metadata: orderMetadata,
      payment_intent_data: {
        description: `Seen By God Oversized Tee — Size ${size}`,
        metadata: orderMetadata,
      },
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${siteUrl}/threads/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/threads`,
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

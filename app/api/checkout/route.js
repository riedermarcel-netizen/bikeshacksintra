import Stripe from "stripe";
import { NextResponse } from "next/server";
import { booking } from "@/lib/config";

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Payments aren't configured yet. Add STRIPE_SECRET_KEY to .env.local." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: booking.depositCurrency,
            unit_amount: booking.depositAmountCents,
            product_data: {
              name: "Bike Shack Sintra — Ride Deposit",
              description:
                "Secures your requested day with Marcel. The remaining balance is settled directly on the day.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?payment=success#book`,
      cancel_url: `${origin}/?payment=cancelled#book`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

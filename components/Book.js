"use client";

import { useState, useSyncExternalStore } from "react";
import { contact, whatsappLink, booking } from "@/lib/config";

const fieldClass =
  "bg-transparent border-0 border-b border-charcoal/40 focus:border-charcoal outline-none text-[16px] font-light py-2 placeholder:text-charcoal/45";
const labelClass = "text-[10px] tracking-[0.14em] uppercase opacity-55";

// Reads ?payment=success|cancelled from the URL once Stripe redirects back.
// useSyncExternalStore (rather than a state+effect pair) keeps the initial
// server/client render in sync and avoids a hydration mismatch.
function subscribeNoop() {
  return () => {};
}
function getPaymentSnapshot() {
  const payment = new URLSearchParams(window.location.search).get("payment");
  return payment === "success" || payment === "cancelled" ? payment : null;
}
function getPaymentServerSnapshot() {
  return null;
}

export default function Book() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [checkoutStatus, setCheckoutStatus] = useState("idle"); // idle | loading | error
  const [checkoutError, setCheckoutError] = useState("");
  const paymentResult = useSyncExternalStore(
    subscribeNoop,
    getPaymentSnapshot,
    getPaymentServerSnapshot
  );

  async function handleCheckout() {
    setCheckoutStatus("loading");
    setCheckoutError("");

    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setCheckoutError(data.error || "That didn't work. Please try again.");
        setCheckoutStatus("error");
      }
    } catch {
      setCheckoutError("That didn't work. Please try again.");
      setCheckoutStatus("error");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(booking.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="book" className="bg-warm-white text-charcoal py-32 md:py-44">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-[30px] md:text-[44px] leading-tight">
          Let&apos;s plan your day.
        </h2>
        <p className="text-[17px] opacity-70 mt-5 max-w-[440px]">
          Every ride starts with a conversation. Send a request and
          together we&apos;ll find the day that works best for you.
        </p>
        <p className="text-[15px] opacity-55 mt-3 max-w-[440px]">
          Not sure if it&apos;s right for you? Ask first: there&apos;s no
          obligation.
        </p>

        <div className="mt-10 max-w-[440px]">
          <p className="font-serif italic text-[19px] opacity-90">
            Private Ride — €250 per rider
          </p>

          <div className="mt-5 pt-5 border-t border-charcoal/15">
            <p className="font-serif text-[16px] opacity-80">
              Riding together? Two riders — €450 · Three riders — €600.
            </p>
            <p className="text-[13px] opacity-55 mt-3">
              Still completely private. Never mixed with other guests.
            </p>
          </div>
        </div>

        {paymentResult === "cancelled" && (
          <p className="text-[13px] opacity-55 mt-6 max-w-[440px]">
            Payment wasn&apos;t completed, but that&apos;s no problem: your
            request still stands. You can secure your date with a deposit
            anytime once Marcel confirms.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mt-20">
          <div className="flex flex-col border-t border-charcoal/30">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-between py-6 border-b border-charcoal/30 group"
            >
              <div>
                <div className={labelClass}>Email</div>
                <div className="font-serif text-[20px]">{contact.email}</div>
              </div>
              <span className="text-[18px] opacity-55 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
                →
              </span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-6 border-b border-charcoal/30 group"
            >
              <div>
                <div className={labelClass}>WhatsApp</div>
                <div className="font-serif text-[20px]">Write us on WhatsApp</div>
              </div>
              <span className="text-[18px] opacity-55 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
                →
              </span>
            </a>
          </div>

          {paymentResult === "success" ? (
            <div>
              <p className="font-serif italic text-[20px] opacity-90">
                Deposit received. Your day is secured, and Marcel will be
                in touch to confirm the details.
              </p>
              <p className="text-[13px] opacity-55 mt-4">
                A receipt has been sent to your email by Stripe.
              </p>
            </div>
          ) : status === "sent" ? (
            <div>
              <p className="font-serif italic text-[20px] opacity-90">
                Thank you. Marcel will read this himself and reply
                personally: you&apos;re already one step closer to your day
                in Sintra.
              </p>

              <div className="mt-10 pt-8 border-t border-charcoal/20">
                <p className="text-[13px] opacity-55 mb-4 max-w-[360px]">
                  Want to lock in your date now? A refundable deposit
                  secures it, and Marcel will confirm everything else with
                  you directly.
                </p>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={checkoutStatus === "loading"}
                  className="self-start text-[12px] tracking-[0.14em] uppercase border-b border-charcoal/40 hover:border-charcoal py-3 transition-colors disabled:opacity-50"
                >
                  {checkoutStatus === "loading"
                    ? "Redirecting to secure checkout..."
                    : "Pay deposit securely"}
                </button>
                {checkoutStatus === "error" && (
                  <p className="text-[13px] text-forest mt-3">{checkoutError}</p>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input id="name" name="name" type="text" placeholder="Your name" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className={labelClass}>
                  WhatsApp
                </label>
                <input id="whatsapp" name="whatsapp" type="tel" placeholder="Your WhatsApp number" className={fieldClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className={labelClass}>
                    Preferred date
                  </label>
                  <input id="date" name="preferred_date" type="date" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="riders" className={labelClass}>
                    Number of riders
                  </label>
                  <input id="riders" name="riders" type="number" min="1" placeholder="1" className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="bikeType" className={labelClass}>
                    Mountain bike or e-bike
                  </label>
                  <select id="bikeType" name="bike_type" defaultValue="" className={fieldClass}>
                    <option value="" disabled>Choose one</option>
                    <option value="Mountain bike">Mountain bike</option>
                    <option value="E-bike">E-bike</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="bikeSource" className={labelClass}>
                    Own bike or rental
                  </label>
                  <select id="bikeSource" name="bike_source" defaultValue="" className={fieldClass}>
                    <option value="" disabled>Choose one</option>
                    <option value="Bringing my own bike">Bringing my own bike</option>
                    <option value="I need a rental">I need a rental</option>
                  </select>
                  <span className="text-[12px] opacity-50 mt-1">
                    No bike? Marcel can help arrange one through trusted
                    local partners.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="experience" className={labelClass}>
                  Riding experience
                </label>
                <input
                  id="experience"
                  name="riding_experience"
                  type="text"
                  placeholder="A little about how and how often you ride"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="improve" className={labelClass}>
                  What would you like to get most out of your day?
                </label>
                <input
                  id="improve"
                  name="day_goals"
                  type="text"
                  placeholder="More confidence, better technique, new trails, or just a great ride..."
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className={labelClass}>
                  Anything else Marcel should know?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Injuries, concerns, questions, or anything else"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-forest">
                  That didn&apos;t send. Please try again, or message
                  Marcel directly on WhatsApp above.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start text-[12px] tracking-[0.14em] uppercase border-b border-charcoal/40 hover:border-charcoal py-3 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

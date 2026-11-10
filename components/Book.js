"use client";

import { useState, useSyncExternalStore } from "react";
import { contact, whatsappLink, booking } from "@/lib/config";

const fieldClass =
  "bg-transparent border-0 border-b border-ink/40 focus:border-ink outline-none text-[16px]  py-2 placeholder:text-charcoal/45";
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
    <section id="book" className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <p className="font-display text-[15px] tracking-[0.36em] uppercase text-earth mb-4">Request</p>
        <h2 className="font-display font-medium uppercase text-[40px] md:text-[56px] leading-[1.02] max-w-[760px]">
          Send a request
        </h2>
        <p className="text-[17px] text-stone mt-5 max-w-[520px]">
          Tell us what you&apos;re interested in and when you&apos;d like to come.
          Marcel will get back to you personally within a day or two.
        </p>

        <div className="mt-10 max-w-[520px] pt-5 border-t border-ink/15 text-[15px] text-stone flex flex-col gap-1.5">
          <p><span className="font-semibold text-ink">Sintra Retreat</span> — 6 nights, €2,390 per rider</p>
          <p><span className="font-semibold text-ink">Private day ride</span> — €250 per rider · two riders €450 · three riders €600</p>
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
                <div className="font-display text-[22px]">{contact.email}</div>
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
                <div className="font-display text-[22px]">Write us on WhatsApp</div>
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
                <label htmlFor="interest" className={labelClass}>
                  I&apos;m interested in
                </label>
                <select id="interest" name="interest" defaultValue="Sintra Retreat" className={fieldClass}>
                  <option value="Sintra Retreat">Sintra Retreat</option>
                  <option value="Day ride in Sintra">Day ride in Sintra</option>
                  <option value="Gravel Portugal">Gravel Portugal</option>
                  <option value="Group / team">Group / team</option>
                </select>
              </div>

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
                  Phone / WhatsApp (optional)
                </label>
                <input id="whatsapp" name="phone" type="tel" placeholder="+49 …" className={fieldClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="month" className={labelClass}>
                    Preferred month
                  </label>
                  <select id="month" name="preferred_month" defaultValue="" className={fieldClass}>
                    <option value="" disabled>Choose a month</option>
                    {["March 2027", "April 2027", "May 2027", "June 2027", "September 2027", "October 2027", "I'm flexible"].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="riders" className={labelClass}>
                    Number of riders
                  </label>
                  <select id="riders" name="riders" defaultValue="1" className={fieldClass}>
                    {["1", "2", "3", "4", "5", "6", "More than 6"].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="bike" className={labelClass}>
                    Bike
                  </label>
                  <select id="bike" name="bike" defaultValue="" className={fieldClass}>
                    <option value="" disabled>Choose one</option>
                    <option value="Own mountain bike">I&apos;ll bring my mountain bike</option>
                    <option value="Own e-bike">I&apos;ll bring my e-bike</option>
                    <option value="Rental">I&apos;d like to rent one</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="room" className={labelClass}>
                    Room (retreat)
                  </label>
                  <select id="room" name="room" defaultValue="Double room" className={fieldClass}>
                    <option value="Double room">Double room</option>
                    <option value="Single room">Single room (supplement)</option>
                    <option value="Not relevant">Not relevant</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="experience" className={labelClass}>
                  How long have you been riding?
                </label>
                <select id="experience" name="riding_experience" defaultValue="" className={fieldClass}>
                  <option value="" disabled>Choose one</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3–10 years">3–10 years</option>
                  <option value="More than 10 years">More than 10 years</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="notes"
                  name="message"
                  placeholder="Questions, travel plans, anything you'd like us to know"
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
                className="self-start bg-ink text-paper px-7 py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
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

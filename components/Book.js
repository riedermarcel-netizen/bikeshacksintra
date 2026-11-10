"use client";

import { useState } from "react";
import { contact, whatsappLink, booking } from "@/lib/config";

const fieldClass =
  "bg-transparent border-0 border-b border-ink/40 focus:border-ink outline-none text-[16px]  py-2 placeholder:text-charcoal/45";
const labelClass = "text-[10px] tracking-[0.14em] uppercase opacity-55";

export default function Book() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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
    <section id="book" className="bg-ink text-paper py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-6 md:sticky md:top-32 self-start">
          <p className="font-display text-[15px] tracking-[0.36em] uppercase text-dim">Request</p>
          <h2 className="font-display font-medium uppercase text-[44px] md:text-[56px] leading-[1.02]">
            Send a request
          </h2>
          <p className="text-[17px] leading-[1.7] text-mist max-w-[420px]">
            Tell us what you&apos;re interested in and when you&apos;d like to
            come. Marcel will get back to you personally within a day or two.
          </p>
          <div className="flex flex-col gap-2 pt-4 text-[15px]">
            <span className="text-dim">Prefer to write directly?</span>
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:opacity-80">{contact.email}</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80">WhatsApp</a>
          </div>
        </div>

        <div className="bg-paper text-ink p-6 md:p-10">
          {status === "sent" ? (
            <div className="flex flex-col gap-4 py-6">
              <p className="font-display font-medium uppercase text-[32px] leading-[1.05]">Thank you</p>
              <p className="text-[17px] leading-[1.7] text-stone">
                Your request has arrived. Marcel will read it himself and get
                back to you within a day or two.
              </p>
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
                  <option value="Team event">Team event</option>
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
                    {["1", "2", "3", "4", "5", "6", "7", "More than 7"].map((n) => (
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
                <p className="text-[13px] text-earth">
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

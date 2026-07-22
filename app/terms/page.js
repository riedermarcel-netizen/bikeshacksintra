import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contact, whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Terms — Bike Shack Sintra",
  description: "Terms for booking a private ride with Bike Shack Sintra.",
};

function Section({ title, children }) {
  return (
    <div className="mt-14 md:mt-16 first:mt-0">
      <h2 className="font-serif text-[21px] md:text-[24px] mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-[16px] md:text-[17px] opacity-80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Placeholder({ children }) {
  return <span className="italic opacity-60">{children}</span>;
}

export default function TermsPage() {
  return (
    <main>
      <section className="pt-40 md:pt-52 pb-16 md:pb-20">
        <Container>
          <Reveal>
            <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
              Terms
            </div>
            <h1 className="font-serif text-[36px] md:text-[56px] leading-tight max-w-[720px]">
              The terms of riding with us.
            </h1>
            <p className="text-[18px] opacity-85 max-w-[560px] mt-8">
              Written plainly, for a private ride with Bike Shack. Nothing
              here is meant to surprise you later.
            </p>
            <p className="text-[13px] opacity-50 mt-8">
              Last updated 22 July 2026
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-32 md:pb-44">
        <Container>
          <Reveal className="max-w-[600px]">
            <Section title="Booking Requests">
              <p>
                A request isn&apos;t a booking. When you get in touch,
                through the form, WhatsApp or email, we&apos;ll reply
                personally to talk through your day, your experience, and
                what you&apos;re hoping to get from it.
              </p>
            </Section>

            <Section title="Booking Confirmation">
              <p>
                Your day is confirmed once Marcel has replied to confirm
                the date and details directly. A refundable deposit may be
                requested to hold your date.
              </p>
            </Section>

            <Section title="Pricing">
              <p>
                €250 per rider for your private ride. Riding together: two
                riders €450, three riders €600. Always private, never mixed
                with other guests.
              </p>
            </Section>

            <Section title="Payment">
              <p>
                A deposit, paid securely online, holds your date. The
                remaining balance is settled directly with Marcel on the
                day.
              </p>
            </Section>

            <Section title="Cancellation Policy">
              <p>
                If your plans change, let us know as early as you can and
                we&apos;ll always try to find a solution that works for
                both of us.
              </p>
              <p>
                <Placeholder>
                  Placeholder – to be completed before launch: exact
                  cancellation and refund terms.
                </Placeholder>
              </p>
            </Section>

            <Section title="Weather Conditions">
              <p>
                Sintra&apos;s trails can change quickly with the weather.
                If conditions aren&apos;t safe, we&apos;ll reschedule rather
                than compromise on safety.
              </p>
            </Section>

            <Section title="Trail Changes">
              <p>
                Routes are chosen and adjusted on the day, based on
                conditions and how you&apos;re riding. Nothing is fixed in
                advance beyond the plan to ride well.
              </p>
            </Section>

            <Section title="Rider Responsibilities">
              <p>
                Please tell us honestly about your riding experience and
                fitness beforehand, and ride within your ability throughout
                the day.
              </p>
            </Section>

            <Section title="Required Equipment">
              <p>
                A helmet is required for every ride. Bring your own bike,
                or let us know in advance if you need one arranged.
              </p>
            </Section>

            <Section title="Health and Fitness">
              <p>
                Mountain biking is physically demanding. You&apos;re
                responsible for confirming you&apos;re fit to take part,
                and for telling us about any injuries or health conditions
                that might affect your ride.
              </p>
            </Section>

            <Section title="Liability">
              <p>
                Mountain biking carries inherent risk. We take every
                reasonable care to ride safely and within your ability, but
                participation is at your own risk. We recommend riders
                carry their own travel or sports insurance.
              </p>
            </Section>

            <Section title="Force Majeure">
              <p>
                Illness, accidents, extreme weather or events outside our
                control may require us to reschedule or cancel. Where this
                happens, we&apos;ll work with you to find a fair solution.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these terms are always welcome:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="underline decoration-charcoal/30 hover:decoration-charcoal"
                >
                  {contact.email}
                </a>{" "}
                or{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-charcoal/30 hover:decoration-charcoal"
                >
                  WhatsApp
                </a>
                .
              </p>
            </Section>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/config";

export const metadata = {
  title: "Privacy — Bike Shack Sintra",
  description: "How Bike Shack Sintra handles your information.",
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

export default function PrivacyPage() {
  return (
    <main>
      <section className="pt-40 md:pt-52 pb-16 md:pb-20">
        <Container>
          <Reveal>
            <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
              Privacy
            </div>
            <h1 className="font-serif text-[36px] md:text-[56px] leading-tight max-w-[720px]">
              How we handle your information.
            </h1>
            <p className="text-[18px] opacity-85 max-w-[560px] mt-8">
              We collect only what&apos;s needed to plan your ride and reply
              to you personally. We don&apos;t sell data, run ads, or track
              you around the web.
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
            <Section title="Contact Form">
              <p>
                When you send a booking request, we receive your name,
                email, WhatsApp number, and whatever you share about your
                riding and your day. This is handled through Formspree, who
                power our booking form. We use it only to plan your ride
                and get back to you.
              </p>
              <p>
                <Placeholder>
                  Placeholder – to be completed before launch: link to
                  Formspree&apos;s own privacy policy.
                </Placeholder>
              </p>
            </Section>

            <Section title="WhatsApp Communication">
              <p>
                If you write to us on WhatsApp, that conversation is handled
                under WhatsApp&apos;s own privacy policy. We use it only to
                talk through your ride.
              </p>
            </Section>

            <Section title="Email Enquiries">
              <p>
                Emails you send us stay in our inbox for as long as we need
                them to answer you and, if you book, to plan your day.
                Nothing is added to a mailing list without your say-so.
              </p>
            </Section>

            <Section title="Website Hosting">
              <p>
                <Placeholder>
                  Placeholder – to be completed before launch: name of
                  hosting provider and where data is processed.
                </Placeholder>
              </p>
            </Section>

            <Section title="Analytics">
              <p>
                This website does not currently use analytics or tracking
                tools. If that changes, this page will be updated first.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                We don&apos;t set cookies of our own. If you choose to pay a
                deposit, Stripe, who take care of that payment for us, may
                set cookies needed to keep it secure, under their own
                privacy policy.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We keep booking and contact details only for as long as
                they&apos;re useful: to plan your ride, and afterwards in
                case you&apos;d like to ride with us again.
              </p>
              <p>
                <Placeholder>
                  Placeholder – to be completed before launch: exact
                  retention period.
                </Placeholder>
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                Under GDPR, you can ask to see, correct, or delete the
                information we hold about you, or ask us to restrict or
                stop using it. To do so, just write to{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="underline decoration-charcoal/30 hover:decoration-charcoal"
                >
                  {contact.email}
                </a>
                . If you&apos;re ever unhappy with how we&apos;ve handled
                your data, you also have the right to complain to your
                national data protection authority.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                We may update this page occasionally. The date above shows
                when it was last revised.
              </p>
            </Section>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

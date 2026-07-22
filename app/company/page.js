import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contact, whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Company — Bike Shack Sintra",
  description: "Business and contact information for Bike Shack Sintra.",
};

function Row({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-t border-charcoal/10">
      <div className="w-full sm:w-32 shrink-0 text-[10px] tracking-[0.14em] uppercase opacity-50">
        {label}
      </div>
      <div className="font-serif text-[18px]">{value}</div>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <main>
      <section className="pt-40 md:pt-52 pb-16 md:pb-20">
        <Container>
          <Reveal>
            <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
              Company
            </div>
            <h1 className="font-serif text-[36px] md:text-[56px] leading-tight max-w-[720px]">
              Bike Shack Sintra
            </h1>
            <p className="text-[18px] opacity-85 max-w-[560px] mt-8">
              The details behind Bike Shack, kept simple and easy to find.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-32 md:pb-44">
        <Container>
          <Reveal className="max-w-[560px]">
            <h2 className="font-serif text-[22px] md:text-[24px] mb-2">
              Information
            </h2>
            <div className="mt-4 pb-1 border-b border-charcoal/10">
              <Row label="Name" value="Bike Shack Sintra" />
              <Row
                label="Address"
                value={
                  <span className="italic opacity-55 text-[16px]">
                    Placeholder – to be completed before launch.
                  </span>
                }
              />
              <Row label="Country" value="Portugal" />
              <Row
                label="NIF"
                value={
                  <span className="italic opacity-55 text-[16px]">
                    Placeholder – to be completed before launch.
                  </span>
                }
              />
              <Row label="Email" value={contact.email} />
              <Row
                label="Phone"
                value={
                  <span className="italic opacity-55 text-[16px]">
                    Placeholder – to be completed before launch.
                  </span>
                }
              />
            </div>

            <h2 className="font-serif text-[22px] md:text-[24px] mb-2 mt-16">
              Contact
            </h2>
            <div className="mt-4 pb-1 border-b border-charcoal/10">
              <Row
                label="Email"
                value={
                  <a href={`mailto:${contact.email}`} className="hover:opacity-70 transition-opacity">
                    {contact.email}
                  </a>
                }
              />
              <Row
                label="WhatsApp"
                value={
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Write us on WhatsApp
                  </a>
                }
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

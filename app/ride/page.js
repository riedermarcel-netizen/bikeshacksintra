import Img from "@/components/ui/Img";
import Reveal from "@/components/Reveal";
import { Eyebrow, H2, Body, ButtonLink } from "@/components/ui/Type";
import { retreat, rideOffers, whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Ride with us in Sintra | Guide days, private weeks & retreats | Bike Shack Sintra",
  description:
    "Three ways to ride Sintra with a local guide: a guided day, a private week on your own dates, or the six-night retreat. Clear prices, no surprises.",
};

const offers = [
  {
    key: "guide-day",
    interest: "Day ride in Sintra",
    eyebrow: "One day",
    title: "Guide Day",
    text: "A day on the best trails of the Serra de Sintra. Good if you’re in Lisbon for a few days and want to ride properly.",
    price: rideOffers.guideDay.price,
    unit: rideOffers.guideDay.unit,
    img: "/images/v2/day-ride-wheelie.jpg",
    alt: "Marcel lifting the front wheel on a forest singletrack in Sintra",
  },
  {
    key: "private-week",
    interest: "Private week",
    eyebrow: "Your dates",
    title: "Private Week",
    text: "Just you, or you and your friends, with me as your guide. Your dates, your pace, as steep as you like. You sort your own place to stay.",
    price: rideOffers.privateWeek.price,
    unit: rideOffers.privateWeek.unit,
    img: "/images/v2/coastal-trail.jpg",
    alt: "A rider on a sandy coastal trail near Sintra at golden hour",
    highlight: "Good with family",
  },
  {
    key: "retreat",
    interest: "Sintra Retreat",
    eyebrow: "Everything included",
    title: "The Retreat",
    text: "Six nights with a small group. Riding, breakfasts, dinners in the greenhouse, sunsets on the cliffs. You ride, I take care of the rest.",
    price: retreat.price,
    unit: "per rider",
    img: "/images/v2/retreat-cliffs.jpg",
    alt: "Marcel with his bike above the Atlantic cliffs near Cabo da Roca",
    position: "25% 25%",
    more: "/retreat",
  },
];

const rows = [
  ["Length", "1 day", rideOffers.privateWeek.days, `${retreat.nights} nights`],
  ["Group", "You (and friends)", "You (and friends)", `Up to ${retreat.maxRiders} riders`],
  ["Dates", "Your choice", "Your choice", "Fixed dates"],
  ["Guiding", "✓", "✓", "✓"],
  ["Shuttle", "When needed", "When needed", "✓"],
  ["Accommodation", "—", "Your own", "✓"],
  ["Breakfast & dinners", "—", "—", "✓"],
  ["Airport transfer", "—", "—", "✓"],
  ["Price", `from ${rideOffers.guideDay.price}`, `from ${rideOffers.privateWeek.price}`, retreat.price],
];

const faq = [
  ["Which one is right for me?", "Here for a day or two: Guide Day. Here for a week, on your own dates or with family: Private Week. Want the full experience with a group: the Retreat. Still not sure? Write me."],
  ["I’m coming with my family. Does that work?", "Yes. Book a Private Week, or join the retreat rides only. I’m happy to share tips for places to stay, surf, beaches and the palaces."],
  ["Should I bring my e-bike or my analog bike?", "Both work. Flying is easier with an analog bike, and 99% of the time I ride my analog bike here. Rental bikes are available on request."],
  ["How good do I need to be?", "You should be at home on singletrack. For enduro riders, Sintra has steep and technical stuff. Tell me how you ride and I’ll plan around it."],
  ["What about prices for groups?", "Prices are per rider. For two or more riders on a Guide Day or Private Week, ask me and I’ll make you an offer."],
];

function OfferCard({ o }) {
  return (
    <Reveal className="flex flex-col gap-4 h-full">
      <div className="relative">
        <Img src={o.img} alt={o.alt} ratio="4 / 5" position={o.position} sizes="(min-width: 768px) 33vw, 100vw" />
        {o.highlight && (
          <span className="absolute top-4 left-4 bg-paper text-ink text-[12px] tracking-[0.14em] uppercase px-3 py-1.5">
            {o.highlight}
          </span>
        )}
      </div>
      <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{o.eyebrow}</span>
      <h2 className="font-display font-semibold text-[32px] tracking-[0.04em] uppercase leading-none">{o.title}</h2>
      <p className="text-[16px] leading-[1.6] text-stone">{o.text}</p>
      <div className="mt-auto pt-5 border-t border-ink/15 flex flex-col gap-4">
        <p className="flex items-baseline gap-2">
          <span className="text-[13px] text-stone">from</span>
          <span className="font-display font-semibold text-[34px] leading-none">{o.price}</span>
          <span className="text-[14px] text-stone">{o.unit}</span>
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <ButtonLink href={`/?interest=${encodeURIComponent(o.interest)}#book`}>Check dates</ButtonLink>
          {o.more && (
            <a href={o.more} className="text-[14px] font-semibold underline underline-offset-4 hover:opacity-70">
              See the week
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function RidePage() {
  return (
    <main>
      <section className="pt-40 pb-14 md:pt-48 md:pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-6">
          <Eyebrow>Ride with us · Sintra</Eyebrow>
          <h1 className="font-display font-medium uppercase leading-[0.95] text-[52px] md:text-[88px]">Three ways to ride</h1>
          <Body>
            One day, your own week, or the full retreat. Same trails, same guide.
            Pick what fits your trip.
          </Body>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-12 md:gap-10 md:grid-cols-3">
          {offers.map((o) => (
            <OfferCard key={o.key} o={o} />
          ))}
        </div>
      </section>

      <section className="bg-sand py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>At a glance</Eyebrow>
            <H2>Compare</H2>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th className="py-4 pr-4 w-[22%]" />
                  {offers.map((o) => (
                    <th key={o.key} className="py-4 pr-4 font-display font-semibold text-[20px] uppercase tracking-[0.04em]">
                      {o.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-sand-line">
                    <th scope="row" className="py-4 pr-4 text-[12px] tracking-[0.14em] uppercase text-earth font-normal">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={i} className={`py-4 pr-4 text-[16px] ${label === "Price" ? "font-semibold" : "text-stone"}`}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-10 md:grid-cols-[1fr_1fr] items-center">
          <div className="flex flex-col gap-5">
            <Eyebrow>Travelling with family?</Eyebrow>
            <H2>Join the rides, stay on your own</H2>
            <Body>
              Ride with the retreat group on the riding days and spend the rest
              of the time with your family. Guiding and shuttle included, place
              to stay and meals up to you. Limited to one or two riders per retreat.
            </Body>
            <p className="flex items-baseline gap-2">
              <span className="text-[13px] text-stone">from</span>
              <span className="font-display font-semibold text-[30px] leading-none">{rideOffers.rideOnly.price}</span>
              <span className="text-[14px] text-stone">{rideOffers.rideOnly.unit}</span>
            </p>
            <div>
              <ButtonLink href={`/?interest=${encodeURIComponent("Retreat rides only")}#book`}>Ask about a spot</ButtonLink>
            </div>
          </div>
          <Img src="/images/v2/lighthouse-cliffs.jpg" alt="The Cabo da Roca lighthouse above the Atlantic cliffs near Sintra at golden hour" ratio="4 / 3" />
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 flex flex-col gap-7">
          <Eyebrow>Questions</Eyebrow>
          {faq.map(([q, a]) => (
            <div key={q} className="border-t border-sand-line pt-5 flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold">{q}</h3>
              <p className="text-[16px] leading-[1.65] text-stone">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper py-24 md:py-28">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 flex flex-col gap-6 items-start">
          <Eyebrow light>Not sure yet?</Eyebrow>
          <H2>Just ask me</H2>
          <Body light>Tell me when you’re coming and how you ride. I’ll tell you what makes sense.</Body>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/#book" variant="light">Send a request</ButtonLink>
            <ButtonLink href={whatsappLink} variant="outline" target="_blank" rel="noopener noreferrer">Write me on WhatsApp</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

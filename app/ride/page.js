import Img from "@/components/ui/Img";
import Reveal from "@/components/Reveal";
import { Eyebrow, H2, Body, ButtonLink } from "@/components/ui/Type";
import { retreat, rideOffers, whatsappLink, partners } from "@/lib/config";

export const metadata = {
  title: "Ride with us in Sintra | Guide days, private weeks & retreats | Bike Shack Sintra",
  description:
    "Three ways to ride Sintra with a local guide: a trail day, a private week on your own dates, or the six-night retreat. Clear prices, no surprises.",
};

const offers = [
  {
    key: "trail-day",
    interest: "Day ride in Sintra",
    eyebrow: "One day",
    title: "Trail Day",
    text: "One full day on the trails I’d show a friend. I pick the route for your level, you just ride.",
    points: ["4 to 5 hours of riding", "Route chosen for you", "Shuttle when it helps", "Rental bike on request"],
    price: rideOffers.trailDay.price,
    unit: rideOffers.trailDay.unit,
    img: "/images/v2/day-ride-wheelie.jpg",
    alt: "Marcel lifting the front wheel on a forest singletrack in Sintra",
  },
  {
    key: "private-week",
    interest: "Private week",
    eyebrow: "Your dates",
    title: "Private Week",
    text: "Sintra on your own schedule. A different side of the Serra every day, at your pace, with me as your private guide.",
    points: ["5, 6 or 7 riding days, a rest day built in", "Planned around how you ride", "Shuttle and a sunset ride to the coast", "Airport pickup and drop-off in Lisbon", "Stay wherever you like, I’ll help you find a place"],
    tiers: rideOffers.privateWeek.tiers,
    price: rideOffers.privateWeek.price,
    unit: rideOffers.privateWeek.unit,
    from: true,
    img: "/images/v2/coastal-trail.jpg",
    alt: "A rider on a sandy coastal trail near Sintra at golden hour",
  },
  {
    key: "retreat",
    interest: "Sintra Retreat",
    eyebrow: "Everything included",
    title: "The Retreat",
    text: "Six nights with a small group. Riding, long breakfasts, dinners in the greenhouse, sunsets on the cliffs.",
    points: [`Up to ${retreat.maxRiders} riders`, "Accommodation and breakfast", "Three shared dinners", "Airport transfer from Lisbon"],
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
  ["Group", "Private, 1–2 riders", "Private, 1–2 riders", `Up to ${retreat.maxRiders} riders`],
  ["Dates", "Your choice", "Your choice", "Spring and autumn"],
  ["Guiding", "✓", "✓", "✓"],
  ["Shuttle", "When it helps", "When it helps", "✓"],
  ["Sunset ride", "—", "✓", "✓"],
  ["Accommodation", "—", "Your own", "✓"],
  ["Breakfast & dinners", "—", "—", "✓"],
  ["Airport transfer", "—", "✓", "✓"],
  ["Price", `${rideOffers.trailDay.price} per group`, `from ${rideOffers.privateWeek.price} per group`, `${retreat.price} per rider`],
];

const faq = [
  ["Which one is right for me?", "Short on time: Trail Day. Want Sintra to yourself, on your own dates: Private Week. Want the riding, the food and the company: the Retreat. Still not sure? Write me."],
  ["What’s the weather like?", "You can ride here all year. Spring and autumn are the best: around 17 to 22°C and green everywhere. It’s the Atlantic, so expect a shower now and then, especially in March. If a day is properly wet, we shift things around or ride something else."],
  ["Should I bring my own bike?", "Yes, if you can. Your own bike always feels best. Flying is easier with an analog bike: e-bike batteries usually aren’t allowed on planes. Need a bike here? I can arrange a rental."],
  ["How good do I need to be?", "You should be at home on singletrack. The Serra has everything from flowing forest trails to steep, technical lines. Tell me how you ride and I’ll plan around it."],
  ["What does it cost for a group?", `Trail Day and Private Week are private, so the price is for your group and not per rider. It covers one or two riders. On a Trail Day, each extra rider is ${rideOffers.trailDay.extraRider}. For a Private Week with more than two, ask me and I’ll make you an offer.`],
  ["How does booking work?", "Send me a request and we agree on dates. A 30% deposit holds them, the rest is due 30 days before you arrive."],
];

const gravelPartner = partners.find((p) => p.name === "808 Project");

function OfferCard({ o }) {
  return (
    <Reveal className="flex flex-col gap-4 h-full">
      <div className="relative">
        <Img src={o.img} alt={o.alt} ratio="4 / 5" position={o.position} sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{o.eyebrow}</span>
      <h2 className="font-display font-semibold text-[32px] tracking-[0.04em] uppercase leading-none">{o.title}</h2>
      <p className="text-[16px] leading-[1.6] text-stone">{o.text}</p>
      <ul className="flex flex-col gap-2">
        {o.points.map((pt) => (
          <li key={pt} className="relative pl-6 text-[15px] leading-[1.5] text-stone">
            <span aria-hidden="true" className="absolute left-0">—</span>
            {pt}
          </li>
        ))}
      </ul>
      {o.tiers && (
        <dl className="grid grid-cols-3 border border-ink/15">
          {o.tiers.map(([d, p]) => (
            <div key={d} className="px-3 py-2.5 flex flex-col gap-0.5 border-r border-ink/15 last:border-r-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-earth">{d}</dt>
              <dd className="text-[16px] font-semibold">{p}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="mt-auto pt-5 border-t border-ink/15 flex flex-col gap-4">
        <p className="flex items-baseline gap-2">
          {o.from && <span className="text-[13px] text-stone">from</span>}
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
            A day, a week of your own, or the full retreat. Same trails, same guide.
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

      <section className="pb-24 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="border-t border-ink pt-12 grid gap-10 md:grid-cols-[1fr_1fr] items-center">
            <Img src="/images/v2/gravel-road.jpg" alt="A rider on a long gravel road between green verges" ratio="3 / 2" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="flex flex-col gap-5">
              <Eyebrow>Bike Shack Portugal · Further afield</Eyebrow>
              <h2 className="font-display font-semibold text-[32px] md:text-[40px] tracking-[0.04em] uppercase leading-none">Gravel Portugal</h2>
              <Body>
                Five to ten days across Portugal on gravel, organised together with
                my friends at 808 Project. Quiet roads, long days, a lot of pastéis
                de nata. Fixed dates, small group.
              </Body>
              <div className="flex flex-wrap items-center gap-5">
                <ButtonLink href={`/?interest=${encodeURIComponent("Gravel Portugal")}#book`}>Ask about dates</ButtonLink>
                {gravelPartner?.url && (
                  <a href={gravelPartner.url} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold underline underline-offset-4 hover:opacity-70">
                    808 Project
                  </a>
                )}
              </div>
            </div>
          </div>
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

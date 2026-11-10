import Image from "next/image";
import Img from "@/components/ui/Img";
import Reveal from "@/components/Reveal";
import { Eyebrow, H2, Body, ButtonLink } from "@/components/ui/Type";
import { retreat, whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Sintra Mountain Bike Retreat 2027 | Bike Shack Sintra",
  description:
    "Six nights of mountain biking in Sintra, Portugal: guided forest trails, sunset rides to Cabo da Roca, breakfast, three shared dinners and airport transfer. €2,390 per rider.",
};

const facts = [
  ["Length", `${retreat.nights} nights`],
  ["Group", `Up to ${retreat.maxRiders} riders`],
  ["Rooms", "Double room · single on request"],
  ["Price", `${retreat.price} per rider`],
  ["Bikes", "Own bike or e-bike welcome"],
];

const day = [
  ["Morning", "Breakfast together", "A slow start at one table. Yoga for anyone who wants it."],
  ["Late morning", "On the trails", "Forest singletrack in the Serra de Sintra, chosen for the group and the day."],
  ["Midday", "Lunch your way", "A picnic on the trail or a long lunch in a local restaurant."],
  ["Evening", "Sunset ride", "Out to the coast for the last light over the Atlantic."],
  ["Night", "Dinner", "Fresh pasta in the greenhouse, or out for pizza. Sometimes a fire."],
];

const week = [
  ["Arrival", "We pick you up at Lisbon airport. Check in, settle in, dinner together."],
  ["First ride", "Bike set-up for everyone, then an easy loop to get to know the trails and each other."],
  ["Riding days", "The heart of the week: the best trails of the Serra, paced to the group, with a sunset ride to the cliffs."],
  ["A day off the bike", "Lisbon or the palaces of Sintra — or the off-roader out to the cliffs. Your choice, your pace."],
  ["Departure", "A last breakfast, then back to the airport."],
];

const included = [
  "Accommodation for 6 nights in a shared double room",
  "Breakfast every day",
  "Dinner together on three evenings",
  "Guided riding every riding day",
  "Bike set-up session on the first day",
  "Airport transfers from and to Lisbon",
  "Optional morning yoga",
];

const notIncluded = [
  "Flights to Lisbon",
  "Lunches and the other evenings out",
  "Drinks",
  "Rental bike — available on request",
  "Travel and health insurance",
  "Single room — supplement on request",
];

const faq = [
  ["Do I need my own bike?", "No. Bring yours, or ask us about a rental bike when you request your place."],
  ["Can I come on an e-bike?", "Yes, e-bikes are welcome on the retreat."],
  ["How fit do I need to be?", "You should be comfortable riding for a few hours on singletrack. We adapt the routes to the group."],
  ["Can I come alone?", "Of course. The small group and the shared dinners make it easy to arrive on your own."],
];

function List({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((i) => (
        <li key={i} className="relative pl-6 text-[16px] leading-[1.55] text-stone">
          <span aria-hidden="true" className="absolute left-0">—</span>
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function RetreatPage() {
  return (
    <main>
      <section className="relative min-h-[720px] flex items-end overflow-hidden bg-ink text-paper">
        <Image
          src="/images/v2/retreat-cliffs.jpg"
          alt="Marcel with his bike above the Atlantic cliffs near Cabo da Roca at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "25% 25%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 60%)" }} />
        <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-40 pb-16 md:pb-20">
          <div className="max-w-[760px] flex flex-col gap-6">
            <Eyebrow light>Bike Shack Sintra · Retreat 2027</Eyebrow>
            <h1 className="font-display font-medium uppercase leading-[0.95] text-[56px] md:text-[92px]">The Sintra Retreat</h1>
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-mist max-w-[580px]">
              Six nights in Sintra with a small group. Forest trails, sunsets on the
              cliffs, long breakfasts and dinners in the greenhouse. You ride, we
              take care of everything else.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <ButtonLink href="/#book" variant="light">Request a place</ButtonLink>
              <ButtonLink href="#day" variant="outline">What a day looks like</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 md:px-10">
        <dl className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-px bg-sand-line border-x border-sand-line">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-sand px-5 py-6 flex flex-col gap-1.5">
              <dt className="text-[12px] tracking-[0.14em] uppercase text-earth">{k}</dt>
              <dd className="text-[17px] md:text-[18px] font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[1.2fr_0.8fr] items-center">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>The idea</Eyebrow>
            <H2>Small group, local trails</H2>
            <Body>
              You stay close to the trails and ride the Serra de Sintra with Marcel,
              who knows them well. Groups are small, so the pace and the routes
              follow the riders. Along the way you’ll pick up tips on technique, but
              there’s no fixed programme to work through.
            </Body>
          </Reveal>
          <Img src="/images/v2/host.jpg" alt="Marcel smiling in the hills above Sintra at golden hour" ratio="4 / 5" position="35% center" className="max-w-[460px]" />
        </div>
      </section>

      <section id="day" className="bg-ink text-paper py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow light>A day on the retreat</Eyebrow>
            <H2>Ride, eat, watch the sun go down</H2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {day.map(([t, h, d]) => (
              <div key={t} className="border-t border-[#5f574d] pt-4 flex flex-col gap-2.5">
                <span className="font-display text-[15px] tracking-[0.2em] uppercase text-dim">{t}</span>
                <span className="font-display font-semibold text-[26px] uppercase leading-none">{h}</span>
                <span className="text-[15px] leading-[1.6] text-mist">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>The week</Eyebrow>
            <H2>How the days come together</H2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {week.map(([h, d]) => (
              <div key={h} className="flex flex-col gap-2.5">
                <span className="font-display font-semibold text-[22px] tracking-[0.06em] uppercase">{h}</span>
                <span className="text-[16px] leading-[1.65] text-stone">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#6b645a]">The plan changes with the weather and the group.</p>
        </div>
      </section>

      <div className="grid md:grid-cols-3">
        <Img src="/images/v2/pizza.jpg" alt="Wood-fired pizza on the table in a warm restaurant" ratio="4 / 3" sizes="(min-width: 768px) 33vw, 100vw" />
        <Img src="/images/v2/film-poster.jpg" alt="Silhouette of a rider lifting the front wheel against the sunset over the Atlantic" ratio="4 / 3" sizes="(min-width: 768px) 33vw, 100vw" />
        <Img src="/images/v2/coastal-trail.jpg" alt="A rider on a sandy coastal trail near Sintra at golden hour" ratio="4 / 3" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>

      <section className="bg-sand py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-3">
          <div className="flex flex-col gap-5"><Eyebrow>Included</Eyebrow><List items={included} /></div>
          <div className="flex flex-col gap-5"><Eyebrow>Not included</Eyebrow><List items={notIncluded} /></div>
          <div className="flex flex-col gap-5">
            <Eyebrow>Who it is for</Eyebrow>
            <Body>
              Riders who have been on a mountain bike for a while and feel at home on
              singletrack. You don’t need to be fast or fearless — just keen to ride,
              open to a few tips and happy in a small group. E-bikes are welcome.
            </Body>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col gap-4 max-w-[420px]">
            <Eyebrow>2027 season</Eyebrow>
            <H2>Dates</H2>
            <Body>Spring and autumn, when Sintra is at its best. Exact dates on request.</Body>
          </div>
          <div className="flex flex-wrap gap-2.5 content-center">
            {retreat.months2027.map((m) => (
              <span key={m.label} className={`border border-ink px-5 py-3 text-[16px] ${m.tentative ? "border-dashed text-earth" : ""}`}>
                {m.label}
              </span>
            ))}
          </div>
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
          <Eyebrow light>Request</Eyebrow>
          <H2>Ask about dates</H2>
          <Body light>Tell us which month suits you and how you ride. Marcel will get back to you personally within a day or two.</Body>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/#book" variant="light">Request a place</ButtonLink>
            <ButtonLink href={whatsappLink} variant="outline" target="_blank" rel="noopener noreferrer">Write us on WhatsApp</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

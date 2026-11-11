import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import Img from "../ui/Img";
import { Eyebrow, H2, Body, ButtonLink } from "../ui/Type";
import { film, retreat } from "@/lib/config";
import { stories } from "@/lib/journal";

export function ForestBand() {
  return (
    <div className="relative w-full h-[420px] md:h-[620px]">
      <Image
        src="/images/v2/forest-band.jpg"
        alt="Marcel with his bike in a backlit forest in the Serra de Sintra"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export function WhereWeRide() {
  return (
    <section id="where" className="bg-ink text-paper">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-28 grid gap-14 md:grid-cols-[1.1fr_1fr] items-center">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow light>Where we ride</Eyebrow>
          <H2>Sintra, from the forest to the lighthouse</H2>
          <Body light>
            Sintra has two moods. Up in the Serra it’s granite, moss and old
            eucalyptus, with a palace or a Moorish castle popping up between the
            trees. Ride west and it turns into heath, wind and sea — until the
            trail runs out at Cabo da Roca, because Europe does.
          </Body>
          <Body light>
            Most rides start in Colares, between the Serra and the coast, about 40
            minutes from Lisbon airport.
          </Body>
        </Reveal>
        <Img
          src="/images/v2/lighthouse-cliffs.jpg"
          alt="The Cabo da Roca lighthouse above the Atlantic cliffs and sea stacks near Sintra at golden hour"
          ratio="3 / 2"
        />
      </div>
    </section>
  );
}

export function RetreatTeaser() {
  const facts = [
    ["Duration", `${retreat.nights} nights`],
    ["Group", `Up to ${retreat.maxRiders} riders`],
    ["Included", "Stay, guiding, breakfast, 3 dinners, transfer"],
    ["Price", `${retreat.price} per rider`],
  ];
  return (
    <section id="retreats" className="bg-sand py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[1fr_1.15fr] items-center">
        <Img
          src="/images/v2/retreat-cliffs.jpg"
          alt="Marcel with his bike looking out over the Atlantic and the sea stacks near Sintra at golden hour"
          ratio="4 / 3"
          position="left center"
        />
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>The retreat</Eyebrow>
          <H2>Sintra Retreat</H2>
          <Body>
            Six nights in the Sintra-Cascais Natural Park, a small group, and me
            as your guide. I sort out the beds, breakfast, transfers and three
            dinners. You ride, eat, and try not to fall in love with Portugal.
            (Most people fail at that last part.)
          </Body>
          <dl className="grid grid-cols-2 gap-px bg-sand-line border border-sand-line">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-sand px-5 py-4 flex flex-col gap-1">
                <dt className="text-[12px] tracking-[0.14em] uppercase text-earth">{k}</dt>
                <dd className="text-[17px] font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-2">
            <span className="text-[12px] tracking-[0.14em] uppercase text-earth">
              2027 season · exact dates on request
            </span>
            <div className="flex flex-wrap gap-2.5">
              {retreat.months2027.map((m) => (
                <span
                  key={m.label}
                  className={`border border-ink px-4 py-2.5 text-[15px] ${m.tentative ? "border-dashed text-earth" : ""}`}
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <ButtonLink href="#book">Request a place</ButtonLink>
            <Link href="/retreat" className="font-semibold text-[15px] underline underline-offset-4">
              See the full retreat →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Film() {
  return (
    <section id="film" className="bg-ink text-paper py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-10">
        <div className="flex flex-wrap gap-6 md:gap-16 justify-between items-end">
          <div className="flex flex-col gap-4">
            <Eyebrow light>The film · 3 min</Eyebrow>
            <H2 className="md:text-[64px]">{film.title}</H2>
          </div>
          <Body light className="max-w-[480px]">
            James and Nicole followed me around the trails of Sintra and out to
            the cliffs at Cabo da Roca. Same trails as on the retreat. The sunset
            isn’t guaranteed, but it usually shows up.
          </Body>
        </div>
        <div className="relative w-full bg-[#222]" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={`https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
            title={`${film.title} — mountain biking in Sintra`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <p className="flex flex-wrap gap-6 text-[14px] text-dim">
          <span>{film.credits}</span>
          <a href={`https://vimeo.com/${film.vimeoId}`} target="_blank" rel="noopener noreferrer" className="text-paper hover:underline">
            Watch on Vimeo →
          </a>
        </p>
      </div>
    </section>
  );
}

const offers = [
  {
    brand: "Bike Shack Sintra",
    title: "Day rides in Sintra",
    text: "A guided day on the trails of the Serra de Sintra. Bring your bike or rent one — I’ll bring the good routes.",
    fact: "From €250 per rider",
    img: "/images/v2/day-ride-wheelie.jpg",
    alt: "Marcel lifting the front wheel on a forest singletrack in Sintra",
  },
  {
    brand: "Bike Shack Portugal",
    title: "Gravel Portugal",
    text: "Five to ten days across Portugal on gravel, organised with my friends at 808 Project. Quiet roads, long days, a lot of pastéis de nata.",
    fact: "5–10 days",
    img: "/images/v2/gravel-road.jpg",
    alt: "A rider on a long gravel road between green verges",
  },
  {
    brand: "Bike Shack",
    title: "Team events",
    text: "Riding days for companies and clubs, in Sintra or the Alps. Good for team spirit. Better than another workshop.",
    fact: "On request",
    img: "/images/v2/groups.jpg",
    alt: "Marcel leading a group of riders along a singletrack through a pine forest",
    position: "55% center",
  },
];

export function Offers() {
  return (
    <section id="ride" className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Eyebrow>Other ways to ride</Eyebrow>
          <H2>One day, one week, or the whole country</H2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {offers.map((o) => (
            <Reveal key={o.title} className="flex flex-col gap-4 h-full">
              <Img src={o.img} alt={o.alt} ratio="4 / 5" position={o.position} sizes="(min-width: 768px) 33vw, 100vw" />
              <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{o.brand}</span>
              <h3 className="font-display font-semibold text-[28px] tracking-[0.04em] uppercase leading-none">{o.title}</h3>
              <p className="text-[16px] leading-[1.6] text-stone">{o.text}</p>
              <div className="mt-auto pt-4 border-t border-ink/15 flex items-center justify-between gap-4">
                <span className="text-[15px] font-medium">{o.fact}</span>
                <a href="#book" className="text-[14px] font-semibold underline underline-offset-4 hover:opacity-70">Request</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JournalTeaser() {
  return (
    <section id="journal" className="pb-24 md:pb-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow>Journal</Eyebrow>
          <H2>When I’m not in Sintra</H2>
          <Body>I guide in the Alps with Ride Alpine Trails. Here’s what that looked like this year.</Body>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <Link key={s.slug} href={`/journal/${s.slug}`} className="group flex flex-col gap-3.5">
              <Img src={s.hero} alt={s.heroAlt} ratio="4 / 3" sizes="(min-width: 768px) 33vw, 100vw" />
              <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{s.place} · {s.date}</span>
              <span className="font-display font-semibold text-[28px] leading-[1.05] uppercase group-hover:underline underline-offset-4">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Host() {
  return (
    <section id="host" className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <figure className="flex flex-col gap-2">
            <Img
              src="/images/story/s1.jpg"
              alt="Marcel as a small boy on his first bike in front of the family camper van"
              ratio="3 / 4"
              position="40% 70%"
              sizes="(min-width: 768px) 28vw, 50vw"
            />
            <figcaption className="font-display uppercase tracking-[0.2em] text-[13px] opacity-70">Then</figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <Img
              src="/images/v2/host.jpg"
              alt="Marcel today, smiling in the hills above Sintra at golden hour"
              ratio="3 / 4"
              position="78% center"
              sizes="(min-width: 768px) 28vw, 50vw"
            />
            <figcaption className="font-display uppercase tracking-[0.2em] text-[13px] opacity-70">Now</figcaption>
          </figure>
        </div>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Your host</Eyebrow>
          <H2>Marcel</H2>
          <p className="font-display font-medium text-[30px] md:text-[36px] leading-[1.15]">
            Started at five. Never really stopped.
          </p>
          <Body>
            “Bike Shack” sounds like a team. Mostly it’s me, with Sophie backing
            all of it and a few good friends helping out.
          </Body>
          <Link href="/about" className="font-semibold text-[15px]">Read Marcel’s story →</Link>
        </Reveal>
      </div>
    </section>
  );
}

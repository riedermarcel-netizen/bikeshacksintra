import Img from "@/components/ui/Img";
import Reveal from "@/components/Reveal";
import { Eyebrow, H2, Body, ButtonLink } from "@/components/ui/Type";
import { whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Marcel’s story — Bike Shack Sintra",
  description:
    "Riding since four, racing since six. How a family of bike people turned into a small mountain bike retreat in Sintra.",
};

function Caption({ children }) {
  return <p className="pt-3 text-[13px] text-[#6b645a]">{children}</p>;
}

export default function AboutPage() {
  return (
    <main>
      <section className="pt-40 md:pt-48 pb-20 md:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[1.2fr_0.8fr] items-end">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Marcel’s story</Eyebrow>
            <h1 className="font-display font-medium uppercase leading-[0.95] text-[52px] md:text-[84px]">
              Riding since four. Racing since six.
            </h1>
            <Body>
              I didn’t get into mountain biking. I was sort of born into it. My
              family spent weekends on bikes and holidays in a camper van, and at
              some point somebody put a helmet on me and that was that.
            </Body>
          </Reveal>
          <figure>
            <Img src="/images/story/s1.jpg" alt="Marcel as a small boy on his first bike in front of the family camper van" ratio="3 / 4" />
            <Caption>Day one, more or less. The haircut was not my decision.</Caption>
          </figure>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-6 md:grid-cols-[1.4fr_0.6fr] items-end">
          <figure>
            <Img src="/images/story/s3.jpg" alt="Marcel with his yellow Diamondback, his parents and his sister on a mountain road" ratio="4 / 3" sizes="(min-width: 768px) 60vw, 100vw" />
            <Caption>A yellow Diamondback, a yellow rain jacket and a family that thought this was a normal holiday.</Caption>
          </figure>
          <figure className="hidden md:block">
            <Img src="/images/story/s2.jpg" alt="Marcel and his sister with the yellow Diamondback" ratio="3 / 4" sizes="25vw" />
          </figure>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>The racing years</Eyebrow>
            <H2>Numbers on the handlebar</H2>
            <Body>
              I raced my first race at six and didn’t really stop for years —
              cross-country, downhill, whatever had a start line. My sister Nadine
              took it further than me and raced professionally. I took it far
              enough to learn the important things: how to read a trail, how to
              fall properly, and that the rider who looks relaxed usually is the
              fast one.
            </Body>
            <Body>
              Later came enduro, gravel and long alpine days. The bikes got better.
              The fashion, thankfully, too.
            </Body>
          </Reveal>
          <div className="grid gap-6 grid-cols-2">
            <figure>
              <Img src="/images/story/s4.jpg" alt="Young Marcel racing with number 342 at Les Orres in France" ratio="3 / 4" sizes="(min-width: 768px) 25vw, 50vw" />
              <Caption>Les Orres, France. Number 342. Matching gloves were a priority.</Caption>
            </figure>
            <figure>
              <Img src="/images/story/s5.jpg" alt="Teenage Marcel riding over large rocks in a cross-country race" ratio="3 / 4" sizes="(min-width: 768px) 25vw, 50vw" />
              <Caption>Rock garden, early 2000s. The marshal believed in me.</Caption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-[0.8fr_1.2fr] items-center">
          <figure>
            <Img src="/images/story/s6.jpg" alt="Marcel and his sister Nadine in team kit with their bikes on a meadow" ratio="3 / 4" />
            <Caption>Nadine and me, team kit era. She was faster. I’m allowed to say that now.</Caption>
          </figure>
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>What stuck</Eyebrow>
            <H2>More than results</H2>
            <Body>
              Honestly, I don’t remember most of the results. What stuck was the
              rest: the people, the long drives, the meals after a hard day, and
              the feeling that a trail asks nothing of you except to show up and
              pay attention. Through a few harder years, that was the one thing
              that always worked.
            </Body>
            <Body>
              That’s what I want to pass on. Not a training plan — a few good days
              on a bike, with people you’d happily have dinner with.
            </Body>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-14 md:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Today</Eyebrow>
            <H2>Sintra and a shack</H2>
            <Body>
              These days I live in Colares with my partner Sophie, a few minutes
              from the Serra de Sintra. I guide in the Alps with Ride Alpine Trails,
              and in Sintra I host small groups on the trails I ride every week.
            </Body>
            <Body>
              Bike Shack is mostly me, plus a few good friends who step in when
              the group gets bigger. And a partner who thinks a grown man making
              a living on bikes is a perfectly normal plan.
            </Body>
          </Reveal>
          <figure>
            <Img src="/images/v2/host.jpg" alt="Marcel smiling in the hills above Sintra at golden hour" ratio="4 / 5" position="35% center" />
            <Caption>Still riding. Better bike, same grin.</Caption>
          </figure>
        </div>
      </section>

      <section className="bg-ink text-paper py-24 md:py-28">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 flex flex-col gap-6 items-start">
          <Eyebrow light>Ride with me</Eyebrow>
          <H2>Come to Sintra</H2>
          <Body light>Six nights, a small group, good trails and long dinners. Or just a day on the bike.</Body>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/retreat" variant="light">See the retreat</ButtonLink>
            <ButtonLink href={whatsappLink} variant="outline" target="_blank" rel="noopener noreferrer">Write me on WhatsApp</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

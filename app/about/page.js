import Link from "next/link";
import Photo from "@/components/Photo";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/config";

export const metadata = {
  title: "Marcel's Story — Bike Shack Sintra",
  description:
    "Riding since four, racing since six: how a lifetime on bikes shaped the way Marcel coaches in Sintra today.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="pt-40 md:pt-52 pb-20 md:pb-28">
        <Container>
          <Reveal>
            <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
              Marcel&apos;s Story
            </div>
            <h1 className="font-serif text-[36px] md:text-[56px] leading-tight max-w-[720px]">
              Riding since four.
              <br />
              Racing since six.
            </h1>
            <p className="text-[18px] md:text-[20px] opacity-85 max-w-[600px] mt-8">
              Marcel grew up on a bike, not because someone signed him up
              for a class, but because riding was simply what his family
              did. He started at four, raced his first race at six. His
              sister Nadine went on to spend years racing professionally.
              Mountain biking has run through the Rieder family for
              decades, long before it became a way to make a living.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-32 md:py-44">
        <Container className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-24 items-center">
          <Photo
            ratio="portrait"
            src="/images/site/story-portrait.jpg"
            alt="Marcel on the trail above Sintra"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
          <Reveal>
            <p className="text-[18px] opacity-85 max-w-[440px] mb-4">
              Since then he&apos;s ridden cross-country, downhill, enduro,
              gravel and alpine trails, racing for years across various
              mountain bike series, and coaching riders along the way.
            </p>
            <p className="text-[18px] opacity-85 max-w-[440px] mb-4">
              But more than any result, riding taught him patience. The
              kind of confidence that isn&apos;t loud, just steady. And
              through some harder years, it gave him something constant to
              hold on to: a place that never asked anything of him except
              to show up and pay attention.
            </p>
            <p className="text-[18px] opacity-85 max-w-[440px]">
              That&apos;s what he wants for the people he rides with, too:
              not just better technique, though that comes, but a little
              more trust in themselves, on the bike and off it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-32 md:py-44">
        <Container className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-24 items-center">
          <Reveal className="md:order-1">
            <p className="text-[18px] opacity-85 max-w-[440px]">
              He still remembers what it felt like to be unsure on a trail.
              That memory is why he pays attention to the small things
              before anything else: how you sit, where you look, when you
              brake.
            </p>
          </Reveal>
          <Photo
            ratio="portrait"
            src="/images/site/story-adjustments.jpg"
            alt="Marcel adjusting his bike before a ride"
            className="md:order-2"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Container>
      </section>

      <section className="bg-forest text-warm-white py-32 md:py-44">
        <Container>
          <Reveal className="text-center">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Link
                href="/#book"
                className="bg-warm-white text-ink text-[12px] tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-sand transition-colors"
              >
                Request a private ride
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.14em] uppercase opacity-70 hover:opacity-100 transition-opacity border-b border-warm-white/40 hover:border-warm-white py-3"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

import Link from "next/link";
import Photo from "./Photo";
import Container from "./Container";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-sand py-32 md:py-44">
      <Container className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-24 items-center">
        <Photo
          ratio="portrait"
          src="/images/site/host-portrait.jpg"
          alt="Marcel, your host and coach, in the hills above Sintra"
          sizes="(min-width: 768px) 42vw, 100vw"
          className="md:order-2"
          animate
        />
        <Reveal className="md:order-1">
          <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
            The Host
          </div>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-6 max-w-[480px]">
            Marcel listens before he coaches.
          </h2>
          <p className="text-[18px] opacity-85 max-w-[440px] mb-4">
            He watches how you sit on the bike, then makes the small
            adjustments that make the biggest difference.
          </p>
          <p className="text-[18px] opacity-85 max-w-[440px] mb-4">
            He moved to Sintra for the trails on his doorstep, close
            enough to ride most days of the week.
          </p>
          <p className="text-[18px] opacity-85 max-w-[440px] mb-8">
            Years of racing and coaching, and more days on the trail than
            he could count, taught him most of what he knows.
          </p>
          <Link
            href="/about"
            className="text-[12px] tracking-[0.14em] uppercase opacity-70 hover:opacity-100 transition-opacity border-b border-charcoal/40 hover:border-charcoal py-3"
          >
            Read Marcel&apos;s full story
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

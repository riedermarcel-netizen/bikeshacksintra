import Photo from "./Photo";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Pillars() {
  return (
    <section id="experience" className="py-32 md:py-44">
      <Container className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
        <Photo
          ratio="portrait"
          src="/images/site/experience-wheelie.jpg"
          alt="Marcel popping a wheelie on a forest singletrack in Sintra"
          sizes="(min-width: 768px) 50vw, 100vw"
          animate
        />
        <Reveal>
          <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
            Built Around You
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] leading-tight mb-8 max-w-[480px]">
            You love riding.
            <br />
            We make it feel more natural.
          </h2>
          <p className="text-[17px] opacity-85 max-w-[440px] mb-8">
            Maybe you hesitate before steep sections and want to ride with
            more confidence. Maybe you already ride well and simply want a
            good day on trails worth knowing. Both are exactly why Bike
            Shack exists.
          </p>
          <p className="font-serif italic text-[19px] md:text-[23px] opacity-95 max-w-[460px]">
            The ride adapts to you, not the other way around.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

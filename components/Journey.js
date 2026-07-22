import Photo from "./Photo";
import Container from "./Container";
import Reveal from "./Reveal";

function FullBeat({ src, alt, position, word }) {
  return (
    <Reveal className="relative mb-2">
      <Photo
        src={src}
        alt={alt}
        position={position}
        sizes="100vw"
        className="h-[60vh] md:h-[88vh] md:min-h-[520px]"
        animate
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(21,21,15,0.42), rgba(21,21,15,0) 40%)",
        }}
      />
      <span className="absolute left-6 bottom-8 md:left-[60px] md:bottom-[60px] z-10 font-serif text-warm-white text-[32px] md:text-[52px]">
        {word}
      </span>
    </Reveal>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="py-32 md:py-44">
      <Container>
        <Reveal className="text-center pb-20 md:pb-28">
          <h2 className="font-serif text-[30px] md:text-[44px] leading-tight">
            Your Experience, Our Craft
          </h2>
        </Reveal>
      </Container>

      <FullBeat
        src="/images/site/journey-ride-calmly.jpg"
        alt="A hand resting on the handlebar above the Sintra coastline at golden hour"
        position="55% 60%"
        word="Ride Calmly."
      />

      <FullBeat
        src="/images/site/journey-ride-confidently.jpg"
        alt="A hand on the brake lever in the forest"
        position="50% 65%"
        word="Ride Confidently."
      />

      <FullBeat
        src="/images/site/journey-ride-naturally.jpg"
        alt="A rider walking into a sunlit Sintra forest"
        position="center 55%"
        word="Ride Naturally."
      />

      <FullBeat
        src="/images/site/journey-ride-playfully.jpg"
        alt="A rider on a quiet gravel road at golden hour, arm raised"
        position="center 45%"
        word="Ride Playfully."
      />
    </section>
  );
}

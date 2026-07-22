import Photo from "./Photo";
import Container from "./Container";
import Reveal from "./Reveal";

const outcomes = [
  {
    title: "More confidence",
    body: "You stop second-guessing yourself and begin to approach difficult sections with greater calm.",
  },
  {
    title: "More flow",
    body: "You spend less time overthinking every move and more time enjoying the ride.",
  },
  {
    title: "A shared experience",
    body: "You remember the laughter, overcoming fear together and the feeling of having shared a good day.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="py-32 md:py-44">
      <Container className="text-center">
        <Reveal>
          <Photo
            ratio="landscape"
            src="/images/site/who-dune-trail.jpg"
            alt="A rider heading down a sandy coastal trail near Sintra at golden hour"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="w-full md:w-[52%] mx-auto mb-16 md:mb-20"
            animate
          />
        </Reveal>

        <Reveal>
          <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
            What Stays with You
          </div>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-8 max-w-[640px] mx-auto">
            Leave riding differently than you arrived.
          </h2>
          <p className="text-[17px] opacity-85 max-w-[540px] mx-auto mb-16 md:mb-20">
            Confidence grows when you understand what is happening beneath
            you, trust your decisions and realise that more is possible
            than you thought.
          </p>

          <div className="flex flex-col gap-12 md:gap-16 max-w-[480px] mx-auto mb-16 md:mb-20">
            {outcomes.map((item) => (
              <div key={item.title}>
                <div className="font-serif text-[19px] md:text-[21px] mb-2">
                  {item.title}
                </div>
                <p className="text-[15px] opacity-80 leading-snug">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="font-serif italic text-[19px] md:text-[22px] opacity-95 max-w-[480px] mx-auto">
            And somewhere along the way, you notice you&apos;re riding
            better.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

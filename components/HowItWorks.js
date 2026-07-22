import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  { word: "Conversation", note: "A short chat about how you ride, and what you'd like from the day." },
  { word: "Bike setup", note: "A fit and setup check (saddle, cockpit, brake levers) so nothing gets in the way of how you ride." },
  { word: "Ride", note: "A carefully selected route through the Serra de Sintra, paced to how you're riding." },
  { word: "Feedback, as needed", note: "Line choice, braking, vision and body position, whenever it helps. Some days that's plenty. Other days, almost none." },
  { word: "Format", note: "Private, or in small groups of up to five riders." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-forest text-warm-white py-32 md:py-44">
      <Container>
        <Reveal className="text-center pb-20 md:pb-28">
          <div className="text-[11px] tracking-[0.22em] uppercase text-sand mb-6 flex justify-center">
            How It Works
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] leading-tight mb-5">
            One session, unhurried.
          </h2>
          <p className="text-[15px] opacity-70 max-w-[420px] mx-auto">
            Just enough time to ride, adjust and ride again, at your own
            pace.
          </p>
        </Reveal>

        <div className="max-w-[720px] mx-auto flex flex-col gap-16 md:gap-20">
          {steps.map((step, i) => (
            <Reveal
              key={step.word}
              className={`flex flex-col gap-2 ${i % 2 === 1 ? "md:items-end md:text-right" : ""}`}
            >
              <span className="font-serif text-[17px] opacity-40">
                {i + 1}
              </span>
              <span className="font-serif text-[28px] md:text-[36px]">{step.word}</span>
              <span className="text-[15px] opacity-70 max-w-[420px]">{step.note}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center pt-16 md:pt-20">
          <p className="font-serif italic text-[18px] md:text-[22px] opacity-80 max-w-[480px] mx-auto">
            None of it is measured in kilometres. It&apos;s measured in how
            differently you ride tomorrow.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

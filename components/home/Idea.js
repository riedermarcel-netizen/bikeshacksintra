import Reveal from "../Reveal";
import { H2 } from "../ui/Type";

const pillars = [
  ["Ride", "Trails we ride every week, chosen for the group and the day. Forest, granite, then the coast."],
  ["Gather", "Long evenings at one table. Pizza, local wine, people you didn’t know on Monday."],
  ["Fire", "Sunset by the lighthouse at Cabo da Roca, the westernmost point of mainland Europe. Then a fire and nowhere to be."],
];

export default function Idea() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-14">
        <Reveal>
          <H2 className="max-w-[820px]">
            Not a tour. A few days that feel like a life you’d want to keep.
          </H2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map(([t, d]) => (
            <Reveal key={t} className="border-t border-ink pt-5 flex flex-col gap-3">
              <h3 className="font-display font-semibold text-[26px] tracking-[0.08em] uppercase">{t}</h3>
              <p className="text-[16px] leading-[1.65] text-stone">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

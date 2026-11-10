import Reveal from "../Reveal";
import { H2 } from "../ui/Type";

const pillars = [
  ["Trails", "Singletrack in the Serra de Sintra, picked to suit the group. Mostly forest and granite, with rides out to the coast."],
  ["Food", "Breakfast together every morning and dinner on three evenings — often fresh pasta in the greenhouse or pizza in the village."],
  ["Coast", "Sunset rides to Cabo da Roca, the westernmost point of mainland Europe. On some evenings we light a fire afterwards."],
];

export default function Idea() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-14">
        <Reveal>
          <H2 className="max-w-[820px]">
            Six days on the trails of Sintra, in a group of up to six riders.
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

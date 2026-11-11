import Reveal from "../Reveal";
import Img from "../ui/Img";
import { H2 } from "../ui/Type";

const pillars = [
  {
    t: "Trails",
    d: "Forest, granite, the odd steep bit.",
    src: "/images/v2/pillar-trails.jpg",
    alt: "Marcel riding a forest singletrack in the Serra de Sintra",
  },
  {
    t: "Food",
    d: "Pizza in the village, pasta in the greenhouse. Seconds encouraged.",
    src: "/images/v2/pillar-food.jpg",
    alt: "Wood-fired pizza on the table in a warm restaurant",
  },
  {
    t: "Coast",
    d: "Cabo da Roca at sunset. Then bed, or a fire.",
    src: "/images/v2/pillar-coast.jpg",
    alt: "Marcel riding a coastal trail above the Atlantic at sunset",
    position: "60% center",
  },
];

export default function Idea() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-14">
        <Reveal>
          <H2 className="max-w-[820px]">
            Six days on the trails of Sintra. Up to seven riders, one guide who knows where the good lines are.
          </H2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <Reveal key={p.t} className="flex flex-col gap-4">
              <Img src={p.src} alt={p.alt} ratio="4 / 5" position={p.position} sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="font-display font-semibold text-[24px] tracking-[0.08em] uppercase">{p.t}</h3>
                <p className="text-[15px] text-stone">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

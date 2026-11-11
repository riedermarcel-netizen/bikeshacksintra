import Reveal from "../Reveal";
import { H2 } from "../ui/Type";

export default function Idea() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <Reveal>
          <H2 className="max-w-[820px]">
            Six days on the trails of Sintra. Up to seven riders, one guide who knows where the good lines are.
          </H2>
        </Reveal>
      </div>
    </section>
  );
}

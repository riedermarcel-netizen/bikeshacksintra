import { Eyebrow, H2 } from "../ui/Type";
import { partners, testimonials } from "@/lib/config";

export default function Partners() {
  return (
    <section id="partners" className="bg-sand py-24 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-16">
        {testimonials.length > 0 && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Eyebrow>Riders we&apos;ve guided</Eyebrow>
              <H2>What guests say</H2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name + t.trip} className="flex flex-col gap-4 border-t border-ink pt-5">
                  <blockquote className="text-[18px] leading-[1.6]">“{t.quote}”</blockquote>
                  <figcaption className="text-[14px] text-earth">
                    {t.name}
                    {t.trip ? ` · ${t.trip}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Partners</Eyebrow>
            <H2>Good people we ride with</H2>
          </div>
          <ul className="grid gap-px bg-sand-line border border-sand-line sm:grid-cols-2 md:grid-cols-4">
            {partners.map((p) => {
              const inner = (
                <>
                  <span className="font-display font-semibold text-[24px] uppercase leading-none">{p.name}</span>
                  <span className="text-[14px] text-stone">{p.role}</span>
                  {p.url && <span className="text-[14px] font-semibold mt-auto pt-3">Visit →</span>}
                </>
              );
              return (
                <li key={p.name} className="bg-sand">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 p-6 h-full hover:bg-paper transition-colors">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex flex-col gap-2 p-6 h-full">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

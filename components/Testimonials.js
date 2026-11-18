import { Eyebrow, H2 } from "./ui/Type";
import { testimonials } from "@/lib/config";

export default function Testimonials({ heading = "What guests say" }) {
  if (testimonials.length === 0) return null;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>Riders I’ve guided</Eyebrow>
        <H2>{heading}</H2>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name + t.trip} className="flex flex-col gap-4 border-t border-ink pt-5">
            <blockquote className="text-[18px] leading-[1.6]">“{t.quote}”</blockquote>
            <figcaption className="text-[14px] text-earth mt-auto">
              {t.name}
              {t.trip ? ` · ${t.trip}` : ""}
              {t.translated ? <span className="block text-[12px] opacity-70 pt-1">Translated from German</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

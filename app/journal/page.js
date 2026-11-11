import Link from "next/link";
import Img from "@/components/ui/Img";
import { Eyebrow } from "@/components/ui/Type";
import { stories } from "@/lib/journal";

export const metadata = {
  title: "Journal — Mountain bike trips in the Alps and Portugal | Bike Shack",
  description: "Stories from our guided mountain bike trips: Friuli, the Dolomites to Trieste, Monte Rosa — and Sintra.",
};

export default function JournalIndex() {
  return (
    <main className="pt-40 pb-24 md:pb-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="font-display font-medium uppercase leading-[0.95] text-[52px] md:text-[84px] max-w-[900px]">
            Trips we’ve guided
          </h1>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {stories.map((s, i) => (
            <Link key={s.slug} href={`/journal/${s.slug}`} className={`group flex flex-col gap-3.5 ${i === 0 ? "md:col-span-2" : ""}`}>
              <Img src={s.hero} alt={s.heroAlt} ratio={i === 0 ? "21 / 9" : "4 / 3"} sizes="(min-width: 768px) 66vw, 100vw" priority={i === 0} />
              <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{s.place} · {s.date}</span>
              <span className="font-display font-semibold text-[32px] uppercase leading-none group-hover:underline underline-offset-4">{s.title}</span>
              <p className="text-[16px] leading-[1.6] text-stone max-w-[640px]">{s.intro}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

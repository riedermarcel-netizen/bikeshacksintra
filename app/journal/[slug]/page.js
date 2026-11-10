import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import { Eyebrow, ButtonLink } from "@/components/ui/Type";
import { stories, getStory } from "@/lib/journal";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  return {
    title: `${s.title} — ${s.place} | Bike Shack Journal`,
    description: s.intro,
    openGraph: { images: [s.hero] },
  };
}

function Block({ b }) {
  if (b.type === "text") {
    return (
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col gap-5">
        {b.heading && (
          <h2 className="font-display font-medium uppercase text-[34px] md:text-[40px] leading-[1.05]">{b.heading}</h2>
        )}
        {b.lead && <p className="text-[19px] md:text-[20px] leading-[1.7]">{b.lead}</p>}
        {b.paras?.map((p, i) => (
          <p key={i} className="text-[17px] leading-[1.75] text-stone">{p}</p>
        ))}
      </article>
    );
  }
  if (b.type === "figure") {
    return (
      <figure className="max-w-[1240px] mx-auto px-6 md:px-10 pt-6">
        <Img src={b.src} alt={b.alt} ratio={b.ratio || "3 / 2"} sizes="(min-width: 1280px) 1240px, 100vw" />
        {b.caption && <figcaption className="pt-3 text-[13px] text-[#6b645a]">{b.caption}</figcaption>}
      </figure>
    );
  }
  if (b.type === "grid") {
    const cols = b.items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
    return (
      <div className={`max-w-[1240px] mx-auto px-6 md:px-10 pt-6 grid gap-6 ${cols}`}>
        {b.items.map((it) => (
          <figure key={it.src}>
            <Img src={it.src} alt={it.alt} ratio={b.ratio || "3 / 2"} sizes="(min-width: 768px) 50vw, 100vw" />
            {it.caption && <figcaption className="pt-3 text-[13px] text-[#6b645a]">{it.caption}</figcaption>}
          </figure>
        ))}
      </div>
    );
  }
  if (b.type === "wide") {
    return (
      <div className="relative w-full mt-16" style={{ height: b.height || 480 }}>
        <Image src={b.src} alt={b.alt} fill sizes="100vw" className="object-cover" />
      </div>
    );
  }
  return null;
}

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const others = stories.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <section className="relative h-[760px] bg-ink">
        <Image src={s.hero} alt={s.heroAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 text-paper" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.82), rgba(17,17,17,0))" }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-32 pb-14 flex flex-col gap-4">
            <Eyebrow light>Journal · {s.place} · {s.date}</Eyebrow>
            <h1 className="font-display font-medium uppercase leading-[0.95] text-[52px] md:text-[84px] max-w-[900px]">{s.title}</h1>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-mist max-w-[620px]">{s.intro}</p>
          </div>
        </div>
      </section>

      {s.blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}

      <section className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 flex flex-wrap gap-12 justify-between items-end">
        <div className="flex flex-col gap-2.5 max-w-[560px]">
          <span className="text-[12px] tracking-[0.14em] uppercase text-earth">Credits</span>
          <p className="text-[15px] leading-[1.6] text-stone">
            Photography: {s.photo}. Guided together with Eric Haufe of{" "}
            <a href="https://www.ridealpinetrails.com" target="_blank" rel="noopener noreferrer" className="underline">Ride Alpine Trails</a>.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 max-w-[460px]">
          <span className="font-display font-medium text-[30px] uppercase leading-none">Ride with us</span>
          <p className="text-[15px] text-stone">Bike Shack Alps for the mountains, Bike Shack Sintra for the coast.</p>
          <div><ButtonLink href="/retreat">See the retreats</ButtonLink></div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col gap-8">
          <Eyebrow>More from the journal</Eyebrow>
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/journal/${o.slug}`} className="group flex flex-col gap-3">
                <Img src={o.hero} alt={o.heroAlt} ratio="16 / 9" />
                <span className="text-[12px] tracking-[0.14em] uppercase text-earth">{o.place} · {o.date}</span>
                <span className="font-display font-semibold text-[28px] uppercase leading-none group-hover:underline underline-offset-4">{o.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

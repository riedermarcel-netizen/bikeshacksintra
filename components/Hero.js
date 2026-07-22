import Link from "next/link";
import Photo from "./Photo";
import Container from "./Container";
import { whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px]">
      <Photo
        src="/images/site/hero-forest.jpg"
        alt="Marcel wheeling his mountain bike through a sunlit Sintra forest"
        position="center 35%"
        sizes="100vw"
        className="absolute inset-0 h-full"
        animate
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(21,21,15,0.55) 0%, rgba(21,21,15,0.05) 45%, rgba(21,21,15,0.2) 100%)",
        }}
      />
      <Container className="absolute left-0 right-0 bottom-0 z-10 pb-20 text-warm-white">
        <div className="text-[11px] tracking-[0.24em] uppercase opacity-75 mb-6">
          Sintra, Portugal
        </div>
        <h1 className="font-serif font-normal leading-[1.02] text-[46px] md:text-[80px] lg:text-[112px] max-w-[880px] mb-5">
          Ride better.
          <br />
          Explore deeper.
        </h1>
        <p className="text-[15px] md:text-[17px] opacity-85 max-w-[540px] mb-10">
          Private mountain bike rides in Sintra — guided, coached and built
          around how you ride.
        </p>
        <div className="flex items-center gap-8 flex-wrap">
          <Link
            href="/#book"
            className="bg-warm-white text-ink text-[12px] tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-sand transition-colors"
          >
            Request a private ride
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.14em] uppercase opacity-70 hover:opacity-100 transition-opacity border-b border-warm-white/40 hover:border-warm-white py-3"
          >
            Write us on WhatsApp
          </a>
        </div>
      </Container>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-7 z-10 flex-col items-center gap-2 text-warm-white/60">
        <span className="text-[9px] tracking-[0.28em] uppercase">Scroll</span>
        <span className="block w-px h-10 bg-warm-white/40 animate-pulse motion-reduce:animate-none" />
      </div>
    </section>
  );
}

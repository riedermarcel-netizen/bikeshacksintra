import { Eyebrow, ButtonLink } from "../ui/Type";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-paper">
      {/* Landscape loop for desktop, vertical loop for phones */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/video/hero-loop-16x9.mp4"
        poster="/images/v2/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <video
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        src="/video/hero-loop-9x16.mp4"
        poster="/images/v2/hero-poster-mobile.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.25) 55%, rgba(17,17,17,0.35) 100%)",
        }}
      />
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-40 pb-20 md:pb-24">
        <div className="max-w-[760px] flex flex-col gap-6 md:gap-7">
          <Eyebrow light>Bike Shack Sintra · Mountain bike retreats</Eyebrow>
          <h1 className="font-display font-medium uppercase leading-[0.95] text-[52px] md:text-[88px]">
            From the forest to land’s end.
          </h1>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-mist max-w-[560px]">
            Six nights of mountain biking in Sintra, Portugal. Forest trails by
            day, sunsets at the Cabo da Roca lighthouse, and slightly too much
            pizza. Small group, no rush.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-2">
            <ButtonLink href="/retreat" variant="light">Join a retreat</ButtonLink>
            <ButtonLink href="#film" variant="outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 4l14 8-14 8z" />
              </svg>
              Watch the film
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

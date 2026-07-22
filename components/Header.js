"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#how", label: "How It Works" },
  { href: "/#about", label: "Host" },
  { href: "/#book", label: "Request", accent: true },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const mobileMenuHidden = !isDesktop && !open;
  // Only the homepage opens on a dark full-bleed photo; every other page
  // has a light background from the first pixel, so the header must start
  // in its solid/light state there rather than the transparent-on-dark one.
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-warm-white/95 backdrop-blur-sm border-b border-charcoal/10 py-5 text-charcoal"
          : "py-7 text-warm-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link
          href="/#top"
          className={`font-serif leading-none origin-left transition-transform duration-[250ms] ${
            solid ? "scale-[1.04]" : "scale-100"
          }`}
        >
          <span className="block text-[18px] tracking-[0.06em] font-medium">BIKE SHACK</span>
          <span className="block text-[9px] tracking-[0.34em] text-olive mt-1">SINTRA</span>
        </Link>

        <nav className="flex items-center">
          <button
            className="md:hidden relative z-50 p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block w-[22px] h-px bg-current my-1.5" />
            <span className="block w-[22px] h-px bg-current my-1.5" />
            <span className="block w-[22px] h-px bg-current my-1.5" />
          </button>

          <ul
            inert={mobileMenuHidden}
            className={`fixed md:static top-0 h-screen md:h-auto w-[78%] md:w-auto bg-warm-white md:bg-transparent flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-8 md:gap-11 px-10 md:px-0 transition-[right] duration-[400ms] text-charcoal md:text-inherit ${
              open ? "right-0" : "-right-full md:right-0"
            }`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 md:py-0 text-[17px] md:text-[13.5px] tracking-wide uppercase transition-opacity ${
                    l.accent && solid
                      ? "text-olive opacity-100 hover:opacity-80"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

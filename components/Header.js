"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

const links = [
  { href: "/retreat", label: "Retreats" },
  { href: "/#film", label: "Film" },
  { href: "/#ride", label: "Day rides & Gravel" },
  { href: "/journal", label: "Journal" },
  { href: "/#host", label: "Host" },
  { href: "/#book", label: "Request", accent: true },
];

export default function Header() {
  const pathname = usePathname();
  const darkHero = pathname === "/" || pathname === "/retreat" || pathname.startsWith("/journal/");
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
  const solid = scrolled || !darkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink/95 backdrop-blur-sm py-4 text-paper"
          : "py-7 text-warm-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" aria-label="Bike Shack Sintra — home">
          <Wordmark line="SINTRA" />
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
            className={`fixed md:static top-0 h-screen md:h-auto w-[78%] md:w-auto bg-ink md:bg-transparent flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-8 md:gap-8 px-10 md:px-0 transition-[right] duration-[400ms] text-paper md:text-inherit ${
              open ? "right-0" : "-right-full md:right-0"
            }`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 md:py-0 text-[17px] md:text-[14px] transition-opacity ${
                    l.accent
                      ? "md:bg-paper md:text-ink md:px-5 md:py-3 font-medium hover:opacity-90"
                      : "opacity-85 hover:opacity-100"
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

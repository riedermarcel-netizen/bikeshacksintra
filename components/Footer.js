import Link from "next/link";
import Wordmark from "./Wordmark";
import { brands, contact, film } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-12 border-b border-paper/10">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Bike Shack — home">
              <Wordmark line={null} />
            </Link>
            <p className="font-display text-[12px] tracking-[0.28em] text-dim max-w-[520px] leading-[1.8]">
              {brands.map((b) => b.toUpperCase()).join(" · ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 text-[14px]">
            <a href={`mailto:${contact.email}`} className="opacity-80 hover:opacity-100">
              {contact.email}
            </a>
            <Link href="/journal" className="opacity-80 hover:opacity-100">Journal</Link>
            <a href={`https://vimeo.com/${film.vimeoId}`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              The film
            </a>
            <a href={film.youtubeChannel} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              YouTube
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[12px] text-dim">
          <div className="flex flex-col gap-1.5">
            <span>© 2026 Bike Shack · Sintra, Portugal</span>
            <span className="opacity-80">
              Photography: Esther Jørgensen, Manfred Stromberg, Eric Haufe · {film.credits}
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/company" className="hover:text-paper">Company</Link>
            <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            <Link href="/terms" className="hover:text-paper">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

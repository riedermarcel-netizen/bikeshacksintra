import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-warm-white/10">
          <Link href="/#top" className="font-serif leading-none">
            <span className="block text-[18px] tracking-[0.06em] font-medium">
              BIKE SHACK
            </span>
            <span className="block text-[9px] tracking-[0.34em] text-olive mt-1">
              SINTRA
            </span>
          </Link>

          <div className="flex gap-6 md:gap-8">
            <Link href="/company" className="text-[12px] opacity-55 hover:opacity-90 transition-opacity">
              Company
            </Link>
            <Link href="/privacy" className="text-[12px] opacity-55 hover:opacity-90 transition-opacity">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12px] opacity-55 hover:opacity-90 transition-opacity">
              Terms
            </Link>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-start text-[11px]">
          <div>
            <span className="block opacity-60">© 2026 Bike Shack, Sintra</span>
            <span className="block text-[9px] opacity-50 mt-1.5">
              Photography by Esther Jörgensen
            </span>
          </div>
          <span className="opacity-60">Sintra, Portugal</span>
        </div>
      </div>
    </footer>
  );
}

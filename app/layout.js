import { Newsreader, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Bike Shack — Sintra",
  description:
    "Private mountain bike rides in Sintra, four to five hours, guided and coached around how you ride.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        {/* The browser's own scroll restoration (history.scrollRestoration
            defaults to "auto") can re-apply an old scroll position from a
            previous visit on a fresh load or reload. Disabling it here,
            as early as possible, means a direct or refreshed load of any
            page always starts at the top; it has no effect on scrolling
            to a URL hash like /#book, which is a separate mechanism. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history){history.scrollRestoration='manual';}}catch(e){}",
          }}
        />
      </head>
      <body className="bg-warm-white text-charcoal font-sans antialiased">
        <MotionConfig reducedMotion="user">
          <Header />
          {children}
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

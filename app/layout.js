import { MotionConfig } from "motion/react";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.bikeshacksintra.com"),
  title: "Mountain Bike Retreats in Sintra, Portugal | Bike Shack",
  description:
    "Six-night mountain bike retreats in Sintra, Portugal: forest trails in the Serra de Sintra, sunsets at the Cabo da Roca lighthouse, shared dinners. Plus guided day rides and gravel trips.",
  openGraph: {
    title: "Bike Shack Sintra — Mountain Bike Retreats",
    description:
      "From the forest to the end of the land. Mountain bike retreats and guided rides in Sintra, Portugal.",
    images: ["/images/v2/retreat-cliffs.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body className="bg-paper text-ink font-sans antialiased">
        <MotionConfig reducedMotion="user">
          <Header />
          {children}
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

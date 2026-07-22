import Hero from "@/components/Hero";
import Care from "@/components/Care";
import Journey from "@/components/Journey";
import WhoItsFor from "@/components/WhoItsFor";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Book from "@/components/Book";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Pillars />
      <Care />
      <Journey />
      <WhoItsFor />
      <About />
      <HowItWorks />
      <Book />
    </main>
  );
}

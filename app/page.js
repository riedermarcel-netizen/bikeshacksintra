import Hero from "@/components/home/Hero";
import Idea from "@/components/home/Idea";
import {
  ForestBand,
  WhereWeRide,
  RetreatTeaser,
  Film,
  Offers,
  JournalTeaser,
  Host,
} from "@/components/home/Sections";
import Partners from "@/components/home/Partners";
import Book from "@/components/Book";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Idea />
      <ForestBand />
      <WhereWeRide />
      <RetreatTeaser />
      <Film />
      <Offers />
      <JournalTeaser />
      <Host />
      <Partners />
      <Book />
    </main>
  );
}

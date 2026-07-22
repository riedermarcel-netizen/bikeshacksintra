import Photo from "./Photo";
import Container from "./Container";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/images/site/gallery-forest-trail.jpg",
    alt: "Sunbeams through the pines on a Sintra forest trail",
    ratio: "landscape",
    grid: "md:col-span-3",
  },
  {
    src: "/images/site/gallery-rider-portrait.jpg",
    alt: "Marcel, candid portrait on the trail",
    ratio: "portrait",
    grid: "md:col-span-3 md:mt-28",
  },
  {
    src: "/images/site/gallery-bike-detail.jpg",
    alt: "A hand on the brake lever, mid-ride",
    ratio: "square",
    grid: "md:col-span-2",
  },
  {
    src: "/images/site/gallery-coastal-trail.jpg",
    alt: "Riding the cliff-edge trail above the Sintra coastline",
    position: "center 35%",
    ratio: "wide",
    grid: "md:col-span-4 md:-mt-20",
  },
  {
    src: "/images/site/gallery-evening-ride.jpg",
    alt: "An evening ride along a quiet Sintra road",
    ratio: "landscape",
    grid: "md:col-span-4",
  },
  {
    src: "/images/site/gallery-shoe-detail.jpg",
    alt: "A worn shoe on the pedal, dust and late light",
    ratio: "square",
    grid: "md:col-span-2 md:mt-16",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-44">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {shots.map((shot, i) => (
            <Reveal key={i} className={shot.grid}>
              <Photo
                ratio={shot.ratio}
                src={shot.src}
                alt={shot.alt}
                position={shot.position}
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

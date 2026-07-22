import Container from "./Container";
import Reveal from "./Reveal";

export default function Care() {
  return (
    <section id="care" className="py-32 md:py-44">
      <Container className="text-center">
        <Reveal>
          <div className="text-[11px] tracking-[0.22em] uppercase text-olive mb-6">
            Before You Even Notice
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] leading-tight max-w-[480px] mx-auto">
            You ride. We take care of the rest.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}

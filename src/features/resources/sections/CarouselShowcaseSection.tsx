import { Container } from "@/shared/components/Container";
import { AutoCarouselDemo } from "../components/AutoCarouselDemo";
import { ManualCarouselDemo } from "../components/ManualCarouselDemo";
import { CardsCarouselDemo } from "../components/CardsCarouselDemo";

export function CarouselShowcaseSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Carruseles y sliders
          </h2>
          <p className="text-brand-muted">
            Distintas formas de mostrar testimonios, productos o bloques destacados.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AutoCarouselDemo />
          <ManualCarouselDemo />
          <CardsCarouselDemo />
        </div>
      </Container>
    </section>
  );
}
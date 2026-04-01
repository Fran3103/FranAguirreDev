import { Container } from "@/shared/components/Container";

export function ResourcesHeroSection() {
  return (
    <section className="section-padding bg-brand-card">
      <Container className="max-w-4xl text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
          RECURSOS VISUALES
        </span>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-brand-foreground sm:text-5xl lg:text-6xl">
          Ejemplos de elementos interactivos que también puedo sumar
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
          Botones, carruseles, barras de progreso, bloques de oferta, acordeones,
          contadores y animaciones suaves para que una página se vea más viva,
          clara y atractiva.
        </p>
      </Container>
    </section>
  );
}
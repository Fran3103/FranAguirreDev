import { Container } from "@/shared/components/Container";

export function TemplatesHeroSection() {
  return (
    <section className="section-padding">
      <Container className="max-w-4xl text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
          PLANTILLAS Y EJEMPLOS
        </span>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-brand-foreground sm:text-5xl lg:text-6xl">
          Elegí un estilo para tu página
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
          Estas son estructuras que puedo adaptar a tu producto o servicio.
          No hace falta empezar desde cero para tener algo claro, moderno y
          funcional.
        </p>
      </Container>
    </section>
  );
}
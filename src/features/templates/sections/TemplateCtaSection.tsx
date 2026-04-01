import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";

export function TemplatesCtaSection() {
  return (
    <section className="pb-20">
      <Container className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
          Si viste un estilo que te gusta, lo podemos adaptar a tu negocio
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-brand-muted">
          Elegimos una base, ajustamos el contenido y armamos una página clara
          para que puedas mostrar mejor lo que vendés.
        </p>

        <a href="#contacto">
          <Button size="lg">Quiero mi página</Button>
        </a>
      </Container>
    </section>
  );
}
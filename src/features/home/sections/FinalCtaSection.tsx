import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";

export function FinalCtaSection() {
  return (
    <section className="section-padding ">
      <Container className="max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-brand-foreground sm:text-5xl">
          Si ya tenés algo para vender, podés tener una página que{" "}
          <span className="italic text-brand-primary">venda mejor</span>.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
          No hace falta algo complejo. Muchas veces solo hay que ordenar lo que
          ya tenés para mejorar resultados.
        </p>

        <a href="#contacto">
          <Button size="lg" className="px-10">
            Empezar ahora
          </Button>
        </a>
      </Container>
    </section>
  );
}
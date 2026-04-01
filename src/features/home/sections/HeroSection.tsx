import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";

export function HeroSection() {
  return (
    <section className="section-padding overflow-x-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              IMPULSÁ TU NEGOCIO
            </span>

            <h1 className="mb-8 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-foreground sm:text-5xl lg:text-7xl">
              Mejoro páginas y creo landings simples para que puedas{" "}
              <span className="italic text-brand-primary">vender mejor</span>
            </h1>

            <p className="mb-10 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
              Si ya tenés algo armado, lo optimizo y lo ordeno para que funcione
              mejor. Y si estás empezando, te ayudo a crear una base simple para
              lanzar rápido.
            </p>

            <div className="mb-6 flex flex-wrap gap-4">
              <a href="#contacto">
                <Button size="lg">Quiero empezar</Button>
              </a>

              <a href="#ejemplos">
                <Button variant="secondary" size="lg">
                  Ver ejemplos
                </Button>
              </a>
            </div>

            <p className="max-w-2xl text-sm font-medium italic text-brand-muted">
              No hace falta empezar de cero. Muchas veces con ordenar y mejorar
              lo que ya tenés, ya cambia cómo vende.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[32px] bg-brand-primary/5 sm:-rotate-3" />

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              alt="Espacio de trabajo moderno con notebook mostrando una página web"
              className="h-[420px] w-full rounded-[24px] object-cover shadow-soft-lg sm:h-[500px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
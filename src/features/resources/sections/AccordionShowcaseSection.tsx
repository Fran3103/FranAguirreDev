import { Container } from "@/shared/components/Container";

export function AccordionShowcaseSection() {
  return (
    <section className="pb-20 bg-brand-brand">
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Acordeones y FAQs
          </h2>
          <p className="text-brand-muted">
            Distintas formas de mostrar preguntas frecuentes o información expandible.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] bg-brand-card p-6 shadow-soft">
            <p className="mb-4 text-sm font-semibold text-brand-muted">
              Variante 1
            </p>

            <details className="group rounded-[20px] bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-bold text-brand-foreground">
                  ¿Puedo empezar con algo simple?
                </span>
                <span className="text-brand-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-brand-muted">
                Sí, la idea puede arrancar simple y crecer después.
              </p>
            </details>
          </div>

          <div className="rounded-[28px] bg-brand-card p-6 shadow-soft">
            <p className="mb-4 text-sm font-semibold text-brand-muted">
              Variante 2
            </p>

            <div className="space-y-3">
              <details className="rounded-[18px] border border-brand bg-white p-4">
                <summary className="cursor-pointer font-semibold text-brand-foreground">
                  ¿Esto sirve para Shopify?
                </summary>
                 <p className="mt-3 text-sm leading-7 text-brand-muted">
                  Perfectamente se puede hacer una página desde cero o bien adaptar la que ya tienen en Shopify.
                </p>
              </details>

              <details className="rounded-[18px] border border-brand bg-white p-4">
                <summary className="cursor-pointer font-semibold text-brand-foreground">
                  ¿Se puede adaptar a mi contenido?
                </summary>
                 <p className="mt-3 text-sm leading-7 text-brand-muted">
                  Sí, se puede adaptar a cualquier tipo de contenido.
                </p>
              </details>

              <details open className="rounded-[18px] border border-brand bg-white p-4">
                <summary className="cursor-pointer font-semibold text-brand-foreground">
                  ¿Puedo sumar más cosas después?
                </summary>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  Sí, siempre se puede iterar más adelante.
                </p>
              </details>
            </div>
          </div>

          <div className="rounded-[28px] bg-brand-card p-6 shadow-soft">
            <p className="mb-4 text-sm font-semibold text-brand-muted">
              Variante 3
            </p>

            <details className="group rounded-[24px] bg-brand-primary p-5 text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-bold">Pregunta destacada</span>
                <span className="transition-transform group-open:rotate-45">+</span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-white/85">
                También se pueden hacer FAQs más contrastadas o con estilo más fuerte.
              </p>
            </details>
          </div>
        </div>
      </Container>
    </section>
  );
}
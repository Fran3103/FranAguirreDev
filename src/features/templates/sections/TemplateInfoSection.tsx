import { Container } from "@/shared/components/Container";

export function TemplatesInfoSection() {
  return (
    <section className="pb-20">
      <Container className="max-w-4xl">
        <div className="rounded-[28px] bg-brand-card p-8 text-center shadow-soft sm:p-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-brand-foreground sm:text-3xl">
            No son plantillas cerradas
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-brand-muted">
            Podemos tomar una de estas bases y adaptarla completamente a tu
            marca, tu producto y tu forma de vender. La idea es avanzar más
            rápido sin perder personalización.
          </p>
        </div>
      </Container>
    </section>
  );
}
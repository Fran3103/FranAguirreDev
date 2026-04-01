import { Container } from "@/shared/components/Container";

export function OfferShowcaseSection() {
  return (
    <section className="pb-20" style={{ backgroundColor: "rgba(232, 225, 218, 0.4)" }}>
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Bloques de oferta y urgencia
          </h2>
          <p className="text-brand-muted">
            Para destacar descuentos, bonos, packs o llamados más fuertes a la acción.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] bg-brand-primary p-6 text-white shadow-soft-lg">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              Oferta limitada
            </p>
            <h3 className="mb-3 text-2xl font-extrabold">Acceso hoy con bonus extra</h3>
            <p className="text-white/85">
              Un bloque fuerte para destacar promociones o beneficios por tiempo limitado.
            </p>
          </div>

          <div className="rounded-[28px] bg-brand-dark p-6 text-white shadow-soft-lg">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              Bonus
            </p>
            <h3 className="mb-3 text-2xl font-extrabold">Incluye material complementario</h3>
            <p className="text-white/80">
              Ideal para sumar valor percibido sin recargar toda la página.
            </p>
          </div>

          <div className="rounded-[28px] border-2 border-brand-primary bg-white p-6 shadow-soft">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Descuento
            </p>
            <h3 className="mb-3 text-2xl font-extrabold text-brand-foreground">
              Antes <span className="line-through text-brand-muted">$59</span> · Ahora $29
            </h3>
            <p className="text-brand-muted">
              También se puede mostrar precio anterior y precio actual.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
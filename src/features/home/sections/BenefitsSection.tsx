import { Container } from "@/shared/components/Container";
import { benefits } from "../data/benefits.data";

export function BenefitsSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "rgba(232, 225, 218, 0.4)" }}
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-10 max-w-xl text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl lg:text-5xl">
              Diseñado para que crezcas sin estrés
            </h2>

            <div className="grid gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.id}
                    className="flex items-center gap-4 rounded-[20px] bg-white p-4 shadow-soft"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    <span className="text-sm font-semibold text-brand-foreground sm:text-base">
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-10">
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="mb-2 text-lg font-bold text-brand-primary">
                  Simple
                </h3>
                <p className="text-sm leading-6 text-brand-muted">
                  Menos es más cuando querés que tu cliente entienda rápido lo
                  que vendés.
                </p>
              </div>

              <div className="rounded-[24px] bg-brand-primary p-6 shadow-soft-lg">
                <h3 className="mb-2 text-lg font-bold text-white">Escalable</h3>
                <p className="text-sm leading-6 text-white/80">
                  Empezás con algo claro y después lo mejorás cuando haga falta.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Persona trabajando en una laptop en un entorno moderno"
                className="h-64 w-full rounded-[24px] object-cover shadow-soft"
              />

              <div className="rounded-[24px] bg-brand-secondary p-6 shadow-soft">
                <p className="text-sm font-medium italic leading-6 text-brand-foreground">
                  "No hace falta algo complejo. Muchas veces solo hay que
                  ordenar lo que ya tenés."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
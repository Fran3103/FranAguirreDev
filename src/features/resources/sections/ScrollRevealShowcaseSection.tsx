import { Container } from "@/shared/components/Container";
import { Image, MousePointerClick, BadgePercent, Sparkles } from "lucide-react";

function AnimationCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] bg-brand-card p-6 shadow-soft">
      <div className="mb-6 min-h-[150px] rounded-[22px] bg-white p-6 shadow-soft">
        <div className="flex h-full items-center justify-center">{children}</div>
      </div>

      <h3 className="mb-3 text-xl font-bold text-brand-foreground">{title}</h3>
      <p className="text-sm leading-7 text-brand-muted">{description}</p>
    </div>
  );
}

export function ScrollRevealShowcaseSection() {
  return (
    <section
      className="pb-20"
      style={{ backgroundColor: "rgba(232, 225, 218, 0.4)" }}
    >
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Animaciones y microinteracciones
          </h2>
          <p className="text-brand-muted">
            Ejemplos de movimientos y efectos visuales que se pueden sumar a
            botones, imágenes, bloques destacados o llamados a la acción.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AnimationCard
            title="Balanceo"
            description="Puede servir para destacar un badge, un ícono o un pequeño llamado visual."
          >
            <div className="animate-ui-swing inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-secondary text-brand-primary">
              <Sparkles size={26} />
            </div>
          </AnimationCard>

          <AnimationCard
            title="Rebote suave"
            description="Útil para botones, CTAs o indicadores que querés que llamen más la atención."
          >
            <button className="animate-ui-bounce-soft rounded-full bg-brand-primary px-6 py-3 font-semibold text-white shadow-soft-lg">
              Quiero esto
            </button>
          </AnimationCard>

          <AnimationCard
            title="Fade / pulse"
            description="Sirve para destacar promociones, avisos o elementos con urgencia visual."
          >
            <div className="animate-ui-fade-pulse inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-3 text-white">
              <BadgePercent size={18} />
              Oferta activa
            </div>
          </AnimationCard>

          <AnimationCard
            title="Flotación"
            description="Ideal para imágenes, mockups o cards destacadas dentro de una landing."
          >
            <div className="animate-ui-float flex h-24 w-24 items-center justify-center rounded-[24px] bg-brand-primary text-white shadow-soft-lg">
              <Image size={30} />
            </div>
          </AnimationCard>

          <AnimationCard
            title="Brillo / shimmer"
            description="Puede funcionar en banners, skeletons, botones o bloques promocionales."
          >
            <div className="relative w-full max-w-[220px] overflow-hidden rounded-full bg-brand-primary px-6 py-3 text-center font-semibold text-white">
              <span className="relative z-10">Ver promoción</span>
              <span className="animate-ui-shimmer absolute inset-0" />
            </div>
          </AnimationCard>

          <AnimationCard
            title="CTA con ícono"
            description="Los pequeños movimientos también ayudan a que un botón se sienta más vivo."
          >
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-foreground shadow-soft transition hover:-translate-y-0.5">
              <MousePointerClick
                size={18}
                className="animate-ui-fade-pulse text-brand-primary"
              />
              Solicitar propuesta
            </button>
          </AnimationCard>

          <AnimationCard
            title="Card destacada"
            description="Los bloques importantes también pueden tener microanimaciones discretas."
          >
            <div className="animate-ui-float rounded-[22px] border border-brand bg-brand-card px-6 py-3 shadow-soft">
              <p className="mb-1 text-sm font-semibold text-brand-primary">
                Bonus incluido
              </p>
              <p className="text-base font-bold text-brand-foreground">
                Acceso hoy + recurso extra
              </p>
            </div>
          </AnimationCard>

          <AnimationCard
            title="Elemento visual dinámico"
            description="No hace falta exagerar: con poco movimiento ya cambia la percepción."
          >
            <div className="relative flex items-center justify-center">
              <div className="animate-ui-fade-pulse absolute h-20 w-20 rounded-full bg-brand-secondary/70" />
              <div className="animate-ui-float relative z-10 h-12 w-12 rounded-full bg-brand-primary" />
            </div>
          </AnimationCard>
        </div>
      </Container>
    </section>
  );
}
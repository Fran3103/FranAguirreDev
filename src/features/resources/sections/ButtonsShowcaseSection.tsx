import { Container } from "@/shared/components/Container";
import { PrimaryButtonsDemo } from "../components/PrimaryButtonsDemo";
import { IconButtonsDemo } from "../components/IconButtonsDemo";
import { EmphasisButtonsDemo } from "../components/EmphasisButtonsDemo";
import { AnimatedButtonsDemo } from "../components/AnimatedButtonsDemo";

export function ButtonsShowcaseSection() {
  return (
    <section
      className="pb-20"
      style={{ backgroundColor: "rgba(232, 225, 218, 0.4)" }}
    >
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Botones y llamados a la acción
          </h2>
          <p className="text-brand-muted">
            Ejemplos de CTAs, botones con íconos, variantes con más presencia
            visual y microinteracciones para destacar acciones importantes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <PrimaryButtonsDemo />
          <IconButtonsDemo />
          <EmphasisButtonsDemo />
          <AnimatedButtonsDemo />
        </div>
      </Container>
    </section>
  );
}
import { Container } from "@/shared/components/Container";
import { LinearProgressDemo } from "../components/LinearProgressDemo";
import { StepsProgressDemo } from "../components/StepsProgressDemo";
import { CircularProgressDemo } from "../components/CircularProgressDemo";
import { AnimatedCounterDemo } from "../components/AnimatedCounterDemo";

export function ProgressShowcaseSection() {
  return (
    <section className="pb-20 bg-brand-card">
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Progreso y métricas
          </h2>
          <p className="text-brand-muted">
            Ejemplos de barras, pasos, indicadores circulares y métricas animadas
            para sumar dinamismo visual a una página.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <LinearProgressDemo />
          <StepsProgressDemo />
          <CircularProgressDemo />
          <AnimatedCounterDemo />
        </div>
      </Container>
    </section>
  );
}
import { Container } from "@/shared/components/Container";
import { CountdownDemo } from "../components/CountdownDemo";
import { LiveViewersDemo } from "../components/LiveViewersDemo";
import { MiniStatsChartDemo } from "../components/MiniStatsChartDemo";
import { TrustMetricsDemo } from "../components/TrustMetricsDemo";

export function CountersShowcaseSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Contadores y métricas
          </h2>
          <p className="text-brand-muted">
            Ejemplos de urgencia, actividad en tiempo real, métricas visuales y
            bloques de confianza que también se pueden sumar a una landing.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
          <CountdownDemo />
          <LiveViewersDemo />
          <MiniStatsChartDemo />
          <TrustMetricsDemo />
        </div>
      </Container>
    </section>
  );
}
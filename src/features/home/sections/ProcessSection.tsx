import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { processSteps } from "../data/process.data";

export function ProcessSection() {
  return (
    <section id="proceso" className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="METODOLOGÍA"
          title="Cómo trabajo"
          align="center"
          className="mb-16"
        />

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 top-8 hidden h-px w-full bg-[rgba(221,211,203,0.8)] md:block" />

          {processSteps.map((step) => (
            <div key={step.id} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-card text-2xl font-bold text-brand-foreground shadow-soft">
                {step.id}
              </div>

              <h3 className="mb-3 text-xl font-bold text-brand-foreground">
                {step.title}
              </h3>

              <p className="text-sm leading-7 text-brand-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
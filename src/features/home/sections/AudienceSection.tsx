import { Container } from "@/shared/components/Container";
import { audienceItems } from "../data/audience.data";

export function AudienceSection() {
  return (
    <section className="section-padding bg-brand-card" >
      <Container>
        <div className="text-center">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            ¿Es para vos?
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {audienceItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-brand-card px-6 py-3 text-sm font-semibold text-brand-foreground shadow-soft sm:px-8 sm:py-4 sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
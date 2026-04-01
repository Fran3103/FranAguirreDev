import { Container } from "@/shared/components/Container";
import { faqItems } from "@/features/faq/data/faq.data";
import { FaqAccordion } from "@/features/faq/components/FaqAccordion";

export function FaqSection() {
  return (
    <section className="section-padding">
      <Container className="max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <FaqAccordion key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
import { Container } from "@/shared/components/Container";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-brand-card">
      <Container className="max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Contame qué querés vender y te propongo una landing simple para empezar
          </h2>
          <p className="text-sm italic text-brand-muted sm:text-base">
            Te responderé en menos de 24 horas.
          </p>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
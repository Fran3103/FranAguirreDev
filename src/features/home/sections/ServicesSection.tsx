import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { services } from "../data/services.data";
import { ServiceCard } from "../components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-brand-card">
      <Container>
        <SectionHeading
          eyebrow="Podés empezar simple y después mejorar. No hace falta hacer todo de una"
          title="Servicios a tu medida"
          description="Los precios son orientativos según la complejidad del proyecto."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
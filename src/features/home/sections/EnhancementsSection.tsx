import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { enhancements } from "../data/enhancements.data";

export function EnhancementsSection() {
  return (
    <section className="section-padding bg-brand-card">
      <Container>
        <SectionHeading
          eyebrow="RECURSOS EXTRA"
          title="Extras que también puedo sumar a tu página"
          description="Desde FAQs interactivas hasta bloques de oferta, contadores, sliders y pequeños movimientos que ayudan a destacar mejor tu propuesta."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enhancements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-[24px] border border-brand bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                  <Icon size={20} strokeWidth={2.2} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-brand-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-brand-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
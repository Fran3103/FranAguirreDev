import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { enhancements } from "../data/enhancements.data";
import { EnhancementHeroPreview } from "../components/EnhancementMiniPreview";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

export function EnhancementsSection() {
  return (
    <section className="section-padding bg-brand-card">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <SectionHeading
            eyebrow="RECURSOS EXTRA"
            title="Extras que también puedo sumar a tu página"
            description="Desde FAQs interactivas hasta bloques de oferta, contadores, sliders y pequeños movimientos que ayudan a destacar mejor tu propuesta."
            className="mb-0"
          />
          <Link to="/recursos">
            <Button variant="ghost">Ver extras</Button>
          </Link>
        </div>


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {enhancements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`rounded-[24px] border border-brand bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 ${index >= 3 ? "hidden md:block" : ""
                  }`} >
                <div className="mb-5 h-[148px] overflow-hidden rounded-[20px] bg-brand-card p-3">
                  <EnhancementHeroPreview id={item.id} />
                </div>

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
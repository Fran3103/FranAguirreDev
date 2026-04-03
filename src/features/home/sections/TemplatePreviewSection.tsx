import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { Button } from "@/shared/ui/Button";
import { templates } from "@/features/templates/data/templates.data";
import { TemplateCard } from "@/features/templates/sections/TemplateCard";
import { TemplatePreviewModal } from "@/features/templates/components/TemplatePreviewModal";
import type { TemplateItem } from "@/features/templates/types/templates.types";

export function TemplatesPreviewSection() {
  const featuredTemplates = templates.slice(0, 4);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(
    null
  );

  return (
    <section id="ejemplos" className="section-padding">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="NUESTRO CATÁLOGO"
            title="Ejemplos y plantillas"
            description="Si ya tenés algo armado, podemos usar uno de estos estilos como base y adaptarlo a tu negocio."
            className="mb-0"
          />

          <Link to="/plantillas">
            <Button variant="ghost">Ver plantillas</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={setSelectedTemplate}
            />
          ))}
        </div>
      </Container>

      <TemplatePreviewModal
        template={selectedTemplate}
        isOpen={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </section>
  );
}
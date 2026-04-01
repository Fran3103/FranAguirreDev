import { useMemo, useState } from "react";
import { Container } from "@/shared/components/Container";
import { templates } from "../data/templates.data";
import { TemplateCard } from "../sections/TemplateCard";
import { TemplatePreviewModal } from "../components/TemplatePreviewModal";
import type { TemplateItem } from "../types/templates.types";
import { Button } from "@/shared/ui/Button";

export function TemplatesGridSection() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(
    null
  );

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(templates.map((template) => template.category))
    );

    return ["Todos", ...uniqueCategories];
  }, []);

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "Todos") return templates;

    return templates.filter(
      (template) => template.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={selectedCategory === category ? "primary" : "secondary"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTemplates.map((template) => (
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
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import type { TemplateItem } from "../types/templates.types";

type TemplateCardProps = {
  template: TemplateItem;
  onPreview: (template: TemplateItem) => void;
};

export function TemplateCard({ template, onPreview }: TemplateCardProps) {
  return (
    <Card className="group h-full overflow-hidden p-0">
      <div className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={template.image}
            alt={template.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex-1 space-y-4">
            {template.category ? (
              <span className="inline-flex rounded-full bg-brand-secondary px-3 py-1 text-xs font-medium text-brand-foreground">
                {template.category}
              </span>
            ) : null}

            <h3 className="min-h-[64px] text-xl font-bold leading-tight text-brand-foreground">
              {template.title}
            </h3>

            <p className="min-h-[96px] text-sm leading-8 text-brand-muted">
              {template.description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 pt-2">
            <Button variant="secondary" onClick={() => onPreview(template)}>
              Vista previa
            </Button>

            <Link
              to={`/?service=plantilla&template=${template.slug}#contacto`}
            >
              <Button className="w-full">Quiero este diseño</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import type { TemplateItem } from "../types/templates.types";

type TemplatePreviewModalProps = {
  template: TemplateItem | null;
  isOpen: boolean;
  onClose: () => void;
};

export function TemplatePreviewModal({
  template,
  isOpen,
  onClose,
}: TemplatePreviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !template) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
      <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-soft-lg">
        <div className="flex items-center justify-between border-b border-brand px-6 py-4">
          <div>
            <p className="text-sm font-medium text-brand-muted">Vista previa</p>
            <h3 className="text-xl font-bold text-brand-foreground">
              {template.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand bg-brand-card text-brand-foreground"
            aria-label="Cerrar vista previa"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <iframe
            src={template.previewUrl}
            title={`Vista previa de ${template.title}`}
            className="h-full w-full border-0"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand px-6 py-4">
          <p className="text-sm text-brand-muted">
            Esta es una vista previa del diseño. Se puede adaptar a tu marca,
            contenido y producto.
          </p>

          <a href="#contacto" onClick={onClose}>
            <Button>Quiero este diseño</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
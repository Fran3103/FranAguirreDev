import { Button } from "@/shared/ui/Button";

export function PrimaryButtonsDemo() {
  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 1 · CTA principal
      </p>

      <div className="flex min-h-[140px] flex-wrap items-center gap-4 rounded-[24px] bg-white p-6 shadow-soft">
        <Button size="lg">Quiero empezar</Button>

        <Button variant="secondary" size="lg">
          Ver más información
        </Button>

        <button className="rounded-full border border-brand bg-transparent px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-muted">
          Contactar ahora
        </button>
      </div>
    </div>
  );
}
import { ArrowRight, Sparkles, ShoppingCart } from "lucide-react";

export function IconButtonsDemo() {
  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 2 · Con íconos
      </p>

      <div className="flex min-h-[140px] flex-wrap items-center gap-4 rounded-[24px] bg-white p-6 shadow-soft">
        <button className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">
          <Sparkles size={18} />
          Mejorar mi página
        </button>

        <button className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 font-semibold text-brand-foreground transition hover:opacity-90">
          <ShoppingCart size={18} />
          Ver propuesta
        </button>

        <button className="group inline-flex items-center gap-2 rounded-full border border-brand bg-white px-6 py-3 font-semibold text-brand-foreground transition hover:bg-brand-muted">
          Ver recursos
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
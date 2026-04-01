import { Loader2, MousePointerClick } from "lucide-react";

export function AnimatedButtonsDemo() {
  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft lg:col-span-2">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 4 · Animados / especiales
      </p>

      <div className="grid min-h-[180px] gap-4 rounded-[24px] bg-white p-6 shadow-soft md:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center justify-center">
          <button className="animate-ui-bounce-soft rounded-full bg-brand-primary px-6 py-3 font-semibold text-white shadow-soft-lg">
            Quiero esto
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-semibold text-white">
            <MousePointerClick
              size={18}
              className="animate-ui-fade-pulse"
            />
            Solicitar propuesta
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="relative overflow-hidden rounded-full bg-brand-primary px-6 py-3 font-semibold text-white shadow-soft-lg">
            <span className="relative z-10">Ver promoción</span>
            <span className="animate-ui-shimmer absolute inset-0" />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 font-semibold text-brand-foreground">
            <Loader2 size={18} className="animate-spin" />
            Cargando
          </button>
        </div>
      </div>
    </div>
  );
}
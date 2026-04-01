export function EmphasisButtonsDemo() {
  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 3 · Más presencia visual
      </p>

      <div className="flex min-h-[140px] flex-wrap items-center gap-4 rounded-[24px] bg-white p-6 shadow-soft">
        <button className="rounded-full bg-brand-primary px-7 py-4 text-lg  hover:cursor-pointer font-bold text-white shadow-soft-lg transition hover:scale-[1.03] hover:bg-brand-primary-hover">
          Aprovechar ahora
        </button>

        <button className="rounded-full border-2 border-brand-primary px-7 py-4 text-lg font-bold
         text-brand-primary transition  hover:font-bold hover:text-[rgb(var(--secondary-foreground))] hover:cursor-pointer">
        
          Quiero algo así
        </button>

        <button className="rounded-full bg-brand-dark px-7 py-4 text-lg  hover:cursor-pointer font-bold text-white shadow-soft-lg transition hover:-translate-y-0.5">
          Ver demo
        </button>
      </div>
    </div>
  );
}
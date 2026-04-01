export function TrustMetricsDemo() {
  return (
    <div className="rounded-[28px] bg-brand-dark p-8 text-white shadow-soft-lg">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
        Métricas de confianza
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-3xl font-extrabold">4.9/5</p>
          <p className="text-sm text-white/75">valoración</p>
        </div>

        <div>
          <p className="text-3xl font-extrabold">+1200</p>
          <p className="text-sm text-white/75">clientes o alumnos</p>
        </div>

        <div>
          <p className="text-3xl font-extrabold">98%</p>
          <p className="text-sm text-white/75">satisfacción</p>
        </div>
      </div>
    </div>
  );
}
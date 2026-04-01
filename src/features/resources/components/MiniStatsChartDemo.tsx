const bars = [45, 70, 58, 82, 64, 90, 72];

export function MiniStatsChartDemo() {
  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
        Mini gráfica
      </p>

      <div className="mb-4 flex h-32 items-end gap-3">
        {bars.map((value, index) => (
          <div key={index} className="flex h-full flex-1 items-end">
            <div
              className="w-8 rounded-t-xl bg-brand-primary transition-all duration-700"
              style={{ height: `${value}%` }}
            />
          </div>
        ))}
      </div>

      <p className="text-sm leading-7 text-brand-muted">
        También se pueden mostrar métricas o comparativas en formato visual.
      </p>
    </div>
  );
}
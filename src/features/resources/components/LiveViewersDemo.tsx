import { useEffect, useState } from "react";

export function LiveViewersDemo() {
  const [viewers, setViewers] = useState(47);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setViewers((prev) => {
        const variation = Math.floor(Math.random() * 5) - 2;
        const next = prev + variation;
        return Math.max(32, Math.min(68, next));
      });
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
        Actividad en tiempo real
      </p>

      <p className="mb-2 text-4xl font-extrabold text-brand-foreground">
        {viewers}
      </p>

      <p className="text-sm font-medium text-brand-muted">
        personas están viendo esto ahora
      </p>
    </div>
  );
}
import { useEffect, useMemo, useState } from "react";

export function CircularProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationIntervalId: number | undefined;

    const runAnimation = () => {
      if (animationIntervalId !== undefined) {
        window.clearInterval(animationIntervalId);
      }

      let current = 0;
      setProgress(0);

      const currentIntervalId = window.setInterval(() => {
        current += 1;
        setProgress(current);

        if (current >= 75) {
          window.clearInterval(currentIntervalId);
        }
      }, 30);

      animationIntervalId = currentIntervalId;
    };

    runAnimation();

    const restartInterval = window.setInterval(() => {
      runAnimation();
    }, 10000);

    return () => {
      if (animationIntervalId !== undefined) {
        window.clearInterval(animationIntervalId);
      }
      window.clearInterval(restartInterval);
    };
  }, []);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = useMemo(() => {
    return circumference - (progress / 100) * circumference;
  }, [circumference, progress]);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 3 · Círculo animado
      </p>

      <div className="flex flex-col items-center justify-center">
        <div className="relative h-36 w-36">
          <svg
            className="-rotate-90"
            width="144"
            height="144"
            viewBox="0 0 144 144"
          >
            <circle
              cx="72"
              cy="72"
              r={radius}
              fill="none"
              stroke="rgb(var(--muted))"
              strokeWidth="12"
            />
            <circle
              cx="72"
              cy="72"
              r={radius}
              fill="none"
              stroke="rgb(var(--primary))"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 0.2s linear" }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-brand-foreground">
              {progress}%
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm font-medium text-brand-muted">
          Ejemplo visual de progreso
        </p>
      </div>
    </div>
  );
}
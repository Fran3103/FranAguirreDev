import { useEffect, useState } from "react";

const steps = ["Idea", "Diseño", "Ajustes", "Entrega"];

export function StepsProgressDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 2 · Steps con avance
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isCurrent = index === activeStep;

          return (
            <div key={step} className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all duration-500 ${
                  isCompleted
                    ? "bg-brand-primary text-white"
                    : isCurrent
                    ? "scale-105 bg-brand-secondary text-brand-foreground"
                    : "bg-brand-muted text-brand-foreground"
                }`}
              >
                {index + 1}
              </div>

              <span
                className={`font-medium transition-colors ${
                  isCurrent || isCompleted
                    ? "text-brand-foreground"
                    : "text-brand-muted"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
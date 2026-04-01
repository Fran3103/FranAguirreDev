import { useEffect, useState } from "react";

type ProgressItem = {
  id: string;
  label: string;
  value: number;
};

const progressItems: ProgressItem[] = [
  { id: "config", label: "Configuración", value: 78 },
  { id: "contenido", label: "Contenido", value: 64 },
  { id: "diseno", label: "Diseño", value: 91 },
];

export function LinearProgressDemo() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  useEffect(() => {
    let timeouts: number[] = [];
    let intervalId: number;

    const runAnimation = () => {
      setAnimatedValues([0, 0, 0]);

      progressItems.forEach((item, index) => {
        const timeout = window.setTimeout(() => {
          setAnimatedValues((prev) => {
            const next = [...prev];
            next[index] = item.value;
            return next;
          });
        }, index * 250);

        timeouts.push(timeout);
      });
    };

    runAnimation();

    intervalId = window.setInterval(() => {
      runAnimation();
    }, 10000);

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 1 · Barras animadas
      </p>

      <div className="space-y-5">
        {progressItems.map((item, index) => (
          <div key={item.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="text-brand-foreground">{item.label}</span>
              <span className="text-brand-muted">{animatedValues[index]}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-brand-muted">
              <div
                className="h-3 rounded-full bg-brand-primary transition-all duration-1000 ease-out"
                style={{ width: `${animatedValues[index]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
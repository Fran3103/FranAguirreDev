import { useEffect, useState } from "react";

type CounterItem = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

const counters: CounterItem[] = [
  { id: "clients", value: 1200, suffix: "+", label: "clientes o alumnos" },
  { id: "satisfaction", value: 98, suffix: "%", label: "satisfacción" },
  { id: "availability", value: 24, suffix: "/7", label: "disponibilidad" },
];

function AnimatedNumber({
  target,
  suffix = "",
  trigger,
}: {
  target: number;
  suffix?: string;
  trigger: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    setValue(0);

    const duration = 1200;
    const increment = Math.max(1, Math.floor(target / (duration / 16)));

    const interval = window.setInterval(() => {
      start += increment;

      if (start >= target) {
        setValue(target);
        window.clearInterval(interval);
      } else {
        setValue(start);
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, [target, trigger]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export function AnimatedCounterDemo() {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft lg:col-span-2">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 4 · Métricas con contador
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {counters.map((item) => (
          <div
            key={item.id}
            className="rounded-[24px] bg-white p-6 text-center shadow-soft"
          >
            <p className="mb-2 text-4xl font-extrabold text-brand-primary">
              <AnimatedNumber
                target={item.value}
                suffix={item.suffix}
                trigger={trigger}
              />
            </p>
            <p className="text-sm font-medium text-brand-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
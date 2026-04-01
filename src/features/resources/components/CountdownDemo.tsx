import { useEffect, useState } from "react";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function CountdownDemo() {
  const initialTime = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return initialTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-primary p-6 text-white shadow-soft-lg">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
        Cuenta regresiva
      </p>

      <p className="mb-4 text-4xl font-extrabold">{formatTime(timeLeft)}</p>

      <p className="text-sm leading-7 text-white/85">
        Ejemplo de urgencia: “Esta oferta termina en pocos minutos”.
      </p>
    </div>
  );
}
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const manualSlides = [
  {
    id: 1,
    text: "Podés mover este carrusel manualmente sin afectar otros bloques.",
  },
  {
    id: 2,
    text: "Sirve para mostrar testimonios, beneficios o bloques destacados.",
  },
  {
    id: 3,
    text: "Cada demo mantiene su propia lógica y su propio estado.",
  },
];

export function ManualCarouselDemo() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((prev) => (prev === 0 ? manualSlides.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === manualSlides.length - 1 ? 0 : prev + 1));
  };

  const item = manualSlides[active];

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 2 · Navegación manual
      </p>

      <div className="rounded-[24px] bg-white p-8 shadow-soft">
        <p className="mb-4 text-sm font-semibold text-brand-primary">
          Slide {active + 1}
        </p>

        <p className="min-h-[96px] text-base leading-8 text-brand-foreground">
          {item.text}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={prev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand bg-brand-card"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand bg-brand-card"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
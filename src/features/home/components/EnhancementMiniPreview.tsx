import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CountdownDemo } from "@/features/resources/components/CountdownDemo";
import type { EnhancementId } from "../types/home.types";

type EnhancementHeroPreviewProps = {
  id: EnhancementId;
};


export function EnhancementHeroPreview({
  id,
}: EnhancementHeroPreviewProps) {
  switch (id) {
    case "accordion":
      return <AccordionMiniPreview />;
    case "offer-blocks":
      return (
        <ScaledDemoPreview>
          <CountdownDemo />
        </ScaledDemoPreview>
      );
    case "scroll-animations":
      return <ScrollMiniPreview />;
    case "counters":
      return <CountersMiniPreview />;
    
    case "carousel":
      return <CarouselMiniPreview />;
    case "cta":
      return <CtaMiniPreview />;

    default:
      return null;
  }
}

function ScaledDemoPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-hidden rounded-[18px]">
      <div className="w-[175%] origin-top-left scale-[0.57]">
        {children}
      </div>
    </div>
  );
}

function AccordionMiniPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOpenIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  const items = ["¿Qué incluye?", "¿Cuánto tarda?", "¿Se adapta?"];

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item}
            className="rounded-2xl border border-brand bg-white px-3 py-2"
          >
            <div className="flex items-center justify-between text-xs font-medium text-brand-foreground">
              <span>{item}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </div>

            <div
              className={`overflow-hidden text-[11px] text-brand-muted transition-all duration-300 ${isOpen ? "max-h-10 pt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              Respuesta breve de ejemplo.
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScrollMiniPreview() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible((prev) => !prev);
    }, 1200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full items-end justify-center">
      <div className="w-full space-y-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`h-6 rounded-full bg-white transition-all duration-500 ${visible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-35"
              }`}
            style={{ transitionDelay: `${item * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselMiniPreview() {
  const [index, setIndex] = useState(0);
  const slides = ["Testimonio", "Ejemplo", "Beneficio"];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-[18px] bg-white p-3 shadow-soft">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide}
            className="min-w-full rounded-[14px] bg-brand-secondary px-4 py-6 text-center text-xs font-semibold text-brand-foreground"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );

}
function CountersMiniPreview() {
  const [value, setValue] = useState(18);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((prev) => (prev >= 96 ? 18 : prev + 6));
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="grid h-full grid-cols-3 gap-2">
      <div className="rounded-2xl bg-white p-3 text-center shadow-soft">
        <p className="text-lg font-extrabold leading-none text-brand-primary">
          {value}
        </p>
        <p className="mt-1 text-[10px] leading-4 text-brand-muted">
          ventas
        </p>
      </div>

      <div className="rounded-2xl bg-white p-3 text-center shadow-soft">
        <p className="text-lg font-extrabold leading-none text-brand-primary">
          {value + 12}%
        </p>
        <p className="mt-1 text-[10px] leading-4 text-brand-muted">
          conversión
        </p>
      </div>

      <div className="rounded-2xl bg-white p-3 text-center shadow-soft">
        <p className="text-lg font-extrabold leading-none text-brand-primary">
          24/7
        </p>
        <p className="mt-1 text-[10px] leading-4 text-brand-muted">
          soporte
        </p>
      </div>
    </div>
  );
}

function CtaMiniPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 1200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <button
        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${activeIndex === 0
          ? "scale-105 bg-brand-primary text-white shadow-soft-lg"
          : "bg-white text-brand-foreground shadow-soft"
          }`}
      >
        Quiero esto
      </button>

      <button
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${activeIndex === 1
          ? "scale-105 bg-brand-dark text-white"
          : "bg-white text-brand-foreground shadow-soft"
          }`}
      >
        Solicitar
      </button>

      <button
        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${activeIndex === 2
          ? "scale-105 bg-brand-secondary text-brand-foreground"
          : "bg-white text-brand-foreground shadow-soft"
          }`}
      >
        Ver promo
      </button>
    </div>
  );
}

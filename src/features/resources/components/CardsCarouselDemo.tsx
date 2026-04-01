import { useEffect, useState } from "react";

const cardsSlides = [
  {
    id: 1,
    title: "Testimonios",
    text: "Bloque visual para reforzar confianza.",
  },
  {
    id: 2,
    title: "Beneficios",
    text: "Sirve para destacar argumentos de venta.",
  },
  {
    id: 3,
    title: "Productos",
    text: "También puede mostrar packs o ejemplos.",
  },
];

export function CardsCarouselDemo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === cardsSlides.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft lg:col-span-2">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 3 · Slider de cards
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {cardsSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`rounded-[24px] p-6 transition-all ${
              index === active
                ? "bg-brand-primary text-white shadow-soft-lg"
                : "bg-white text-brand-foreground shadow-soft"
            }`}
          >
            <h3 className="mb-3 text-lg font-bold">{slide.title}</h3>
            <p className={index === active ? "text-white/85" : "text-brand-muted"}>
              {slide.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
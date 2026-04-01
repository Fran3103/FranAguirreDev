import { useEffect, useState } from "react";

const autoSlides = [
  {
    id: 1,
    title: "Testimonios",
    text: "Una página mejor presentada ayuda a que la propuesta se entienda más rápido.",
  },
  {
    id: 2,
    title: "Productos",
    text: "También podés usar sliders para mostrar packs, beneficios o ejemplos.",
  },
  {
    id: 3,
    title: "Contenido visual",
    text: "Sirve para sumar dinamismo sin recargar toda la estructura.",
  },
];

export function AutoCarouselDemo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === autoSlides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const item = autoSlides[active];

  return (
    <div className="rounded-[28px] bg-brand-card p-8 shadow-soft">
      <p className="mb-6 text-sm font-semibold text-brand-muted">
        Variante 1 · Carrusel automático
      </p>

      <div className="rounded-[24px] bg-white p-8 shadow-soft">
        <h3 className="mb-3 text-xl font-bold text-brand-primary">
          {item.title}
        </h3>

        <p className="min-h-[96px] text-base leading-8 text-brand-foreground">
          {item.text}
        </p>

        <div className="mt-6 flex gap-2">
          {autoSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`h-2 rounded-full transition-all ${
                active === index ? "w-8 bg-brand-primary" : "w-2 bg-brand-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
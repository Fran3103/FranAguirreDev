import { Sparkles, Palette, ContactRound, Zap } from "lucide-react";
import type { ServiceItem } from "../types/home.types";

export const services: ServiceItem[] = [
  {
    id: "template",
    title: "Plantilla Adaptada",
    description:
      "Partimos de una base lista y la adapto a tu producto. Ideal si ya tenés algo y querés mejorarlo rápido.",
    price: "ARS 45.000",
    icon: Sparkles,
  },
  {
    id: "landing",
    title: "Landing Personalizada",
    description:
      "Rediseño tu página o creo una nueva con mejor estructura, claridad y enfoque en conversión.",
    price: "ARS 60.000",
    icon: Palette,
  },
  {
    id: "leads",
    title: "Landing + Contactos",
    description:
      "Además de la página, organizo tus consultas para que no pierdas potenciales clientes.",
    price: "ARS 80.000",
    icon: ContactRound,
  },
  {
    id: "automation",
    title: "Landing + Automatización",
    description:
      "Automatizo tareas simples para que ahorres tiempo y tengas todo más ordenado.",
    price: "ARS 120.000",
    featured: true,
    icon: Zap,
  },
];
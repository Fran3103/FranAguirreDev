import {
  ChevronDownSquare,
  BarChart3,
  ScanSearch,
  GalleryHorizontal,
  MousePointerClick,
  BadgePercent,
} from "lucide-react";
import type { EnhancementItem } from "../types/home.types";

export const enhancements: EnhancementItem[] = [
  {
    id: "accordion",
    title: "FAQs y acordeones",
    description:
      "Sirven para resolver dudas sin recargar la página y ordenar mejor la información.",
    icon: ChevronDownSquare,
  },
  {
    id: "counters",
    title: "Contadores y métricas",
    description:
      "Ayudan a destacar resultados, alumnos, ventas o datos importantes de forma visual.",
    icon: BarChart3,
  },
  {
    id: "scroll-animations",
    title: "Animaciones al hacer scroll",
    description:
      "Pequeños movimientos que hacen la página más moderna y acompañan mejor la lectura.",
    icon: ScanSearch,
  },
  {
    id: "carousel",
    title: "Carruseles y sliders",
    description:
      "Útiles para mostrar testimonios, ejemplos, productos o beneficios de forma más dinámica.",
    icon: GalleryHorizontal,
  },
  {
    id: "cta",
    title: "Botones y llamados a la acción",
    description:
      "Botones más visibles, claros y con mejor presencia para guiar mejor al usuario.",
    icon: MousePointerClick,
  },
  {
    id: "offer-blocks",
    title: "Bloques de oferta y urgencia",
    description:
      "Bonos, descuentos, cupos o secciones especiales que ayudan a captar más atención.",
    icon: BadgePercent,
  },
];
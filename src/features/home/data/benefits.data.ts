import {
  BadgeCheck,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Gauge,
  Zap,
} from "lucide-react";
import type { BenefitItem } from "../types/home.types";

export const benefits: BenefitItem[] = [
  {
    id: "no-tech",
    label: "No necesitás saber de tecnología",
    icon: BadgeCheck,
  },
  {
    id: "improve-existing",
    label: "Podés mejorar lo que ya tenés",
    icon: Sparkles,
  },
  {
    id: "clear-professional",
    label: "Página clara y profesional",
    icon: ShieldCheck,
  },
  {
    id: "generate-leads",
    label: "Pensada para generar consultas",
    icon: TrendingUp,
  },
  {
    id: "simple-process",
    label: "Proceso simple",
    icon: Gauge,
  },
  {
    id: "scalable",
    label: "Posibilidad de escalar después",
    icon: Zap,
  },
];
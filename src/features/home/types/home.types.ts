import type { LucideIcon } from "lucide-react";

export type EnhancementId =
  | "accordion"
  | "counters"
  | "scroll-animations"
  | "carousel"
  | "cta"
  | "offer-blocks";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  icon: LucideIcon;
};

export type BenefitItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type EnhancementItem = {
  id: EnhancementId;
  title: string;
  description: string;
  icon: LucideIcon;
};
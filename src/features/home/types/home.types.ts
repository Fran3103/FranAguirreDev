import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  icon: LucideIcon
};

export type BenefitItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type EnhancementItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};
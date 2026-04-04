import type { NavItem } from "../types/navigation.type";

export const navItems: NavItem[] = [
  {
    label: "Servicios",
    href: "/#servicios",
    type: "anchor",
    sectionId: "servicios",
  },
  {
    label: "Plantillas",
    href: "/plantillas",
    type: "route",
    sectionId: "plantillas",
  },
  {
    label: "Como Funciona",
    href: "/#proceso",
    type: "anchor",
    sectionId: "proceso",
  },
  {
    label: "Extras",
    href: "/recursos",
    type: "route",
    sectionId: "recursos",
  }
];
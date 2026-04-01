import type { NavItem } from "../types/navigation.type";

export const navItems: NavItem[] = [
  {
    label: "Servicios",
    href: "/#servicios",
    type: "anchor",
    sectionId: "servicios",
  },
  {
    label: "Ejemplos",
    href: "/plantillas",
    type: "route",
    sectionId: "ejemplos",
  },
  {
    label: "Proceso",
    href: "/#proceso",
    type: "anchor",
    sectionId: "proceso",
  },
  {
    label: "Contacto",
    href: "/#contacto",
    type: "anchor",
    sectionId: "contacto",
  },
  {
    label: "Recursos",
    href: "/recursos",
    type: "route",
    sectionId: "recursos",
  },
];
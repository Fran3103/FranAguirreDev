import { Sparkles, Palette, Wrench } from "lucide-react";
import type { ServiceItem } from "../types/home.types";

export const services: ServiceItem[] = [
  {
    id: "fix",
    title: "Corrección de Página",
    description: "Para arreglar lo que no funciona",
    price: "desde ARS 50.000",
    icon: Wrench,
    includes: [
      "Revisión de la página actual",
      "Detección de errores",
      "Corrección puntual",
      "Ajustes básicos necesarios",
    ],
    notIncludes: [
      "Rediseño completo",
      "Nuevas secciones",
      "Cambios estructurales grandes",
    ],
    cta: "Consultar este servicio",
  },
  {
    id: "template",
    title: "Plantilla Adaptada",
    description: "Para salir rápido",
    price: "ARS 60.000",
    featured: true,
    icon: Sparkles,
    includes: [
      "Adaptación de textos, imágenes y links",
      "Cambio de colores básicos",
      "Implementación en Shopify o deploy",
      "Diseño responsive",
      "1 revisión",
    ],
    notIncludes: [
      "Cambios de estructura",
      "Nuevas secciones",
      "Animaciones o extras",
      "Copywriting",
      "Automatización",
    ],
    cta: "Quiero esta opción",
  },
  {
    id: "landing",
    title: "Landing Personalizada",
    description: "Para vender mejor",
    price: "ARS 130.000",
    icon: Palette,
    includes: [
      "Diseño desde cero o mejora completa",
      "Estructura optimizada para conversión",
      "Nuevas secciones",
      "Posibilidad de agregar animaciones",
      "Mejor organización del contenido",
      "2 revisiones",
    ],
    notIncludes: [
      "Automatizaciones complejas",
      "Sistemas o apps grandes",
      "Cambios ilimitados",
    ],
    cta: "Elegir plan",
  },
];
# 🚀 Fran Aguirre — Landing + Templates + Automatización

Sitio web profesional orientado a la creación de **landings para infoproductos**, con enfoque en conversión, rapidez de implementación y posibilidad de escalar con automatizaciones.

Este proyecto funciona como:

* 💼 Portfolio técnico
* 🧩 Catálogo de plantillas reutilizables
* 📈 Sistema de captación de clientes
* ⚙️ Base para servicios de automatización (n8n, bots, funnels)

---

## 🎯 Visión del proyecto

El objetivo es ofrecer una solución simple para personas que venden:

* Cursos digitales
* Productos descargables
* Servicios online

Y necesitan:

* una landing profesional
* rápida de implementar
* optimizada para conversión

👉 En lugar de empezar desde cero, se utilizan **templates base** que luego se adaptan.

---

## 🧱 Arquitectura del proyecto

El frontend está construido con una arquitectura **feature-first**, lo que permite escalar fácilmente.

```
src/
 ├── features/
 │    ├── home/
 │    ├── templates/
 │    ├── resources/
 │    ├── contact/
 │    ├── navigation/
 │
 ├── shared/
 │    ├── ui/
 │    ├── components/
 │    ├── lib/
 │    ├── constants/
 │
 ├── app/
 │    ├── router/
 │
 └── main.tsx
```

✔ Separación clara por dominio
✔ Componentes reutilizables
✔ Escalable para nuevas features

---

## 🛠️ Tecnologías utilizadas

### Frontend

* ⚛️ React + TypeScript
* ⚡ Vite
* 🎨 TailwindCSS
* 🧩 Arquitectura feature-first

### UI / UX

* Lucide Icons
* Animaciones custom (CSS + Tailwind)
* Componentes reutilizables (Button, Input, Select, etc.)

### Routing

* React Router DOM

### Deploy

* ▲ Vercel

---

## 🧩 Funcionalidades principales

### 🏠 Landing principal

* Presentación de servicios
* Propuesta de valor clara
* CTA optimizados

### 🧱 Templates (plantillas)

* Catálogo de landings reutilizables
* Vista previa (modal)
* Sistema escalable vía `templates.data.ts`

### 🎯 Sistema de selección de plantilla

* Botón “Quiero este diseño”
* Redirección automática al formulario
* Preselección de template vía query params

Ejemplo:

```
/?service=plantilla&template=master-afiliados#contacto
```

---

### 📩 Formulario inteligente

El formulario adapta su comportamiento:

* Si el usuario elige:
  👉 “Plantilla Adaptada”
  → aparece selector de templates

* Si viene desde un template:
  → ya queda preseleccionado automáticamente

---

### 🎨 Recursos UI (showcase)

Sección tipo librería visual con:

* Carouseles
* Botones animados
* Contadores
* Progress bars
* Animaciones (bounce, shimmer, float)
* Componentes reutilizables

---

## ⚙️ Sistema de templates

Los templates están definidos en:

```
src/features/templates/data/templates.data.ts
```

Agregar uno nuevo requiere:

```ts
{
  id: "nuevo-template",
  title: "Nombre",
  slug: "nuevo-template",
  image: "/images/templates/nuevo-template-cover.webp",
  previewUrl: "/previews/nuevo-template.html",
}
```

Y automáticamente:

* aparece en el catálogo
* aparece en el formulario
* funciona con redirección

---

## 🖼️ Previews de templates

Los previews se cargan desde:

```
/public/previews/*.html
```

Y se pueden generar automáticamente con Puppeteer.

---

## 📸 Generación automática de thumbnails

Script utilizado:

```ts
import puppeteer from "puppeteer";

await page.screenshot({
  path: `public/images/templates/${t}-cover.png`,
});
```

Esto permite:

* generar previews consistentes
* automatizar catálogo

---

## 🎯 Objetivo comercial

Este proyecto no es solo técnico.

Está pensado para:

* vender landings
* vender templates
* ofrecer automatización
* generar leads

---

## 💡 Servicios asociados

* Landing desde template (rápido)
* Landing personalizada
* Integración con WhatsApp
* Automatizaciones (n8n)
* Funnels simples

---

## 🚀 Roadmap (próximas mejoras)

* [ ] Integración real del formulario (email / CRM)
* [ ] Tracking con Google Analytics
* [ ] Scroll animations avanzadas
* [ ] Templates dinámicos
* [ ] Panel admin básico
* [ ] Integración con n8n

---

## 🧠 Decisiones técnicas

* Uso de **TypeScript** para robustez
* Feature-first para escalabilidad
* Tailwind para velocidad de desarrollo
* Separación clara de UI vs lógica
* Evitar overengineering innecesario

---

## 📦 Instalación

```bash
npm install
npm run dev
```

---

## 🌐 Deploy

El proyecto está preparado para deploy en:

👉 Vercel

---

## 👨‍💻 Autor

**Fran Aguirre**

* Backend Java (Spring Boot)
* Frontend React
* Automatización con n8n

---

## 🧩 Estado del proyecto

🟢 Activo
🟢 Escalable
🟢 En producción / iteración

---



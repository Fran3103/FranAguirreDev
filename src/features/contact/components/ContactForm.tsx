import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { Textarea } from "@/shared/ui/Textarea";
import { templates } from "@/features/templates/data/templates.data";

export function ContactForm() {
  const [searchParams] = useSearchParams();

  const initialService = searchParams.get("service") ?? "";
  const initialTemplate = searchParams.get("template") ?? "";

  const [service, setService] = useState(initialService);
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);

  const selectedTemplateExists = useMemo(() => {
    return templates.some((template) => template.slug === selectedTemplate);
  }, [selectedTemplate]);

  useEffect(() => {
    const serviceParam = searchParams.get("service") ?? "";
    const templateParam = searchParams.get("template") ?? "";

    setService(serviceParam);

    if (
      templateParam &&
      templates.some((template) => template.slug === templateParam)
    ) {
      setSelectedTemplate(templateParam);
    } else {
      setSelectedTemplate("");
    }
  }, [searchParams]);

  return (
    <form className="grid grid-cols-1 gap-6 rounded-[28px] bg-white p-8 shadow-soft-lg md:grid-cols-2 md:p-10">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Nombre
        </label>
        <Input
          name="name"
          type="text"
          placeholder="Tu nombre completo"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Tu negocio
        </label>
        <Input
          name="business"
          type="text"
          placeholder="Nombre de tu emprendimiento"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Email
        </label>
        <Input
          name="email"
          type="email"
          placeholder="hola@tuweb.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-foreground">
          WhatsApp
        </label>
        <Input
          name="whatsapp"
          type="tel"
          placeholder="+54 9..."
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-semibold text-brand-foreground">
          ¿Qué necesitás?
        </label>
        <Select
          name="service"
          value={service}
          onChange={(e) => {
            const value = e.target.value;
            setService(value);

            if (value !== "plantilla") {
              setSelectedTemplate("");
            }
          }}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          <option value="plantilla">Plantilla Adaptada</option>
          <option value="landing">Landing Personalizada</option>
          <option value="leads">Landing + Contactos</option>
          <option value="automation">Landing + Automatización</option>
          <option value="optimizacion">Optimización de algo existente</option>
        </Select>
      </div>

      {service === "plantilla" && (
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-brand-foreground">
            Plantilla elegida
          </label>
          <Select
            name="template"
            value={selectedTemplateExists ? selectedTemplate : ""}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="" disabled>
              Elegí una plantilla
            </option>

            {templates.map((template) => (
              <option key={template.id} value={template.slug}>
                {template.title}
              </option>
            ))}
          </Select>
        </div>
      )}

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Mensaje
        </label>
        <Textarea
          name="message"
          placeholder="Contame un poco más sobre tu proyecto..."
        />
      </div>

      <div className="md:col-span-2 pt-2">
        <Button type="submit" size="lg" className="w-full">
          Quiero mi página
        </Button>
      </div>
    </form>
  );
}
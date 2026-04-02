import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { Textarea } from "@/shared/ui/Textarea";
import { templates } from "@/features/templates/data/templates.data";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [searchParams] = useSearchParams();

  const initialService = searchParams.get("service") ?? "";
  const initialTemplate = searchParams.get("template") ?? "";

  const [service, setService] = useState(initialService);
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "sending") return;

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatus("error");
      setErrorMessage("Faltan las variables de entorno de EmailJS.");
      return;
    }

    if (!formRef.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      formRef.current.reset();

      // Reseteamos también los estados controlados
      setService("");
      setSelectedTemplate("");
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setStatus("error");
      setErrorMessage("No se pudo enviar el mensaje. Probá de nuevo.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 rounded-[28px] bg-white p-8 shadow-soft-lg md:grid-cols-2 md:p-10"
    >
      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Nombre
        </label>
        <Input
          name="name"
          type="text"
          placeholder="Tu nombre completo"
          required
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
          required
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
          required
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
            required
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

      {service !== "plantilla" && (
        <input type="hidden" name="template" value="" />
      )}

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-semibold text-brand-foreground">
          Mensaje
        </label>
        <Textarea
          name="message"
          placeholder="Contame un poco más sobre tu proyecto..."
          required
        />
      </div>

      <div className="md:col-span-2 pt-2">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Quiero mi landing"}
        </Button>
      </div>

      {status === "success" && (
        <p className="md:col-span-2 text-sm font-medium text-green-600">
          Mensaje enviado correctamente. Te respondo a la brevedad.
        </p>
      )}

      {status === "error" && (
        <p className="md:col-span-2 text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
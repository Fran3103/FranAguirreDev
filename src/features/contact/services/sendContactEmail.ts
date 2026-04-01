import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "../types/contact.types";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function validateEmailJsEnv() {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error("Faltan variables de entorno de EmailJS");
  }
}

export async function sendContactEmail(values: ContactFormValues) {
  validateEmailJsEnv();

  const templateParams = {
    from_name: values.name,
    business_name: values.business,
    reply_to: values.email,
    whatsapp: values.whatsapp,
    service: values.service,
    template_name: values.template || "No aplica",
    message: values.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}
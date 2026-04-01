import { TemplatesHeroSection } from "@/features/templates/sections/TemplatesHeroSection";
import { TemplatesGridSection } from "@/features/templates/sections/TemplateGridSection";
import { TemplatesInfoSection } from "@/features/templates/sections/TemplateInfoSection";
import { TemplatesCtaSection } from  "@/features/templates/sections/TemplateCtaSection";
import { ContactSection } from "@/features/contact/components/ContactSection";

export function TemplatesPage() {
  return (
    <>
      <TemplatesHeroSection />
      <TemplatesGridSection />
      <TemplatesInfoSection />
      <TemplatesCtaSection />
      <ContactSection />
    </>
  );
}
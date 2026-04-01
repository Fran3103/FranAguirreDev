import { HeroSection } from "@/features/home/sections/HeroSection";
import { ServicesSection } from "@/features/home/sections/ServicesSection";
import { TemplatesPreviewSection } from "@/features/home/sections/TemplatePreviewSection";
import { BenefitsSection } from "@/features/home/sections/BenefitsSection";
import { AudienceSection } from "@/features/home/sections/AudienceSection";
import { ProcessSection } from "@/features/home/sections/ProcessSection";
import { FaqSection } from "@/features/home/sections/FaqSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { FinalCtaSection } from "@/features/home/sections/FinalCtaSection";
import { EnhancementsSection } from "@/features/home/sections/EnhancementsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TemplatesPreviewSection />
      <EnhancementsSection/>
      <BenefitsSection />
      <AudienceSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}
import { ResourcesHeroSection } from "@/features/resources/sections/ResourcesHeroSection";
import { ButtonsShowcaseSection } from "@/features/resources/sections/ButtonsShowcaseSection";
import { CarouselShowcaseSection } from "@/features/resources/sections/CarouselShowcaseSection";
import { ProgressShowcaseSection } from "@/features/resources/sections/ProgressShowcaseSection";
import { AccordionShowcaseSection } from "@/features/resources/sections/AccordionShowcaseSection";
import { OfferShowcaseSection } from "@/features/resources/sections/OfferShowcaseSection";
import { CountersShowcaseSection } from "@/features/resources/sections/CountersShowcaseSection";
import { ScrollRevealShowcaseSection } from "@/features/resources/sections/ScrollRevealShowcaseSection";
import { ContactSection } from "@/features/contact/components/ContactSection";

export function ResourcesPage() {
  return (
    <>
      <ResourcesHeroSection />
      <ScrollRevealShowcaseSection />
      <CountersShowcaseSection />
      <CarouselShowcaseSection />
      <ProgressShowcaseSection />
      <ButtonsShowcaseSection />
      <AccordionShowcaseSection />
      <OfferShowcaseSection />
      <ContactSection />
    </>
  );
}
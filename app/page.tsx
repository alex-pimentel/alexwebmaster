import type { Experience } from "@/lib/types";
import { experiences } from "@/lib/data.generated";
import { HeroSection } from "@/components/hero-section";
import { TechCloudWrapper } from "@/components/tech-cloud-wrapper";
import { CompetencyCards } from "@/components/competency-cards";
import { ContactSection } from "@/components/contact-section";

export default async function HomePage() {

  return (
    <>
      <HeroSection />
      <TechCloudWrapper experiences={experiences} />
      <CompetencyCards />
      <ContactSection />
    </>
  );
}

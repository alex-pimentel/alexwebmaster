import { promises as fs } from "fs";
import path from "path";
import type { Experience, Manifest } from "@/lib/types";
import { HeroSection } from "@/components/hero-section";
import { TechCloudWrapper } from "@/components/tech-cloud-wrapper";
import { CompetencyCards } from "@/components/competency-cards";
import { ContactSection } from "@/components/contact-section";

async function loadAllExperiences(): Promise<Experience[]> {
  const dataDir = path.join(process.cwd(), "public/projects");
  const manifestRaw = await fs.readFile(
    path.join(dataDir, "manifest.json"),
    "utf-8"
  );
  const manifest: Manifest = JSON.parse(manifestRaw);

  const experiences: Experience[] = [];
  for (const folder of manifest.companies) {
    const raw = await fs.readFile(
      path.join(dataDir, folder, "data.json"),
      "utf-8"
    );
    const exp: Experience = JSON.parse(raw);
    exp.folder = folder;
    experiences.push(exp);
  }
  return experiences;
}

export default async function HomePage() {
  const experiences = await loadAllExperiences();

  return (
    <>
      <HeroSection />
      <TechCloudWrapper experiences={experiences} />
      <CompetencyCards />
      <ContactSection />
    </>
  );
}

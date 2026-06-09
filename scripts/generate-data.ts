import { promises as fs } from "fs";
import path from "path";

interface Manifest {
  companies: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  desc: string;
  link: string;
  folder: string;
  techs: string[];
  projects?: { title: string; desc: string; imgs: string[] }[];
}

async function generate() {
  const dataDir = path.join(process.cwd(), "public/projects");
  const manifestRaw = await fs.readFile(path.join(dataDir, "manifest.json"), "utf-8");
  const manifest: Manifest = JSON.parse(manifestRaw);

  const experiences: Experience[] = [];
  for (const folder of manifest.companies) {
    const raw = await fs.readFile(path.join(dataDir, folder, "data.json"), "utf-8");
    const exp: Experience = JSON.parse(raw);
    exp.folder = folder;
    experiences.push(exp);
  }

  const output = `// Auto-generated at build time. Do not edit.
import type { Experience } from "./types";

export const experiences: Experience[] = ${JSON.stringify(experiences, null, 2)};
`;

  await fs.writeFile(path.join(process.cwd(), "app/lib/data.generated.ts"), output, "utf-8");
  console.log(`Generated data for ${experiences.length} experiences`);
}

generate().catch(console.error);

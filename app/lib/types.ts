export interface Tradeoff {
  title: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  prompt: string;
  challenges: string[];
  solutions: string[];
  tradeoffs: Tradeoff[];
  results: string[];
  period: string;
  duration: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  link: string;
  desc: string;
  techs: string[];
  folder: string;
  projects: Project[];
}

export interface Manifest {
  companies: string[];
}

export const TECH_ALIASES: Record<string, string> = {
  Next: "Next.js",
  Vue: "Vue.js",
  Vuejs: "Vue.js",
  "Angular.js": "Angular",
  "React.js": "React",
  FastApi: "FastAPI",
  Nest: "Nest.js",
};

export function normalizeTech(tech: string): string {
  return TECH_ALIASES[tech] || tech;
}

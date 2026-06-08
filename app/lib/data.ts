import type { Experience, Manifest } from "./types";

const DATA_BASE = "/projects/";

export async function loadManifest(): Promise<Manifest> {
  const res = await fetch(`${DATA_BASE}manifest.json`);
  if (!res.ok) throw new Error(`Failed to load manifest: ${res.statusText}`);
  return res.json();
}

export async function loadCompanyData(folder: string): Promise<Experience> {
  const res = await fetch(`${DATA_BASE}${folder}/data.json`);
  if (!res.ok)
    throw new Error(`Failed to load ${folder}: ${res.statusText}`);
  const data: Experience = await res.json();
  data.folder = folder;
  return data;
}

export async function loadAllExperiences(): Promise<Experience[]> {
  const manifest = await loadManifest();
  const promises = manifest.companies.map(loadCompanyData);
  return Promise.all(promises);
}

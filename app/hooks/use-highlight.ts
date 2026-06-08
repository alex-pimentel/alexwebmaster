import { useState, useCallback, useMemo } from "react";
import type { Experience } from "../lib/types";
import { normalizeTech } from "../lib/types";

export function useHighlight(experiences: Experience[]) {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    experiences.forEach((exp) =>
      exp.techs.forEach((t) => set.add(normalizeTech(t)))
    );
    return Array.from(set).sort();
  }, [experiences]);

  const handleTechClick = useCallback((tech: string) => {
    setActiveTech((prev) => (prev === tech ? null : tech));
  }, []);

  const clearHighlight = useCallback(() => {
    setActiveTech(null);
  }, []);

  return {
    activeTech,
    allTechs,
    handleTechClick,
    clearHighlight,
  };
}

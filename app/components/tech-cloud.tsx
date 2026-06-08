"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Badge } from "@/components/ui/badge";

interface TechCloudProps {
  techs: string[];
  activeTech: string | null;
  onTechClick: (tech: string) => void;
}

export function TechCloud({ techs, activeTech, onTechClick }: TechCloudProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
      }}
    >
      {techs.map((tech) => {
        const isActive = activeTech === tech;
        const isDimmed = activeTech !== null && !isActive;

        return (
          <motion.div
            key={tech}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Badge
              data-tech={tech}
              variant={isActive ? "default" : "secondary"}
              className={cn(
                "cursor-pointer select-none transition-all duration-300 hover:scale-105 px-3 py-1.5 text-xs",
                isActive &&
                  "shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_40%,transparent)] z-10 relative",
                isDimmed && "opacity-25 scale-90 grayscale pointer-events-none",
                !isActive && !isDimmed && "hover:border-primary/50"
              )}
              onClick={() => onTechClick(tech)}
            >
              {tech}
            </Badge>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

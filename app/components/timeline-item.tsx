"use client";

import { motion } from "framer-motion";
import { normalizeTech } from "../lib/types";
import { cn } from "../lib/utils";
import type { Experience } from "../lib/types";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  activeTech: string | null;
  onTechClick: (tech: string) => void;
  onOpenModal: () => void;
}

export function TimelineItem({
  experience: exp,
  index,
  activeTech,
  onTechClick,
  onOpenModal,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""} group`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 mt-6 md:mt-8 shadow-[0_0_0_4px_var(--background)]" />

      <div className={`pl-16 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12 text-right" : "md:pl-12 text-left"}`}>
        <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
          <div className={`flex flex-col ${isLeft ? "md:items-end" : "md:items-start"} mb-2`}>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isLeft ? "md:self-end" : ""} mb-2`}
            >
              <img
                src={`/projects/${exp.folder}/logo.png`}
                alt={exp.company}
                className="w-[150px] max-h-[100px] object-contain"
                loading="lazy"
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-sm font-medium text-primary">${exp.company}</span>`;
                  }
                }}
              />
            </a>
            <h4 className="text-lg font-bold leading-none">{exp.role}</h4>
          </div>

          <div className={`flex items-center gap-4 text-xs text-muted-foreground mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.period}
            </span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {exp.location}
            </span>
          </div>

          <p className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
            {exp.desc}
          </p>

          <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            {exp.techs.map((t) => {
              const n = normalizeTech(t);
              const isActive = activeTech === n;
              const isDimmed = activeTech !== null && !isActive;
              return (
                <span
                  key={t}
                  data-tech={n}
                  className={cn(
                    "tag inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium transition-all cursor-pointer",
                    isActive && "bg-primary text-primary-foreground border-primary",
                    isDimmed && "opacity-25 scale-95 grayscale border-border bg-secondary/50 text-muted-foreground",
                    !isActive && !isDimmed && "border-border bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  )}
                  onClick={() => onTechClick(n)}
                >
                  {n}
                </span>
              );
            })}
          </div>

          {exp.projects && exp.projects.length > 0 && (
            <div className={`mt-4 ${isLeft ? "text-right" : "text-left"}`}>
              <Button
                size="sm"
                onClick={onOpenModal}
              >
                <FolderOpen className="w-3.5 h-3.5" />
                Projects ({exp.projects.length})
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

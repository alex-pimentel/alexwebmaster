"use client";

import { useEffect } from "react";
import { useHighlight } from "../hooks/use-highlight";
import { useModal } from "../hooks/use-modal";
import { TechCloud } from "./tech-cloud";
import { Timeline } from "./timeline";
import { ProjectModal } from "./project-modal";
import type { Experience } from "../lib/types";

interface TechCloudWrapperProps {
  experiences: Experience[];
}

export function TechCloudWrapper({ experiences }: TechCloudWrapperProps) {
  const { activeTech, allTechs, handleTechClick } = useHighlight(experiences);
  const { modalState, openModal, closeModal, nextProject, prevProject, goToProject } = useModal();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!modalState) return;
      const projects = experiences[modalState.experienceIndex]?.projects;
      if (!projects) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && modalState.projectIndex < projects.length - 1) {
        nextProject(projects.length);
      }
      if (e.key === "ArrowLeft" && modalState.projectIndex > 0) {
        prevProject();
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [modalState, closeModal, nextProject, prevProject, experiences]);

  return (
    <>
      <section id="skills" className="py-20 border-t border-border/50 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center justify-between mb-10 gap-3">
            <h3 className="text-3xl font-bold tracking-tight">Tech Stack</h3>
            <span className="text-sm text-muted-foreground border border-border/50 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm">
              Click a tag to highlight across portfolio
            </span>
          </div>
          <TechCloud techs={allTechs} activeTech={activeTech} onTechClick={handleTechClick} />
        </div>
      </section>

      <Timeline
        experiences={experiences}
        activeTech={activeTech}
        onTechClick={handleTechClick}
        onOpenModal={openModal}
      />

      <ProjectModal
        experiences={experiences}
        modalState={modalState}
        onClose={closeModal}
        onNext={() => {
          if (modalState) nextProject(experiences[modalState.experienceIndex].projects.length);
        }}
        onPrev={prevProject}
        onGoToProject={goToProject}
      />
    </>
  );
}

import type { Experience } from "../lib/types";
import { TimelineItem } from "./timeline-item";

interface TimelineProps {
  experiences: Experience[];
  activeTech: string | null;
  onTechClick: (tech: string) => void;
  onOpenModal: (experienceIndex: number) => void;
}

export function Timeline({
  experiences,
  activeTech,
  onTechClick,
  onOpenModal,
}: TimelineProps) {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
        <h3 className="text-4xl font-bold tracking-tight mb-16 text-center">
          Professional Experience
        </h3>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.folder}
                experience={exp}
                index={index}
                activeTech={activeTech}
                onTechClick={onTechClick}
                onOpenModal={() => onOpenModal(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

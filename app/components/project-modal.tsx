import { AnimatePresence, motion } from "framer-motion";
import type { Experience } from "../lib/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectModalProps {
  experiences: Experience[];
  modalState: { experienceIndex: number; projectIndex: number } | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToProject: (index: number) => void;
}

export function ProjectModal({
  experiences,
  modalState,
  onClose,
  onNext,
  onPrev,
  onGoToProject,
}: ProjectModalProps) {
  const isOpen = modalState !== null;
  const exp = isOpen ? experiences[modalState!.experienceIndex] : null;
  const project = exp ? exp.projects[modalState!.projectIndex] : null;
  const imgPath = project ? `/projects/${exp!.folder}/${project.image}` : "";

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative max-w-5xl w-full mx-4 mt-24 mb-10 max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between p-6 border-b border-border sticky top-0 bg-card z-10">
                <div>
                  <h2 className="text-xl font-bold">{exp!.company}</h2>
                  <p className="text-sm text-muted-foreground">{exp!.role}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {modalState!.projectIndex + 1} / {exp!.projects.length}
                  </span>
                  <Button
                    onClick={onClose}
                    variant="ghost"
                    size="icon"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden bg-secondary/50 mb-6">
                  <img
                    src={imgPath}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="flex items-center justify-center h-full text-muted-foreground text-sm px-4"><span>Project cover image</span></div>';
                      }
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

                <div className="space-y-8">
                  {project.challenges.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.963-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 shrink-0">&bull;</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.solutions.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Solutions
                      </h4>
                      <ul className="space-y-2">
                        {project.solutions.map((s, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 shrink-0">&bull;</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.tradeoffs.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        Trade-offs
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.tradeoffs.map((t, i) => (
                          <div key={i} className="p-4 rounded-lg border border-border bg-secondary/20">
                            <strong className="text-sm">{t.title}:</strong>
                            <p className="text-sm text-muted-foreground mt-1">{t.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.results.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Results &amp; Gains
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((r, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 shrink-0">&bull;</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-6 p-4 rounded-lg border border-border bg-secondary/20 text-sm">
                    <span>
                      <strong className="text-foreground">Period:</strong>{" "}
                      <span className="text-muted-foreground">{project.period}</span>
                    </span>
                    <span>
                      <strong className="text-foreground">Duration:</strong>{" "}
                      <span className="text-muted-foreground">{project.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onPrev}
                  disabled={modalState!.projectIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {exp!.projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => onGoToProject(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === modalState!.projectIndex
                          ? "bg-primary scale-125"
                          : "bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={onNext}
                  disabled={modalState!.projectIndex === exp!.projects.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState, useCallback } from "react";

interface ModalState {
  experienceIndex: number;
  projectIndex: number;
}

export function useModal() {
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const openModal = useCallback(
    (experienceIndex: number, projectIndex: number = 0) => {
      setModalState({ experienceIndex, projectIndex });
      document.body.style.overflow = "hidden";
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalState(null);
    document.body.style.overflow = "";
  }, []);

  const nextProject = useCallback(
    (projectCount: number) => {
      setModalState((prev) => {
        if (!prev || prev.projectIndex >= projectCount - 1) return prev;
        return { ...prev, projectIndex: prev.projectIndex + 1 };
      });
    },
    []
  );

  const prevProject = useCallback(() => {
    setModalState((prev) => {
      if (!prev || prev.projectIndex <= 0) return prev;
      return { ...prev, projectIndex: prev.projectIndex - 1 };
    });
  }, []);

  const goToProject = useCallback((index: number) => {
    setModalState((prev) => {
      if (!prev) return prev;
      return { ...prev, projectIndex: index };
    });
  }, []);

  return {
    modalState,
    openModal,
    closeModal,
    nextProject,
    prevProject,
    goToProject,
  };
}

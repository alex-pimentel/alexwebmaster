import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectModal } from "../../components/project-modal";
import type { Experience } from "../../lib/types";

const mockExperiences: Experience[] = [
  {
    company: "TestCo",
    role: "Engineer",
    period: "2020-2021",
    location: "Remote",
    link: "https://test.co",
    desc: "A test company",
    techs: ["React"],
    folder: "testco",
    projects: [
      {
        id: "proj1",
        title: "Project One",
        description: "First project description",
        image: "proj1.png",
        prompt: "Prompt for proj1",
        challenges: ["Challenge A"],
        solutions: ["Solution A"],
        tradeoffs: [{ title: "Tradeoff A", body: "Tradeoff body" }],
        results: ["Result A"],
        period: "2020",
        duration: "1 year",
      },
      {
        id: "proj2",
        title: "Project Two",
        description: "Second project description",
        image: "proj2.png",
        prompt: "Prompt for proj2",
        challenges: ["Challenge B"],
        solutions: ["Solution B"],
        tradeoffs: [{ title: "Tradeoff B", body: "Tradeoff body B" }],
        results: ["Result B"],
        period: "2021",
        duration: "6 months",
      },
    ],
  },
];

describe("ProjectModal", () => {
  it("renders nothing when modalState is null", () => {
    const { container } = render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={null}
        onClose={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    expect(container.innerHTML).toBe("");
  });

  it("renders project details when open", () => {
    render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={{ experienceIndex: 0, projectIndex: 0 }}
        onClose={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    expect(screen.getByText("Project One")).toBeDefined();
    expect(screen.getByText("TestCo")).toBeDefined();
    expect(screen.getByText("1 / 2")).toBeDefined();
    expect(screen.getByText("Challenge A")).toBeDefined();
    expect(screen.getByText("Solution A")).toBeDefined();
    expect(screen.getByText("Result A")).toBeDefined();
    expect(screen.getByText((c) => c.includes("Tradeoff A"))).toBeDefined();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={{ experienceIndex: 0, projectIndex: 0 }}
        onClose={onClose}
        onNext={() => {}}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onNext when next button is clicked", () => {
    const onNext = vi.fn();
    render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={{ experienceIndex: 0, projectIndex: 0 }}
        onClose={() => {}}
        onNext={onNext}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Next"));
    expect(onNext).toHaveBeenCalled();
  });

  it("disables prev on first project", () => {
    render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={{ experienceIndex: 0, projectIndex: 0 }}
        onClose={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    expect(screen.getByText("Previous")).toBeDisabled();
    expect(screen.getByText("Next")).not.toBeDisabled();
  });

  it("disables next on last project", () => {
    render(
      <ProjectModal
        experiences={mockExperiences}
        modalState={{ experienceIndex: 0, projectIndex: 1 }}
        onClose={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
        onGoToProject={() => {}}
      />
    );
    expect(screen.getByText("Previous")).not.toBeDisabled();
    expect(screen.getByText("Next")).toBeDisabled();
  });
});

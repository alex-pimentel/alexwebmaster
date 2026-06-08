import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TechCloud } from "../../components/tech-cloud";

const techs = ["React", "TypeScript", "Node.js", "Python", "Docker"];

describe("TechCloud", () => {
  it("renders all tech tags", () => {
    render(
      <TechCloud techs={techs} activeTech={null} onTechClick={() => {}} />
    );
    techs.forEach((t) => {
      expect(screen.getByText(t)).toBeDefined();
    });
  });

  it("calls onTechClick when a tag is clicked", () => {
    const handleClick = vi.fn();
    render(
      <TechCloud techs={techs} activeTech={null} onTechClick={handleClick} />
    );
    fireEvent.click(screen.getByText("React"));
    expect(handleClick).toHaveBeenCalledWith("React");
  });

  it("highlights the active tech", () => {
    const { container } = render(
      <TechCloud techs={techs} activeTech="React" onTechClick={() => {}} />
    );
    const activeTag = container.querySelector('[data-tech="React"]');
    expect(activeTag?.className).toContain("bg-primary");
  });

  it("dims non-active techs", () => {
    const { container } = render(
      <TechCloud techs={techs} activeTech="React" onTechClick={() => {}} />
    );
    const dimmedTag = container.querySelector('[data-tech="TypeScript"]');
    expect(dimmedTag?.className).toContain("opacity-25");
  });

  it("no dimming when activeTech is null", () => {
    const { container } = render(
      <TechCloud techs={techs} activeTech={null} onTechClick={() => {}} />
    );
    techs.forEach((t) => {
      const tag = container.querySelector(`[data-tech="${t}"]`);
      expect(tag?.className).not.toContain("opacity-25");
    });
  });
});

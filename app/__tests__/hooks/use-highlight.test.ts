import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useHighlight } from "../../hooks/use-highlight";
import type { Experience } from "../../lib/types";

const mockExperiences: Experience[] = [
  {
    company: "TestCo",
    role: "Engineer",
    period: "2020-2021",
    location: "Remote",
    link: "https://test.co",
    desc: "Test",
    techs: ["React", "Node.js", "TypeScript"],
    folder: "testco",
    projects: [],
  },
  {
    company: "AnotherCo",
    role: "Senior Engineer",
    period: "2021-2023",
    location: "Remote",
    link: "https://another.co",
    desc: "Test 2",
    techs: ["Python", "React", "Docker"],
    folder: "anotherco",
    projects: [],
  },
];

describe("useHighlight", () => {
  it("collects all unique techs sorted", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    expect(result.current.allTechs).toEqual([
      "Docker",
      "Node.js",
      "Python",
      "React",
      "TypeScript",
    ]);
  });

  it("starts with no active tech", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    expect(result.current.activeTech).toBeNull();
  });

  it("sets active tech on click", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    act(() => result.current.handleTechClick("React"));
    expect(result.current.activeTech).toBe("React");
  });

  it("clears active tech on second click", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    act(() => result.current.handleTechClick("React"));
    act(() => result.current.handleTechClick("React"));
    expect(result.current.activeTech).toBeNull();
  });

  it("switches active tech when clicking different tech", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    act(() => result.current.handleTechClick("React"));
    act(() => result.current.handleTechClick("Docker"));
    expect(result.current.activeTech).toBe("Docker");
  });

  it("clears highlight via clearHighlight", () => {
    const { result } = renderHook(() => useHighlight(mockExperiences));
    act(() => result.current.handleTechClick("React"));
    act(() => result.current.clearHighlight());
    expect(result.current.activeTech).toBeNull();
  });
});

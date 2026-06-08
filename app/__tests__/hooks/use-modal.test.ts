import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useModal } from "../../hooks/use-modal";

describe("useModal", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("starts closed", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.modalState).toBeNull();
  });

  it("opens modal with given indices", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(2, 0));
    expect(result.current.modalState).toEqual({
      experienceIndex: 2,
      projectIndex: 0,
    });
  });

  it("opens modal with default project index 0", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(1));
    expect(result.current.modalState).toEqual({
      experienceIndex: 1,
      projectIndex: 0,
    });
  });

  it("closes modal", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0));
    act(() => result.current.closeModal());
    expect(result.current.modalState).toBeNull();
  });

  it("blocks body scroll when open", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0));
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body scroll when closed", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0));
    act(() => result.current.closeModal());
    expect(document.body.style.overflow).toBe("");
  });

  it("navigates to next project", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0, 0));
    act(() => result.current.nextProject(5));
    expect(result.current.modalState?.projectIndex).toBe(1);
  });

  it("does not navigate past last project", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0, 4));
    act(() => result.current.nextProject(5));
    expect(result.current.modalState?.projectIndex).toBe(4);
  });

  it("navigates to previous project", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0, 3));
    act(() => result.current.prevProject());
    expect(result.current.modalState?.projectIndex).toBe(2);
  });

  it("does not navigate before first project", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0, 0));
    act(() => result.current.prevProject());
    expect(result.current.modalState?.projectIndex).toBe(0);
  });

  it("jumps to specific project index", () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.openModal(0, 0));
    act(() => result.current.goToProject(3));
    expect(result.current.modalState?.projectIndex).toBe(3);
  });
});

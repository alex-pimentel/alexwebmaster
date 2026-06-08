import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeToggle } from "../../components/theme-toggle";
import { ThemeProvider } from "../../hooks/use-theme";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders within ThemeProvider", async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(await screen.findByRole("button")).toBeDefined();
  });

  it("toggles theme on click", async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    // Wait for ThemeProvider mount effect to apply dark class
    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
  });
});

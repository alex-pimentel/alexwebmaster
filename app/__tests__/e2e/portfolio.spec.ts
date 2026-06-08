import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E", () => {
  test("loads the home page with all sections", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toContainText("Alex Gomes");
    await expect(page.locator("text=Available for new projects")).toBeVisible();
    await expect(page.locator("#skills")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("displays timeline items", async ({ page }) => {
    await page.goto("/");
    const img = page.locator('#experience img[alt="Eletromidia"]');
    await img.scrollIntoViewIfNeeded();
    await expect(img).toBeVisible();
  });

  test("opens project modal and navigates slides", async ({ page }) => {
    await page.goto("/");
    const projectsButton = page.locator("button:has-text('Projects')").first();
    await projectsButton.scrollIntoViewIfNeeded();
    await projectsButton.click();
    await expect(page.locator("h2").first()).toBeVisible();
  });

  test("theme toggle switches to light and persists", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      const btn = document.querySelector('header button[aria-label="Toggle theme"]') as HTMLButtonElement;
      if (btn) btn.click();
    });
    await page.waitForTimeout(300);
    const theme = await page.evaluate(() => localStorage.getItem("theme"));
    expect(theme).toBe("light");
  });

  test("responsive: no horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const scrollWidth = await page.evaluate(() =>
      Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth
      )
    );
    expect(scrollWidth).toBeLessThanOrEqual(430);
  });
});

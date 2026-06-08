import { describe, it, expect } from "vitest";
import { normalizeTech } from "../../lib/types";

describe("normalizeTech", () => {
  it("normalizes 'Next' to 'Next.js'", () => {
    expect(normalizeTech("Next")).toBe("Next.js");
  });

  it("normalizes 'Vue' to 'Vue.js'", () => {
    expect(normalizeTech("Vue")).toBe("Vue.js");
  });

  it("normalizes 'Vuejs' to 'Vue.js'", () => {
    expect(normalizeTech("Vuejs")).toBe("Vue.js");
  });

  it("normalizes 'Angular.js' to 'Angular'", () => {
    expect(normalizeTech("Angular.js")).toBe("Angular");
  });

  it("normalizes 'React.js' to 'React'", () => {
    expect(normalizeTech("React.js")).toBe("React");
  });

  it("normalizes 'FastApi' to 'FastAPI'", () => {
    expect(normalizeTech("FastApi")).toBe("FastAPI");
  });

  it("normalizes 'Nest' to 'Nest.js'", () => {
    expect(normalizeTech("Nest")).toBe("Nest.js");
  });

  it("returns unknown tech as-is", () => {
    expect(normalizeTech("Svelte")).toBe("Svelte");
  });

  it("returns 'React' as-is (already normalized)", () => {
    expect(normalizeTech("React")).toBe("React");
  });
});

import { describe, expect, it } from "vite-plus/test";

import { createGreeting } from "#/index";

describe("createGreeting", () => {
  it("creates a greeting from a name", () => {
    expect(createGreeting({ name: "Vite+" })).toBe("Hello, Vite+.");
  });
});

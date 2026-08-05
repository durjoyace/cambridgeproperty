import { describe, expect, it } from "vitest";
import { escapeHtml } from "./security";

describe("escapeHtml", () => {
  it("escapes content that could break an email template", () => {
    expect(escapeHtml(`<img src=x onerror="alert('x')">&`)).toBe(
      "&lt;img src=x onerror=&quot;alert(&#039;x&#039;)&quot;&gt;&amp;",
    );
  });

  it("handles nullish values", () => {
    expect(escapeHtml(undefined)).toBe("");
  });
});

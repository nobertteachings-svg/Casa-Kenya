import { describe, expect, it } from "vitest";
import { formatKes, isKenyaMobile, normalizeKenyaPhone } from "./kenya-phone.js";

describe("Kenya phone", () => {
  it("normalizes 07xx, 01xx, +254, and 9-digit local mobiles", () => {
    expect(normalizeKenyaPhone("0712345678")).toBe("254712345678");
    expect(normalizeKenyaPhone("+254 712 345 678")).toBe("254712345678");
    expect(normalizeKenyaPhone("254712345678")).toBe("254712345678");
    expect(normalizeKenyaPhone("712345678")).toBe("254712345678");
    expect(normalizeKenyaPhone("0112345678")).toBe("254112345678");
  });

  it("rejects non-Kenyan numbers", () => {
    expect(normalizeKenyaPhone("08012345678")).toBeNull();
    expect(normalizeKenyaPhone("12025551234")).toBeNull();
    expect(normalizeKenyaPhone("2348012345678")).toBeNull();
    expect(normalizeKenyaPhone("2548000000001")).toBeNull();
    expect(isKenyaMobile("254")).toBe(false);
  });

  it("formats money in Kenyan shillings", () => {
    expect(formatKes(5000)).toContain("KES");
    expect(formatKes(5000)).toMatch(/5/);
  });
});

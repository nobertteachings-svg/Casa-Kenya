import { describe, expect, it } from "vitest";
import {
  normalizeStoredLanguage,
  parseLanguageChoice,
  parseLanguageSwitch,
  parseRoleChoice,
  t,
} from "../i18n/index.js";

describe("i18n", () => {
  it("returns English Casa Kenya copy", () => {
    expect(t("en").welcome).toContain("Casa Kenya");
    expect(t().help).toContain("WhatsApp");
    expect(t().mainMenuLandlord).not.toMatch(/Kiswahili|KISWAHILI/);
  });

  it("does not offer a language switch", () => {
    expect(parseLanguageChoice("1")).toBeNull();
    expect(parseLanguageChoice("kiswahili")).toBeNull();
    expect(parseLanguageSwitch("english")).toBeNull();
    expect(normalizeStoredLanguage("sw")).toBe("en");
    expect(normalizeStoredLanguage("fr")).toBe("en");
  });

  it("parses English role choices", () => {
    expect(parseRoleChoice("1")).toBe("landlord");
    expect(parseRoleChoice("I am a landlord")).toBe("landlord");
    expect(parseRoleChoice("2")).toBe("tenant");
    expect(parseRoleChoice("admin")).toBeNull();
  });
});

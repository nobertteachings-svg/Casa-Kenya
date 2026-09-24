import { en, type Language, type Messages } from "./messages.js";

export function t(_lang?: Language): Messages {
  return en;
}

export function parseLanguageChoice(_input: string): Language | null {
  return null;
}

export function parseLanguageSwitch(_input: string): Language | null {
  return null;
}

export function parseRoleChoice(input: string): "landlord" | "tenant" | null {
  const normalized = input.trim().toLowerCase();
  if (normalized === "1" || normalized.includes("landlord")) {
    return "landlord";
  }
  if (normalized === "2" || normalized.includes("tenant")) {
    return "tenant";
  }
  return null;
}

/** Casa Kenya is English-only; stored sw/fr values are ignored. */
export function normalizeStoredLanguage(_raw?: string | null): Language {
  return "en";
}

import type { Language } from "../i18n/messages.js";

/** All 47 Kenyan counties, alphabetical by English name. */
export const KENYA_COUNTIES = [
  { id: "baringo", en: "Baringo", fr: "Baringo" },
  { id: "bomet", en: "Bomet", fr: "Bomet" },
  { id: "bungoma", en: "Bungoma", fr: "Bungoma" },
  { id: "busia", en: "Busia", fr: "Busia" },
  { id: "elgeyo_marakwet", en: "Elgeyo-Marakwet", fr: "Elgeyo-Marakwet" },
  { id: "embu", en: "Embu", fr: "Embu" },
  { id: "garissa", en: "Garissa", fr: "Garissa" },
  { id: "homa_bay", en: "Homa Bay", fr: "Homa Bay" },
  { id: "isiolo", en: "Isiolo", fr: "Isiolo" },
  { id: "kajiado", en: "Kajiado", fr: "Kajiado" },
  { id: "kakamega", en: "Kakamega", fr: "Kakamega" },
  { id: "kericho", en: "Kericho", fr: "Kericho" },
  { id: "kiambu", en: "Kiambu", fr: "Kiambu" },
  { id: "kilifi", en: "Kilifi", fr: "Kilifi" },
  { id: "kirinyaga", en: "Kirinyaga", fr: "Kirinyaga" },
  { id: "kisii", en: "Kisii", fr: "Kisii" },
  { id: "kisumu", en: "Kisumu", fr: "Kisumu" },
  { id: "kitui", en: "Kitui", fr: "Kitui" },
  { id: "kwale", en: "Kwale", fr: "Kwale" },
  { id: "laikipia", en: "Laikipia", fr: "Laikipia" },
  { id: "lamu", en: "Lamu", fr: "Lamu" },
  { id: "machakos", en: "Machakos", fr: "Machakos" },
  { id: "makueni", en: "Makueni", fr: "Makueni" },
  { id: "mandera", en: "Mandera", fr: "Mandera" },
  { id: "marsabit", en: "Marsabit", fr: "Marsabit" },
  { id: "meru", en: "Meru", fr: "Meru" },
  { id: "migori", en: "Migori", fr: "Migori" },
  { id: "mombasa", en: "Mombasa", fr: "Mombasa" },
  { id: "muranga", en: "Murang'a", fr: "Murang'a" },
  { id: "nairobi", en: "Nairobi", fr: "Nairobi" },
  { id: "nakuru", en: "Nakuru", fr: "Nakuru" },
  { id: "nandi", en: "Nandi", fr: "Nandi" },
  { id: "narok", en: "Narok", fr: "Narok" },
  { id: "nyamira", en: "Nyamira", fr: "Nyamira" },
  { id: "nyandarua", en: "Nyandarua", fr: "Nyandarua" },
  { id: "nyeri", en: "Nyeri", fr: "Nyeri" },
  { id: "samburu", en: "Samburu", fr: "Samburu" },
  { id: "siaya", en: "Siaya", fr: "Siaya" },
  { id: "taita_taveta", en: "Taita-Taveta", fr: "Taita-Taveta" },
  { id: "tana_river", en: "Tana River", fr: "Tana River" },
  { id: "tharaka_nithi", en: "Tharaka-Nithi", fr: "Tharaka-Nithi" },
  { id: "trans_nzoia", en: "Trans Nzoia", fr: "Trans Nzoia" },
  { id: "turkana", en: "Turkana", fr: "Turkana" },
  { id: "uasin_gishu", en: "Uasin Gishu", fr: "Uasin Gishu" },
  { id: "vihiga", en: "Vihiga", fr: "Vihiga" },
  { id: "wajir", en: "Wajir", fr: "Wajir" },
  { id: "west_pokot", en: "West Pokot", fr: "West Pokot" },
] as const;

/** Common aliases people type instead of the official county id. */
const REGION_ALIASES: Record<string, (typeof KENYA_COUNTIES)[number]["id"]> = {
  nairobi: "nairobi",
  "nairobi county": "nairobi",
  msa: "mombasa",
  "mombasa county": "mombasa",
  "homa bay": "homa_bay",
  homabay: "homa_bay",
  "elgeyo marakwet": "elgeyo_marakwet",
  elgeyomarakwet: "elgeyo_marakwet",
  "taita taveta": "taita_taveta",
  taitataveta: "taita_taveta",
  "tana river": "tana_river",
  tanariver: "tana_river",
  "tharaka nithi": "tharaka_nithi",
  tharakanithi: "tharaka_nithi",
  "trans nzoia": "trans_nzoia",
  transnzoia: "trans_nzoia",
  "uasin gishu": "uasin_gishu",
  uasingishu: "uasin_gishu",
  eldoret: "uasin_gishu",
  "west pokot": "west_pokot",
  westpokot: "west_pokot",
  muranga: "muranga",
  "muranga county": "muranga",
  thika: "kiambu",
  ruiru: "kiambu",
  syokimau: "machakos",
  kitengela: "kajiado",
  athi: "machakos",
  "athi river": "machakos",
};

/** @deprecated Use KENYA_COUNTIES */
export const KENYA_REGIONS = KENYA_COUNTIES;

export type PropertyCategory = "residential" | "commercial";

/**
 * Kenyan residential typology (how landlords and agents advertise).
 * IDs are Kenya-native; labels avoid Nigerian “parlour / self-contain” wording.
 */
export const RESIDENTIAL_SUBTYPES = [
  {
    id: "single_room",
    en: "Single room (shared bathroom / kitchen)",
    fr: "Chambre simple (sanitaires / cuisine partagés)",
  },
  {
    id: "bedsitter",
    en: "Bedsitter (room + bathroom + kitchenette)",
    fr: "Bedsitter (chambre + salle de bain + kitchenette)",
  },
  {
    id: "studio",
    en: "Studio (open-plan living + sleeping)",
    fr: "Studio (pièce ouverte salon / chambre)",
  },
  {
    id: "one_bedroom",
    en: "1 bedroom (sitting room + bedroom)",
    fr: "1 chambre (salon + chambre)",
  },
  {
    id: "two_bedroom",
    en: "2 bedroom",
    fr: "2 chambres",
  },
  {
    id: "three_bedroom_plus",
    en: "3+ bedroom",
    fr: "3 chambres ou plus",
  },
  {
    id: "maisonette",
    en: "Maisonette (multi-level)",
    fr: "Maisonette (plusieurs niveaux)",
  },
  {
    id: "bungalow",
    en: "Bungalow / standalone house",
    fr: "Bungalow / maison individuelle",
  },
] as const;

/** Map legacy Nigeria-fork subtype ids → Kenya ids (read-path safety). */
const LEGACY_SUBTYPE_ALIASES: Record<string, string> = {
  single_room_basic: "single_room",
  single_room_toilet: "bedsitter",
  single_room_toilet_kitchen: "bedsitter",
  apartment_2room_1toilet: "two_bedroom",
  apartment_2room_2toilet: "two_bedroom",
  apartment_3room_plus: "three_bedroom_plus",
  apartment: "two_bedroom",
  standalone_house: "bungalow",
};

export const COMMERCIAL_SUBTYPES = [
  { id: "shop", en: "Shop / retail space", fr: "Boutique / espace commercial" },
  { id: "office", en: "Office space", fr: "Espace bureau" },
  { id: "warehouse", en: "Warehouse / go-down", fr: "Entrepôt / go-down" },
  { id: "restaurant", en: "Restaurant / bar / café", fr: "Restaurant / bar / café" },
  { id: "salon", en: "Salon / barbershop", fr: "Salon de coiffure / barbier" },
  { id: "workshop", en: "Workshop / garage", fr: "Atelier / garage" },
  { id: "showroom", en: "Showroom / display space", fr: "Showroom / espace d'exposition" },
  { id: "commercial_space", en: "Other commercial space", fr: "Autre espace commercial" },
] as const;

export type PropertySubtype =
  | (typeof RESIDENTIAL_SUBTYPES)[number]["id"]
  | (typeof COMMERCIAL_SUBTYPES)[number]["id"];

function normalizeSubtypeId(subtypeId: string): string {
  return LEGACY_SUBTYPE_ALIASES[subtypeId] ?? subtypeId;
}

export function regionLabel(regionId: string, lang: Language): string {
  const r = KENYA_COUNTIES.find((x) => x.id === regionId);
  if (!r) return regionId;
  return lang === "fr" ? r.fr : r.en;
}

export function subtypeLabel(subtypeId: string, lang: Language): string {
  const id = normalizeSubtypeId(subtypeId);
  const all = [...RESIDENTIAL_SUBTYPES, ...COMMERCIAL_SUBTYPES];
  const s = all.find((x) => x.id === id);
  if (!s) return subtypeId;
  return lang === "fr" ? s.fr : s.en;
}

export function categoryLabel(category: PropertyCategory, lang: Language): string {
  if (category === "commercial") return lang === "fr" ? "Commercial" : "Commercial";
  return lang === "fr" ? "Résidentiel" : "Residential";
}

/** Display label for a listing type in the mobile API. */
export function formatResidentialTypeLabel(
  house: { type?: string; property_subtype?: string; property_category?: string },
  lang: Language
): string {
  if (house.property_subtype) return subtypeLabel(house.property_subtype, lang);
  if (house.property_category === "commercial" || house.property_category === "residential") {
    return categoryLabel(house.property_category, lang);
  }
  return house.type?.trim() || "Home";
}

export function formatRegionMenu(lang: Language): string {
  const lines = KENYA_COUNTIES.map(
    (r, i) => `*${i + 1}.* ${lang === "fr" ? r.fr : r.en}`
  );
  const header =
    lang === "fr" ? "Sélectionnez votre comté :" : "Select your county:";
  return `${header}\n\n${lines.join("\n")}`;
}

export function formatSubtypeMenu(category: PropertyCategory, lang: Language): string {
  const list = category === "residential" ? RESIDENTIAL_SUBTYPES : COMMERCIAL_SUBTYPES;
  const lines = list.map((s, i) => `*${i + 1}.* ${lang === "fr" ? s.fr : s.en}`);
  const header =
    lang === "fr"
      ? category === "residential"
        ? "Type de logement résidentiel :"
        : "Type d'espace commercial :"
      : category === "residential"
        ? "Residential property type:"
        : "Commercial property type:";
  return `${header}\n\n${lines.join("\n")}`;
}

export function parseRegionChoice(choice: string): string | null {
  const trimmed = choice.trim();
  const idx = parseInt(trimmed, 10);
  if (
    Number.isInteger(idx) &&
    String(idx) === trimmed &&
    idx >= 1 &&
    idx <= KENYA_COUNTIES.length
  ) {
    return KENYA_COUNTIES[idx - 1].id;
  }

  const lower = trimmed.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const compact = lower.replace(/\s+/g, "");
  const underscored = lower.replace(/\s+/g, "_");

  const alias = REGION_ALIASES[lower] ?? REGION_ALIASES[compact];
  if (alias) return alias;

  const match = KENYA_COUNTIES.find(
    (r) =>
      r.id === underscored ||
      r.id === compact ||
      r.en.toLowerCase() === lower ||
      r.fr.toLowerCase() === lower ||
      r.en.toLowerCase().replace(/[()']/g, "").trim() === lower
  );
  return match?.id ?? null;
}

/** Comma-separated county ids for AI prompts (kept in sync with KENYA_COUNTIES). */
export function kenyaCountyIdsForPrompt(): string {
  return KENYA_COUNTIES.map((s) => s.id).join(", ");
}

export function parseSubtypeChoice(
  choice: string,
  category: PropertyCategory
): string | null {
  const list = category === "residential" ? RESIDENTIAL_SUBTYPES : COMMERCIAL_SUBTYPES;
  const idx = parseInt(choice.trim(), 10);
  if (idx >= 1 && idx <= list.length) return list[idx - 1].id;

  const lower = choice.trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
  const byAlias = LEGACY_SUBTYPE_ALIASES[choice.trim()] ?? LEGACY_SUBTYPE_ALIASES[lower.replace(/\s+/g, "_")];
  if (byAlias && category === "residential") return byAlias;

  const match = list.find(
    (s) =>
      s.id === lower.replace(/\s+/g, "_") ||
      s.en.toLowerCase().startsWith(lower) ||
      s.id.replace(/_/g, " ") === lower
  );
  return match?.id ?? null;
}

export function parseCategoryChoice(choice: string): PropertyCategory | null {
  const c = choice.trim().toLowerCase();
  if (c === "1" || c.includes("resident")) return "residential";
  if (c === "2" || c.includes("commercial") || c.includes("business")) return "commercial";
  return null;
}

/** Map subtype to legacy `type` column for DB compatibility */
export function legacyTypeFromSubtype(subtype: string): string {
  const id = normalizeSubtypeId(subtype);
  if (id === "single_room" || id === "bedsitter") return "room";
  if (
    id === "studio" ||
    id === "one_bedroom" ||
    id === "two_bedroom" ||
    id === "three_bedroom_plus" ||
    id === "maisonette" ||
    id === "bungalow"
  ) {
    return "apartment";
  }
  if (
    ["shop", "office", "warehouse", "restaurant", "salon", "workshop", "showroom", "commercial_space"].includes(
      id
    )
  ) {
    return "apartment";
  }
  return "room";
}

export const ELECTRICITY_METER_TYPES = [
  { id: "none", en: "No electricity", fr: "Pas d'électricité" },
  { id: "prepaid", en: "Token meter (KPLC prepaid)", fr: "Compteur à jetons (prépayé KPLC)" },
  { id: "postpaid", en: "Postpaid meter (KPLC bill)", fr: "Compteur postpayé (facture KPLC)" },
] as const;

export type ElectricityMeter = (typeof ELECTRICITY_METER_TYPES)[number]["id"];

export function electricityMeterLabel(meter: string, lang: Language): string {
  const m = ELECTRICITY_METER_TYPES.find((x) => x.id === meter);
  if (!m) return meter;
  return lang === "fr" ? m.fr : m.en;
}

export function formatElectricityMeterMenu(lang: Language): string {
  const lines = ELECTRICITY_METER_TYPES.map(
    (m, i) => `*${i + 1}.* ${lang === "fr" ? m.fr : m.en}`
  );
  const header =
    lang === "fr"
      ? "Type de compteur électrique :"
      : "Electricity meter type:";
  return `${header}\n\n${lines.join("\n")}`;
}

export function parseElectricityMeterChoice(choice: string): ElectricityMeter | null {
  const idx = parseInt(choice.trim(), 10);
  if (idx >= 1 && idx <= ELECTRICITY_METER_TYPES.length) {
    return ELECTRICITY_METER_TYPES[idx - 1].id;
  }
  const lower = choice.trim().toLowerCase();
  if (["none", "no", "non", "pas"].some((w) => lower.includes(w))) return "none";
  if (
    lower.includes("prepaid") ||
    lower.includes("token") ||
    lower.includes("prépayé") ||
    lower.includes("prepaye") ||
    lower.includes("kplc")
  ) {
    return "prepaid";
  }
  if (lower.includes("postpaid") || lower.includes("postpayé") || lower.includes("postpaye") || lower.includes("bill")) {
    return "postpaid";
  }
  return null;
}

export function formatFacilitiesSummary(
  draft: {
    fenced?: boolean;
    parking?: boolean;
    standby_generator?: boolean;
    borehole?: boolean;
    water?: boolean;
    electricity_meter?: ElectricityMeter;
    furnished?: boolean;
    security?: boolean;
  },
  lang: Language
): string {
  const boolItems = [
    { key: "fenced", en: "Gated / fenced", fr: "Clôturé / sécurisé" },
    { key: "parking", en: "Parking", fr: "Parking" },
    { key: "standby_generator", en: "Backup power / generator", fr: "Alimentation de secours / générateur" },
    { key: "borehole", en: "Borehole / water tank", fr: "Forage / réservoir d'eau" },
    { key: "water", en: "Reliable water supply", fr: "Eau fiable" },
    { key: "furnished", en: "Furnished", fr: "Meublé" },
    { key: "security", en: "Security / askari", fr: "Sécurité / askari" },
  ] as const;

  const lines = boolItems.map(({ key, en, fr }) => {
    const val = draft[key as keyof typeof draft];
    const yes = lang === "fr" ? "Oui" : "Yes";
    const no = lang === "fr" ? "Non" : "No";
    const label = lang === "fr" ? fr : en;
    return `${label}: ${val ? yes : no}`;
  });

  if (draft.electricity_meter) {
    lines.push(
      `${lang === "fr" ? "Électricité" : "Electricity"}: ${electricityMeterLabel(draft.electricity_meter, lang)}`
    );
  }

  return lines.join("\n");
}

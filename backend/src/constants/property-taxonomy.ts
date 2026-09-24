import type { Language } from "../i18n/messages.js";

/** All 47 Kenyan counties, alphabetical by English name. */
export const KENYA_COUNTIES = [
  { id: "baringo", en: "Baringo", sw: "Baringo" },
  { id: "bomet", en: "Bomet", sw: "Bomet" },
  { id: "bungoma", en: "Bungoma", sw: "Bungoma" },
  { id: "busia", en: "Busia", sw: "Busia" },
  { id: "elgeyo_marakwet", en: "Elgeyo-Marakwet", sw: "Elgeyo-Marakwet" },
  { id: "embu", en: "Embu", sw: "Embu" },
  { id: "garissa", en: "Garissa", sw: "Garissa" },
  { id: "homa_bay", en: "Homa Bay", sw: "Homa Bay" },
  { id: "isiolo", en: "Isiolo", sw: "Isiolo" },
  { id: "kajiado", en: "Kajiado", sw: "Kajiado" },
  { id: "kakamega", en: "Kakamega", sw: "Kakamega" },
  { id: "kericho", en: "Kericho", sw: "Kericho" },
  { id: "kiambu", en: "Kiambu", sw: "Kiambu" },
  { id: "kilifi", en: "Kilifi", sw: "Kilifi" },
  { id: "kirinyaga", en: "Kirinyaga", sw: "Kirinyaga" },
  { id: "kisii", en: "Kisii", sw: "Kisii" },
  { id: "kisumu", en: "Kisumu", sw: "Kisumu" },
  { id: "kitui", en: "Kitui", sw: "Kitui" },
  { id: "kwale", en: "Kwale", sw: "Kwale" },
  { id: "laikipia", en: "Laikipia", sw: "Laikipia" },
  { id: "lamu", en: "Lamu", sw: "Lamu" },
  { id: "machakos", en: "Machakos", sw: "Machakos" },
  { id: "makueni", en: "Makueni", sw: "Makueni" },
  { id: "mandera", en: "Mandera", sw: "Mandera" },
  { id: "marsabit", en: "Marsabit", sw: "Marsabit" },
  { id: "meru", en: "Meru", sw: "Meru" },
  { id: "migori", en: "Migori", sw: "Migori" },
  { id: "mombasa", en: "Mombasa", sw: "Mombasa" },
  { id: "muranga", en: "Murang'a", sw: "Murang'a" },
  { id: "nairobi", en: "Nairobi", sw: "Nairobi" },
  { id: "nakuru", en: "Nakuru", sw: "Nakuru" },
  { id: "nandi", en: "Nandi", sw: "Nandi" },
  { id: "narok", en: "Narok", sw: "Narok" },
  { id: "nyamira", en: "Nyamira", sw: "Nyamira" },
  { id: "nyandarua", en: "Nyandarua", sw: "Nyandarua" },
  { id: "nyeri", en: "Nyeri", sw: "Nyeri" },
  { id: "samburu", en: "Samburu", sw: "Samburu" },
  { id: "siaya", en: "Siaya", sw: "Siaya" },
  { id: "taita_taveta", en: "Taita-Taveta", sw: "Taita-Taveta" },
  { id: "tana_river", en: "Tana River", sw: "Tana River" },
  { id: "tharaka_nithi", en: "Tharaka-Nithi", sw: "Tharaka-Nithi" },
  { id: "trans_nzoia", en: "Trans Nzoia", sw: "Trans Nzoia" },
  { id: "turkana", en: "Turkana", sw: "Turkana" },
  { id: "uasin_gishu", en: "Uasin Gishu", sw: "Uasin Gishu" },
  { id: "vihiga", en: "Vihiga", sw: "Vihiga" },
  { id: "wajir", en: "Wajir", sw: "Wajir" },
  { id: "west_pokot", en: "West Pokot", sw: "West Pokot" },
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
    sw: "Chumba kimoja (bafu / jiko la pamoja)",
  },
  {
    id: "double_room",
    en: "Double room (two rooms, shared facilities)",
    sw: "Vyumba viwili (vifaa vya pamoja)",
  },
  {
    id: "bedsitter",
    en: "Bedsitter (room + bathroom + kitchenette)",
    sw: "Bedsitter (chumba + bafu + jiko dogo)",
  },
  {
    id: "studio",
    en: "Studio (open-plan living + sleeping)",
    sw: "Studio (sebule na kulala pamoja)",
  },
  {
    id: "one_bedroom",
    en: "1 bedroom (sitting room + bedroom)",
    sw: "Chumba 1 (sebule + chumba)",
  },
  {
    id: "two_bedroom",
    en: "2 bedroom",
    sw: "Vyumba 2",
  },
  {
    id: "three_bedroom_plus",
    en: "3+ bedroom",
    sw: "Vyumba 3 au zaidi",
  },
  {
    id: "maisonette",
    en: "Maisonette (multi-level)",
    sw: "Maisonette (ghorofa mbili)",
  },
  {
    id: "bungalow",
    en: "Bungalow / standalone house",
    sw: "Bungalow / nyumba pekee",
  },
  {
    id: "servant_quarter",
    en: "Servant quarter (SQ / annex)",
    sw: "Servant quarter (SQ / annex)",
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
  sq: "servant_quarter",
  "servant quarters": "servant_quarter",
  "double rooms": "double_room",
};

export const COMMERCIAL_SUBTYPES = [
  { id: "shop", en: "Shop / retail space", sw: "Duka / nafasi ya biashara" },
  { id: "office", en: "Office space", sw: "Ofisi" },
  { id: "warehouse", en: "Warehouse / go-down", sw: "Godown / ghala" },
  { id: "restaurant", en: "Restaurant / bar / café", sw: "Restaurant / bar / café" },
  { id: "salon", en: "Salon / barbershop", sw: "Saluni / kinyozi" },
  { id: "workshop", en: "Workshop / garage", sw: "Warsha / garaji" },
  { id: "showroom", en: "Showroom / display space", sw: "Showroom" },
  { id: "commercial_space", en: "Other commercial space", sw: "Nafasi nyingine ya biashara" },
] as const;

export type PropertySubtype =
  | (typeof RESIDENTIAL_SUBTYPES)[number]["id"]
  | (typeof COMMERCIAL_SUBTYPES)[number]["id"];

function normalizeSubtypeId(subtypeId: string): string {
  return LEGACY_SUBTYPE_ALIASES[subtypeId] ?? subtypeId;
}

export function regionLabel(regionId: string, lang?: Language): string {
  const r = KENYA_COUNTIES.find((x) => x.id === regionId);
  if (!r) return regionId;
  return r.en;
}

export function subtypeLabel(subtypeId: string, lang?: Language): string {
  const id = normalizeSubtypeId(subtypeId);
  const all = [...RESIDENTIAL_SUBTYPES, ...COMMERCIAL_SUBTYPES];
  const s = all.find((x) => x.id === id);
  if (!s) return subtypeId;
  return s.en;
}

export function categoryLabel(category: PropertyCategory, lang?: Language): string {
  if (category === "commercial") return "Commercial";
  return "Residential";
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
    (r, i) => `*${i + 1}.* ${r.en}`
  );
  const header =
    "Select your county:";
  return `${header}\n\n${lines.join("\n")}`;
}

export function formatSubtypeMenu(category: PropertyCategory, lang: Language): string {
  const list = category === "residential" ? RESIDENTIAL_SUBTYPES : COMMERCIAL_SUBTYPES;
  const lines = list.map((s, i) => `*${i + 1}.* ${s.en}`);
  const header =
    category === "residential"
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
      r.sw.toLowerCase() === lower ||
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
  if (c === "1" || c.includes("resident") || c.includes("makazi") || c.includes("nyumba")) return "residential";
  if (c === "2" || c.includes("commercial") || c.includes("business") || c.includes("biashara")) return "commercial";
  return null;
}

/** Map subtype to legacy `type` column for DB compatibility */
export function legacyTypeFromSubtype(subtype: string): string {
  const id = normalizeSubtypeId(subtype);
  if (id === "single_room" || id === "double_room" || id === "bedsitter" || id === "servant_quarter") {
    return "room";
  }
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
  { id: "none", en: "No electricity", sw: "Hakuna umeme" },
  { id: "prepaid", en: "Token meter (KPLC prepaid)", sw: "Mita ya tokeni (KPLC prepaid)" },
  { id: "postpaid", en: "Postpaid meter (KPLC bill)", sw: "Mita ya postpaid (bili ya KPLC)" },
] as const;

export type ElectricityMeter = (typeof ELECTRICITY_METER_TYPES)[number]["id"];

export function electricityMeterLabel(meter: string, lang: Language): string {
  const m = ELECTRICITY_METER_TYPES.find((x) => x.id === meter);
  if (!m) return meter;
  return m.en;
}

export function formatElectricityMeterMenu(lang: Language): string {
  const lines = ELECTRICITY_METER_TYPES.map(
    (m, i) => `*${i + 1}.* ${m.en}`
  );
  const header =
    "Electricity meter type:";
  return `${header}\n\n${lines.join("\n")}`;
}

export function parseElectricityMeterChoice(choice: string): ElectricityMeter | null {
  const idx = parseInt(choice.trim(), 10);
  if (idx >= 1 && idx <= ELECTRICITY_METER_TYPES.length) {
    return ELECTRICITY_METER_TYPES[idx - 1].id;
  }
  const lower = choice.trim().toLowerCase();
  if (["none", "no", "non", "pas", "hakuna"].some((w) => lower.includes(w))) return "none";
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
    { key: "fenced", en: "Gated / fenced", sw: "Eneo lenye lango / ua" },
    { key: "parking", en: "Parking", sw: "Parking" },
    { key: "standby_generator", en: "Backup power / generator", sw: "Umeme wa akiba / jenereta" },
    { key: "borehole", en: "Borehole / water tank", sw: "Kisima / tanki la maji" },
    { key: "water", en: "Reliable water supply", sw: "Maji ya kutegemewa" },
    { key: "furnished", en: "Furnished", sw: "Imewekewa samani" },
    { key: "security", en: "Security / askari", sw: "Askari / usalama" },
  ] as const;

  const lines = boolItems.map(({ key, en, sw }) => {
    const val = draft[key as keyof typeof draft];
    const yes = "Yes";
    const no = "No";
    const label = en;
    return `${label}: ${val ? yes : no}`;
  });

  if (draft.electricity_meter) {
    lines.push(
      `${"Electricity"}: ${electricityMeterLabel(draft.electricity_meter, lang)}`
    );
  }

  return lines.join("\n");
}

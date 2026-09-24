import type { Language } from "../api/client";

/** Kenyan residential types — keep keys aligned with backend property-taxonomy. */
export const RESIDENTIAL_SUBTYPES = [
  { id: "1", key: "single_room", en: "Single room (shared facilities)", sw: "Chumba kimoja (vifaa vya pamoja)" },
  { id: "2", key: "double_room", en: "Double room", sw: "Vyumba viwili" },
  { id: "3", key: "bedsitter", en: "Bedsitter", sw: "Bedsitter" },
  { id: "4", key: "studio", en: "Studio", sw: "Studio" },
  { id: "5", key: "one_bedroom", en: "1 bedroom", sw: "Chumba 1" },
  { id: "6", key: "two_bedroom", en: "2 bedroom", sw: "Vyumba 2" },
  { id: "7", key: "three_bedroom_plus", en: "3+ bedroom", sw: "Vyumba 3+" },
  { id: "8", key: "maisonette", en: "Maisonette", sw: "Maisonette" },
  { id: "9", key: "bungalow", en: "Bungalow / house", sw: "Bungalow / nyumba" },
  { id: "10", key: "servant_quarter", en: "Servant quarter (SQ)", sw: "Servant quarter (SQ)" },
] as const;

export const COMMERCIAL_SUBTYPES = [
  { id: "1", key: "shop", en: "Shop", sw: "Duka" },
  { id: "2", key: "office", en: "Office", sw: "Ofisi" },
  { id: "3", key: "warehouse", en: "Warehouse / go-down", sw: "Godown" },
  { id: "4", key: "restaurant", en: "Restaurant / bar", sw: "Restaurant / bar" },
  { id: "5", key: "salon", en: "Salon", sw: "Saluni" },
  { id: "6", key: "workshop", en: "Workshop", sw: "Warsha" },
  { id: "7", key: "showroom", en: "Showroom", sw: "Showroom" },
  { id: "8", key: "commercial_space", en: "Other commercial", sw: "Biashara nyingine" },
] as const;

export const ELECTRICITY_OPTIONS = [
  { id: "1", key: "none", en: "No electricity", sw: "Hakuna umeme" },
  { id: "2", key: "prepaid", en: "Token meter (prepaid)", sw: "Mita ya tokeni" },
  { id: "3", key: "postpaid", en: "Postpaid (KPLC bill)", sw: "Postpaid (bili ya KPLC)" },
] as const;

export function subtypeLabel(id: string, lang: Language, category: "residential" | "commercial"): string {
  const list = category === "residential" ? RESIDENTIAL_SUBTYPES : COMMERCIAL_SUBTYPES;
  const item = list.find((x) => x.id === id || x.key === id);
  if (!item) return id;
  return item.en;
}

/** Bedroom / bathroom count prompts for larger homes. */
export function residentialSubtypeNeedsCounts(key: string): boolean {
  return (
    key === "one_bedroom" ||
    key === "two_bedroom" ||
    key === "three_bedroom_plus" ||
    key === "maisonette" ||
    key === "bungalow" ||
    key === "studio"
  );
}

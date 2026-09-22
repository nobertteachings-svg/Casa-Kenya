/** 47 Kenyan counties — keep in sync with backend property-taxonomy. */
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

/** @deprecated Prefer KENYA_COUNTIES */
export const CAMEROON_REGIONS = KENYA_COUNTIES;

export type RegionId = (typeof KENYA_COUNTIES)[number]["id"];

export function regionLabel(id: string, lang: "en" | "fr"): string {
  const r = KENYA_COUNTIES.find((x) => x.id === id);
  if (!r) return id;
  return lang === "fr" ? r.fr : r.en;
}

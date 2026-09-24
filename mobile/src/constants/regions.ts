/** 47 Kenyan counties — keep in sync with backend property-taxonomy. */
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

export type RegionId = (typeof KENYA_COUNTIES)[number]["id"];

export function regionLabel(id: string, lang?: "en"): string {
  const r = KENYA_COUNTIES.find((x) => x.id === id);
  if (!r) return id;
  return r.en;
}

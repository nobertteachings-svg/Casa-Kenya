/** Major Kenyan towns / cities used in listing and search shortcuts. */
export const MAJOR_TOWNS = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Ruiru",
  "Kiambu",
  "Machakos",
  "Kitengela",
  "Syokimau",
  "Malindi",
  "Nyeri",
  "Kakamega",
] as const;

export const NEIGHBOURHOODS: Record<string, string[]> = {
  Nairobi: [
    "Westlands",
    "Kilimani",
    "Lavington",
    "Kileleshwa",
    "South B",
    "South C",
    "Eastleigh",
    "Kasarani",
    "Roysambu",
    "Parklands",
    "Ngong Road",
    "Karen",
    "Langata",
    "Pipeline",
    "Umoja",
    "Donholm",
  ],
  Mombasa: ["Nyali", "Bamburi", "Kizingo", "Likoni", "Changamwe", "Tudor", "Shanzu"],
  Kisumu: ["Milimani", "Nyalenda", "Kondele", "Mamboleo", "Manyatta"],
  Nakuru: ["Section 58", "Milimani", "Pipeline", "Free Area", "Lanet"],
  Eldoret: ["Elgon View", "Pioneer", "Kapsoya", "Langas", "West Indies"],
  Thika: ["Makongeni", "Ngoigwa", "Landless", "Biafra"],
  Ruiru: ["Kamakis", "Membley", "Githunguri Road", "Mugutha"],
  Kiambu: ["Kiambu Town", "Ruiru Road", "Ndumberi"],
  Machakos: ["Machakos Town", "Katoloni", "Miwani"],
  Kitengela: ["Namanga Road", "EPZ", "Olooloitikosh"],
  Syokimau: ["Katani Road", "Mombasa Road", "Airport North"],
  Malindi: ["Shella", "Casuarina", "Watamu Road"],
  Nyeri: ["Ruring'u", "Kamakwa", "King'ong'o"],
  Kakamega: ["Amachina", "Milimani", "Lubao"],
};

export function neighbourhoodsForTown(town: string): string[] {
  const key = Object.keys(NEIGHBOURHOODS).find((k) => k.toLowerCase() === town.toLowerCase());
  return key ? NEIGHBOURHOODS[key] : ["Town centre", "Estate", "Along main road"];
}

/** Typical monthly rent bands in KES. */
export const RENT_PRESETS = [
  8000, 12000, 15000, 20000, 25000, 30000, 40000, 50000, 70000, 100000, 150000, 250000,
] as const;

export const MONTHS_UPFRONT_OPTIONS = [1, 2, 3, 6, 12] as const;

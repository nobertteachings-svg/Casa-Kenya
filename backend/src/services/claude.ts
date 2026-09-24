import Anthropic from "@anthropic-ai/sdk";
import { env, isClaudeConfigured } from "../config/env.js";
import { kenyaCountyIdsForPrompt } from "../constants/property-taxonomy.js";

let client: Anthropic | null = null;

function getClient(): Anthropic {
  if (!client) {
    client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  }
  return client;
}

export interface ParsedListing {
  property_category: "residential" | "commercial";
  property_subtype: string;
  rent: number;
  months_upfront: number;
  region?: string;
  town?: string;
  neighbourhood?: string;
  city?: string;
  fenced: boolean;
  water: boolean;
  borehole: boolean;
  parking: boolean;
  electricity_meter: "none" | "prepaid" | "postpaid";
  furnished: boolean;
  security: boolean;
  standby_generator: boolean;
  description: string;
}

export interface ParsedSearch {
  property_category?: "residential" | "commercial";
  property_subtype?: string;
  max_rent?: number;
  region?: string;
  town?: string;
  neighbourhood?: string;
  city?: string;
  water?: boolean;
  parking?: boolean;
  electricity_meter?: "none" | "prepaid" | "postpaid";
  furnished?: boolean;
  fenced?: boolean;
  borehole?: boolean;
  standby_generator?: boolean;
  raw_query: string;
}

export async function parseListingFromText(
  text: string,
  language: "en"
): Promise<ParsedListing | null> {
  if (!isClaudeConfigured) return null;

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Extract a Kenya rental listing from this landlord message. Language: ${language}.
Return ONLY valid JSON with keys:
- property_category: "residential" or "commercial"
- property_subtype: one of single_room, double_room, bedsitter, studio, one_bedroom, two_bedroom, three_bedroom_plus, maisonette, bungalow, servant_quarter (residential) OR shop, office, warehouse, restaurant, salon, workshop, showroom, commercial_space (commercial)
- rent (number KES/month), months_upfront (number)
- region (Kenya county id — one of: ${kenyaCountyIdsForPrompt()}; e.g. nairobi, mombasa, kiambu)
- town, neighbourhood (quarter)
- fenced (gated), water, borehole (or water tank), parking, electricity_meter (none|prepaid/token|postpaid), furnished, security (askari), standby_generator/backup power (booleans except electricity_meter)
- description (professional paragraph)

Message: "${text}"`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text") return null;

  try {
    const json = block.text.replace(/```json\n?|\n?```/g, "").trim();
    return JSON.parse(json) as ParsedListing;
  } catch {
    return null;
  }
}

export async function parseSearchFromText(
  text: string,
  language: "en"
): Promise<ParsedSearch> {
  if (!isClaudeConfigured) {
    return { raw_query: text };
  }

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `Extract rental search filters from this tenant message in Kenya. Language: ${language}.
Return ONLY valid JSON with optional keys: property_category (residential|commercial), property_subtype, max_rent, region, town, neighbourhood, city, water, parking, electricity_meter (none|prepaid|postpaid), furnished, fenced, borehole, standby_generator, raw_query.

region must be a Kenya county id when present (one of: ${kenyaCountyIdsForPrompt()}; e.g. nairobi, mombasa).
Residential subtypes: single_room, double_room, bedsitter, studio, one_bedroom, two_bedroom, three_bedroom_plus, maisonette, bungalow, servant_quarter. Prefer Kenyan terms (bedsitter, maisonette) over Nigerian parlour/self-contain wording.
Commercial subtypes: shop, office, warehouse, restaurant, salon, workshop, showroom, commercial_space.

Message: "${text}"`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text") return { raw_query: text };

  try {
    const json = block.text.replace(/```json\n?|\n?```/g, "").trim();
    return JSON.parse(json) as ParsedSearch;
  } catch {
    return { raw_query: text };
  }
}

export async function compareHouses(
  houses: Array<{ house_id: string; type: string; rent: number; distance_km?: number; facilities: string }>,
  lang: "en"
): Promise<string> {
  if (!isClaudeConfigured) {
    return houses
      .map((h) => `*${h.house_id}*: ${h.rent.toLocaleString()} KES — ${h.facilities}`)
      .join("\n");
  }

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Compare these Kenya rental listings for a tenant. Language: ${lang}.
Include price fairness, facilities, and a recommendation. Be concise for WhatsApp.

Listings: ${JSON.stringify(houses)}`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  return block?.type === "text" ? block.text : "Comparison unavailable.";
}

export async function suggestPriceAdjustment(
  house: { house_id: string; rent: number; neighbourhood: string | null; type: string },
  areaAvgRent: number,
  lang: "en"
): Promise<string> {
  if (!isClaudeConfigured) {
    const diff = house.rent - areaAvgRent;
    if (diff > 0) {
      return `Your rent is ${diff.toLocaleString()} KES above area average. Consider lowering.`;
    }
    return "Your price looks competitive.";
  }

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `A landlord's listing ${house.house_id} in ${house.neighbourhood ?? "Kenya"} has had no unlocks in 2 weeks.
Rent: ${house.rent} KES. Area average: ${areaAvgRent} KES. Type: ${house.type}.
Suggest a price adjustment in ${lang}. Be specific with KES amounts. Keep under 150 words.`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  return block?.type === "text" ? block.text : "";
}

export async function generateRentalAgreement(
  house: {
    house_id: string;
    type: string;
    rent: number;
    months_upfront: number;
    neighbourhood: string | null;
    landlord_phone: string;
  },
  tenantPhone: string,
  lang: "en"
): Promise<string> {
  if (!isClaudeConfigured) {
    return `RENTAL AGREEMENT — ${house.house_id}\nLandlord: ${house.landlord_phone}\nTenant: ${tenantPhone}\nRent: ${house.rent} KES/month\nDeposit: ${house.months_upfront} months`;
  }

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `Generate a simple rental agreement template for Kenya.
Language: ${lang}. Property: ${house.type} in ${house.neighbourhood ?? "Kenya"}.
Rent: ${house.rent} KES/month. Deposit: ${house.months_upfront} months upfront.
Landlord phone: ${house.landlord_phone}. Tenant phone: ${tenantPhone}.
Include standard Kenya rental clauses. Format for WhatsApp.`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  return block?.type === "text" ? block.text : "Agreement generation failed.";
}

export async function transcribeVoiceNote(
  audioDescription: string,
  lang: "en"
): Promise<string | null> {
  if (!isClaudeConfigured) return null;

  const response = await getClient().messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `A WhatsApp user sent a voice note about housing in Kenya (${lang}).
The system could not auto-transcribe audio yet. If this is a placeholder, return null.
Otherwise process this text as if it were transcribed speech about finding or listing a home:
"${audioDescription}"`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === "text");
  return block?.type === "text" ? block.text : null;
}

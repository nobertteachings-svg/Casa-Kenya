import type { Language } from "../../i18n/messages.js";
import type { House } from "../houses.js";
import { sendTextMessage } from "../transport.js";

export interface ConciergeContent {
  checklist: string;
  negotiation: string;
  documents: string;
}

export function buildConciergeContent(house: House, lang: Language): ConciergeContent {
  const checklist = buildEnglishChecklist(house);
  const negotiation =
    `Negotiation tips:\n` +
        `• Ask if rent includes water and electricity\n` +
        `• Offer a longer lease for a better rate\n` +
        `• Check if the landlord accepts monthly payments\n` +
        `• In Kenya, agree agency and legal fees in writing before you pay`;
  const documents =
    `Documents commonly asked for in Kenya:\n` +
        `• National ID, international passport, or driver's licence\n` +
        `• Signed tenancy agreement\n` +
        `• Receipt for rent paid in advance\n` +
        `• Latest KPLC bill or token meter statement for the property\n` +
        `• Condition report (recommended)`;
  return { checklist, negotiation, documents };
}

export async function sendPostUnlockConcierge(
  phone: string,
  house: House,
  lang: Language
): Promise<void> {
  const content = buildConciergeContent(house, lang);
  await sendTextMessage(phone, content.checklist);
  await sendTextMessage(
    phone,
    `🤝 *Negotiation tips:*\n${content.negotiation}`);
  await sendTextMessage(
    phone,
    `📄 *Documents to take along:*\n${content.documents}\n\nReply *LEASE* to generate an agreement template.`);
}

function meterChecklistItem(house: House): string {
  const meter = house.electricity_meter ?? (house.electricity ? "postpaid" : "none");
  if (meter === "prepaid") {
    return "✅ Check token meter (KPLC) and current credit";
  }
  if (meter === "postpaid") {
    return "✅ Check postpaid meter and recent KPLC bills";
  }
  return "⚠️ No electricity — confirm with landlord";
}

function buildEnglishChecklist(house: House): string {
  const items = [
    "✅ Check water pressure in all taps",
    meterChecklistItem(house),
    house.fenced ? "✅ Inspect gate / compound security" : "⚠️ Not gated — check neighbourhood safety",
    house.parking ? "✅ Confirm parking space size" : null,
    "✅ Check for mould, leaks, and pests",
    "✅ Visit at different times of day (noise)",
    "✅ Ask neighbours about the area",
  ].filter(Boolean);
  return `📋 *Visit checklist for ${house.house_id}:*\n${items.join("\n")}`;
}


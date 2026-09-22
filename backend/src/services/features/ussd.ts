import { query } from "../../db/pool.js";
import { searchNearbyHouses } from "../houses.js";

type UssdSession = { step: string; data: Record<string, unknown> };

export async function handleUssdRequest(params: {
  sessionId: string;
  phone: string;
  text: string;
}): Promise<string> {
  const { sessionId, phone, text } = params;
  const input = text.trim();
  const parts = input.split("*").filter(Boolean);
  const lastInput = parts[parts.length - 1] ?? "";

  let session = await getUssdSession(sessionId);
  if (!session) {
    session = { step: "menu", data: {} };
  }

  switch (session.step) {
    case "menu": {
      if (lastInput === "1") {
        await saveUssdSession(sessionId, phone, { step: "search_area", data: {} });
        return "CON Enter neighbourhood (e.g. Westlands):\n";
      }
      if (lastInput === "2") {
        await saveUssdSession(sessionId, phone, { step: "list_type", data: {} });
        return "CON List property:\n1.Bedsitter 2.1BR 3.2BR 4.Bungalow\n";
      }
      return (
        "CON Welcome to Casa Kenya\n" +
        "1. Search homes\n" +
        "2. List property\n" +
        "For full features, use WhatsApp.\n"
      );
    }

    case "search_area": {
      const area = lastInput.toLowerCase();
      // Default: Nairobi CBD
      let lat = -1.2921,
        lon = 36.8219;
      if (area.includes("westlands") || area.includes("kilimani") || area.includes("nairobi")) {
        lat = -1.2679;
        lon = 36.8102;
      } else if (area.includes("mombasa") || area.includes("nyali")) {
        lat = -4.0435;
        lon = 39.6682;
      } else if (area.includes("kisumu")) {
        lat = -0.0917;
        lon = 34.768;
      }
      const results = await searchNearbyHouses(lat, lon, 10);
      if (results.length === 0) {
        await saveUssdSession(sessionId, phone, { step: "menu", data: {} });
        return "END No homes found. Try WhatsApp for better search.\n";
      }
      const list = results
        .slice(0, 3)
        .map((h, i) => `${i + 1}.${h.house_id} ${h.rent}KES`)
        .join(" ");
      await saveUssdSession(sessionId, phone, { step: "menu", data: {} });
      return `END Found: ${list}\nUse WhatsApp to unlock contacts.\n`;
    }

    case "list_type": {
      const types = ["bedsitter", "one_bedroom", "two_bedroom", "bungalow"];
      const idx = parseInt(lastInput, 10) - 1;
      if (idx < 0 || idx > 3) return "CON Invalid. Enter 1-4:\n";
      await saveUssdSession(sessionId, phone, {
        step: "list_rent",
        data: { type: types[idx] },
      });
      return "CON Enter monthly rent in KES:\n";
    }

    case "list_rent": {
      const rent = parseInt(lastInput.replace(/\D/g, ""), 10);
      if (!rent) return "CON Invalid rent. Try again:\n";
      await saveUssdSession(sessionId, phone, { step: "menu", data: {} });
      return "END To list on Casa you need WhatsApp: ID verify + property video required.\n";
    }

    default:
      await saveUssdSession(sessionId, phone, { step: "menu", data: {} });
      return "CON Welcome to Casa\n1.Search 2.List\n";
  }
}

async function getUssdSession(sessionId: string): Promise<UssdSession | null> {
  const result = await query<{ step: string; data: Record<string, unknown> }>(
    `SELECT step, data FROM ussd_sessions WHERE session_id = $1`,
    [sessionId]
  );
  if (!result.rows[0]) return null;
  return { step: result.rows[0].step, data: result.rows[0].data };
}

async function saveUssdSession(
  sessionId: string,
  phone: string,
  session: UssdSession
): Promise<void> {
  await query(
    `INSERT INTO ussd_sessions (session_id, phone, step, data, updated_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (session_id) DO UPDATE SET
       step = EXCLUDED.step, data = EXCLUDED.data, updated_at = NOW()`,
    [sessionId, phone, session.step, JSON.stringify(session.data)]
  );
}

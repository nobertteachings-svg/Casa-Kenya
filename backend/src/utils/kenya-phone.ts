/** Kenyan mobile in E.164 digits without plus: 2547XXXXXXXX or 2541XXXXXXXX. */
export function normalizeKenyaPhone(input: string): string | null {
  const raw = input.trim().replace(/\D/g, "");
  if (!raw) return null;

  let digits = raw;
  if (digits.startsWith("254")) {
    /* already international */
  } else if (digits.startsWith("0") && digits.length === 10) {
    digits = `254${digits.slice(1)}`;
  } else if (digits.length === 9 && /^[17]/.test(digits)) {
    digits = `254${digits}`;
  } else {
    return null;
  }

  return /^254[17]\d{8}$/.test(digits) ? digits : null;
}

export function isKenyaMobile(input: string): boolean {
  return normalizeKenyaPhone(input) !== null;
}

export const KENYA_LOCALE = "en-KE";
export const KENYA_TIMEZONE = "Africa/Nairobi";

export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString(KENYA_LOCALE)}`;
}

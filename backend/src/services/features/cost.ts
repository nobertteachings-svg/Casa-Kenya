import { env, isPaymentsEnabled } from "../../config/env.js";

export function calculateMoveInCost(rent: number, monthsUpfront: number): {
  rentMonthly: number;
  upfrontTotal: number;
  unlockFee: number;
  grandTotal: number;
} {
  const upfrontTotal = rent * monthsUpfront;
  const unlockFee = isPaymentsEnabled ? env.UNLOCK_FEE_KES : 0;
  return {
    rentMonthly: rent,
    upfrontTotal,
    unlockFee,
    grandTotal: upfrontTotal + unlockFee,
  };
}

export function formatMoveInCost(
  rent: number,
  monthsUpfront: number,
  lang: "en" | "fr"
): string {
  const { upfrontTotal, unlockFee, grandTotal } = calculateMoveInCost(
    rent,
    monthsUpfront
  );
  if (lang === "fr") {
    const feeLine = isPaymentsEnabled
      ? `• Frais de déblocage Casa: ${unlockFee.toLocaleString()} KES\n`
      : "";
    return (
      `💰 *Coût total pour emménager:*\n` +
      `• Loyer: ${rent.toLocaleString()} KES/mois\n` +
      `• Avance (${monthsUpfront} mois): ${upfrontTotal.toLocaleString()} KES\n` +
      feeLine +
      `━━━━━━━━━━━━━━━━\n` +
      `*Total: ${grandTotal.toLocaleString()} KES*`
    );
  }
  const feeLine = isPaymentsEnabled
    ? `• Casa unlock fee: ${unlockFee.toLocaleString()} KES\n`
    : "";
  return (
    `💰 *Total cost to move in:*\n` +
    `• Rent: ${rent.toLocaleString()} KES/month\n` +
    `• Upfront (${monthsUpfront} months): ${upfrontTotal.toLocaleString()} KES\n` +
    feeLine +
    `━━━━━━━━━━━━━━━━\n` +
    `*Total: ${grandTotal.toLocaleString()} KES*`
  );
}

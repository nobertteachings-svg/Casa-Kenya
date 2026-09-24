export function formatMoney(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`;
}

export const formatKes = formatMoney;

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-KE", {
    timeZone: "Africa/Nairobi",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function statusClass(status: string): string {
  return `badge badge-${status.replace("_", "-")}`;
}

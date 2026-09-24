export type Lang = "en";

const strings = {
  en: {
    dashboard: "Dashboard",
    users: "Users",
    listings: "Listings",
    moderation: "Moderation",
    verifications: "Verifications",
    payments: "Payments",
    insights: "Insights",
    settings: "Settings",
    audit: "Audit log",
    signOut: "Sign out",
    search: "Search phone, house ID, area…",
    runAiAll: "Run AI on all pending",
    approve: "Approve",
    reject: "Reject",
    verify: "Verify landlord",
    suspend: "Suspend",
    unsuspend: "Unsuspend",
    export: "Export CSV",
    dark: "Dark",
    light: "Light",
    language: "EN",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof strings)["en"]): string {
  return strings[lang][key];
}

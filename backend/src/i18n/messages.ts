export type Language = "en";
export type UserRole = "landlord" | "tenant";

export interface Messages {
  welcome: string;
  chooseRole: string;
  roleSet: (role: UserRole) => string;
  mainMenuLandlord: string;
  mainMenuTenant: string;
  invalidChoice: string;
  help: string;
  registered: string;
}

export const en: Messages = {
  welcome:
    "🏠 *Welcome to Casa Kenya!*\n\nFind your home on WhatsApp — no app download needed.\n\nKenya's housing platform, powered by AI.",
  chooseRole:
    "Are you a landlord or looking for a home?\n\n*1.* 🏡 I'm a landlord (list my property)\n*2.* 🔍 I'm a tenant (find a home)\n*3.* 🌍 I have a referral code (enter referrer's number)",
  roleSet: (role) =>
    role === "landlord"
      ? "✅ You're registered as a *landlord*."
      : "✅ You're registered as a *tenant*.",
  mainMenuLandlord:
    "🏡 *Landlord Menu*\n\n*1.* List a new property\n*2.* My listings\n*3.* More options (stats, ID verify, lease…)\n*4.* Help\n\n🪪 Send a document with your *name* to verify before listing\n🎥 Video walkthrough required for every listing\n💡 Send a *voice note* anytime instead of typing",
  mainMenuTenant:
    "🔍 *Tenant Menu*\n\n*1.* Search for a home\n*2.* My unlocked contacts\n*3.* More options (alerts, compare, diaspora…)\n*4.* Help\n\n💡 Send a *voice note* anytime instead of typing",
  invalidChoice: "Please tap an option above, or reply with a valid number.",
  help:
    "Casa Kenya helps landlords list properties and tenants find homes — all on WhatsApp.\n\n*Tenant tips:* Search, save alerts, compare listings, diaspora mode, rent heat map.\n*Landlord tips:* AI listing, performance stats, bulk manage, generate leases.\n*Trust:* Verified badges, community flagging.\n*Growth:* Refer friends for free unlock credits.\n\nSupport: reply HELP anytime.",
  registered: "Your Casa Kenya account is ready. Here's what you can do:",
};

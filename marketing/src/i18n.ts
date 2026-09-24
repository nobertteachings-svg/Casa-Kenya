export type Lang = "en";

export const copy = {
  en: {
    nav: {
      listings: "Listings",
      how: "How it works",
      apps: "Get the app",
      tenants: "Tenants",
      landlords: "Landlords",
      faq: "FAQ",
      cta: "Get the app",
    },
    hero: {
      title: "Find a home anywhere in Kenya.",
      subtitle:
        "Browse on the Casa Kenya app for iPhone and Android, or message us on WhatsApp. Rent is in KES, across all 47 counties.",
      ctaApp: "Get the app",
      ctaTenant: "Chat on WhatsApp",
      ctaLandlord: "List a property",
    },
    apps: {
      eyebrow: "iOS & Android",
      title: "Casa Kenya is on your phone",
      subtitle:
        "Download the app to search, list, and unlock landlord contacts. Prefer chat? WhatsApp still works.",
      ios: "Download on the App Store",
      android: "Get it on Google Play",
      whatsapp: "Or continue on WhatsApp",
    },
    showcase: {
      live: "Live now",
      title: "Homes on the market",
      subtitle: "Real photos from active listings across Kenya, refreshed as landlords publish.",
      mediaCount: "photos",
      cta: "Enquire on WhatsApp",
      unavailable: "Listings are temporarily unavailable. Please try again shortly.",
      empty: "New listings will appear here as they go live.",
    },
    stats: {
      live: "Live platform",
      title: "Casa Kenya at a glance",
      subtitle: "Real counts from listings and people using Casa Kenya today.",
      updated: "Updated",
      unavailable: "Live stats are temporarily unavailable.",
      listingsTitle: "Listings",
      communityTitle: "Community",
      available: "Available",
      availableHint: "Open for rent",
      residential: "Residential",
      commercial: "Commercial",
      tenants: "Tenants",
      landlords: "Landlords",
      members: "Members",
      newThisWeek: "New this week",
      newThisWeekHint: "Last 7 days",
    },
    how: {
      eyebrow: "Process",
      title: "Find a place in three steps",
      subtitle: "Use the Casa Kenya app or WhatsApp. Same listings, same landlords.",
      steps: [
        {
          title: "Tell us what you need",
          text: "Area, budget, and property type — in the app or in chat.",
        },
        {
          title: "Browse real listings",
          text: "See rent in KES, location, and photos before you travel.",
        },
        {
          title: "Unlock the contact",
          text: "Get the landlord’s number and arrange a viewing.",
        },
      ],
    },
    tenants: {
      eyebrow: "For tenants",
      title: "Find a place without the runaround",
      points: [
        "Search by neighbourhood, budget, or GPS pin",
        "Review photos before you travel across town",
        "iPhone, Android, or WhatsApp — your choice",
        "Clear English guidance on every step",
      ],
      cta: "Start searching",
      preview: {
        label: "Example search",
        area: "Westlands, Nairobi",
        budget: "Max 80,000 KES",
        result: "3 listings matched",
      },
    },
    landlords: {
      eyebrow: "For landlords",
      title: "List once. Reach serious tenants.",
      points: [
        "List from the app or WhatsApp in minutes",
        "Upload photos and a short walkthrough from your phone",
        "Get notified when someone requests your contact",
        "Optional National ID verification for trust",
      ],
      cta: "List a property",
      video: {
        label: "Watch the guide",
        title: "How to list your property on Casa Kenya",
      },
    },
    cities: {
      eyebrow: "Coverage",
      title: "Across Kenya",
      subtitle: "All 47 counties. Search by neighbourhood or share your location.",
      list: [
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
        "Nyeri",
        "Malindi",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Do I need WhatsApp?",
          a: "No. Download Casa Kenya on the App Store or Google Play. WhatsApp is still available if you prefer chat.",
        },
        {
          q: "Is it free?",
          a: "Search and browse are free. Unlocking landlord contact is free during our launch period.",
        },
        {
          q: "How do landlords list?",
          a: "Open the Casa Kenya app or message us on WhatsApp, choose landlord, then add rent, location, and photos.",
        },
        {
          q: "Which areas are covered?",
          a: "All 47 counties across Kenya. Search by neighbourhood or share a GPS pin.",
        },
        {
          q: "How is safety handled?",
          a: "We verify landlord National IDs, moderate listings, and accept reports. Always visit before paying rent.",
        },
        {
          q: "How do I get help?",
          a: "Use the app, message WhatsApp on +254 182 623 299, or email support@casahomeskenya.com. General questions: hello@casahomeskenya.com.",
        },
      ],
    },
    cta: {
      title: "Ready when you are",
      subtitle: "Get Casa Kenya on iPhone or Android — or send the first WhatsApp message.",
      button: "Get the app",
      whatsapp: "Message on WhatsApp",
    },
    help: {
      eyebrow: "Support",
      title: "Need help?",
      subtitle: "WhatsApp, email, or the in-app account screen — we are in Kenya.",
      whatsapp: "WhatsApp",
      general: "General",
      support: "Issues",
    },
    footer: {
      tagline: "Find your home in Kenya — on the app or WhatsApp.",
      contact: "Contact",
      social: "Follow Casa Kenya",
      domain: "casahomeskenya.com",
      rights: "© Casa Kenya. All rights reserved.",
    },
    wa: {
      tenant: "Hi Casa Kenya! I'm looking for a home",
      landlord: "Hi Casa Kenya! I want to list my property",
    },
  },
} as const;

export function t(_lang?: Lang) {
  return copy.en;
}

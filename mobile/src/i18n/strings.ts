import type { Language } from "../api/client";

type Strings = {
  loginSubtitle: string;
  phoneLabel: string;
  phoneNote: string;
  loginFirstTimeHint: string;
  otpWhatsappFailed: string;
  sendCode: string;
  codeLabel: string;
  codeHint: (phone: string, mins: number) => string;
  codeHintClick: (mins: number) => string;
  continue: string;
  changeNumber: string;
  signupHint: string;
  openWhatsApp: string;
  openWhatsAppForCode: string;
  roleTenant: string;
  roleLandlord: string;
  logout: string;
  logoutConfirm: string;
  menu: string;
  shareLocation: string;
  shareLocationUser: string;
  messagePlaceholder: string;
  send: string;
  locationDenied: string;
  welcomeTenant: string;
  welcomeLandlord: string;
  welcomeSignup: string;
  tapMenu: string;
  errorGeneric: string;
  invalidKenyaPhone: string;
  tabChat: string;
  tabBrowse: string;
  tabListings: string;
  tabAccount: string;
  tabContacts: string;
  tabMenu: string;
  searchTitle: string;
  searchModeMap: string;
  searchModeManual: string;
  searchNearMe: string;
  searchManualBtn: string;
  searchRegion: string;
  searchTown: string;
  searchNeighbourhood: string;
  searchMinRent: string;
  searchMaxRent: string;
  searchPriceHint: string;
  searchParking: string;
  searchWater: string;
  searchAnyRegion: string;
  searchResults: (n: number) => string;
  searchEmpty: string;
  searchEmptyHint: string;
  searchDistance: (km: number) => string;
  browseTitle: string;
  browseEmpty: string;
  browseRent: (amount: number) => string;
  browseUnlock: string;
  browseUnlockDone: string;
  browseLandlordOnly: string;
  takePhoto: string;
  takeVideo: string;
  uploadBusy: string;
  uploadDone: string;
  cameraDenied: string;
  signingUp: string;
  changeLanguage: string;
  themeTitle: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  openMap: string;
  mapTitle: string;
  mapDirections: string;
  mapCount: (n: number) => string;
  languageUpdated: string;
  detailTitle: string;
  detailClose: string;
  detailDirections: string;
  detailCall: string;
  detailWhatsApp: string;
  detailAmenities: string;
  detailDescription: string;
  detailInactive: string;
  detailMonthsUpfront: (n: number) => string;
  detailWater: string;
  detailParking: string;
  detailFenced: string;
  detailBorehole: string;
  detailFurnished: string;
  detailSecurity: string;
  detailGenerator: string;
  detailViewListing: string;
  landlordTitle: string;
  landlordSubtitle: string;
  landlordEmpty: string;
  landlordEmptyHint: string;
  landlordEdit: string;
  landlordEditTitle: string;
  landlordSave: string;
  landlordMarkRented: string;
  landlordReactivate: string;
  landlordRemove: string;
  landlordRemoveTitle: string;
  landlordRemoveConfirm: string;
  landlordStatusActive: string;
  landlordStatusRented: string;
  landlordRentLabel: string;
  landlordMonthsUpfront: string;
  landlordRentRequired: string;
  verifyBadgeVerified: string;
  verifyBadgeUnverified: string;
  verifyBannerTitle: string;
  verifyBannerBody: string;
  verifyBannerCta: string;
  signupTitle: string;
  signupSubtitle: string;
  signupTenantDesc: string;
  signupLandlordDesc: string;
  signupReferralToggle: string;
  signupReferralLabel: string;
  actionListProperty: string;
  actionMoreOptions: string;
  landlordActions: string;
  tenantActions: string;
  helpTitle: string;
  helpBody: string;
  deleteAccountTitle: string;
  deleteAccountBody: string;
  deleteAccountLink: string;
  contactsSubtitle: string;
  contactsEmpty: string;
  contactsEmptyHint: string;
  flowWorking: string;
  flowYes: string;
  flowNo: string;
  flowConfirm: string;
  flowPickRent: string;
  flowPickBedrooms: string;
  flowPickToilets: string;
  flowBedroomsHint: string;
  flowPhotosAdded: (n: number) => string;
  flowPhotosDone: string;
  flowVideoDone: string;
  flowLocationTooShort: string;
  flowSuggestions: string;
  tabSaved: string;
  offlineBanner: string;
  pullRefresh: string;
  searchCategory: string;
  searchResidential: string;
  searchCommercial: string;
  searchFenced: string;
  searchGenerator: string;
  searchSort: string;
  sortNewest: string;
  sortPriceAsc: string;
  sortPriceDesc: string;
  sortDistance: string;
  saveSearch: string;
  saveSearchDone: string;
  savedTitle: string;
  savedShortlist: string;
  savedAlerts: string;
  savedCompare: string;
  savedCompareNeed: string;
  savedEmptyShortlist: string;
  savedEmptyShortlistHint: string;
  savedEmptyAlerts: string;
  savedEmptyAlertsHint: string;
  savedRemove: string;
  savedAddAlert: string;
  detailSave: string;
  detailSaved: string;
  detailReport: string;
  detailReportTitle: string;
  detailReportPlaceholder: string;
  detailReportSubmit: string;
  detailListedAgo: (days: number) => string;
  trustVerifiedPlus: string;
  unlockSheetTitle: string;
  unlockFee: (kes: number) => string;
  unlockReference: (ref: string) => string;
  unlockCredits: (n: number) => string;
  unlockDailyLimit: (used: number, limit: number) => string;
  unlockCopyReference: string;
  unlockCopied: string;
  unlockOpenMpesa: string;
  unlockConfirmPaid: string;
  unlockFreeForNow: string;
  unlockAlreadyDone: string;
  unlockLimitReached: string;
  unlockPaymentRequired: string;
  unlockMoveInTitle: string;
  unlockMoveInTotal: (kes: number) => string;
  marketTitle: string;
  marketHeatMap: string;
  diasporaTitle: string;
  diasporaHint: string;
  diasporaSave: string;
  referTitle: string;
  referShare: string;
  tenantVerifyTitle: string;
  tenantVerifyId: string;
  tenantVerifyMpesa: string;
  pickFromGallery: string;
  flowPublish: string;
  flowCancelPublish: string;
  landlordStatsTitle: string;
  landlordBulkActivate: string;
  landlordBulkDeactivate: string;
  detailBedrooms: (n: number) => string;
  detailToilets: (n: number) => string;
  detailElectricity: (meter: string) => string;
  detailShare: string;
  detailRetry: string;
  detailGallery: string;
  detailConcierge: string;
  detailLease: string;
  detailReportRented: string;
  searchFurnished: string;
  searchSecurity: string;
  searchElectricity: string;
  searchPropertyType: string;
  searchMinBeds: string;
  searchMinToilets: string;
  searchSubtypeStudio: string;
  searchSubtypeApartment: string;
  searchSubtypeHouse: string;
  searchAnyType: string;
  savedAiCompare: string;
  marketTrendsTitle: string;
  marketTrendLine: (area: string, pct: number) => string;
  tenantVerifiedBadge: string;
  tenantVerifyPrompt: string;
  onboardingSkip: string;
  onboardingNext: string;
  onboardingDone: string;
  onboardingTenant1Title: string;
  onboardingTenant1Body: string;
  onboardingTenant2Title: string;
  onboardingTenant2Body: string;
  onboardingTenant3Title: string;
  onboardingTenant3Body: string;
  onboardingLandlord1Title: string;
  onboardingLandlord1Body: string;
  onboardingLandlord2Title: string;
  onboardingLandlord2Body: string;
  onboardingLandlord3Title: string;
  onboardingLandlord3Body: string;
  lowDataMode: string;
  lowDataHint: string;
  notificationInbox: string;
  notificationEmpty: string;
  landlordGenerateLease: string;
  landlordAddPhotos: string;
  landlordAddVideo: string;
  landlordViewsUnlocks: (views: number, unlocks: number) => string;
  cachedResultsHint: string;
  errorRetry: string;
  goToSearch: string;
  savedRemoveItem: string;
  savedCompareResult: string;
  savedAiCompareTitle: string;
  savedAiBestFit: string;
  searchTownPlaceholder: string;
  searchNeighbourhoodPlaceholder: string;
  searchValidationLocation: string;
  searchValidationRent: string;
  detailReportThanks: string;
  detailReportRentedThanks: string;
  unlockSuccessHint: string;
  unlockStepContact: string;
  searching: string;
  searchPlaceholder: string;
  filters: string;
  filtersApply: string;
  filtersClear: string;
  filtersCount: (n: number) => string;
  mapView: string;
  listView: string;
  searchMeterPrepaid: string;
  searchMeterPostpaid: string;
  cardBeds: (n: number) => string;
  cardBaths: (n: number) => string;
  cardMonths: (n: number) => string;
  unlockWhy: string;
  unlockStepCopyLabel: string;
  unlockStepPayLabel: string;
  unlockStepConfirmLabel: string;
  unlockMessageWhatsApp: string;
  unlockShowNumber: string;
  listStepWhat: string;
  listStepWhere: string;
  listStepHome: string;
  listStepPhotos: string;
  listStepOf: (n: number, total: number) => string;
  listPhotosHint: string;
  listAmenitiesNext: string;
  moreActions: string;
  bulkConfirmActivate: string;
  bulkConfirmDeactivate: string;
  signupRoleHint: string;
  loginCodeFailedHint: string;
  coachFilters: string;
  coachListPhotos: string;
  yourLandlords: string;
  accountYou: string;
  accountActivity: string;
  accountTools: string;
  accountSettings: string;
  locationAsk: string;
  savedTitleShort: string;
  loginContinueBrowse: string;
  loginToContinue: string;
  guestAccountHint: string;
  filtersMore: string;
  filtersLess: string;
  listVideoRequired: string;
  accountMoreTools: string;
  menuBulkManage: string;
  menuAgent: string;
  menuOpenFull: string;
  menuVerifyRequested: string;
  accountLogin: string;
  signupConfirm: string;
  signupConfirmTenant: string;
  signupConfirmLandlord: string;
  tabInterest: string;
  interestEmpty: string;
  interestEmptyHint: string;
  compareColRent: string;
  compareColArea: string;
  compareColBeds: string;
  locationTypeHint: string;
  unlockComingSoon: string;
  notificationEmptyLine: string;
};

const en: Strings = {
  loginSubtitle: "Find your home — on the app or WhatsApp.",
  phoneLabel: "Your WhatsApp number",
  phoneNote:
    "Already on Casa? Continue with your WhatsApp number. New here? We'll send a code on WhatsApp.",
  loginFirstTimeHint: "We'll send a 6-digit code on WhatsApp.",
  otpWhatsappFailed:
    "Could not send the WhatsApp code. Check the number and try again in a moment.",
  sendCode: "Continue",
  codeLabel: "Enter the 6-digit code",
  codeHint: (phone, mins) =>
    `We sent a code to WhatsApp (${phone}). It expires in ${mins} minutes.`,
  codeHintClick: (mins) =>
    `WhatsApp will open. Tap Send — Casa replies with your 6-digit code. It expires in ${mins} minutes.`,
  continue: "Continue",
  changeNumber: "Change number",
  signupHint: "Prefer WhatsApp?",
  openWhatsApp: "Open Casa on WhatsApp instead",
  openWhatsAppForCode: "Open WhatsApp to get the code",
  roleTenant: "Tenant",
  roleLandlord: "Landlord",
  logout: "Log out",
  logoutConfirm: "Log out of this Casa account?",
  menu: "Main menu",
  shareLocation: "Share location",
  shareLocationUser: "📍 My location",
  messagePlaceholder: "Type a message…",
  send: "Send",
  locationDenied: "Allow location so Casa can find homes near you.",
  welcomeTenant: "Welcome! Tap a button below or share 📍 to search nearby.",
  welcomeLandlord: "Welcome! Tap a button below to list or manage your properties.",
  welcomeSignup:
    "Welcome! Choose tenant or landlord — same steps as WhatsApp.",
  tapMenu: "Tip: tap Main menu anytime to go back.",
  errorGeneric: "Something went wrong. Try again.",
  invalidKenyaPhone: "Enter a Kenyan mobile number, e.g. 0712 345 678 or 254712345678.",
  tabChat: "Chat",
  tabBrowse: "Search",
  tabListings: "My listings",
  tabAccount: "Account",
  tabContacts: "Contacts",
  tabMenu: "Menu",
  searchTitle: "Find a home",
  searchModeMap: "Near me",
  searchModeManual: "Manual filters",
  searchNearMe: "Search near my location",
  searchManualBtn: "Search",
  searchRegion: "County",
  searchTown: "Town / city",
  searchNeighbourhood: "Neighbourhood",
  searchMinRent: "Min rent (KES)",
  searchMaxRent: "Max rent (KES)",
  searchPriceHint: "Leave blank for no limit",
  searchParking: "Parking",
  searchWater: "Water supply",
  searchAnyRegion: "Any region",
  searchResults: (n) => `${n} home(s) found`,
  searchEmpty: "No homes match your search.",
  searchEmptyHint: "Try widening your filters or search near your current location.",
  searchDistance: (km) => `${km.toFixed(1)} km away`,
  browseTitle: "Available homes",
  browseEmpty: "No listings yet. Check back soon.",
  browseRent: (amount) => `${amount.toLocaleString()} KES / month`,
  browseUnlock: "Get landlord contact",
  browseUnlockDone: "Contact unlocked — see Contacts tab",
  browseLandlordOnly: "Switch to tenant account to unlock contacts.",
  takePhoto: "Take photo",
  takeVideo: "Record video",
  uploadBusy: "Uploading…",
  uploadDone: "Uploaded ✓",
  cameraDenied: "Allow camera access to add photos or videos.",
  signingUp: "Creating your account…",
  changeLanguage: "Language",
  themeTitle: "Appearance",
  themeLight: "Light",
  themeDark: "Dark",
  themeSystem: "System",
  openMap: "Open map",
  mapTitle: "Homes nearby",
  mapDirections: "Directions",
  mapCount: (n) => (n === 1 ? "1 home" : `${n} homes`),
  languageUpdated: "Language updated",
  detailTitle: "Listing details",
  detailClose: "Close",
  detailDirections: "Directions",
  detailCall: "Call",
  detailWhatsApp: "WhatsApp",
  detailAmenities: "Amenities",
  detailDescription: "Description",
  detailInactive: "Not available",
  detailMonthsUpfront: (n) => `${n} month(s) upfront`,
  detailWater: "Water supply",
  detailParking: "Parking",
  detailFenced: "Gated / fenced",
  detailBorehole: "Borehole / tank",
  detailFurnished: "Furnished",
  detailSecurity: "Security / askari",
  detailGenerator: "Backup power",
  detailViewListing: "View details",
  landlordTitle: "My listings",
  landlordSubtitle: "Edit, mark as rented, or remove from search.",
  landlordEmpty: "No listings yet.",
  landlordEmptyHint: "Add your first property with photos and a walkthrough video.",
  landlordEdit: "Edit",
  landlordEditTitle: "Edit listing",
  landlordSave: "Save",
  landlordMarkRented: "Mark rented",
  landlordReactivate: "Reactivate",
  landlordRemove: "Remove",
  landlordRemoveTitle: "Remove listing?",
  landlordRemoveConfirm: "This hides the listing from search. You can reactivate later from Chat.",
  landlordStatusActive: "Active",
  landlordStatusRented: "Rented / hidden",
  landlordRentLabel: "Monthly rent (KES)",
  landlordMonthsUpfront: "Months upfront",
  landlordRentRequired: "Enter a valid rent amount.",
  verifyBadgeVerified: "Verified landlord",
  verifyBadgeUnverified: "Not verified",
  verifyBannerTitle: "Get your verified badge",
  verifyBannerBody:
    "Tenants trust verified landlords. Send one photo of an ID document (or any document with your name) in Chat.",
  verifyBannerCta: "Verify now",
  signupTitle: "Join Casa",
  signupSubtitle: "How will you use Casa?",
  signupTenantDesc: "Search homes and message landlords on WhatsApp.",
  signupLandlordDesc: "List homes and see who is interested.",
  signupReferralToggle: "Have a referral number?",
  signupReferralLabel: "Referrer's WhatsApp number",
  actionListProperty: "List a property",
  actionMoreOptions: "More options",
  landlordActions: "Landlord actions",
  tenantActions: "Tenant actions",
  helpTitle: "Help",
  helpBody: "Search uses the map or manual filters. Unlock a listing to call or WhatsApp the landlord. Landlords: verify ID once, then list with photos and a walkthrough video.",
  deleteAccountTitle: "Delete account",
  deleteAccountBody: "To delete your Casa account and personal data, follow the steps on our account deletion page.",
  deleteAccountLink: "Request account deletion",
  contactsSubtitle: "Landlords you unlocked — tap to call or chat.",
  contactsEmpty: "No unlocked contacts yet.",
  contactsEmptyHint: "Search for a home and unlock the landlord to call or WhatsApp them.",
  flowWorking: "Loading…",
  flowYes: "Yes",
  flowNo: "No",
  flowConfirm: "Confirm",
  flowPickRent: "Pick monthly rent",
  flowPickBedrooms: "How many bedrooms?",
  flowPickToilets: "How many toilets / bathrooms?",
  flowBedroomsHint: "Include sitting room / living room",
  flowPhotosAdded: (n) => `${n} photo(s) added`,
  flowPhotosDone: "Done with photos",
  flowVideoDone: "Done with video",
  flowLocationTooShort: "Enter at least 2 characters.",
  flowSuggestions: "Suggestions — tap to fill, or type your own",
  tabSaved: "Saved",
  offlineBanner: "You're offline — check your connection and pull to refresh.",
  pullRefresh: "Pull to refresh",
  searchCategory: "Property type",
  searchResidential: "Residential",
  searchCommercial: "Commercial",
  searchFenced: "Gated / fenced",
  searchGenerator: "Backup power",
  searchSort: "Sort by",
  sortNewest: "Newest",
  sortPriceAsc: "Price ↑",
  sortPriceDesc: "Price ↓",
  sortDistance: "Distance",
  saveSearch: "Save search & get alerts",
  saveSearchDone: "Alert saved — we'll notify you when a match appears.",
  savedTitle: "Saved & alerts",
  savedShortlist: "Compare shortlist",
  savedAlerts: "Search alerts",
  savedCompare: "Compare listings",
  savedCompareNeed: "Save at least 2 listings from details to compare.",
  savedEmptyShortlist: "Nothing saved yet.",
  savedEmptyShortlistHint: "Tap Save on any listing while browsing to build your shortlist.",
  savedEmptyAlerts: "No search alerts yet.",
  savedEmptyAlertsHint: "Save a search from the Search tab to get notified when new homes match.",
  savedRemove: "Remove",
  savedAddAlert: "New alert from last search",
  detailSave: "Save to compare",
  detailSaved: "Saved ✓",
  detailReport: "Report listing",
  detailReportTitle: "Why are you reporting?",
  detailReportPlaceholder: "e.g. Already rented, scam, wrong price…",
  detailReportSubmit: "Submit report",
  detailListedAgo: (days) => (days === 0 ? "Listed today" : `Listed ${days} day(s) ago`),
  trustVerifiedPlus: "Verified+",
  unlockSheetTitle: "Unlock landlord contact",
  unlockFee: (kes) => `${kes.toLocaleString()} KES unlock fee`,
  unlockReference: (ref) => `Payment reference: ${ref}`,
  unlockCredits: (n) => `${n} free unlock credit(s) available`,
  unlockDailyLimit: (used, limit) => `Daily unlocks: ${used}/${limit}`,
  unlockCopyReference: "Copy reference",
  unlockCopied: "Copied ✓",
  unlockOpenMpesa: "Open M-Pesa",
  unlockConfirmPaid: "I've paid",
  unlockFreeForNow: "Unlock is free for now — tap below to get the contact.",
  unlockAlreadyDone: "You already unlocked this listing.",
  unlockLimitReached: "Daily unlock limit reached. Try again tomorrow.",
  unlockPaymentRequired: "Complete payment, then tap I've paid.",
  unlockMoveInTitle: "Estimated move-in cost",
  unlockMoveInTotal: (kes) => `Total: ${kes.toLocaleString()} KES`,
  marketTitle: "Rent heat map",
  marketHeatMap: "Average rent by area (active listings)",
  diasporaTitle: "Diaspora mode",
  diasporaHint: "Family member's WhatsApp in Kenya receives unlock contacts.",
  diasporaSave: "Save beneficiary",
  referTitle: "Refer a friend",
  referShare: "Share invite",
  tenantVerifyTitle: "Tenant verification",
  tenantVerifyId: "Verify with ID",
  tenantVerifyMpesa: "Verify with M-Pesa",
  pickFromGallery: "Choose from gallery",
  flowPublish: "Publish listing",
  flowCancelPublish: "Cancel",
  landlordStatsTitle: "Performance (7 days)",
  landlordBulkActivate: "Activate all",
  landlordBulkDeactivate: "Deactivate all",
  detailBedrooms: (n) => `${n} bedroom(s)`,
  detailToilets: (n) => `${n} toilet(s)`,
  detailElectricity: (meter) => `Electricity: ${meter}`,
  detailShare: "Share listing",
  detailRetry: "Retry",
  detailGallery: "Full gallery",
  detailConcierge: "Move-in guide",
  detailLease: "Lease template",
  detailReportRented: "Already rented?",
  searchFurnished: "Furnished",
  searchSecurity: "Security",
  searchElectricity: "Meter",
  searchPropertyType: "Property type",
  searchMinBeds: "Min beds",
  searchMinToilets: "Min toilets",
  searchSubtypeStudio: "Studio / bedsitter",
  searchSubtypeApartment: "1–3 bedroom",
  searchSubtypeHouse: "Maisonette / bungalow",
  searchAnyType: "Any type",
  savedAiCompare: "AI compare",
  marketTrendsTitle: "Rent trends",
  marketTrendLine: (area, pct) => `${area}: ${pct >= 0 ? "+" : ""}${pct.toFixed(0)}%`,
  tenantVerifiedBadge: "Verified tenant",
  tenantVerifyPrompt: "Verify tenant profile",
  onboardingSkip: "Skip",
  onboardingNext: "Next",
  onboardingDone: "Get started",
  onboardingTenant1Title: "Search on the map",
  onboardingTenant1Body: "Find verified homes near you or filter by town, rent, and amenities.",
  onboardingTenant2Title: "Unlock landlord contact",
  onboardingTenant2Body: "Pay a small fee (when enabled) to call or WhatsApp the landlord directly.",
  onboardingTenant3Title: "Save & compare",
  onboardingTenant3Body: "Shortlist favourites, get alerts, and compare listings side by side.",
  onboardingLandlord1Title: "Verify your ID",
  onboardingLandlord1Body: "Verified landlords get more unlocks. One photo of your ID is enough.",
  onboardingLandlord2Title: "List with video",
  onboardingLandlord2Body: "Every listing needs a walkthrough video — tenants trust what they see.",
  onboardingLandlord3Title: "Track performance",
  onboardingLandlord3Body: "See views and unlocks, edit rent, and mark homes as rented in one tap.",
  lowDataMode: "Low-data mode",
  lowDataHint: "Thumbnails only — tap to load full photos and video on Wi‑Fi.",
  notificationInbox: "Notifications",
  notificationEmpty: "No notifications yet.",
  landlordGenerateLease: "Generate lease",
  landlordAddPhotos: "Add photos",
  landlordAddVideo: "Add video",
  landlordViewsUnlocks: (views, unlocks) => `${views} views · ${unlocks} unlocks`,
  cachedResultsHint: "Showing saved results — pull to refresh when online.",
  errorRetry: "Retry",
  goToSearch: "Start searching",
  savedRemoveItem: "Remove from shortlist",
  savedCompareResult: "Compare result",
  savedAiCompareTitle: "AI compare",
  savedAiBestFit: "Best fit",
  searchTownPlaceholder: "Nairobi, Nairobi…",
  searchNeighbourhoodPlaceholder: "Westlands, Kilimani, Nyali…",
  searchValidationLocation: "Enter region, town, or neighbourhood.",
  searchValidationRent: "Min rent must be less than max rent.",
  detailReportThanks: "Thanks — our team will review.",
  detailReportRentedThanks: "Thanks — listing hidden.",
  unlockSuccessHint: "You can message the landlord now.",
  unlockStepContact: "Show WhatsApp number",
  searching: "Finding homes near you…",
  searchPlaceholder: "Westlands, Kilimani, Syokimau…",
  filters: "Filters",
  filtersApply: "Show homes",
  filtersClear: "Clear",
  filtersCount: (n) => (n === 0 ? "Filters" : `${n} filters`),
  mapView: "Map",
  listView: "List",
  searchMeterPrepaid: "Token meter",
  searchMeterPostpaid: "Postpaid bill",
  cardBeds: (n) => `${n} bed`,
  cardBaths: (n) => `${n} bath`,
  cardMonths: (n) => `${n} mo up front`,
  unlockWhy: "Pay this fee to get the landlord’s WhatsApp. Casa does not take a commission on rent.",
  unlockStepCopyLabel: "1. Copy code",
  unlockStepPayLabel: "2. Pay with M-Pesa",
  unlockStepConfirmLabel: "3. I’ve paid",
  unlockMessageWhatsApp: "Message on WhatsApp",
  unlockShowNumber: "Show WhatsApp number",
  listStepWhat: "What",
  listStepWhere: "Where",
  listStepHome: "The home",
  listStepPhotos: "Photos",
  listStepOf: (n, total) => `${n} of ${total}`,
  listPhotosHint: "Add at least 5 photos — tenants skip empty listings.",
  listAmenitiesNext: "Continue",
  moreActions: "More",
  bulkConfirmActivate: "Turn all listings on?",
  bulkConfirmDeactivate: "Turn all listings off?",
  signupRoleHint: "You can message Casa on WhatsApp if you pick the wrong role.",
  loginCodeFailedHint:
    "Code didn’t arrive? Open WhatsApp, tap Send, then enter the code Casa replies with.",
  coachFilters: "Tap Filters to set rent, beds, and neighbourhood.",
  coachListPhotos: "Add at least 4 photos. Tenants skip empty listings.",
  yourLandlords: "Your landlords",
  accountYou: "You",
  accountActivity: "Activity",
  accountTools: "Tools",
  accountSettings: "Settings",
  locationAsk: "Show homes near you",
  savedTitleShort: "Saved",
  loginContinueBrowse: "Not now — keep browsing",
  loginToContinue: "Log in to save homes and get the landlord’s number.",
  guestAccountHint: "Browse freely. Log in when you want to save or get a contact.",
  filtersMore: "More filters",
  filtersLess: "Fewer filters",
  listVideoRequired: "A walkthrough video is required before you can publish.",
  accountMoreTools: "More tools",
  menuBulkManage: "Bulk manage",
  menuAgent: "Agent mode",
  menuOpenFull: "Open full WhatsApp menu",
  menuVerifyRequested: "Request received. Our team will review your ID or M-Pesa.",
  accountLogin: "Log in",
  signupConfirm: "Confirm",
  signupConfirmTenant: "I’m looking for a home",
  signupConfirmLandlord: "I list homes to rent",
  tabInterest: "Interest",
  interestEmpty: "No one has asked for a number yet",
  interestEmptyHint: "When a tenant taps Get contact, they show up here.",
  compareColRent: "Rent",
  compareColArea: "Area",
  compareColBeds: "Beds",
  locationTypeHint: "Type a neighbourhood above to search — Westlands, Kilimani, Syokimau, Nyali…",
  unlockComingSoon: "Contact unlock stays free for now. Try again in a moment.",
  notificationEmptyLine: "No notifications yet.",
};


export function t(_lang?: Language): Strings {
  return en;
}

export function loginT(_useSwahili?: boolean): Strings {
  return en;
}

export function langFromSignup(_useSwahili?: boolean): Language {
  return "en";
}

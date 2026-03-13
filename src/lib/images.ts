/**
 * Centralized image path constants for the Keif Al-Diafa website.
 * All images are served locally from public/images/.
 *
 * Source: https://github.com/moain2026/img_kef_updated (235 updated images)
 * Structure:
 *   hero/           → 3 images (from Event photos)
 *   events/         → 82 images (all Event photos)
 *   weddings/       → 18 images (all Wedding photos)
 *   distributions/  → 5 images
 *   equipment/      → 21 images
 *   partners/       → 36 logos
 *   services/male/hosts/{hizam,dagla,dagla-janbiya,sideriya,makkawi}
 *   services/male/{safarjia,sawas,souqiya}
 *   services/female/
 *   services/artistic/{artist,folkband,heritage-tent,counter,photo-booth,buffet,mobile-table}
 */

// ═══════════════════════════════════════════════════════════════
// HERO IMAGES
// ═══════════════════════════════════════════════════════════════
export const HERO_IMAGES = {
  desktop: "/images/hero/hero-desktop.webp",
  mobile: "/images/hero/hero-mobile.webp",
};

// ═══════════════════════════════════════════════════════════════
// EVENT IMAGES (82 photos)
// ═══════════════════════════════════════════════════════════════
export const EVENT_IMAGES = Array.from({ length: 82 }, (_, i) => `/images/events/event-${i + 1}.webp`);

// ═══════════════════════════════════════════════════════════════
// WEDDING IMAGES (18 photos)
// ═══════════════════════════════════════════════════════════════
export const WEDDING_IMAGES = Array.from({ length: 18 }, (_, i) => `/images/weddings/wedding-${i + 1}.webp`);

// ═══════════════════════════════════════════════════════════════
// DISTRIBUTION IMAGES (5 photos)
// ═══════════════════════════════════════════════════════════════
export const DISTRIBUTION_IMAGES = Array.from({ length: 5 }, (_, i) => `/images/distributions/dist-${i + 1}.webp`);

// ═══════════════════════════════════════════════════════════════
// SERVICES — MALE
// ═══════════════════════════════════════════════════════════════
export const SERVICES_MALE = {
  hosts: {
    hizam: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/hizam/hizam-${i + 1}.webp`),
    dagla: Array.from({ length: 6 }, (_, i) => `/images/services/male/hosts/dagla/dagla-${i + 1}.webp`),
    daglaJanbiya: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/dagla-janbiya/dagla-janbiya-${i + 1}.webp`),
    sideriya: Array.from({ length: 3 }, (_, i) => `/images/services/male/hosts/sideriya/sideriya-${i + 1}.webp`),
    makkawi: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/makkawi/makkawi-${i + 1}.webp`),
    // Convenience: first image of dagla for thumbnails
    main: "/images/services/male/hosts/dagla/dagla-1.webp",
  },
  safarjia: Array.from({ length: 6 }, (_, i) => `/images/services/male/safarjia/safarjia-${i + 1}.webp`),
  sawas: Array.from({ length: 5 }, (_, i) => `/images/services/male/sawas/sawas-${i + 1}.webp`),
  souqiya: Array.from({ length: 8 }, (_, i) => `/images/services/male/souqiya/souqiya-${i + 1}.webp`),
};

// ═══════════════════════════════════════════════════════════════
// SERVICES — FEMALE
// ═══════════════════════════════════════════════════════════════
export const SERVICES_FEMALE = Array.from({ length: 2 }, (_, i) => `/images/services/female/female-${i + 1}.webp`);

export const SERVICES_FEMALE_EXTENDED = {
  hostesses: Array.from({ length: 2 }, (_, i) => `/images/services/female/hostesses/hostess-${i + 1}.webp`),
  safarjiat: Array.from({ length: 2 }, (_, i) => `/images/services/female/safarjiat/safarjia-f-${i + 1}.webp`),
  cleaning: Array.from({ length: 2 }, (_, i) => `/images/services/female/cleaning/cleaning-f-${i + 1}.webp`),
};

// ═══════════════════════════════════════════════════════════════
// SERVICES — ARTISTIC
// ═══════════════════════════════════════════════════════════════
export const SERVICES_ARTISTIC = {
  artist: Array.from({ length: 11 }, (_, i) => `/images/services/artistic/artist/artist-${i + 1}.webp`),
  folkband: Array.from({ length: 2 }, (_, i) => `/images/services/artistic/folkband/folkband-${i + 1}.webp`),
  heritageTent: Array.from({ length: 4 }, (_, i) => `/images/services/artistic/heritage-tent/tent-${i + 1}.webp`),
  counter: Array.from({ length: 2 }, (_, i) => `/images/services/artistic/counter/counter-${i + 1}.webp`),
  photoBooth: Array.from({ length: 6 }, (_, i) => `/images/services/artistic/photo-booth/photo-booth-${i + 1}.webp`),
  buffet: Array.from({ length: 3 }, (_, i) => `/images/services/artistic/buffet/buffet-${i + 1}.webp`),
  mobileTable: Array.from({ length: 6 }, (_, i) => `/images/services/artistic/mobile-table/table-${i + 1}.webp`),
};

// ═══════════════════════════════════════════════════════════════
// EQUIPMENT IMAGES (21 photos)
// ═══════════════════════════════════════════════════════════════
export const EQUIPMENT_IMAGES = Array.from({ length: 21 }, (_, i) => `/images/equipment/equip-${i + 1}.webp`);

// ═══════════════════════════════════════════════════════════════
// PARTNER LOGOS (36 logos)
// ═══════════════════════════════════════════════════════════════
export const PARTNER_LOGOS = Array.from({ length: 36 }, (_, i) => `/images/partners/partner-${i + 1}.webp`);

// ═══════════════════════════════════════════════════════════════
// CONVENIENCE SHORTCUTS — for quick access in components
// ═══════════════════════════════════════════════════════════════

/** Hero images - desktop & mobile */
export const HERO_DESKTOP = HERO_IMAGES.desktop;
export const HERO_MOBILE = HERO_IMAGES.mobile;

/** @deprecated Use HERO_DESKTOP or HERO_MOBILE */
export const HERO_IMG = HERO_IMAGES.desktop;

/** Coffee / Safarjia */
export const COFFEE_IMG = SERVICES_MALE.safarjia[0];

/** Catering / Events */
export const CATERING_IMG = EVENT_IMAGES[2];

/** Tea / Offerings */
export const TEA_IMG = DISTRIBUTION_IMAGES[0];

/** Event photo */
export const EVENT_IMG = EVENT_IMAGES[0];

/** Waiter / Male hosts */
export const WAITER_IMG = SERVICES_MALE.hosts.main;

/** Equipment */
export const EQUIP_IMG = EQUIPMENT_IMAGES[0];

/** Gala / Large event */
export const GALA_IMG = EVENT_IMAGES[5];

/** Hotel / Hospitality */
export const HOTEL_IMG = EVENT_IMAGES[10];

/** Dates / Sweets */
export const DATES_IMG = DISTRIBUTION_IMAGES[1];

/** Food / General */
export const FOOD_IMG = DISTRIBUTION_IMAGES[2];

/** Portfolio showcase */
export const PORTFOLIO_IMG = EVENT_IMAGES[7];

/** Kitchen / Behind scenes */
export const KITCHEN_IMG = EQUIPMENT_IMAGES[5];

/** Team member placeholder */
export const TEAM_IMG = SERVICES_MALE.hosts.dagla[1];

/** Conference img */
export const CONF_IMG = EVENT_IMAGES[12];

// ═══════════════════════════════════════════════════════════════
// SERVICE-SPECIFIC IMAGES
// ═══════════════════════════════════════════════════════════════
export const SERVICE_IMAGES = {
  maleWaiter: SERVICES_MALE.hosts.main,
  zamzam: SERVICES_MALE.safarjia[1],
  butler: SERVICES_MALE.safarjia[2],
  sawas: SERVICES_MALE.sawas[0],
  hostess: SERVICES_FEMALE[0],
  calligrapher: SERVICES_ARTISTIC.artist[0],
  artist: SERVICES_ARTISTIC.artist[1],
  folkband: SERVICES_ARTISTIC.folkband[0],
  heritageTent: SERVICES_ARTISTIC.heritageTent[0],
  counter: SERVICES_ARTISTIC.counter[0],
  photoBooth: SERVICES_ARTISTIC.photoBooth[0],
  buffet: SERVICES_ARTISTIC.buffet[0],
  mobileTable: SERVICES_ARTISTIC.mobileTable[0],
};

// ═══════════════════════════════════════════════════════════════
// OUTFIT IMAGES (for service detail modals)
// ═══════════════════════════════════════════════════════════════
export const OUTFIT_IMAGES = {
  hizam: SERVICES_MALE.hosts.hizam[0],
  dagla: SERVICES_MALE.hosts.dagla[0],
  daglaJanbiya: SERVICES_MALE.hosts.daglaJanbiya[0],
  sideriya: SERVICES_MALE.hosts.sideriya[0],
  makkawi: SERVICES_MALE.hosts.makkawi[0],
  souqiya: SERVICES_MALE.souqiya[0],
  female: SERVICES_FEMALE[0],
  safarjia: SERVICES_MALE.safarjia[0],
  sawas: SERVICES_MALE.sawas[0],
};

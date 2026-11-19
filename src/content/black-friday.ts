/**
 * Black Friday / Cyber Monday 2026 deal on the one-time Pro in-app purchase.
 *
 * The page lives at /black-friday (English, unprefixed) and /fr/black-friday.
 * Deal lists link to https://appsthere.com/black-friday, so keep that path.
 * Prices are USD; other storefronts get Apple's equivalent tier.
 */

export const blackFridayLocales = ["en", "fr"] as const;
export type BlackFridayLocale = (typeof blackFridayLocales)[number];

export const blackFriday = {
  startsAt: "2026-11-27",
  endsAt: "2026-12-01",
  /** Shared image for og:image and the social card. */
  ogImage: "/apps/icons/og-black-friday.png",
};

type Text = Record<BlackFridayLocale, string>;

export interface BlackFridayDeal {
  /** Slug of the app page under /apps. */
  slug: string;
  name: Text;
  icon: string;
  description: Text;
  regularUsd: number;
  dealUsd: number;
  percentOff: number;
  appStoreUrl: string;
}

export const blackFridayDeals: BlackFridayDeal[] = [
  {
    slug: "purescribe",
    name: { en: "PureScribe", fr: "PureScribe" },
    icon: "/apps/icons/purescribe.png",
    description: {
      en: "On-device speech to text: turn recordings and videos into transcripts and subtitles, with no uploads.",
      fr: "Transcription sur l'appareil : vos enregistrements et vidéos deviennent texte et sous-titres, sans rien envoyer en ligne.",
    },
    regularUsd: 9.99,
    dealUsd: 4.99,
    percentOff: 50,
    appStoreUrl: "https://apps.apple.com/app/id6797195935",
  },
  {
    slug: "pilote",
    name: { en: "Pilot – Flight Logbook", fr: "Pilote, carnet de vol" },
    icon: "/apps/icons/pilot.png",
    description: {
      en: "An offline pilot logbook that tracks EASA and FAA rules on the same flights.",
      fr: "Un carnet de vol hors ligne qui suit les règles AESA et FAA sur les mêmes vols.",
    },
    regularUsd: 29.99,
    dealUsd: 19.99,
    percentOff: 33,
    appStoreUrl: "https://apps.apple.com/app/id6801451160",
  },
  {
    slug: "seatally",
    name: { en: "SeaTally – Sea Time Logbook", fr: "SeaTally, carnet de mer" },
    icon: "/apps/icons/seatally.png",
    description: {
      en: "A sea time logbook for RYA Yachtmaster and USCG candidates, with miles and night hours taken from your GPS track.",
      fr: "Un carnet de mer pour les candidats RYA Yachtmaster et USCG, avec milles et heures de nuit tirés de votre trace GPS.",
    },
    regularUsd: 29.99,
    dealUsd: 19.99,
    percentOff: 33,
    appStoreUrl: "https://apps.apple.com/app/id6805792671",
  },
  {
    slug: "serviced",
    name: { en: "Serviced – Maintenance Log", fr: "Entretien, carnet d'entretien" },
    icon: "/apps/icons/serviced.png",
    description: {
      en: "A maintenance log for your home, cars, boat and equipment, due by date or by engine hours.",
      fr: "Un carnet d'entretien pour la maison, les voitures, le bateau et le matériel, avec échéances par date ou par heures moteur.",
    },
    regularUsd: 14.99,
    dealUsd: 9.99,
    percentOff: 33,
    appStoreUrl: "https://apps.apple.com/app/id6801830611",
  },
];

export const blackFridayCopy: Record<
  BlackFridayLocale,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    dates: string;
    intro: string;
    howTitle: string;
    how: string[];
    pro: string;
    off: (percent: number) => string;
    was: string;
    now: string;
    appStore: string;
    appPage: string;
  }
> = {
  en: {
    metaTitle: "Black Friday 2026: up to 50% off Pro",
    metaDescription:
      "Black Friday and Cyber Monday 2026 at AppsThere: PureScribe, Pilot, SeaTally and Serviced Pro at up to 50% off, November 27 to December 1. No code needed.",
    eyebrow: "Black Friday / Cyber Monday 2026",
    title: "Up to 50% off Pro on all four apps",
    dates: "November 27 to December 1, 2026",
    intro:
      "Pro is a one-time in-app purchase, and for these five days it costs less. The lower price shows up in the App Store on its own, so there's no code to enter.",
    howTitle: "How it works",
    how: [
      "Download the app from the App Store (it's free to try).",
      "Open the Pro upgrade inside the app. The discounted price is already applied.",
      "One purchase covers Mac, iPhone and iPad.",
      "Prices go back to normal on December 2. Prices shown are in USD; other countries get Apple's equivalent.",
    ],
    pro: "Pro, one-time purchase",
    off: (percent) => `${percent}% off`,
    was: "Regular price",
    now: "Black Friday price",
    appStore: "Get it on the App Store",
    appPage: "About the app",
  },
  fr: {
    metaTitle: "Black Friday 2026 : jusqu'à -50 % sur Pro",
    metaDescription:
      "Black Friday et Cyber Monday 2026 chez AppsThere : PureScribe, Pilote, SeaTally et Entretien Pro jusqu'à -50 %, du 27 novembre au 1er décembre. Sans code.",
    eyebrow: "Black Friday / Cyber Monday 2026",
    title: "Jusqu'à -50 % sur Pro, dans les quatre apps",
    dates: "Du 27 novembre au 1er décembre 2026",
    intro:
      "Pro est un achat unique dans l'app, et pendant ces cinq jours il coûte moins cher. Le prix réduit s'affiche directement dans l'App Store, il n'y a pas de code à saisir.",
    howTitle: "Comment ça marche",
    how: [
      "Téléchargez l'app sur l'App Store (l'essai est gratuit).",
      "Ouvrez l'offre Pro dans l'app : la réduction est déjà appliquée.",
      "Un seul achat vaut pour Mac, iPhone et iPad.",
      "Les prix reviennent à la normale le 2 décembre. Prix indiqués en dollars US ; dans les autres pays, Apple applique l'équivalent local.",
    ],
    pro: "Pro, achat unique",
    off: (percent) => `-${percent} %`,
    was: "Prix habituel",
    now: "Prix Black Friday",
    appStore: "Voir sur l'App Store",
    appPage: "Présentation de l'app",
  },
};

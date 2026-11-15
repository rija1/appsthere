import { enFr, type BlogPost } from "@/content/types";

/**
 * Practical guides answering a search intent and leading to an app page.
 * Written in English and French only (`locales`).
 *
 * Every rule stated here was checked against the primary source listed in
 * `sources` on 2026-11-15. A detail that couldn't be checked was left out.
 * House style (MARKETING-PLAYBOOK « Écrire sans sonner IA »): no em dash,
 * contractions in English, no "not X but Y" antithesis, no punchy endings.
 */
export const guides: BlogPost[] = [
  {
    slug: "count-sea-time-rya-yachtmaster",
    category: "guides",
    locales: ["en", "fr"],
    relatedApp: "seatally",
    title: enFr(
      "How to count sea time for the RYA Yachtmaster",
      "Comment compter son temps de mer pour le RYA Yachtmaster",
    ),
    excerpt: enFr(
      "What counts as a day on board, which miles go in the log, how the ten-year window works, and what Coastal and Offshore each ask for, taken from the RYA's own pages.",
      "Ce qui compte comme un jour à bord, quels milles inscrire, comment marche la fenêtre de dix ans, et ce que demandent Coastal et Offshore, d'après les pages de la RYA elle-même.",
    ),
    publishedAt: "2026-11-15",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          enFr(
            "The RYA's minimum sea time looks like a short list: days, miles, night hours, a few passages. Most of the arguments you'll find on sailing forums come from how each item is counted. This guide sticks to the definitions the RYA publishes on its own site, linked at the end, and leaves out anything those pages don't say.",
            "Le temps de mer minimum de la RYA tient en une courte liste : des jours, des milles, des heures de nuit, quelques traversées. L'essentiel des débats sur les forums de voile porte sur la façon de compter chaque ligne. Ce guide s'en tient aux définitions que la RYA publie sur son propre site, en lien à la fin, et laisse de côté ce que ces pages ne disent pas.",
          ),
          enFr(
            "One thing to keep in mind before you start adding up: the examiner reads your log. The RYA says candidates \"will be questioned extensively about their qualifying passages, mileage and sea time\", so a figure you can't explain won't help you much.",
            "Un point à garder en tête avant de faire vos additions : c'est l'examinateur qui lit votre carnet. La RYA précise que les candidats sont interrogés en détail sur leurs traversées qualifiantes, leurs milles et leur temps de mer. Un chiffre que vous ne savez pas justifier ne vous servira pas à grand-chose.",
          ),
        ],
      },
      {
        heading: enFr("What counts as a day on board", "Ce qui compte comme un jour à bord"),
        paragraphs: [
          enFr(
            "The RYA's definition is short. A day on board, or a day as skipper, is \"a period of eight consecutive hours living on board, the majority of which the vessel should have been at sea.\" Two more rules sit right under it: periods shorter than eight hours can't be added together, and only one eight-hour period can be counted in any 24 hours.",
            "La définition de la RYA est courte. Un jour à bord, ou un jour comme skipper, c'est une période de huit heures consécutives passées à vivre à bord, pendant la majorité desquelles le bateau doit avoir été en mer. Deux règles suivent : des périodes de moins de huit heures ne s'additionnent pas, et on ne compte qu'une seule période de huit heures par tranche de 24 heures.",
          ),
          enFr(
            "In practice that gives you a few quick checks:",
            "Concrètement, ça donne quelques vérifications rapides :",
          ),
        ],
        list: [
          enFr(
            "A ten-hour day sail with six hours at sea is one day.",
            "Une sortie de dix heures dont six en mer vaut un jour.",
          ),
          enFr(
            "Two four-hour sails on separate days don't make a day, since short periods can't be combined.",
            "Deux sorties de quatre heures, sur deux jours différents, ne font pas un jour : les périodes courtes ne se cumulent pas.",
          ),
          enFr(
            "A weekend living aboard on a mooring doesn't count, because the boat wasn't at sea for most of the time.",
            "Un week-end passé à bord sur un corps-mort ne compte pas, puisque le bateau n'était pas en mer la majeure partie du temps.",
          ),
          enFr(
            "A long passage still gives you at most one day for every 24 hours.",
            "Une longue traversée ne donne toujours qu'un jour au plus par tranche de 24 heures.",
          ),
        ],
      },
      {
        heading: enFr("The ten-year window", "La fenêtre de dix ans"),
        paragraphs: [
          enFr(
            "The Coastal and Offshore exam pages both ask for documented sea time \"in the last 10 years\". The RYA's exam application form is more precise: the minimum sea time and qualifying passages \"must have been accrued within 10 years of the examination date.\"",
            "Les pages des examens Coastal et Offshore demandent toutes deux un temps de mer documenté sur les dix dernières années. Le formulaire de candidature de la RYA est plus précis : le temps de mer minimum et les traversées qualifiantes doivent avoir été réalisés dans les dix ans qui précèdent la date de l'examen.",
          ),
          enFr(
            "So the reference point is the exam date, and the window moves with it. If you push your exam back a season, the oldest entries in your log may drop out of the count. It's worth checking the total again whenever the date changes.",
            "Le point de référence est donc la date de l'examen, et la fenêtre se déplace avec elle. Si vous repoussez l'examen d'une saison, les plus anciennes lignes du carnet peuvent sortir du décompte. Mieux vaut refaire le total à chaque changement de date.",
          ),
        ],
      },
      {
        heading: enFr("Miles, passages and tidal waters", "Milles, traversées et eaux à marée"),
        paragraphs: [
          enFr(
            "For a passage that has to reach a minimum distance, such as the 60-mile passages for Offshore, the RYA takes the distance as \"the shortest navigable route\" you'd plan for a safe and efficient passage. Your log will almost always show a different number because of streams, currents and weather. The rule is that both the planned distance and the distance run should exceed the required distance, and a route that's been stretched on purpose won't be accepted.",
            "Pour une traversée qui doit atteindre une distance minimale, comme les traversées de 60 milles de l'Offshore, la RYA retient la route navigable la plus courte que l'on planifierait pour une traversée sûre et efficace. Le loch affichera presque toujours un autre chiffre, à cause des courants et de la météo. La règle : la distance planifiée et la distance parcourue doivent toutes deux dépasser la distance exigée, et une route rallongée exprès n'est pas acceptée.",
          ),
          enFr(
            "A passage, in the RYA's words, is a voyage that's continuously underway from a departure port or safe haven to a destination port or safe haven. A stop on the way ends the passage.",
            "Une traversée, au sens de la RYA, est une navigation continue, sans escale, d'un port ou abri de départ à un port ou abri d'arrivée. Une escale en route met fin à la traversée.",
          ),
          enFr(
            "Tidal waters matter too. At least half of your qualifying sea time should be gained in tidal waters, and the application form says no more than 50% may come from non-tidal seas \"such as the Baltic or Mediterranean\". The RYA treats an area as tidal when published stream, current or tidal range data exists and its effect is large enough that you have to plan around it. The application form has separate boxes for tidal and non-tidal days, so note which kind of water each passage was in while you still remember.",
            "Les eaux à marée comptent aussi. Au moins la moitié du temps de mer qualifiant doit être faite en eaux à marée, et le formulaire de candidature précise que 50 % au plus peuvent venir de mers sans marée comme la Baltique ou la Méditerranée. La RYA considère une zone comme soumise à la marée quand des données publiées de courant ou de marnage existent et que leur effet oblige à en tenir compte pour préparer la route. Le formulaire a des cases séparées pour les jours en eaux à marée et hors marée : notez le type d'eaux de chaque traversée pendant que vous vous en souvenez.",
          ),
        ],
      },
      {
        heading: enFr("What Coastal asks for", "Ce que demande le Coastal"),
        paragraphs: [
          enFr(
            "For the Yachtmaster Coastal exam, the RYA asks for this minimum, on a seagoing yacht of the same discipline as the exam:",
            "Pour l'examen Yachtmaster Coastal, la RYA demande ce minimum, sur un yacht de mer de la même discipline que l'examen :",
          ),
        ],
        list: [
          enFr(
            "30 days at sea on a vessel under 24 m LOA",
            "30 jours en mer sur un bateau de moins de 24 m hors tout",
          ),
          enFr(
            "2 days as skipper on a vessel under 24 m LOA",
            "2 jours comme skipper sur un bateau de moins de 24 m hors tout",
          ),
          enFr("800 miles", "800 milles"),
          enFr("12 night hours", "12 heures de nuit"),
        ],
      },
      {
        paragraphs: [
          enFr(
            "The days and miles can be reduced to 12 days and 400 miles if you hold an RYA Coastal Skipper practical course completion certificate, or a Yachtmaster Coastal certificate in the other discipline, and you need to be at least 17 on the day of the exam. The RYA pages we checked don't spell out when night starts for the 12 night hours, so log the actual times you were underway in the dark and let the examiner read them.",
            "Les jours et les milles peuvent descendre à 12 jours et 400 milles si vous avez le certificat de fin de stage pratique RYA Coastal Skipper, ou un Yachtmaster Coastal dans l'autre discipline, et il faut avoir au moins 17 ans le jour de l'examen. Les pages de la RYA que nous avons consultées ne disent pas à quelle heure commence la nuit pour ces 12 heures : notez les heures réelles de navigation de nuit et laissez l'examinateur les lire.",
          ),
        ],
      },
      {
        heading: enFr("What Offshore asks for", "Ce que demande l'Offshore"),
        paragraphs: [
          enFr(
            "For the Yachtmaster Offshore exam the minimum is larger:",
            "Pour l'examen Yachtmaster Offshore, le minimum est plus élevé :",
          ),
        ],
        list: [
          enFr("50 days at sea on yachts up to 500 gt", "50 jours en mer sur des yachts jusqu'à 500 gt"),
          enFr(
            "5 days as skipper on vessels under 24 m LOA",
            "5 jours comme skipper sur des bateaux de moins de 24 m hors tout",
          ),
          enFr("2,500 miles on yachts up to 500 gt", "2 500 milles sur des yachts jusqu'à 500 gt"),
          enFr(
            "5 passages over 60 miles, including 2 overnight and 2 as skipper",
            "5 traversées de plus de 60 milles, dont 2 de nuit et 2 comme skipper",
          ),
        ],
      },
      {
        paragraphs: [
          enFr(
            "Offshore doesn't list a number of night hours. The night requirement is carried by the two overnight passages. Holding an Offshore certificate in the other discipline reduces this to 25 days, 3 days as skipper, 1,250 miles and 3 passages (1 overnight, 1 as skipper), and the minimum age at the exam is 18.",
            "L'Offshore ne fixe pas de nombre d'heures de nuit. La nuit passe par les deux traversées de nuit. Si vous avez déjà un Offshore dans l'autre discipline, le minimum descend à 25 jours, 3 jours comme skipper, 1 250 milles et 3 traversées (dont 1 de nuit et 1 comme skipper), et l'âge minimum le jour de l'examen est de 18 ans.",
          ),
          enFr(
            "For both exams, all sea time has to be on vessels of the same discipline as the exam: sailing yachts for a sail exam, motor yachts for a power exam. Days on your friend's motor cruiser won't count toward a sail Offshore.",
            "Pour les deux examens, tout le temps de mer doit être fait sur des bateaux de la même discipline que l'examen : voiliers pour un examen voile, bateaux à moteur pour un examen moteur. Les jours passés sur la vedette d'un ami ne comptent pas pour un Offshore voile.",
          ),
        ],
      },
      {
        heading: enFr("Time on yachts over 24 metres", "Le temps passé sur des yachts de plus de 24 mètres"),
        paragraphs: [
          enFr(
            "The RYA has a separate table for large yachts over 24 m, up to 3,000 gt. Days on board and miles on those boats can count toward Coastal and Offshore for up to 50% of the minimum requirement, and you'll need evidence of your status on board, by testimonial or seaman's discharge book. Days as skipper, on both exam pages, are counted on vessels under 24 m LOA. If your sea time is on a yacht over 24 m and 500 gt, the RYA asks you to contact its training department.",
            "La RYA a un tableau à part pour les grands yachts de plus de 24 m, jusqu'à 3 000 gt. Les jours à bord et les milles faits sur ces bateaux peuvent compter pour le Coastal et l'Offshore jusqu'à 50 % du minimum exigé, avec une preuve de votre fonction à bord, par attestation ou livret de marin. Les jours comme skipper, sur les deux pages d'examen, se comptent sur des bateaux de moins de 24 m hors tout. Si votre temps de mer a été fait sur un yacht de plus de 24 m et 500 gt, la RYA demande de contacter son service formation.",
          ),
        ],
      },
      {
        heading: enFr("Keeping a log that holds up", "Tenir un carnet qui tient la route"),
        paragraphs: [
          enFr(
            "Whatever you log in, each passage should let the examiner rebuild the count: the date, the boat and its length, departure and arrival times and places, the planned distance and the distance run, whether you were skipper, whether the water was tidal, and any hours underway at night. With those details written down at the time, the eight-hour rule and the ten-year window are simple arithmetic.",
            "Quel que soit votre support, chaque traversée doit permettre à l'examinateur de refaire le compte : la date, le bateau et sa longueur, les heures et lieux de départ et d'arrivée, la distance planifiée et la distance parcourue, si vous étiez skipper, si les eaux étaient à marée, et les heures de navigation de nuit. Avec ces éléments notés sur le moment, la règle des huit heures et la fenêtre de dix ans deviennent de la simple arithmétique.",
          ),
          enFr(
            "We built [SeaTally](/apps/seatally) to do that arithmetic. It records the passage from GPS, works out qualifying days with the eight-hour rule, keeps sail and power apart, and exports a sea time record in the RYA layout. A paper logbook works just as well if every line carries the details above.",
            "Nous avons conçu [SeaTally](/apps/seatally) pour faire cette arithmétique. L'app enregistre la traversée par GPS, déduit les jours qualifiants avec la règle des huit heures, sépare voile et moteur, et exporte un relevé de temps de mer à la présentation RYA. Un carnet papier fait aussi bien l'affaire si chaque ligne porte les éléments ci-dessus.",
          ),
        ],
      },
    ],
    sources: [
      {
        label: "RYA: Qualifying passages (definitions of passage, tidal, days on board, vessel size table)",
        url: "https://www.rya.org.uk/training/certificates-of-competence/qualifying-passages/",
      },
      {
        label: "RYA: Yachtmaster Coastal exam pre-requisites",
        url: "https://www.rya.org.uk/training/certificates-of-competence/yachtmaster-coastal-exam/",
      },
      {
        label: "RYA: Yachtmaster Offshore exam pre-requisites",
        url: "https://www.rya.org.uk/training/certificates-of-competence/yachtmaster-offshore-exam/",
      },
      {
        label: "RYA/MCA practical exam application form and notes (PDF)",
        url: "https://assets.rya.org.uk/assetbank-rya-assets/action/directLinkImage?assetId=49859",
      },
    ],
  },

  {
    slug: "night-time-pilot-logbook-easa-vs-faa",
    category: "guides",
    locales: ["en", "fr"],
    relatedApp: "pilote",
    title: enFr(
      "Night time in your pilot logbook: EASA vs FAA",
      "Le temps de nuit dans votre carnet de vol : EASA et FAA",
    ),
    excerpt: enFr(
      "EASA and the FAA define logged night the same way, by civil twilight. FAA night currency uses a different window, and EASA's passenger rule asks for a single night landing or an instrument rating.",
      "L'EASA et la FAA définissent la nuit à inscrire au carnet de la même façon, par le crépuscule civil. L'expérience récente de nuit FAA utilise une autre fenêtre, et la règle passagers de l'EASA demande un seul atterrissage de nuit ou une qualification de vol aux instruments.",
    ),
    publishedAt: "2026-11-15",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          enFr(
            "Two different things get called \"night\" in a pilot logbook. One is the night time you write in the night column. The other is the period that counts toward night currency before you can carry passengers. Under EASA and FAA rules the first is defined the same way, and the second isn't, which is how a single evening landing can count for one purpose and not for another.",
            "Deux choses différentes s'appellent « nuit » dans un carnet de vol. La première, c'est le temps que vous inscrivez dans la colonne nuit. La seconde, c'est la période qui compte pour l'expérience récente de nuit avant d'emporter des passagers. Dans les règles EASA et FAA, la première a la même définition, la seconde non. C'est ainsi qu'un même atterrissage du soir peut compter pour l'une et pas pour l'autre.",
          ),
        ],
      },
      {
        heading: enFr("Logged night: the same definition on both sides", "La nuit au carnet : même définition des deux côtés"),
        paragraphs: [
          enFr(
            "For the FAA, 14 CFR 1.1 defines night as \"the time between the end of evening civil twilight and the beginning of morning civil twilight, as published in the Air Almanac, converted to local time.\" Day or night is one of the conditions of flight you log under 14 CFR 61.51(b)(3).",
            "Côté FAA, le 14 CFR 1.1 définit la nuit comme la période entre la fin du crépuscule civil du soir et le début du crépuscule civil du matin, telle que publiée dans l'Air Almanac, convertie en heure locale. Le jour ou la nuit fait partie des conditions de vol à inscrire au carnet selon le 14 CFR 61.51(b)(3).",
          ),
          enFr(
            "For EASA, Part-FCL (FCL.010) defines night as \"the period between the end of evening civil twilight and the beginning of morning civil twilight or such other period between sunset and sunrise as may be prescribed by the appropriate authority.\" SERA, the European rules of the air, gives the same definition and adds where twilight ends: when the centre of the sun's disc is 6 degrees below the horizon, evening and morning.",
            "Côté EASA, la Part-FCL (FCL.010) définit la nuit comme la période entre la fin du crépuscule civil du soir et le début du crépuscule civil du matin, ou toute autre période entre le coucher et le lever du soleil prescrite par l'autorité compétente. Le règlement SERA, les règles de l'air européennes, donne la même définition et précise où s'arrête le crépuscule : quand le centre du disque solaire est à 6 degrés sous l'horizon, le soir comme le matin.",
          ),
          enFr(
            "So in both systems the night column starts when the sun is 6 degrees below the horizon. The EASA wording leaves room for a national authority to prescribe another period between sunset and sunrise, so if you fly under a European licence it's worth knowing what your own authority publishes.",
            "Dans les deux systèmes, la colonne nuit commence donc quand le soleil est à 6 degrés sous l'horizon. Le texte EASA laisse à une autorité nationale la possibilité de prescrire une autre période entre coucher et lever du soleil : si vous volez sous licence européenne, renseignez-vous sur ce que publie votre propre autorité.",
          ),
          enFr(
            "Civil twilight doesn't last a fixed number of minutes. It depends on latitude and season, which is why a flight that crosses a lot of longitude or latitude around dusk is hard to split by hand.",
            "Le crépuscule civil ne dure pas un nombre fixe de minutes. Sa durée dépend de la latitude et de la saison, et c'est pour ça qu'un vol qui parcourt beaucoup de longitude ou de latitude au moment du crépuscule est difficile à découper à la main.",
          ),
        ],
      },
      {
        heading: enFr("FAA night currency uses a different window", "L'expérience récente de nuit FAA utilise une autre fenêtre"),
        paragraphs: [
          enFr(
            "The FAA passenger rule, 14 CFR 61.57(b), doesn't use civil twilight. To act as pilot in command of an aircraft carrying persons \"during the period beginning 1 hour after sunset and ending 1 hour before sunrise\", you need, within the preceding 90 days, at least three takeoffs and three landings to a full stop during that same period. You must have been the sole manipulator of the controls, in an aircraft of the same category, class and type (if a type rating is required).",
            "La règle FAA sur les passagers, le 14 CFR 61.57(b), n'utilise pas le crépuscule civil. Pour être commandant de bord d'un aéronef transportant des personnes pendant la période qui va d'une heure après le coucher du soleil à une heure avant son lever, il faut avoir effectué dans les 90 jours précédents au moins trois décollages et trois atterrissages avec arrêt complet pendant cette même période. Vous devez avoir été seul aux commandes, sur un aéronef de même catégorie, classe et type (si une qualification de type est exigée).",
          ),
          enFr(
            "Two details trip people up. Touch-and-goes don't meet the full-stop requirement. And at most latitudes evening civil twilight ends before the one-hour mark, so there's a stretch of time that's already night in your logbook but too early for 61.57(b). A full flight simulator approved for takeoffs and landings can be used, with the visual system set to that period, inside an approved course at a part 142 training center.",
            "Deux détails piègent souvent. Les touch-and-go ne remplissent pas l'exigence d'arrêt complet. Et sous la plupart des latitudes, le crépuscule civil du soir se termine avant la barre d'une heure : il existe donc un créneau qui est déjà de la nuit dans votre carnet mais trop tôt pour le 61.57(b). Un simulateur de vol complet approuvé pour les décollages et atterrissages peut servir, avec le visuel réglé sur cette période, dans le cadre d'un cours approuvé d'un centre de formation part 142.",
          ),
        ],
      },
      {
        heading: enFr("EASA night recency for passengers", "L'expérience récente de nuit EASA pour les passagers"),
        paragraphs: [
          enFr(
            "Under FCL.060(b)(2), for aeroplanes, helicopters, powered-lift and airships, a pilot can't operate as PIC at night in commercial air transport or carrying passengers unless they've either carried out, in the preceding 90 days, at least one takeoff, approach and landing at night as pilot flying in an aircraft of the same type or class (or an FFS representing it), or hold an instrument rating.",
            "Selon le FCL.060(b)(2), pour les avions, hélicoptères, aéronefs à sustentation motorisée et dirigeables, un pilote ne peut pas être commandant de bord de nuit en transport aérien commercial ou avec des passagers, sauf s'il a effectué dans les 90 jours précédents au moins un décollage, une approche et un atterrissage de nuit comme pilote aux commandes sur un aéronef de même type ou classe (ou un FFS qui le représente), ou s'il détient une qualification de vol aux instruments.",
          ),
          enFr(
            "The differences with the FAA rule are easy to list. EASA asks for one takeoff, approach and landing where the FAA asks for three takeoffs and three full-stop landings. An instrument rating satisfies the EASA rule. And night here is the Part-FCL night, which starts at the end of civil twilight, so the EASA currency window matches the night column of your logbook.",
            "Les écarts avec la règle FAA se listent facilement. L'EASA demande un décollage, une approche et un atterrissage, là où la FAA demande trois décollages et trois atterrissages avec arrêt complet. Une qualification de vol aux instruments suffit côté EASA. Et la nuit dont il s'agit est celle de la Part-FCL, qui commence à la fin du crépuscule civil : la fenêtre d'expérience récente EASA coïncide avec la colonne nuit de votre carnet.",
          ),
        ],
      },
      {
        heading: enFr("One landing, three answers", "Un atterrissage, trois réponses"),
        paragraphs: [
          enFr(
            "Take an invented evening to see how this plays out. Sunset is at 19:00 local time, evening civil twilight ends at 19:30, so the FAA currency window opens at 20:00. You land to a full stop at 19:45.",
            "Prenons une soirée inventée pour voir ce que ça donne. Coucher du soleil à 19 h 00 heure locale, fin du crépuscule civil à 19 h 30 : la fenêtre d'expérience récente FAA s'ouvre donc à 20 h 00. Vous atterrissez avec arrêt complet à 19 h 45.",
          ),
        ],
        list: [
          enFr(
            "Logbook: the minutes after 19:30 go in the night column, under either system.",
            "Carnet : les minutes après 19 h 30 vont dans la colonne nuit, dans les deux systèmes.",
          ),
          enFr(
            "EASA FCL.060(b)(2): it's a night landing, so it counts toward your one in 90 days.",
            "EASA FCL.060(b)(2) : c'est un atterrissage de nuit, il compte pour celui des 90 jours.",
          ),
          enFr(
            "FAA 61.57(b): it doesn't count, since it happened before 20:00.",
            "FAA 61.57(b) : il ne compte pas, puisqu'il a eu lieu avant 20 h 00.",
          ),
        ],
      },
      {
        heading: enFr("Logging it without doing the astronomy", "Tenir le carnet sans faire d'astronomie"),
        paragraphs: [
          enFr(
            "Most of the confusion goes away if you log night landings as their own figure, separate from night time, and note full stops separately from touch-and-goes. For FAA currency, count only the landings made from one hour after sunset.",
            "L'essentiel de la confusion disparaît si vous notez les atterrissages de nuit comme un chiffre à part, distinct du temps de nuit, et les arrêts complets à part des touch-and-go. Pour l'expérience récente FAA, ne comptez que les atterrissages faits à partir d'une heure après le coucher du soleil.",
          ),
          enFr(
            "[Pilot](/apps/pilote), our logbook app, computes night time from the sun's position along your route, minute by minute, using the civil twilight definition. It keeps EASA and FAA rules side by side on each flight and tracks night passenger currency under FCL.060(b)(2) and 61.57(b), counting full-stop landings for the FAA. It can't tell from block times alone whether a landing fell before or after the one-hour mark, so the night landings you enter are the ones it counts.",
            "[Pilote](/apps/pilote), notre carnet de vol, calcule le temps de nuit à partir de la position du soleil le long de votre route, minute par minute, selon la définition du crépuscule civil. Il garde les règles EASA et FAA côte à côte sur chaque vol et suit l'expérience récente de nuit avec passagers selon le FCL.060(b)(2) et le 61.57(b), en ne retenant que les arrêts complets pour la FAA. Il ne peut pas savoir, à partir des seules heures bloc, si un atterrissage a eu lieu avant ou après la barre d'une heure : ce sont les atterrissages de nuit que vous saisissez qui sont comptés.",
          ),
        ],
      },
    ],
    sources: [
      {
        label: "eCFR: 14 CFR 1.1, General definitions (Night)",
        url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-A/part-1/section-1.1",
      },
      {
        label: "eCFR: 14 CFR 61.51, Pilot logbooks",
        url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.51",
      },
      {
        label: "eCFR: 14 CFR 61.57, Recent flight experience: Pilot in command",
        url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.57",
      },
      {
        label: "EASA: Easy Access Rules for Aircrew, Regulation (EU) No 1178/2011 (FCL.010, FCL.060), revision from August 2023",
        url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-aircrew-regulation-eu-no",
      },
      {
        label: "EASA: Easy Access Rules for Standardised European Rules of the Air, Regulation (EU) No 923/2012 (Article 2(97))",
        url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-standardised-european",
      },
    ],
  },

  {
    slug: "how-to-fill-in-uscg-cg-719s",
    category: "guides",
    locales: ["en", "fr"],
    relatedApp: "seatally",
    title: enFr(
      "How to fill in USCG form CG-719S (Small Vessel Sea Service)",
      "Comment remplir le formulaire USCG CG-719S (Small Vessel Sea Service)",
    ),
    excerpt: enFr(
      "A section-by-section walk through the CG-719S: one form per vessel, days by month, what a day means on a small boat, and what the person signing is attesting to.",
      "Le CG-719S section par section : un formulaire par navire, les jours mois par mois, ce que vaut un jour sur un petit bateau, et ce qu'atteste la personne qui signe.",
    ),
    publishedAt: "2026-11-15",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          enFr(
            "The CG-719S is the U.S. Coast Guard's optional Small Vessel Sea Service Form. Its header says it's for service on vessels of less than 200 gross register tons only. Mariners use it to document sea time when applying for a Merchant Mariner Credential.",
            "Le CG-719S est le formulaire facultatif de l'U.S. Coast Guard pour le temps de mer sur petits navires (Small Vessel Sea Service Form). Son en-tête précise qu'il ne concerne que le service sur des navires de moins de 200 tonneaux de jauge brute. Les marins s'en servent pour justifier leur temps de mer quand ils demandent un Merchant Mariner Credential.",
          ),
          enFr(
            "This is a general guide. The National Maritime Center (NMC) evaluates your application and decides what service it credits, so when this page and the NMC disagree, go with the NMC.",
            "Ce guide reste général. C'est le National Maritime Center (NMC) qui instruit votre dossier et décide du temps de service qu'il retient : si cette page et le NMC divergent, suivez le NMC.",
          ),
        ],
      },
      {
        heading: enFr("Before you start", "Avant de commencer"),
        paragraphs: [
          enFr(
            "Download the current form from the NMC's forms page. The NMC asks you not to fill it in inside a web browser: save it to your computer as Last Name_First Name_Mariner Reference Number (if you have one) and complete it in the Adobe PDF application.",
            "Téléchargez la version en vigueur sur la page des formulaires du NMC. Le NMC demande de ne pas la remplir dans le navigateur : enregistrez-la sur votre ordinateur sous la forme Nom_Prénom_numéro de référence de marin (si vous en avez un) et remplissez-la dans l'application Adobe PDF.",
          ),
        ],
      },
      {
        heading: enFr("Section I: one form per vessel", "Section I : un formulaire par navire"),
        paragraphs: [
          enFr(
            "Section I carries the note \"Complete One Form Per Vessel\". If you served on three boats, you'll fill in three forms. Each one asks for:",
            "La section I porte la mention « Complete One Form Per Vessel ». Si vous avez navigué sur trois bateaux, vous remplirez trois formulaires. Chacun demande :",
          ),
        ],
        list: [
          enFr(
            "your name, your mariner reference number if you have one, and your Social Security Number",
            "votre nom, votre numéro de référence de marin si vous en avez un, et votre numéro de sécurité sociale (SSN)",
          ),
          enFr(
            "the vessel name and the official number(s) listed on its registration, certificate or document",
            "le nom du navire et le ou les numéros officiels inscrits sur son immatriculation, certificat ou document",
          ),
          enFr(
            "gross tons, length, and width and depth if you know them",
            "la jauge brute, la longueur, ainsi que la largeur et le creux si vous les connaissez",
          ),
          enFr(
            "propulsion (motor, steam, gas turbine, sail or auxiliary sail) and the capacity you served in (master, mate, operator, deckhand, engine and so on)",
            "la propulsion (moteur, vapeur, turbine à gaz, voile ou voile auxiliaire) et la fonction occupée (capitaine, second, opérateur, matelot, machine, etc.)",
          ),
          enFr(
            "the body or bodies of water where the vessel was underway",
            "la ou les étendues d'eau où le navire naviguait",
          ),
        ],
      },
      {
        paragraphs: [
          enFr(
            "The privacy statement on the form says that providing this information, the SSN included, is voluntary, and that not providing it may result in the credential not being issued. These fields line up with what 46 CFR 10.232 requires of any sea service evidence: vessel names and official numbers, gross tonnage, propulsion, the amount and nature of your experience, dates of service and routes.",
            "La mention de confidentialité du formulaire indique que fournir ces informations, SSN compris, est facultatif, et que ne pas les fournir peut entraîner la non-délivrance du titre. Ces champs correspondent à ce que le 46 CFR 10.232 exige de toute preuve de temps de mer : noms et numéros officiels des navires, jauge brute, propulsion, durée et nature de votre expérience, dates de service et zones de navigation.",
          ),
        ],
      },
      {
        heading: enFr("Section II: days by month", "Section II : les jours mois par mois"),
        paragraphs: [
          enFr(
            "Section II, Record of Underway Service, is a grid with one block per month. In each block you write the year and the number of days you served that month, and you can show more than one year on the same form. Below the grid the form asks for the average distance offshore, the average hours underway per day, the total number of days on this vessel, and how many of those days were on the Great Lakes, on waters shoreward of the boundary line, and on waters seaward of it (the boundary line is defined in 46 CFR Part 7).",
            "La section II, Record of Underway Service, est une grille avec un bloc par mois. Dans chaque bloc, on inscrit l'année et le nombre de jours de service de ce mois, et on peut faire figurer plusieurs années sur le même formulaire. Sous la grille, le formulaire demande la distance moyenne à la côte, le nombre moyen d'heures de navigation par jour, le total de jours sur ce navire, et combien de ces jours ont été faits sur les Grands Lacs, en deçà de la ligne de démarcation et au-delà (cette ligne est définie au 46 CFR Part 7).",
          ),
          enFr(
            "The split matters for what you're applying for. Under 46 CFR 10.232(b), for an oceans or near-coastal endorsement, Great Lakes service is credited day for day up to 100% of the required service, and service on other inland waters day for day up to 50%. Check that the monthly figures add up to the total you give for the vessel before you hand the form over for signature.",
            "Cette répartition compte selon ce que vous demandez. D'après le 46 CFR 10.232(b), pour une mention oceans ou near-coastal, le service sur les Grands Lacs est compté jour pour jour jusqu'à 100 % du service exigé, et le service sur les autres eaux intérieures jour pour jour jusqu'à 50 %. Vérifiez que la somme des mois correspond au total indiqué pour le navire avant de faire signer le formulaire.",
          ),
        ],
      },
      {
        heading: enFr("What counts as a day", "Ce qui compte comme un jour"),
        paragraphs: [
          enFr(
            "The definition is in 46 CFR 10.107. In general a day is 8 hours of watchstanding or day-working, overtime not included. On vessels of less than 100 GRT, a day is still considered 8 hours unless the Coast Guard decides the vessel's operating schedule makes that inappropriate, and in no case is it less than 4 hours.",
            "La définition se trouve au 46 CFR 10.107. En règle générale, un jour correspond à 8 heures de quart ou de travail de jour, heures supplémentaires non comprises. Sur les navires de moins de 100 GRT, un jour reste fixé à 8 heures, sauf si la Coast Guard estime que le rythme d'exploitation du navire rend ce critère inadapté, et il ne descend jamais en dessous de 4 heures.",
          ),
          enFr(
            "That's why the form asks for the average hours underway per day. A half-day charter boat and a boat that runs all day will be read differently, and it's the Coast Guard that decides which standard applies. Write the hours as they were and leave the conversion to the evaluator.",
            "C'est pour ça que le formulaire demande le nombre moyen d'heures de navigation par jour. Un bateau qui fait des sorties d'une demi-journée et un bateau qui tourne toute la journée ne seront pas lus de la même façon, et c'est la Coast Guard qui décide du critère applicable. Indiquez les heures telles qu'elles ont été et laissez la conversion à l'évaluateur.",
          ),
        ],
      },
      {
        heading: enFr("Section III: who signs, and what they attest", "Section III : qui signe, et ce qu'il atteste"),
        paragraphs: [
          enFr(
            "The form's instructions follow 46 CFR 10.232. If you own the vessel, you can attest to your own experience and provide proof of ownership. If you don't, you need letters or other evidence from licensed personnel or from the owners of the vessels listed.",
            "Les consignes du formulaire suivent le 46 CFR 10.232. Si vous êtes propriétaire du navire, vous pouvez attester vous-même de votre expérience en fournissant une preuve de propriété. Sinon, il vous faut des lettres ou d'autres preuves émanant de personnel breveté ou des propriétaires des navires concernés.",
          ),
          enFr(
            "The owner, operator or master who signs certifies that \"the above individual has served on the above vessel as stated\", gives their name, address and phone number (email is optional) and their title, and acknowledges that a false or fraudulent statement can lead to a fine or imprisonment of up to five years, or both, under 18 U.S.C. 1001. You sign a matching certification for yourself as the applicant. Both signatures carry the same warning, so make sure the person signing has actually seen the days you've written.",
            "Le propriétaire, l'exploitant ou le capitaine qui signe certifie que la personne ci-dessus a servi sur le navire ci-dessus comme indiqué, donne son nom, son adresse et son téléphone (l'e-mail est facultatif) ainsi que sa qualité, et reconnaît qu'une déclaration fausse ou frauduleuse peut entraîner une amende, une peine de prison allant jusqu'à cinq ans, ou les deux, selon le 18 U.S.C. 1001. Vous signez une certification équivalente pour vous-même en tant que candidat. Les deux signatures portent le même avertissement : assurez-vous que la personne qui signe a bien vu les jours que vous avez inscrits.",
          ),
        ],
      },
      {
        heading: enFr("Keeping the numbers ready", "Avoir les chiffres sous la main"),
        paragraphs: [
          enFr(
            "The form is easy once you have a log that gives you days per month, per vessel and per role, with the hours underway. Reconstructing that from memory years later is where most of the pain comes from.",
            "Le formulaire se remplit vite quand on dispose d'un carnet qui donne les jours par mois, par navire et par fonction, avec les heures de navigation. Ce qui coûte, c'est de tout reconstituer de mémoire des années plus tard.",
          ),
          enFr(
            "[SeaTally](/apps/seatally) fills in one CG-719S per vessel and per role, with the monthly grid built from the passages you've logged, ready to print and sign. The SSN box is left empty for you to fill in by hand, since the app never asks for it.",
            "[SeaTally](/apps/seatally) prépare un CG-719S par navire et par fonction, avec la grille mensuelle construite à partir des traversées enregistrées, prêt à imprimer et à signer. La case SSN reste vide, à remplir à la main, puisque l'app ne la demande jamais.",
          ),
        ],
      },
    ],
    sources: [
      {
        label: "USCG National Maritime Center: forms page (CG-719S and filling instructions)",
        url: "https://www.dco.uscg.mil/nmc/forms/",
      },
      {
        label: "USCG form CG-719S, Small Vessel Sea Service Form (PDF, revision 12/25)",
        url: "https://media.defense.gov/2018/May/22/2001920387/-1/-1/0/CG_719S.PDF",
      },
      {
        label: "eCFR: 46 CFR 10.107, Definitions (Day)",
        url: "https://www.ecfr.gov/current/title-46/chapter-I/subchapter-B/part-10/subpart-A/section-10.107",
      },
      {
        label: "eCFR: 46 CFR 10.232, Sea service",
        url: "https://www.ecfr.gov/current/title-46/chapter-I/subchapter-B/part-10/subpart-B/section-10.232",
      },
    ],
  },
];

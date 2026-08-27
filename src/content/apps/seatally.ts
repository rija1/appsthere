import { l, type AppDefinition } from "@/content/types";

/**
 * SeaTally — a sea time logbook that computes eligibility for RYA
 * Yachtmaster certificates and USCG licence renewals. Miles and night
 * hours are measured from a GPS track, offline, at sea.
 *
 * Facts here mirror the app source (seatime repo, target `SeaTally`):
 * eligibility rules and the 10-year window from `SeaTallyKit/Credential.swift`
 * and `EligibilityEngine.swift`, the 8-consecutive-hour qualifying day from
 * `QualifyingDays.swift`, night hours by solar position from
 * `SolarPosition.swift`, track analysis and signal-gap estimation from
 * `Track.swift`, the RYA record and CG-719S from `SeaLogPDF.swift` and
 * `CG719SPDF.swift`, the 25-passage free tier from `PurchasePolicy.swift`,
 * CSV round-trip from `SeaTallyCSV.swift`, deployment targets from
 * `project.yml`. The brand name is NOT localized (DECISIONS.md 2026-08-27):
 * "SeaTally" everywhere, as on the App Store listing in both languages.
 */
export const seaTally: AppDefinition = {
  slug: "seatally",
  name: l("SeaTally", "SeaTally", "SeaTally"),
  category: "productivity",

  tagline: l(
    "Your sea time, counted the way the rules count it.",
    "Votre temps de mer, compté comme les règles le comptent.",
    "你的海上时间，按规则的方式计算。",
  ),
  shortDescription: l(
    "A sea time logbook for RYA Yachtmaster candidates and USCG licence holders: miles and night hours measured from your GPS track, qualifying days worked out from the real rules, and the RYA record and CG-719S forms exported ready to sign.",
    "Un carnet de mer pour les candidats RYA Yachtmaster et les marins USCG : milles et heures de nuit mesurés depuis votre trace GPS, jours qualifiants déduits des vraies règles, carnet RYA et formulaires CG-719S exportés prêts à signer.",
    "面向 RYA Yachtmaster 考生与 USCG 执照持有者的海上时间日志：依据 GPS 轨迹测算航程与夜航小时，按真实规则推算合格天数，并导出可直接签署的 RYA 记录与 CG-719S 表格。",
  ),
  longDescription: l(
    "A Yachtmaster application, or a USCG renewal, comes down to a count: days at sea, miles, night hours, qualifying passages — under rules that are easy to get wrong. A qualifying day is not a calendar day; the ten-year window is clipped, not filtered; sail time does not count towards a power exam. SeaTally records the passage as you sail it, measures the miles from the track itself, works the rules out for you, and shows what is still missing in plain words. It runs entirely on your device: no account, no cloud, nothing leaves the boat.",
    "Un dossier Yachtmaster, ou un renouvellement USCG, se joue sur un décompte : jours de mer, milles, heures de nuit, traversées qualifiantes — avec des règles faciles à rater. Un jour qualifiant n'est pas un jour de calendrier ; la fenêtre de dix ans s'écrête, elle ne filtre pas ; le temps sous voile ne compte pas pour un examen moteur. SeaTally enregistre la navigation pendant que vous la faites, mesure les milles depuis la trace elle-même, applique les règles pour vous, et dit en clair ce qui manque encore. Tout vit sur votre appareil : pas de compte, pas de cloud, rien ne quitte le bord.",
    "Yachtmaster 申请或 USCG 续证，归根结底是一次清点：海上天数、航程、夜航小时、合格航次——而这些规则极易算错。合格天数不等于日历天数；十年窗口是截取而非过滤；帆船时间不计入机动船考试。SeaTally 在你航行时记录航次，直接从轨迹测算航程，替你套用规则，并用明白话指出还差什么。一切都在你的设备上运行：无账号、无云端，数据从不离船。",
  ),

  platforms: ["iOS 18+", "iPadOS 18+", "macOS 15+"],
  version: "1.0",
  releasedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  status: "coming-soon",
  heroScene: "seaprogress",

  licenseProductID: "com.seatally.app.pro",
  // App Store Connect listing created 2026-08-27 (bundle com.seatally.app);
  // the public URL only exists once the app clears App Review.
  appStoreUrl: undefined,

  features: [
    {
      id: "eligibility",
      icon: "book",
      title: l(
        "Eligibility, not just a total",
        "L'éligibilité, pas seulement un total",
        "不只是总数，而是资格判定",
      ),
      description: l(
        "Pick your certificate — RYA Coastal or Offshore, sail or power, or a USCG renewal — and every requirement shows its progress and what is still missing, in plain words.",
        "Choisissez votre brevet — RYA Coastal ou Offshore, voile ou moteur, ou un renouvellement USCG — et chaque exigence affiche sa progression et ce qui manque, en clair.",
        "选择你的证书——RYA Coastal 或 Offshore、帆船或机动船，或 USCG 续证——每项要求都会显示进度以及还差什么。",
      ),
    },
    {
      id: "track",
      icon: "zap",
      title: l(
        "Miles measured from the track",
        "Des milles mesurés sur la trace",
        "依据轨迹测算航程",
      ),
      description: l(
        "Start recording at departure, stop on arrival. Distance follows the great circle along the track, night hours come from the sun's real position, and a signal gap is counted in a straight line and marked as estimated.",
        "Démarrez à l'appareillage, arrêtez à l'arrivée. La distance suit l'orthodromie le long de la trace, les heures de nuit viennent de la position réelle du soleil, et une coupure de signal est comptée en ligne droite et signalée comme estimée.",
        "启航时开始记录，抵港时停止。航程沿轨迹按大圆航线累计，夜航小时依据太阳真实位置推算，信号中断段按直线计入并标注为估算值。",
      ),
    },
    {
      id: "qualifying",
      icon: "calendar",
      title: l(
        "Qualifying days worked out, not guessed",
        "Des jours qualifiants déduits, pas devinés",
        "合格天数是推算出来的，不是猜的",
      ),
      description: l(
        "A qualifying day is eight consecutive hours living aboard with most of it at sea — at most one per 24 hours, and never from time in port alone. SeaTally works it out by crossing your time aboard with your passages.",
        "Un jour qualifiant, c'est huit heures consécutives vécues à bord dont la majorité en mer — un seul par tranche de 24 heures, et jamais depuis du temps à quai. SeaTally le déduit en croisant vos séjours à bord et vos navigations.",
        "合格天数指连续八小时在船上生活且其中多数时间在海上——每 24 小时最多一天，且绝不能仅凭停港时间。SeaTally 通过交叉比对在船时间与航次自动推算。",
      ),
    },
    {
      id: "documents",
      icon: "download",
      title: l(
        "The RYA record and CG-719S forms",
        "Le carnet RYA et les CG-719S",
        "RYA 记录与 CG-719S 表格",
      ),
      description: l(
        "Export a sea time record in the RYA/MCA layout — tidal and non-tidal totals copy straight into Section 3 — and CG-719S forms, one per vessel and role, monthly grid filled, ready to sign.",
        "Exportez un carnet de temps de mer à la présentation RYA/MCA — les totaux en eaux à marée et hors marée se recopient dans la Section 3 — et des CG-719S, un par navire et par fonction, grille mensuelle remplie, prêts à signer.",
        "导出符合 RYA/MCA 版式的海上时间记录——潮汐与非潮汐水域合计可直接抄入第 3 节——以及按船舶和职务分别生成、月度表格已填好、可直接签署的 CG-719S 表格。",
      ),
    },
    {
      id: "private",
      icon: "lock",
      title: l(
        "Nothing leaves the boat",
        "Rien ne quitte le bord",
        "数据从不离船",
      ),
      description: l(
        "No account, no cloud, no telemetry — and no Social Security Number: that box on the CG-719S prints empty, for you to fill in by hand. Recording works with no signal at all, which is the normal state at sea.",
        "Pas de compte, pas de cloud, pas de télémétrie — et pas de numéro de sécurité sociale : cette case du CG-719S sort vide, à remplir à la main. L'enregistrement fonctionne sans le moindre réseau, l'état normal en mer.",
        "无账号、无云端、无遥测——也不索取社会安全号：CG-719S 上的该栏留空，由你手写填入。记录功能在完全无信号时照常工作，而这正是海上的常态。",
      ),
    },
    {
      id: "portable",
      icon: "download",
      title: l(
        "Never locked in",
        "Jamais captif",
        "绝不锁定你的数据",
      ),
      description: l(
        "A re-importable CSV export, automatic JSON backups and a 30-day trash. Exports, eligibility and backups are never locked — with or without Pro.",
        "Un export CSV ré-importable, des sauvegardes JSON automatiques et une corbeille de 30 jours. Exports, éligibilité et sauvegardes ne sont jamais verrouillés — avec ou sans Pro.",
        "可重新导入的 CSV 导出、自动 JSON 备份与 30 天回收站。导出、资格计算与备份从不上锁——无论是否购买 Pro。",
      ),
    },
  ],

  featureBlocks: [
    {
      id: "rules-block",
      eyebrow: l("The counting rules", "Les règles de comptage", "计数规则"),
      title: l(
        "The rules are trickier than the totals.",
        "Les règles sont plus piégeuses que les totaux.",
        "规则比总数更容易出错。",
      ),
      body: l(
        "A weekend with two day sails is two qualifying days, not one. A 2,800-mile passage that straddles the ten-year cut-off still counts for the part inside the window. Time on a motor yacht adds nothing to a sail exam, and a vessel over 24 m has its miles halved. Getting one of these wrong costs months. SeaTally encodes each rule as data, with a named test behind it, and returns what it excluded — and why — alongside every total.",
        "Un week-end avec deux sorties à la journée vaut deux jours qualifiants, pas un. Une traversée de 2 800 milles à cheval sur la limite des dix ans compte encore pour sa part dans la fenêtre. Le temps sur un yacht à moteur n'apporte rien à un examen voile, et un navire de plus de 24 m voit ses milles plafonnés de moitié. Se tromper d'une seule de ces règles coûte des mois. SeaTally encode chaque règle comme une donnée, avec un test nommé derrière, et rend ce qu'il a écarté — et pourquoi — à côté de chaque total.",
        "一个周末出两趟日航算两个合格天数，而不是一个。跨越十年截止线的 2,800 海里航次，窗口之内的部分仍然计入。机动游艇上的时间对帆船考试毫无帮助，而超过 24 米的船舶航程只按一半计算。任何一条算错都要多花数月。SeaTally 把每条规则编码为数据，背后配有具名测试，并在每个总数旁列出被排除的部分及其原因。",
      ),
      bullets: [
        l(
          "A qualifying day: 8 consecutive hours aboard, most of it at sea, one per 24 h",
          "Un jour qualifiant : 8 heures consécutives à bord, la majorité en mer, un par 24 h",
          "合格天数：连续 8 小时在船、多数时间在海上，每 24 小时一天",
        ),
        l(
          "The ten-year window clips a passage, it does not discard it",
          "La fenêtre de dix ans écrête une navigation, elle ne l'écarte pas",
          "十年窗口对航次做截取，而非整段丢弃",
        ),
        l(
          "Discipline must match: sail time does not count towards a power exam",
          "La discipline doit correspondre : le temps sous voile ne compte pas pour un examen moteur",
          "航行类别必须匹配：帆船时间不计入机动船考试",
        ),
      ],
      scene: "seaprogress",
    },
    {
      id: "offline-block",
      eyebrow: l("At sea", "En mer", "海上"),
      title: l(
        "No signal is the normal state.",
        "L'absence de réseau est l'état normal.",
        "没有信号才是常态。",
      ),
      body: l(
        "Offshore there is no network, and a passage lasts longer than a lit screen. SeaTally keeps recording with the phone locked and in your pocket, writes the session to disk at every fix — so a flat battery or a crash never costs you the night — and if the GPS drops out, those miles are counted in a straight line and clearly marked as estimated rather than passed off as measured.",
        "Au large il n'y a pas de réseau, et une traversée dure plus longtemps qu'un écran allumé. SeaTally continue d'enregistrer téléphone verrouillé au fond de la poche, écrit la session sur le disque à chaque point — une batterie à plat ou un plantage ne coûte jamais la nuit — et si le GPS décroche, ces milles sont comptés en ligne droite et clairement marqués estimés plutôt que présentés comme mesurés.",
        "远海没有网络，而一次航次比亮屏时间长得多。SeaTally 在手机锁屏、放在口袋里时继续记录，每收到一个定位点就把会话写入磁盘——电量耗尽或应用崩溃都不会让你损失整夜——若 GPS 中断，该段航程按直线计入并明确标注为估算，而不是冒充实测值。",
      ),
      bullets: [
        l(
          "Recording survives the screen going off, and the app being killed",
          "L'enregistrement survit à l'écran éteint, et à l'app tuée",
          "熄屏乃至应用被终止，记录依然存续",
        ),
        l(
          "Signal gaps are shown on the map and counted as estimated",
          "Les coupures de signal sont montrées sur la carte et comptées comme estimées",
          "信号中断在地图上标出，并按估算值计入",
        ),
        l(
          "Impossible positions are discarded — they would add miles you never sailed",
          "Les positions impossibles sont écartées — elles ajouteraient des milles jamais parcourus",
          "不合理定位会被剔除——否则会凭空增加你从未航行的里程",
        ),
      ],
      scene: "sealog",
    },
  ],

  screenshots: [
    {
      id: "shot-progress",
      scene: "seaprogress",
      title: l("How close you are", "Où vous en êtes", "你还差多少"),
      description: l(
        "Every requirement of your certificate, its progress, and what is still missing.",
        "Chaque exigence de votre brevet, sa progression, et ce qui manque encore.",
        "证书的每项要求、当前进度，以及还差什么。",
      ),
    },
    {
      id: "shot-track",
      scene: "sealog",
      title: l("The passage on its track", "La navigation sur sa trace", "航次及其轨迹"),
      description: l(
        "Distance, night hours and the signal gaps — measured, and shown on the map.",
        "Distance, heures de nuit et coupures de signal — mesurées, et montrées sur la carte.",
        "航程、夜航小时与信号中断——实测结果，并在地图上呈现。",
      ),
    },
  ],

  pricing: [
    {
      id: "free",
      name: l("Free", "Gratuit", "免费版"),
      amountUsd: 0,
      billing: "free",
      description: l(
        "The whole logbook, capped at 25 passages.",
        "Le carnet entier, plafonné à 25 navigations.",
        "完整日志，上限 25 个航次。",
      ),
      features: [
        l("25 logged passages, fully featured", "25 navigations consignées, sans restriction", "25 个已记录航次，功能完整"),
        l("GPS recording, miles and night hours", "Enregistrement GPS, milles et heures de nuit", "GPS 记录、航程与夜航小时"),
        l("Eligibility for every credential", "Éligibilité pour tous les référentiels", "覆盖全部证书的资格计算"),
        l("RYA record, CG-719S and CSV exports", "Carnet RYA, CG-719S et export CSV", "RYA 记录、CG-719S 与 CSV 导出"),
        l("Automatic backups and 30-day trash", "Sauvegardes automatiques et corbeille 30 j", "自动备份与 30 天回收站"),
        l("iPhone, iPad and Mac", "iPhone, iPad et Mac", "iPhone、iPad 与 Mac"),
      ],
      cta: "download",
      highlighted: false,
    },
    {
      id: "pro",
      name: l("SeaTally Pro", "SeaTally Pro", "SeaTally Pro"),
      amountUsd: 29.99,
      billing: "one-time",
      description: l(
        "Unlimited passages. One purchase, no subscription, unlocked on every device.",
        "Navigations illimitées. Un achat, pas d'abonnement, débloqué sur tous vos appareils.",
        "无限航次。一次购买，无订阅，所有设备同步解锁。",
      ),
      features: [
        l("Everything in Free", "Tout le gratuit", "包含免费版全部功能"),
        l("Unlimited logged passages", "Navigations consignées illimitées", "无限已记录航次"),
        l("Universal purchase — iPhone, iPad and Mac", "Achat universel — iPhone, iPad et Mac", "通用购买——iPhone、iPad 与 Mac"),
        l("Restore on any new device", "Restauration sur tout nouvel appareil", "在任何新设备上恢复"),
      ],
      cta: "buy",
      highlighted: true,
    },
  ],

  faq: [
    {
      id: "faq-qualifying-day",
      question: l(
        "What counts as a qualifying day?",
        "Qu'est-ce qui compte comme jour qualifiant ?",
        "什么算作合格天数？",
      ),
      answer: l(
        "Eight consecutive hours living aboard with the majority of that time at sea — at most one per 24 hours, and never from time in port alone. SeaTally works this out by crossing your time aboard with the passages logged on the same vessel, so a weekend with two day sails counts as two days, and a week at anchor without sailing counts as none.",
        "Huit heures consécutives vécues à bord dont la majorité en mer — un seul par tranche de 24 heures, et jamais depuis du temps passé à quai. SeaTally le déduit en croisant vos séjours à bord et les navigations consignées sur le même navire : un week-end avec deux sorties vaut donc deux jours, et une semaine au mouillage sans naviguer n'en vaut aucun.",
        "连续八小时在船上生活且其中多数时间在海上——每 24 小时最多一天，且绝不能仅凭停港时间。SeaTally 通过交叉比对在船时间与同一船舶上的航次记录来推算：因此一个出两趟航的周末算两天，而一周只在锚地停留、未曾航行则一天也不算。",
      ),
    },
    {
      id: "faq-night-hours",
      question: l(
        "How are night hours counted?",
        "Comment les heures de nuit sont-elles comptées ?",
        "夜航小时如何计算？",
      ),
      answer: l(
        "From the sun's real position along your track, sampled as you sail — so a passage that crosses sunset is split correctly, and the midnight sun gives zero night hours rather than an error. The computed value is a proposed ceiling: what counts is the time you declare you actually kept watch, and you can always edit it down.",
        "Depuis la position réelle du soleil le long de votre trace, échantillonnée pendant que vous naviguez — une traversée qui franchit le coucher est donc répartie correctement, et le soleil de minuit donne zéro heure de nuit plutôt qu'une erreur. La valeur calculée est un plafond proposé : ce qui compte est le temps que vous déclarez avoir réellement veillé, et vous pouvez toujours le réduire.",
        "依据航行过程中沿轨迹采样的太阳真实位置计算——因此跨越日落的航次会被正确拆分，午夜太阳的情况返回零夜航小时而不是报错。计算值只是建议上限：真正计入的是你声明实际值更的时间，你随时可以下调。",
      ),
    },
    {
      id: "faq-offline",
      question: l(
        "Does it work with no signal?",
        "Fonctionne-t-elle sans réseau ?",
        "没有信号时能用吗？",
      ),
      answer: l(
        "Entirely. The app has no server and no account: recording, measuring, the eligibility calculation, the exports and the backups all run on the device. The only thing that needs a connection is the App Store purchase itself.",
        "Entièrement. L'app n'a ni serveur ni compte : l'enregistrement, la mesure, le calcul d'éligibilité, les exports et les sauvegardes se font sur l'appareil. La seule chose qui demande une connexion est l'achat sur l'App Store lui-même.",
        "完全可以。应用没有服务器也没有账号：记录、测算、资格计算、导出与备份全部在设备上完成。唯一需要联网的是 App Store 购买本身。",
      ),
    },
    {
      id: "faq-documents",
      question: l(
        "Are the exported documents accepted?",
        "Les documents exportés sont-ils acceptés ?",
        "导出的文件会被接受吗？",
      ),
      answer: l(
        "The sea time record follows the RYA/MCA layout, with totals that copy straight into Section 3 of the exam application, and a signature box on every line — entries are meant to be countersigned by the skipper before you leave the boat. The CG-719S forms follow the official grid, one per vessel and role. SeaTally prepares your file; the examiner or the Coast Guard decides.",
        "Le carnet de temps de mer suit la présentation RYA/MCA, avec des totaux qui se recopient tels quels dans la Section 3 du dossier d'examen, et une case de signature par ligne — les entrées sont faites pour être contresignées par le skipper avant de quitter le bord. Les CG-719S suivent la grille officielle, un par navire et par fonction. SeaTally prépare votre dossier ; l'examinateur ou les garde-côtes décident.",
        "海上时间记录采用 RYA/MCA 版式，合计数字可直接抄入考试申请表第 3 节，每行都设有签名栏——记录本应在离船前由船长会签。CG-719S 表格遵循官方表格式样，按船舶和职务各生成一份。SeaTally 负责准备材料，最终由考官或海岸警卫队裁定。",
      ),
    },
    {
      id: "faq-free-tier",
      question: l(
        "What does the free version leave out?",
        "Que laisse de côté la version gratuite ?",
        "免费版有哪些限制？",
      ),
      answer: l(
        "Only the number of passages you can log: twenty-five. Everything else is there — the eligibility calculation, GPS recording, the RYA record, the CG-719S forms, CSV export, backups and the trash are never locked, with or without Pro. A recording already under way is always saved, even if it takes you past the free allowance.",
        "Seulement le nombre de navigations consignables : vingt-cinq. Tout le reste est là — le calcul d'éligibilité, l'enregistrement GPS, le carnet RYA, les CG-719S, l'export CSV, les sauvegardes et la corbeille ne sont jamais verrouillés, avec ou sans Pro. Un enregistrement déjà en cours est toujours sauvegardé, même s'il vous fait dépasser le palier gratuit.",
        "仅限可记录的航次数量：二十五个。其余功能一应俱全——资格计算、GPS 记录、RYA 记录、CG-719S 表格、CSV 导出、备份与回收站从不上锁，无论是否购买 Pro。已经开始的记录始终会被保存，即使因此超出免费额度。",
      ),
    },
  ],

  requirements: [
    {
      id: "req-os",
      label: l("Operating system", "Système d'exploitation", "操作系统"),
      value: l(
        "iOS 18+, iPadOS 18+, or macOS 15 Sequoia+",
        "iOS 18+, iPadOS 18+ ou macOS 15 Sequoia+",
        "iOS 18 及以上、iPadOS 18 及以上，或 macOS 15 Sequoia 及以上",
      ),
    },
    {
      id: "req-location",
      label: l("Location", "Localisation", "定位"),
      value: l(
        "Used on-device to measure distance and night hours while recording; never transmitted",
        "Utilisée sur l'appareil pour mesurer distance et heures de nuit pendant l'enregistrement ; jamais transmise",
        "仅在设备本地用于记录期间测算航程与夜航小时；绝不上传",
      ),
    },
    {
      id: "req-internet",
      label: l("Internet", "Internet", "互联网"),
      value: l(
        "Never required — the app has no account and no server",
        "Jamais requis — l'app n'a ni compte ni serveur",
        "完全不需要——应用没有账号，也没有服务器",
      ),
    },
    {
      id: "req-purchase",
      label: l("Purchase", "Achat", "购买"),
      value: l(
        "Free download; Pro is a one-time in-app purchase (universal across iPhone, iPad, Mac)",
        "Téléchargement gratuit ; Pro est un achat intégré unique (universel iPhone, iPad, Mac)",
        "免费下载；Pro 为一次性应用内购买（iPhone、iPad、Mac 通用）",
      ),
    },
  ],

  changelog: [
    {
      version: "1.0",
      date: "2026-08-27",
      title: l("Initial release", "Version initiale", "首个正式版"),
      changes: [
        l(
          "GPS passage recording that survives a locked screen, a flat battery and a crash",
          "Enregistrement GPS d'une navigation, qui survit à l'écran verrouillé, à la batterie à plat et à un plantage",
          "GPS 航次记录，可承受锁屏、电量耗尽与应用崩溃",
        ),
        l(
          "Miles along the track, night hours from solar position, signal gaps marked as estimated",
          "Milles le long de la trace, heures de nuit par position solaire, coupures signalées comme estimées",
          "沿轨迹计算航程，按太阳位置推算夜航小时，信号中断标注为估算",
        ),
        l(
          "Eligibility for RYA Coastal and Offshore (sail and power) and USCG renewal",
          "Éligibilité RYA Coastal et Offshore (voile et moteur) et renouvellement USCG",
          "覆盖 RYA Coastal 与 Offshore（帆船与机动船）及 USCG 续证的资格计算",
        ),
        l(
          "Qualifying days from time aboard crossed with passages; qualifying passages detected",
          "Jours qualifiants issus du croisement séjours × navigations ; traversées qualifiantes détectées",
          "由在船时间与航次交叉推算合格天数；自动识别合格航次",
        ),
        l(
          "RYA/MCA sea time record and CG-719S forms, one per vessel and role",
          "Carnet de temps de mer RYA/MCA et formulaires CG-719S, un par navire et par fonction",
          "RYA/MCA 海上时间记录，以及按船舶和职务生成的 CG-719S 表格",
        ),
        l(
          "Passage detail with its track on a map, re-importable CSV export, JSON backups, 30-day trash",
          "Détail d'une navigation avec sa trace sur carte, export CSV ré-importable, sauvegardes JSON, corbeille 30 jours",
          "航次详情含地图轨迹、可重新导入的 CSV 导出、JSON 备份、30 天回收站",
        ),
        l("English and French", "Anglais et français", "英语与法语"),
      ],
    },
  ],

  reviews: [],
};

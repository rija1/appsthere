import { l, type AppDefinition } from "@/content/types";

/**
 * Serviced (FR: Entretien) — a maintenance log for everything you own:
 * home, cars, boat, RV and equipment. Works offline, one-time purchase,
 * data never locked in.
 *
 * Facts here mirror the app source (maintenance repo, target `Entretien`):
 * dual-threshold due engine and counter projection from
 * `EntretienKit/DueEngine.swift`, backups (daily + before destructive
 * actions, 14 copies) and 30-day trash from `Entretien/Data/Backup/`,
 * exports from `EntretienKit/CSV.swift` and `DossierPDF.swift`, free tier
 * (3 active assets) from PRICING.md, deployment targets from `project.yml`.
 * The brand token is localized like Pilot/Pilote: "Serviced" in English,
 * "Entretien" in French — matching the App Store name in each language.
 */
export const serviced: AppDefinition = {
  slug: "serviced",
  name: l("Serviced", "Entretien", "Serviced"),
  category: "productivity",

  tagline: l(
    "Everything you own, one maintenance log. Yours, offline, for good.",
    "Tout ce que vous possédez, un seul carnet d'entretien. À vous, hors-ligne, pour de bon.",
    "你拥有的一切，一本保养日志。属于你，离线可用，永久有效。",
  ),
  shortDescription: l(
    "A maintenance log for your home, cars, boat, RV and equipment — due by date or by engine hours, whichever comes first — with a PDF record buyers notice and data that never leaves your device.",
    "Un carnet d'entretien pour la maison, les voitures, le bateau, le camping-car et le matériel — échéances par date ou par heures moteur, la première atteinte — avec un dossier PDF que les acheteurs remarquent, et des données qui ne quittent jamais votre appareil.",
    "适用于房屋、汽车、船只、房车与设备的保养日志——按日期或发动机小时数到期，以先到者为准——生成买家会留意的 PDF 记录，数据永不离开你的设备。",
  ),
  longDescription: l(
    "Home apps don't understand engine hours. Car apps don't understand a house. Boat and RV apps rent you your own records by subscription, and when a service shuts down, the history goes with it. Serviced keeps every kind of asset in one logbook, tracks each job by calendar and by counter, projects counter-based jobs into real dates from how you actually use the machine, and hands everything back as CSV or a clean PDF maintenance record whenever you ask. No account, no server, no telemetry.",
    "Les apps « maison » ignorent les heures moteur. Les apps « voiture » ignorent la maison. Les apps bateau ou camping-car vous louent votre propre historique par abonnement — et quand le service ferme, l'historique disparaît avec lui. Entretien garde tous vos biens dans un seul carnet, suit chaque tâche par date et par compteur, projette les échéances au compteur en vraies dates d'après votre usage réel, et vous rend tout en CSV ou en dossier d'entretien PDF quand vous le demandez. Pas de compte, pas de serveur, pas de télémétrie.",
    "家居类应用不懂发动机小时数，汽车类应用不懂房屋，船只和房车类应用则通过订阅把你自己的记录租给你——服务一旦关闭，历史随之消失。Serviced 把所有类型的资产放进同一本日志，按日历与计数器双重跟踪每项保养，依据实际使用情况把计数器到期换算成真实日期，并随时以 CSV 或整洁的 PDF 保养记录交还全部数据。无账号、无服务器、无遥测。",
  ),

  platforms: ["iOS 18+", "iPadOS 18+", "macOS 15+"],
  version: "1.0",
  releasedAt: "2026-08-15",
  updatedAt: "2026-08-15",
  status: "coming-soon",
  heroScene: "dueboard",

  licenseProductID: "com.serviced.app.pro",
  // App Store Connect listing not live yet (bundle com.serviced.app).
  // Set once the app has cleared App Review — apps.apple.com 404s before.
  appStoreUrl: undefined,

  features: [
    {
      id: "everything",
      icon: "house",
      title: l("Every kind of asset", "Tous les types de biens", "所有类型的资产"),
      description: l(
        "House, car, motorcycle, boat, RV, equipment — start from a template pre-filled with the usual jobs, all editable. Never a blank page.",
        "Maison, voiture, moto, bateau, camping-car, matériel — partez d'un modèle pré-rempli des tâches usuelles, toutes modifiables. Jamais de page blanche.",
        "房屋、汽车、摩托车、船只、房车、设备——从预填常见保养项目的模板开始，全部可编辑。绝无空白页。",
      ),
    },
    {
      id: "dual",
      icon: "calendar",
      title: l(
        "Due by date or by counter, whichever first",
        "Échéance par date ou compteur, la première atteinte",
        "按日期或计数器到期，以先到者为准",
      ),
      description: l(
        "“Oil change every 12 months or 10,000 km.” Both thresholds are tracked; the first one reached is the one you're reminded of. Counter jobs are projected into real dates from your actual usage.",
        "« Vidange tous les 12 mois ou 10 000 km. » Les deux seuils sont suivis ; le premier atteint déclenche le rappel. Les échéances au compteur sont projetées en vraies dates d'après votre usage réel.",
        "“每 12 个月或每 10,000 公里换一次机油。”两个阈值同时跟踪，先到者触发提醒；计数器类项目会依据实际使用换算成真实日期。",
      ),
    },
    {
      id: "fast",
      icon: "zap",
      title: l("A job logged in under 30 seconds", "Une intervention en moins de 30 secondes", "30 秒内记录一次保养"),
      description: l(
        "Tap the job that's due: today's date and the last counter are already filled in. Add a cost, a photo, who did it. The next one is scheduled.",
        "Touchez la tâche due : la date du jour et le dernier compteur sont déjà remplis. Ajoutez un coût, une photo, qui l'a faite. La suivante est planifiée.",
        "点按到期项目：当天日期与最近计数器读数已自动填好。补上费用、照片、执行者，下一次保养随即排定。",
      ),
    },
    {
      id: "record",
      icon: "book",
      title: l("The maintenance record (PDF)", "Le dossier d'entretien (PDF)", "保养记录（PDF）"),
      description: l(
        "Selling the car, the boat or the house? Export a clean maintenance record per asset — the item, its full history, the totals. Buyers notice.",
        "Vous vendez la voiture, le bateau, la maison ? Exportez un dossier d'entretien propre par bien — la fiche, l'historique complet, les totaux. Les acheteurs le remarquent.",
        "要出售汽车、船只或房屋？为每项资产导出一份整洁的保养记录——资产信息、完整历史、汇总金额。买家会留意。",
      ),
    },
    {
      id: "portable",
      icon: "download",
      title: l("Never locked in", "Jamais captif", "绝不锁定你的数据"),
      description: l(
        "Export everything to CSV, any time, for free. Deleted items wait 30 days in the trash; a complete JSON backup is written every day and before anything destructive.",
        "Export CSV complet, à tout moment, gratuitement. Les éléments supprimés attendent 30 jours dans la corbeille ; une sauvegarde JSON complète est écrite chaque jour et avant toute action destructrice.",
        "随时免费导出全部数据为 CSV。删除项在回收站保留 30 天；每天以及任何破坏性操作之前都会写入一份完整的 JSON 备份。",
      ),
    },
    {
      id: "offline",
      icon: "lock",
      title: l("Offline, native, one-time", "Hors-ligne, natif, achat unique", "离线、原生、一次付费"),
      description: l(
        "No account, no cloud, no telemetry. A real iPhone, iPad and Mac app — buy once, use everywhere.",
        "Pas de compte, pas de cloud, pas de télémétrie. Une vraie app iPhone, iPad et Mac — achetez une fois, utilisez partout.",
        "无账号、无云端、无遥测。真正的 iPhone、iPad 与 Mac 原生应用——一次购买，随处使用。",
      ),
    },
  ],

  featureBlocks: [
    {
      id: "dual-block",
      eyebrow: l("Date or counter", "Date ou compteur", "日期或计数器"),
      title: l(
        "Engine hours are not a calendar.",
        "Les heures moteur ne sont pas un calendrier.",
        "发动机小时数不是日历。",
      ),
      body: l(
        "A boat that sits all winter and a mower that runs every week don't age the same way, which is why manufacturers give two intervals — months and hours, or months and kilometres. Most apps keep one and ignore the other. Serviced keeps both on every recurring job, watches which threshold arrives first, and turns “50 hours left” into a real date from the readings you actually enter.",
        "Un bateau qui hiverne et une tondeuse qui tourne chaque semaine ne vieillissent pas pareil — c'est pourquoi les constructeurs donnent deux intervalles : mois et heures, ou mois et kilomètres. La plupart des apps n'en gardent qu'un. Entretien garde les deux sur chaque tâche récurrente, surveille lequel arrive en premier, et transforme « 50 heures restantes » en vraie date d'après les relevés que vous saisissez réellement.",
        "一艘整个冬天闲置的船和一台每周运转的割草机老化方式并不相同，因此厂商给出两种间隔——月份与小时数，或月份与公里数。多数应用只保留其一。Serviced 在每项周期性保养上同时保留两者，关注哪个阈值先到，并依据你实际输入的读数把“还剩 50 小时”换算成真实日期。",
      ),
      bullets: [
        l(
          "Time and counter intervals on the same job — the first one reached triggers",
          "Intervalle de temps et de compteur sur la même tâche — le premier atteint déclenche",
          "同一项目同时设置时间与计数器间隔——先到者触发",
        ),
        l(
          "Counter readings in seconds; projections update from your real usage rate",
          "Relevés de compteur en quelques secondes ; les projections suivent votre usage réel",
          "几秒内录入计数器读数；预测随实际使用频率更新",
        ),
        l(
          "A counter that goes backwards is flagged, never silently averaged in",
          "Un compteur qui recule est signalé, jamais moyenné en silence",
          "计数器倒退会被标记，绝不会被悄悄计入平均值",
        ),
      ],
      scene: "dueboard",
    },
    {
      id: "own-block",
      eyebrow: l("Your data", "Vos données", "你的数据"),
      title: l(
        "A record that outlives the app.",
        "Un historique qui survit à l'app.",
        "比应用更长寿的记录。",
      ),
      body: l(
        "When a maintenance service shut down in 2025, years of homeowners' records vanished with it. Serviced is built the other way round: everything lives on your device, exports to CSV are free and complete, and the PDF maintenance record is a document you can hand to a buyer, an insurer or the next owner.",
        "Quand un service d'entretien a fermé en 2025, des années d'historique de propriétaires ont disparu avec lui. Entretien est construit à l'envers : tout vit sur votre appareil, l'export CSV est gratuit et complet, et le dossier d'entretien PDF est un document que vous pouvez remettre à un acheteur, un assureur ou le prochain propriétaire.",
        "2025 年一家保养服务关停时，房主们多年的记录随之消失。Serviced 反其道而行：一切都保存在你的设备上，CSV 导出免费且完整，PDF 保养记录则是一份可以交给买家、保险公司或下一任车主的正式文件。",
      ),
      bullets: [
        l("CSV export of everything, re-importable", "Export CSV de tout, ré-importable", "全部数据导出为 CSV，可重新导入"),
        l("PDF maintenance record per asset", "Dossier d'entretien PDF par bien", "每项资产一份 PDF 保养记录"),
        l(
          "Daily JSON backups, 14 copies kept, plus a 30-day trash",
          "Sauvegardes JSON quotidiennes, 14 copies conservées, corbeille 30 jours",
          "每日 JSON 备份，保留 14 份，外加 30 天回收站",
        ),
      ],
      scene: "upkeep",
    },
  ],

  screenshots: [
    {
      id: "shot-due",
      scene: "dueboard",
      title: l("What's due", "Ce qui est dû", "待办保养"),
      description: l(
        "Overdue, this month, upcoming — every asset on one screen, with the counter behind each date.",
        "En retard, ce mois-ci, à venir — tous les biens sur un écran, avec le compteur derrière chaque date.",
        "逾期、本月、即将到期——所有资产集中一屏，每个日期背后都有对应的计数器读数。",
      ),
    },
    {
      id: "shot-assets",
      scene: "upkeep",
      title: l("Every asset, one list", "Tous les biens, une liste", "所有资产，一张清单"),
      description: l(
        "House, car, boat, tractor, RV — each with its badge of what's due.",
        "Maison, voiture, bateau, tracteur, camping-car — chacun avec son badge d'échéances.",
        "房屋、汽车、船只、拖拉机、房车——每项资产都带有待办徽标。",
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
        "Three active assets, every feature.",
        "Trois biens actifs, toutes les fonctions.",
        "三项活跃资产，全部功能。",
      ),
      features: [
        l("3 active assets, fully featured", "3 biens actifs, sans restriction", "3 项活跃资产，功能完整"),
        l("Due dates by date and counter", "Échéances par date et compteur", "按日期与计数器到期"),
        l("CSV export and PDF maintenance record", "Export CSV et dossier PDF", "CSV 导出与 PDF 保养记录"),
        l("Automatic backups and 30-day trash", "Sauvegardes automatiques et corbeille 30 j", "自动备份与 30 天回收站"),
        l("Local notifications", "Notifications locales", "本地通知"),
        l("iPhone, iPad and Mac", "iPhone, iPad et Mac", "iPhone、iPad 与 Mac"),
      ],
      cta: "download",
      highlighted: false,
    },
    {
      id: "pro",
      name: l("Serviced Pro", "Entretien Pro", "Serviced Pro"),
      amountUsd: 14.99,
      billing: "one-time",
      description: l(
        "Unlimited assets. One purchase, no subscription, unlocked on every device.",
        "Biens illimités. Un achat, pas d'abonnement, débloqué sur tous vos appareils.",
        "无限资产。一次购买，无订阅，所有设备同步解锁。",
      ),
      features: [
        l("Everything in Free", "Tout le gratuit", "包含免费版全部功能"),
        l("Unlimited active assets", "Biens actifs illimités", "无限活跃资产"),
        l("Universal purchase — iPhone, iPad and Mac", "Achat universel — iPhone, iPad et Mac", "通用购买——iPhone、iPad 与 Mac"),
        l("Restore on any new device", "Restauration sur tout nouvel appareil", "在任何新设备上恢复"),
      ],
      cta: "buy",
      highlighted: true,
    },
  ],

  faq: [
    {
      id: "faq-counter",
      question: l(
        "How do due dates by counter work?",
        "Comment fonctionnent les échéances par compteur ?",
        "按计数器到期是如何工作的？",
      ),
      answer: l(
        "Give a recurring job a time interval, a counter interval, or both — for instance every 12 months or every 10,000 km. Serviced tracks both thresholds and reminds you of the first one reached. Whenever you enter a counter reading (odometer, engine hours, cycles), it recomputes your average usage from the last readings and turns “1,240 km left” into an estimated date, so counter jobs show up on the same dashboard as calendar ones. If a reading goes backwards — a typo, a replaced engine — it's flagged for you to correct rather than silently averaged in.",
        "Donnez à une tâche récurrente un intervalle de temps, un intervalle de compteur, ou les deux — par exemple tous les 12 mois ou tous les 10 000 km. Entretien suit les deux seuils et vous rappelle le premier atteint. À chaque relevé (kilométrage, heures moteur, cycles), il recalcule votre usage moyen d'après les derniers relevés et transforme « 1 240 km restants » en date estimée, si bien que les tâches au compteur apparaissent sur le même tableau de bord que les tâches calendaires. Si un relevé recule — faute de frappe, moteur remplacé — il est signalé pour correction plutôt que moyenné en silence.",
        "为周期性项目设置时间间隔、计数器间隔或两者兼有——例如每 12 个月或每 10,000 公里。Serviced 同时跟踪两个阈值，并在先到者到达时提醒你。每次录入计数器读数（里程、发动机小时、循环次数）时，它会根据最近读数重新计算平均使用量，把“还剩 1,240 公里”换算成预计日期，因此计数器类项目与日历类项目会出现在同一个看板上。若读数倒退——输入错误或更换了发动机——它会被标记等待你更正，而不是被悄悄计入平均值。",
      ),
    },
    {
      id: "faq-free",
      question: l(
        "What's in the free version?",
        "Que contient la version gratuite ?",
        "免费版包含什么？",
      ),
      answer: l(
        "Everything, for up to three active assets. Tasks, counters, photos, notifications, CSV export, the PDF maintenance record, automatic backups and the trash are never limited. Serviced Pro is a single one-time purchase that removes the three-asset limit; archived assets — a car you sold — don't count against it. There is no subscription and nothing else to unlock.",
        "Tout, pour trois biens actifs au plus. Tâches, compteurs, photos, notifications, export CSV, dossier PDF, sauvegardes automatiques et corbeille ne sont jamais limités. Entretien Pro est un achat unique qui supprime la limite de trois biens ; les biens archivés — une voiture vendue — ne comptent pas. Il n'y a pas d'abonnement et rien d'autre à débloquer.",
        "全部功能，最多三项活跃资产。保养项目、计数器、照片、通知、CSV 导出、PDF 保养记录、自动备份与回收站均不受限。Serviced Pro 为一次性购买，解除三项资产的限制；已归档资产（例如已售出的车）不计入。没有订阅，也没有其他需要解锁的内容。",
      ),
    },
    {
      id: "faq-data",
      question: l(
        "Where is my data? Can I get it out?",
        "Où sont mes données ? Puis-je les récupérer ?",
        "我的数据在哪里？能导出吗？",
      ),
      answer: l(
        "On your device, and only there — the app has no account and no server. Export everything to CSV from Settings at any time; the file is complete and re-importable. A JSON backup is written automatically once a day and before anything destructive (14 copies are kept), and deleted assets or entries stay in the trash for 30 days before they're purged. If you delete the app, your data goes with it — export or back up first.",
        "Sur votre appareil, et nulle part ailleurs — l'app n'a ni compte ni serveur. Exportez tout en CSV depuis les réglages à tout moment ; le fichier est complet et ré-importable. Une sauvegarde JSON est écrite automatiquement une fois par jour et avant toute action destructrice (14 copies conservées), et les biens ou entrées supprimés restent 30 jours dans la corbeille avant purge. Si vous supprimez l'app, vos données partent avec elle — exportez ou sauvegardez d'abord.",
        "只保存在你的设备上——应用没有账号，也没有服务器。随时可在设置中把全部数据导出为 CSV，文件完整且可重新导入。每天以及任何破坏性操作之前都会自动写入一份 JSON 备份（保留 14 份），删除的资产或条目会在回收站保留 30 天后才被清除。如果你删除应用，数据也会随之删除——请先导出或备份。",
      ),
    },
    {
      id: "faq-sync",
      question: l(
        "Does it sync between my iPhone and Mac?",
        "Se synchronise-t-elle entre iPhone et Mac ?",
        "iPhone 与 Mac 之间会同步吗？",
      ),
      answer: l(
        "Not in version 1.0. Each device keeps its own log, and the JSON backup lets you move a complete copy from one to another. iCloud sync is on the roadmap; the data model was designed for it from day one so it will arrive without a migration.",
        "Pas dans la version 1.0. Chaque appareil garde son propre carnet, et la sauvegarde JSON permet d'en déplacer une copie complète de l'un à l'autre. La synchronisation iCloud est prévue ; le modèle de données a été conçu pour elle dès le premier jour, elle arrivera donc sans migration.",
        "1.0 版暂不支持。每台设备各自保存日志，可通过 JSON 备份把完整副本从一台迁移到另一台。iCloud 同步已在计划之中；数据模型从第一天起就为此设计，因此届时无需迁移。",
      ),
    },
    {
      id: "faq-support",
      question: l("How do I get help?", "Comment obtenir de l'aide ?", "如何获得帮助？"),
      answer: l(
        "Write to us from the contact page on this site and include the app version shown in Settings. Because the app keeps no server logs, describing what you did step by step helps us reproduce it.",
        "Écrivez-nous depuis la page de contact de ce site en indiquant la version de l'app affichée dans les réglages. Comme l'app n'a aucun journal serveur, décrire pas à pas ce que vous avez fait nous aide à reproduire.",
        "请通过本站的联系页面写信给我们，并注明设置中显示的应用版本。由于应用没有服务器日志，逐步描述你的操作有助于我们复现问题。",
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
      date: "2026-08-15",
      title: l("Initial release", "Version initiale", "首个正式版"),
      changes: [
        l(
          "Home, car, motorcycle, boat, RV and equipment templates with the usual jobs pre-filled",
          "Modèles maison, voiture, moto, bateau, camping-car et matériel, tâches usuelles pré-remplies",
          "房屋、汽车、摩托车、船只、房车与设备模板，预填常见保养项目",
        ),
        l(
          "Recurring jobs due by date, by counter, or both — the first threshold reached triggers",
          "Tâches récurrentes par date, par compteur, ou les deux — le premier seuil atteint déclenche",
          "周期性项目可按日期、计数器或两者到期——先到的阈值触发",
        ),
        l(
          "Counter readings projected into dates from real usage",
          "Relevés de compteur projetés en dates d'après l'usage réel",
          "依据实际使用把计数器读数换算成日期",
        ),
        l(
          "Dashboard: overdue, this month, upcoming — across all assets",
          "Tableau de bord : en retard, ce mois-ci, à venir — tous biens confondus",
          "看板：逾期、本月、即将到期——覆盖所有资产",
        ),
        l(
          "CSV export and PDF maintenance record per asset",
          "Export CSV et dossier d'entretien PDF par bien",
          "CSV 导出与每项资产的 PDF 保养记录",
        ),
        l(
          "Automatic JSON backups, 30-day trash, local notifications",
          "Sauvegardes JSON automatiques, corbeille 30 jours, notifications locales",
          "自动 JSON 备份、30 天回收站、本地通知",
        ),
        l("English and French", "Anglais et français", "英语与法语"),
      ],
    },
  ],

  reviews: [],
};

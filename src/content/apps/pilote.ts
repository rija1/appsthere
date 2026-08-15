import { l, type AppDefinition } from "@/content/types";

/**
 * Pilote — a pilot logbook for iPhone, iPad and Mac that works offline and
 * logs EASA and FAA rules side by side.
 *
 * Facts here mirror the app source (pilote repo): airport count from
 * `Pilote/Resources/airports.txt`, night-time method from
 * `Domain/NightCalculator.swift`, currency rules from
 * `Domain/CurrencyEngine.swift` and `Domain/DeadlineEngine.swift`,
 * import formats from `Data/Import/ImportField.swift`, retention and
 * backup counts from `Data/Backup/BackupService.swift`, deployment
 * targets from `project.yml`.
 */
export const pilote: AppDefinition = {
  slug: "pilote",
  name: l("Pilot", "Pilote", "Pilote"),
  category: "productivity",

  tagline: l(
    "Your logbook is your career. It should belong to you.",
    "Votre carnet, c'est votre carrière. Il doit vous appartenir.",
    "飞行记录簿就是你的职业生涯，它理应属于你。",
  ),
  shortDescription: l(
    "A pilot logbook that works entirely offline, logs EASA and FAA rules on the same flights, and never holds your hours hostage.",
    "Un carnet de vol entièrement hors-ligne, qui tient les règles AESA et FAA sur les mêmes vols et ne prend jamais vos heures en otage.",
    "完全离线的飞行记录簿，同一次飞行同时按 EASA 与 FAA 规则记录，绝不扣押你的飞行小时。",
  ),
  longDescription: l(
    "No account to create, no server between you and your hours, no subscription required to keep reading your own flight time. Pilote computes night time from the position of the sun along your route, watches your currency and expiry dates, imports the logbook you already have, and hands everything back as CSV or a print-ready PDF whenever you ask.",
    "Pas de compte à créer, pas de serveur entre vous et vos heures, pas d'abonnement pour continuer à lire votre propre temps de vol. Pilote calcule le temps de nuit à partir de la position du soleil le long de votre route, surveille votre expérience récente et vos échéances, importe le carnet que vous avez déjà, et vous rend tout en CSV ou en PDF prêt à imprimer, quand vous le demandez.",
    "无需注册账号，你与飞行小时之间没有服务器，也不必为了查看自己的飞行时间而续订。Pilote 依据航路上的太阳位置计算夜间飞行时间，跟踪你的近期经历与各项有效期，导入你现有的记录簿，并随时以 CSV 或可直接打印的 PDF 交还全部数据。",
  ),

  platforms: ["iOS 18+", "iPadOS 18+", "macOS 15+"],
  version: "1.0",
  releasedAt: "2026-08-14",
  updatedAt: "2026-08-14",
  status: "coming-soon",
  heroScene: "logbook",

  licenseProductID: "com.pilote.app.pro",
  // App Store Connect listing not created yet (bundle com.pilote.app).
  // Flip this on once the app has actually cleared App Review —
  // apps.apple.com 404s for an app that isn't live.
  appStoreUrl: undefined,

  features: [
    {
      id: "dual",
      icon: "book",
      title: l(
        "One flight, two rulebooks",
        "Un vol, deux référentiels",
        "一次飞行，两套规则",
      ),
      description: l(
        "EASA and FAA don't count the same PIC time. Pilote keeps both on every flight — log once, switch authority any time, lose nothing.",
        "L'AESA et la FAA ne comptent pas le même temps PIC. Pilote garde les deux sur chaque vol — saisissez une fois, changez d'autorité quand vous voulez, sans rien perdre.",
        "EASA 与 FAA 对 PIC 时间的定义并不相同。Pilote 在每次飞行中同时保留两者——记录一次，随时切换监管体系，不丢失任何数据。",
      ),
    },
    {
      id: "night",
      icon: "moon",
      title: l("Night time, computed", "Le temps de nuit, calculé", "夜间时间，自动计算"),
      description: l(
        "Enter your block times and Pilote derives night from the sun's position along your actual route, sampled minute by minute, on device.",
        "Renseignez vos heures bloc et Pilote déduit la nuit de la position du soleil le long de votre route réelle, échantillonnée minute par minute, sur l'appareil.",
        "输入轮挡时间，Pilote 便依据实际航路上的太阳位置逐分钟采样，在设备本地推算夜间时间。",
      ),
    },
    {
      id: "currency",
      icon: "calendar",
      title: l("Currency, watched", "L'expérience récente, surveillée", "近期经历，实时跟踪"),
      description: l(
        "Passenger and instrument currency by category and class, tailwheel full-stop rules, flight review read from your own logbook, medical and licence alerts 30 days ahead.",
        "Emport de passagers et IFR par catégorie et classe, règle des arrêts complets sur train classique, contrôle de compétence lu dans votre propre carnet, alertes médical et licence 30 jours à l'avance.",
        "按类别与等级跟踪载客与仪表近期经历，后三点式起落架的全停规则，从你自己的记录中读取飞行复审，医学证书与执照到期提前 30 天提醒。",
      ),
    },
    {
      id: "portable",
      icon: "download",
      title: l("Never locked in", "Jamais captif", "绝不锁定你的数据"),
      description: l(
        "Import from LogTen, ForeFlight, MyFlightbook or CrewLounge. Export back to CSV, or print a regulator-ready PDF with page totals and carry-forward.",
        "Importez depuis LogTen, ForeFlight, MyFlightbook ou CrewLounge. Réexportez en CSV, ou imprimez un PDF réglementaire avec totaux par page et report.",
        "可从 LogTen、ForeFlight、MyFlightbook 或 CrewLounge 导入；随时导出为 CSV，或打印带每页小计与结转的合规 PDF。",
      ),
    },
    {
      id: "safety",
      icon: "shield",
      title: l("A safety net built in", "Un filet de sécurité intégré", "内置数据安全网"),
      description: l(
        "Deleted flights sit in a trash you can restore from for 30 days, and a full backup is written every day and before anything destructive.",
        "Les vols supprimés attendent 30 jours dans une corbeille, et une sauvegarde complète est écrite chaque jour et avant toute action destructrice.",
        "删除的飞行记录会在回收站保留 30 天可随时恢复；每天以及任何破坏性操作之前都会写入一份完整备份。",
      ),
    },
    {
      id: "offline",
      icon: "lock",
      title: l("Works where you fly", "Fonctionne là où vous volez", "在你飞行的地方都能用"),
      description: l(
        "More than 72,000 airfields on board, searchable by ICAO, IATA, name or city with no connection at all. No account, no cloud, no telemetry.",
        "Plus de 72 000 aérodromes embarqués, cherchables par code OACI, IATA, nom ou ville sans la moindre connexion. Pas de compte, pas de cloud, pas de télémétrie.",
        "内置逾 72,000 个机场，可按 ICAO、IATA、名称或城市搜索，完全无需联网。无账号、无云端、无遥测。",
      ),
    },
  ],

  featureBlocks: [
    {
      id: "dual-block",
      eyebrow: l("EASA and FAA", "AESA et FAA", "EASA 与 FAA"),
      title: l(
        "Stop keeping two logbooks.",
        "Arrêtez de tenir deux carnets.",
        "不必再维护两本记录簿。",
      ),
      body: l(
        "A student at the controls of an aircraft they're rated on logs PIC under FAA rules and nothing under EASA. That single divergence is why dual-licence pilots end up with two logbooks that never quite agree. Pilote stores both columns on every flight and shows you the one your active authority uses.",
        "Un élève aux commandes d'un appareil sur lequel il est qualifié logue du PIC au sens FAA et rien au sens AESA. Cette seule divergence est la raison pour laquelle les pilotes double-licence finissent avec deux carnets qui ne concordent jamais tout à fait. Pilote stocke les deux colonnes sur chaque vol et vous montre celle qu'utilise votre référentiel actif.",
        "在自己已具备等级的机型上操纵飞机的学员，按 FAA 规则可记录 PIC，按 EASA 规则则记为零。正是这一处差异，使持双重执照的飞行员最终拥有两本永远对不上的记录簿。Pilote 在每次飞行中同时保存两列数据，并按你当前选择的监管体系显示对应的一列。",
      ),
      bullets: [
        l(
          "PICUS, multi-pilot time and the EASA “Name of PIC” column",
          "PICUS, temps multi-pilote et colonne AESA « Nom du CDB »",
          "PICUS、多驾驶员时间，以及 EASA 的「机长姓名」栏",
        ),
        l(
          "Switching authority changes the columns and the rules, never the data",
          "Changer d'autorité change les colonnes et les règles, jamais les données",
          "切换监管体系只改变栏目与规则，绝不改动数据",
        ),
        l(
          "Times stored to the minute — decimal hours exist only on screen",
          "Temps stockés à la minute — les heures décimales n'existent qu'à l'écran",
          "时间以分钟为单位存储——十进制小时仅用于显示",
        ),
      ],
      scene: "logbook",
    },
    {
      id: "recency-block",
      eyebrow: l("Recency", "Expérience récente", "近期经历"),
      title: l(
        "Know where you stand before you get to the aircraft.",
        "Sachez où vous en êtes avant d'arriver à l'avion.",
        "还没走到飞机旁，就已清楚自己的状态。",
      ),
      body: l(
        "Pilote reads your own flights and tells you what you can legally do today: carry passengers, fly at night, file IFR. It knows that a touch-and-go doesn't count on a taildragger, that the FAA wants full-stop landings at night, and that your flight review runs to the end of a calendar month.",
        "Pilote lit vos propres vols et vous dit ce que vous pouvez légalement faire aujourd'hui : emporter des passagers, voler de nuit, partir en IFR. Il sait qu'un touch-and-go ne compte pas sur un train classique, que la FAA exige des arrêts complets de nuit, et que votre contrôle de compétence court jusqu'à la fin d'un mois calendaire.",
        "Pilote 读取你自己的飞行记录，告诉你今天在法规上可以做什么：载客、夜航、执行 IFR。它知道后三点式起落架上的连续起降不计数，知道 FAA 夜间要求全停着陆，也知道飞行复审的有效期截至某个日历月的月末。",
      ),
      bullets: [
        l(
          "Passenger currency per category and class, day and night",
          "Emport de passagers par catégorie et classe, de jour comme de nuit",
          "按类别与等级跟踪昼间与夜间载客经历",
        ),
        l(
          "Instrument approaches and holding over six calendar months",
          "Approches et attente aux instruments sur six mois calendaires",
          "六个日历月内的仪表进近与等待程序",
        ),
        l(
          "EASA SEP revalidation by experience, with what's still missing",
          "Revalidation SEP par expérience, avec ce qui manque encore",
          "EASA 单发活塞等级的经历复效，并列出尚缺项目",
        ),
      ],
      scene: "recency",
    },
    {
      id: "ownership-block",
      eyebrow: l("Your data", "Vos données", "你的数据"),
      title: l(
        "Everything you put in, you can take back out.",
        "Tout ce que vous entrez, vous pouvez le ressortir.",
        "凡是你录入的，都能完整取回。",
      ),
      body: l(
        "Bring your history with you: Pilote matches the columns of a LogTen, ForeFlight, MyFlightbook or CrewLounge export on its own, skips flights you already have, and takes a full backup before it writes anything. Leaving is just as easy — a CSV that reimports cleanly, or a PDF laid out like a paper logbook.",
        "Emportez votre historique : Pilote reconnaît seul les colonnes d'un export LogTen, ForeFlight, MyFlightbook ou CrewLounge, ignore les vols que vous avez déjà, et prend une sauvegarde complète avant d'écrire quoi que ce soit. Partir est tout aussi simple — un CSV qui se réimporte proprement, ou un PDF mis en page comme un carnet papier.",
        "把历史记录一并带来：Pilote 能自动识别 LogTen、ForeFlight、MyFlightbook 或 CrewLounge 导出文件的列，跳过你已有的飞行，并在写入任何数据前先做一次完整备份。离开同样容易——导出的 CSV 可干净地重新导入，PDF 则按纸质记录簿排版。",
      ),
      bullets: [
        l(
          "Column matching that survives an editor changing its export",
          "Reconnaissance des colonnes qui survit à un éditeur changeant son export",
          "即使厂商更改导出格式，列匹配依然有效",
        ),
        l(
          "Page totals, carry-forward and a signature line on every PDF page",
          "Totaux par page, report et ligne de signature sur chaque page du PDF",
          "PDF 每页均含小计、结转与签名栏",
        ),
        l(
          "Fourteen rolling backups you can share or restore in two taps",
          "Quatorze sauvegardes tournantes, partageables ou restaurables en deux gestes",
          "保留 14 份滚动备份，两步即可分享或恢复",
        ),
      ],
      scene: "recency",
    },
  ],

  screenshots: [
    {
      id: "shot-logbook",
      scene: "logbook",
      title: l("The logbook", "Le carnet", "记录簿"),
      description: l(
        "Every flight grouped by month, with the month's total in the header.",
        "Chaque vol groupé par mois, avec le total du mois en en-tête.",
        "按月分组的每次飞行，标题行显示当月合计。",
      ),
    },
    {
      id: "shot-recency",
      scene: "recency",
      title: l("Recency and expiry dates", "Expérience récente et validités", "近期经历与有效期"),
      description: l(
        "What you're current for, what lapses soon, and the rule behind each line.",
        "Ce pour quoi vous êtes à jour, ce qui expire bientôt, et la règle derrière chaque ligne.",
        "你目前满足哪些资格、哪些即将失效，以及每一行背后的法规依据。",
      ),
    },
  ],

  // Price not settled yet. The pricing section hides itself while this is
  // empty — fill it once the model is decided (the app ships without any
  // in-app purchase code, so v1 is either free or paid up front).
  pricing: [],

  faq: [
    {
      id: "faq-dual",
      question: l(
        "How does it handle EASA and FAA at the same time?",
        "Comment gère-t-elle l'AESA et la FAA en même temps ?",
        "它如何同时处理 EASA 与 FAA？",
      ),
      answer: l(
        "Every flight carries two PIC columns, because the two authorities define the role differently: the FAA counts the sole manipulator of the controls, while EASA counts the designated pilot in command. A student flying an aircraft they're rated on logs PIC under FAA rules and zero under EASA — one flight, two honest numbers. Pilote fills both when it can infer them and leaves the judgement call to you when it can't, which is why dual-command time never silently becomes FAA PIC. Switching authority in Settings changes which columns the editor shows, which totals the dashboard adds up, and which recency rules apply. It never rewrites a stored value, so you can switch back and forth as often as you like.",
        "Chaque vol porte deux colonnes PIC, parce que les deux autorités définissent le rôle différemment : la FAA compte celui qui manipule seul les commandes, l'AESA compte le commandant de bord désigné. Un élève volant sur un appareil sur lequel il est qualifié logue du PIC au sens FAA et zéro au sens AESA — un vol, deux chiffres honnêtes. Pilote remplit les deux quand il peut les déduire et vous laisse juger quand il ne peut pas, raison pour laquelle la double commande ne devient jamais silencieusement du PIC FAA. Changer de référentiel dans les réglages change les colonnes affichées par l'éditeur, les totaux additionnés par le tableau de bord et les règles d'expérience récente appliquées. Cela ne réécrit jamais une valeur stockée : vous pouvez basculer aussi souvent que vous voulez.",
        "每次飞行都保存两列 PIC 数据，因为两套体系对该角色的定义不同：FAA 计算独自操纵飞机的人，EASA 计算被指定的机长。学员在自己已具备等级的机型上飞行，按 FAA 记为 PIC，按 EASA 则记为零——同一次飞行，两个都真实的数字。能够推断时 Pilote 会同时填写两者，无法推断时则交由你判断，因此双操纵时间绝不会被悄悄计入 FAA 的 PIC。在设置中切换监管体系，会改变编辑器显示的栏目、总览页累加的合计以及适用的近期经历规则，但绝不改写已存储的数值，你可以随意来回切换。",
      ),
    },
    {
      id: "faq-night",
      question: l(
        "How is night time calculated?",
        "Comment le temps de nuit est-il calculé ?",
        "夜间时间是如何计算的？",
      ),
      answer: l(
        "From the position of the sun, on your device, with no connection. Pilote walks your flight minute by minute, interpolating your position along the great-circle route between departure and arrival, and counts a minute as night when the centre of the sun sits more than six degrees below the horizon — the end of civil twilight, which is how ICAO, EASA and 14 CFR § 1.1 all define night. That matters on a flight that crosses the terminator: deciding from the departure aerodrome alone would be wrong for most of the leg. Night landings for FAA currency use the stricter window the regulation actually asks for, one hour after sunset to one hour before sunrise, which is not the same thing as logbook night. Everything is a suggestion you can overwrite — it fills the field, it doesn't lock it.",
        "À partir de la position du soleil, sur votre appareil, sans aucune connexion. Pilote parcourt votre vol minute par minute en interpolant votre position le long de l'orthodromie entre le départ et l'arrivée, et compte une minute comme nuit lorsque le centre du soleil se trouve à plus de six degrés sous l'horizon — la fin du crépuscule civil, définition commune de l'OACI, de l'AESA et du 14 CFR § 1.1. Cela compte sur un vol qui franchit le terminateur : trancher d'après le seul aérodrome de départ serait faux sur la majeure partie de l'étape. Les atterrissages de nuit pour l'expérience récente FAA utilisent la fenêtre plus stricte qu'exige réellement le règlement, d'une heure après le coucher à une heure avant le lever, qui n'est pas la même chose que la nuit du carnet. Tout reste une proposition que vous pouvez corriger — le champ est rempli, pas verrouillé.",
        "依据太阳位置，在你的设备上完成，无需联网。Pilote 逐分钟推进整个航段，沿起降点之间的大圆航线插值出你的位置，当太阳中心低于地平线六度以上时，即把该分钟计为夜间——这是民用曙暮光的结束，也是 ICAO、EASA 和 14 CFR § 1.1 共同采用的夜间定义。对于穿越晨昏线的航班，这一点尤为重要：仅凭起飞机场判断，会让航段的大部分时间算错。用于 FAA 近期经历的夜间着陆则采用法规实际要求的更严格时段，即日落后一小时至日出前一小时，这与记录簿意义上的夜间并不相同。所有结果都只是建议，你随时可以修改——字段被填好，但不会被锁死。",
      ),
    },
    {
      id: "faq-import",
      question: l(
        "Can I bring my existing logbook across?",
        "Puis-je transférer mon carnet existant ?",
        "可以把现有的记录簿导入吗？",
      ),
      answer: l(
        "Yes, from a CSV export. Pilote recognises the column headings used by LogTen, ForeFlight, MyFlightbook and CrewLounge by matching a table of synonyms, rather than following a rigid per-vendor template that breaks the moment an editor changes its export. It handles the ForeFlight preamble and aircraft table, decodes approach specifications like 1;ILS;27;KPAO, and settles the ambiguity between month/day and day/month across the whole file instead of guessing row by row. Before anything is written you see a preview: how many flights were read, which aircraft will be created, which rows couldn't be parsed and why, and you can remap any column by hand. Flights you already have are skipped, and a complete backup is taken first. Two honest caveats worth knowing: LogTen's Dynamic Export is known to omit data, so prefer a full CSV export, and digital signatures never transfer between logbook apps — that is a limitation of the format, not of Pilote.",
        "Oui, depuis un export CSV. Pilote reconnaît les en-têtes de colonnes de LogTen, ForeFlight, MyFlightbook et CrewLounge en s'appuyant sur une table de synonymes, plutôt que sur un gabarit rigide par éditeur qui casse dès qu'un export change. Il gère le préambule et la table des appareils de ForeFlight, décode les spécifications d'approche du type 1;ILS;27;KPAO, et tranche l'ambiguïté entre mois/jour et jour/mois sur l'ensemble du fichier au lieu de deviner ligne par ligne. Avant toute écriture, vous voyez une prévisualisation : combien de vols ont été lus, quels appareils seront créés, quelles lignes n'ont pas pu être analysées et pourquoi, et vous pouvez réaffecter chaque colonne à la main. Les vols que vous avez déjà sont ignorés, et une sauvegarde complète est prise au préalable. Deux réserves honnêtes : le « Dynamic Export » de LogTen est connu pour omettre des données, préférez un export CSV complet ; et les signatures numériques ne se transfèrent jamais d'une app de carnet à une autre — c'est une limite du format, pas de Pilote.",
        "可以，通过 CSV 导出文件。Pilote 使用同义词表来识别 LogTen、ForeFlight、MyFlightbook 与 CrewLounge 的列标题，而不是采用一旦厂商改动导出格式就会失效的固定模板。它能处理 ForeFlight 的前置说明与机型表，解析形如 1;ILS;27;KPAO 的进近记录，并在整个文件范围内判定「月/日」与「日/月」的歧义，而非逐行猜测。写入前会先显示预览：读取到多少次飞行、将创建哪些机型、哪些行无法解析及原因，你也可以手动重新指定任意列。已存在的飞行会被跳过，并会先做一次完整备份。两点需要坦白说明：LogTen 的 Dynamic Export 已知会遗漏数据，建议使用完整 CSV 导出；数字签名在任何记录簿应用之间都无法迁移——这是格式的限制，而非 Pilote 的限制。",
      ),
    },
    {
      id: "faq-export",
      question: l(
        "What can I get out of it?",
        "Que puis-je en ressortir ?",
        "我可以导出哪些内容？",
      ),
      answer: l(
        "A CSV and a PDF, whenever you want, without asking anyone. The CSV uses stable headings that Pilote's own importer reads back without loss, so a round trip through a spreadsheet costs you nothing. The PDF is laid out like a printed logbook in A4 landscape, with the columns of whichever authority you have selected, and it carries the three lines airline recruiters look for on every page: totals for the page, amount forward, and total to date — plus a certification line and a signature rule. There is also a full JSON backup written automatically once a day and before any destructive action; the last fourteen are kept and any of them can be shared out of the app.",
        "Un CSV et un PDF, quand vous voulez, sans demander la permission à qui que ce soit. Le CSV utilise des en-têtes stables que l'importateur de Pilote relit sans perte : un aller-retour par un tableur ne vous coûte rien. Le PDF est mis en page comme un carnet imprimé en A4 paysage, avec les colonnes du référentiel que vous avez choisi, et il porte sur chaque page les trois lignes que cherchent les recruteurs des compagnies : totaux de la page, report, et cumul à ce jour — plus une ligne de certification et une ligne de signature. Il y a aussi une sauvegarde JSON complète écrite automatiquement une fois par jour et avant toute action destructrice ; les quatorze dernières sont conservées et chacune peut être partagée hors de l'app.",
        "随时可导出 CSV 与 PDF，无需向任何人申请。CSV 采用稳定的列标题，Pilote 自带的导入功能可无损读回，因此经由电子表格往返不会有任何损失。PDF 以 A4 横向按纸质记录簿排版，采用你所选监管体系的栏目，并在每页包含航空公司招聘方关注的三行：本页小计、上页结转与累计总计，另有认证声明与签名栏。此外，应用每天以及任何破坏性操作之前都会自动写入完整的 JSON 备份，保留最近十四份，且每一份都可以分享到应用之外。",
      ),
    },
    {
      id: "faq-data",
      question: l(
        "Where is my data, and what happens if I stop using the app?",
        "Où sont mes données, et que se passe-t-il si j'arrête d'utiliser l'app ?",
        "我的数据存放在哪里？如果我不再使用这个应用会怎样？",
      ),
      answer: l(
        "On your device, and nowhere else. Pilote has no account, no server and no telemetry — it never opens a network connection, which is also why it works at altitude and in a hangar with no signal. If you stop using it, nothing is taken away from you: your flights are still on the device, the automatic backups are still there, and the CSV and PDF exports work exactly as they did on day one. That is the whole point. The App Store privacy label reads Data Not Collected, and it is accurate rather than aspirational.",
        "Sur votre appareil, et nulle part ailleurs. Pilote n'a ni compte, ni serveur, ni télémétrie — il n'ouvre jamais de connexion réseau, ce qui explique aussi qu'il fonctionne en altitude et dans un hangar sans réseau. Si vous arrêtez de l'utiliser, rien ne vous est retiré : vos vols sont toujours sur l'appareil, les sauvegardes automatiques sont toujours là, et les exports CSV et PDF fonctionnent exactement comme au premier jour. C'est tout l'objet. L'étiquette de confidentialité de l'App Store indique « Aucune donnée collectée », et c'est un constat, pas une intention.",
        "只在你的设备上，别无他处。Pilote 没有账号、没有服务器、没有遥测——它从不发起网络连接，这也是它能在高空以及无信号机库中正常工作的原因。即便你不再使用它，也不会被拿走任何东西：飞行记录仍在设备上，自动备份仍然存在，CSV 与 PDF 导出功能与第一天完全一样。这正是它的意义所在。App Store 隐私标签显示「未收集数据」，这是事实描述，而非愿景。",
      ),
    },
    {
      id: "faq-legal",
      question: l(
        "Can I use it as my legal logbook?",
        "Puis-je l'utiliser comme carnet de vol légal ?",
        "可以把它作为法定飞行记录簿吗？",
      ),
      answer: l(
        "Electronic logbooks are accepted by both the FAA and EASA, provided the record can be produced on request in a format the authority accepts — which is what the PDF export is for. Pilote records the fields required by 14 CFR § 61.51 and the twelve columns of AMC1 FCL.050, keeps times in UTC as EASA requires, and logs simulator sessions separately from flight time. What it does not do is decide for you: the recency and expiry figures are there to help you keep track, and the app says so on the screen where they appear. Verifying your legal currency, your ratings and your eligibility remains the pilot's responsibility, as it always has been. Some national authorities add their own requirements — Ireland, for instance, does not accept electronic signatures for PICUS — so print and sign when your authority asks for it.",
        "Les carnets électroniques sont acceptés par la FAA comme par l'AESA, à condition que le relevé puisse être produit sur demande dans un format accepté par l'autorité — c'est à cela que sert l'export PDF. Pilote enregistre les champs exigés par le 14 CFR § 61.51 et les douze colonnes de l'AMC1 FCL.050, tient les heures en UTC comme l'AESA le demande, et consigne les séances de simulateur séparément du temps de vol. Ce qu'il ne fait pas, c'est décider à votre place : les chiffres d'expérience récente et d'échéance sont là pour vous aider à suivre, et l'app le dit à l'écran où ils apparaissent. La vérification de votre validité réglementaire, de vos qualifications et de votre aptitude reste de votre responsabilité de pilote, comme elle l'a toujours été. Certaines autorités nationales ajoutent leurs propres exigences — l'Irlande, par exemple, n'accepte pas la signature électronique pour le PICUS — imprimez et signez lorsque votre autorité le demande.",
        "FAA 与 EASA 均接受电子记录簿，前提是能够按要求以监管机构认可的格式提供记录——PDF 导出正是为此而设。Pilote 记录 14 CFR § 61.51 要求的字段与 AMC1 FCL.050 的十二个栏目，按 EASA 要求以 UTC 保存时间，并将模拟机训练与飞行时间分开记录。它不会替你做决定：近期经历与有效期数据只是帮助你跟踪，应用也在相应界面上明确说明了这一点。核实自身的法定资格、等级与适任状态，始终是飞行员本人的责任。部分国家的主管机构还有额外要求——例如爱尔兰不接受 PICUS 的电子签名——因此当你的监管机构要求时，请打印并手写签名。",
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
      id: "req-storage",
      label: l("Storage", "Stockage", "存储空间"),
      value: l(
        "About 25 MB, including the airfield database",
        "Environ 25 Mo, base d'aérodromes comprise",
        "约 25 MB，已包含机场数据库",
      ),
    },
    {
      id: "req-languages",
      label: l("Languages", "Langues", "语言"),
      value: l("English and French", "Anglais et français", "英语与法语"),
    },
    {
      id: "req-import",
      label: l("Import", "Import", "导入"),
      value: l(
        "CSV export from LogTen, ForeFlight, MyFlightbook or CrewLounge",
        "Export CSV de LogTen, ForeFlight, MyFlightbook ou CrewLounge",
        "来自 LogTen、ForeFlight、MyFlightbook 或 CrewLounge 的 CSV 导出文件",
      ),
    },
  ],

  changelog: [
    {
      version: "1.0",
      date: "2026-08-14",
      title: l("Initial release", "Version initiale", "首个正式版"),
      changes: [
        l(
          "EASA and FAA logged side by side on every flight, with PICUS, multi-pilot time and the EASA name-of-PIC column",
          "AESA et FAA consignées côte à côte sur chaque vol, avec PICUS, temps multi-pilote et colonne AESA du nom du CDB",
          "每次飞行同时按 EASA 与 FAA 记录，含 PICUS、多驾驶员时间与 EASA 机长姓名栏",
        ),
        l(
          "Night time derived from the sun's position along the route, computed on device",
          "Temps de nuit déduit de la position du soleil le long de la route, calculé sur l'appareil",
          "依据航路上的太阳位置推算夜间时间，全部在设备本地完成",
        ),
        l(
          "Recency for passengers, night and instrument flying, plus flight review and EASA SEP revalidation",
          "Expérience récente passagers, nuit et IFR, plus contrôle de compétence et revalidation SEP AESA",
          "载客、夜航与仪表飞行的近期经历，另含飞行复审与 EASA 单发活塞等级复效",
        ),
        l(
          "Medical, licence and rating expiry dates with alerts 30 days ahead",
          "Échéances médical, licence et qualifications avec alertes 30 jours à l'avance",
          "医学证书、执照与等级的有效期，提前 30 天提醒",
        ),
        l(
          "CSV import from LogTen, ForeFlight, MyFlightbook and CrewLounge, with a preview and manual column mapping",
          "Import CSV depuis LogTen, ForeFlight, MyFlightbook et CrewLounge, avec prévisualisation et remappage manuel des colonnes",
          "支持从 LogTen、ForeFlight、MyFlightbook 与 CrewLounge 导入 CSV，附预览与手动列映射",
        ),
        l(
          "CSV export and a print-ready PDF logbook with page totals and carry-forward",
          "Export CSV et carnet PDF prêt à imprimer avec totaux par page et report",
          "支持 CSV 导出，以及带每页小计与结转、可直接打印的 PDF 记录簿",
        ),
        l(
          "A 30-day trash for deleted flights and fourteen rolling automatic backups",
          "Corbeille de 30 jours pour les vols supprimés et quatorze sauvegardes automatiques tournantes",
          "删除的飞行保留 30 天回收站，并保留十四份滚动自动备份",
        ),
        l(
          "More than 72,000 airfields searchable offline by ICAO, IATA, name or city",
          "Plus de 72 000 aérodromes cherchables hors-ligne par code OACI, IATA, nom ou ville",
          "逾 72,000 个机场，可离线按 ICAO、IATA、名称或城市搜索",
        ),
        l(
          "English and French throughout",
          "Intégralement en anglais et en français",
          "全应用支持英语和法语",
        ),
      ],
    },
  ],

  // No reviews yet — the app hasn't shipped. The Reviews section hides
  // itself while this is empty; fill it with real, attributed quotes only.
  reviews: [],
};

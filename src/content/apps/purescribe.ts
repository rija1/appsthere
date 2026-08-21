import { l, type AppDefinition } from "@/content/types";

/**
 * PureScribe — native transcription for Mac, iPhone and iPad, entirely on-device.
 *
 * Facts here mirror the app source (PureScribe repo): model catalog
 * and Pro gating from `ModelCatalog`, IAP product ID from
 * `LicenseManager.proProductID`, requirements from the README.
 */
export const pureScribe: AppDefinition = {
  slug: "purescribe",
  name: l("PureScribe", "PureScribe", "PureScribe"),
  category: "productivity",

  tagline: l(
    "Audio in. Transcript out. Nothing leaves your device.",
    "De l'audio au texte. Rien ne quitte votre appareil.",
    "音频进，文稿出。一切都在你的设备上完成。",
  ),
  shortDescription: l(
    "Turn recordings and videos into accurate transcripts and subtitles — processed entirely on your device, with zero uploads.",
    "Transformez enregistrements et vidéos en transcriptions et sous-titres précis — traités entièrement sur votre appareil, sans aucun envoi.",
    "将录音和视频转换为精准的文字稿和字幕——全部在你的设备本地处理，绝不上传。",
  ),
  longDescription: l(
    "Transcription doesn't need to be complicated. Drag a file into PureScribe, pick a quality level, and get a transcript ready to edit and share, without ever leaving your device.",
    "La transcription n'a pas besoin d'être compliquée. Glissez un fichier dans PureScribe, choisissez un niveau de qualité, et obtenez une transcription prête à éditer et à partager, sans jamais quitter votre appareil.",
    "转写不必如此复杂。将文件拖入 PureScribe，选择一个质量等级，即可获得可编辑、可分享的文字稿，全部在你的设备上完成。",
  ),

  platforms: ["macOS 14+", "iOS 17+", "iPadOS 17+"],
  version: "1.0.0",
  releasedAt: "2026-07-17",
  updatedAt: "2026-08-06",
  status: "available",
  heroScene: "editor",

  licenseProductID: "com.purescribe.app",
  // Live on the Mac App Store (verified 2026-08-20; the page resolves and
  // sells Pro at $9.99).
  appStoreUrl: "https://apps.apple.com/app/id6797195935",

  features: [
    {
      id: "private",
      icon: "lock",
      title: l("100% on-device", "100 % local", "完全本地运行"),
      description: l(
        "Transcription runs entirely on your device with Metal acceleration. No account, no cloud, no telemetry.",
        "La transcription s'exécute entièrement sur votre appareil avec l'accélération Metal. Pas de compte, pas de cloud, pas de télémétrie.",
        "转写完全在你的设备上通过 Metal 加速完成。无需账号，没有云端，没有遥测。",
      ),
    },
    {
      id: "formats",
      icon: "waves",
      title: l("Any recording", "Tous vos enregistrements", "支持各种录音"),
      description: l(
        "Drag & drop MP3, WAV, M4A, AAC, FLAC — or MP4 and MOV videos. Audio is extracted automatically.",
        "Glissez-déposez MP3, WAV, M4A, AAC, FLAC — ou des vidéos MP4 et MOV. L'audio est extrait automatiquement.",
        "拖放 MP3、WAV、M4A、AAC、FLAC，或 MP4、MOV 视频，音频自动提取。",
      ),
    },
    {
      id: "editor",
      icon: "pencil",
      title: l("A real editor", "Un vrai éditeur", "真正的编辑器"),
      description: l(
        "Edit inline, search, jump by timestamp, and play audio that highlights the segment being spoken.",
        "Éditez en place, recherchez, naviguez par horodatage, et écoutez l'audio avec surlignage du segment prononcé.",
        "行内编辑、全文搜索、时间戳跳转，播放时自动高亮当前语句。",
      ),
    },
    {
      id: "exports",
      icon: "download",
      title: l("Five export formats", "Cinq formats d'export", "五种导出格式"),
      description: l(
        "TXT, Markdown, SRT, WebVTT, and JSON — ready for subtitles, notes, blogs, or pipelines.",
        "TXT, Markdown, SRT, WebVTT et JSON — prêts pour vos sous-titres, notes, blogs ou pipelines.",
        "TXT、Markdown、SRT、WebVTT 和 JSON——适用于字幕、笔记、博客或自动化流程。",
      ),
    },
    {
      id: "models",
      icon: "cpu",
      title: l("Six Whisper models", "Six modèles Whisper", "六个 Whisper 模型"),
      description: l(
        "From Tiny for instant drafts to Large-v3 for maximum accuracy. Download, verify, and manage them in-app.",
        "De Tiny pour les brouillons instantanés à Large-v3 pour une précision maximale. Téléchargez, vérifiez et gérez-les dans l'app.",
        "从极速出稿的 Tiny 到精度最高的 Large-v3。在应用内下载、校验与管理。",
      ),
    },
    {
      id: "languages",
      icon: "languages",
      title: l("Multilingual", "Multilingue", "多语言"),
      description: l(
        "Auto-detect, or choose English, French, Tibetan, Chinese, Spanish, or German.",
        "Détection automatique, ou choix parmi anglais, français, tibétain, chinois, espagnol et allemand.",
        "自动检测语言，或指定英语、法语、藏语、中文、西班牙语、德语。",
      ),
    },
  ],

  featureBlocks: [
    {
      id: "editor-block",
      eyebrow: l("Transcript editor", "Éditeur de transcription", "文稿编辑器"),
      title: l(
        "Fix a word without leaving the flow.",
        "Corrigez un mot sans casser votre élan.",
        "顺手改一个词，思路不中断。",
      ),
      body: l(
        "Every segment is editable in place. Click a timestamp to jump the audio there; press play and the current sentence highlights as it's spoken — proofreading a one-hour interview stops being a chore.",
        "Chaque segment s'édite en place. Cliquez sur un horodatage pour y déplacer l'audio ; lancez la lecture et la phrase en cours se surligne — relire un entretien d'une heure n'est plus une corvée.",
        "每个片段都可以就地编辑。点击时间戳即可跳转音频；播放时当前句子实时高亮——校对一小时的访谈不再是苦差事。",
      ),
      bullets: [
        l("Inline editing with undo", "Édition en place avec annulation", "行内编辑，支持撤销"),
        l("Search across the whole transcript", "Recherche dans toute la transcription", "全文搜索"),
        l("Synchronized playback highlighting", "Surlignage synchronisé à la lecture", "播放同步高亮"),
      ],
      scene: "editor",
    },
    {
      id: "models-block",
      eyebrow: l("Model manager", "Gestionnaire de modèles", "模型管理器"),
      title: l(
        "Pick your trade-off between speed and accuracy.",
        "Choisissez votre équilibre entre vitesse et précision.",
        "在速度与精度之间自由取舍。",
      ),
      body: l(
        "Six Whisper models, from a 78 MB Tiny that drafts in seconds to the 3 GB Large-v3 that handles difficult audio and rare languages. Each download is SHA-256 verified, and you can delete models any time to reclaim space.",
        "Six modèles Whisper, du Tiny de 78 Mo qui produit un brouillon en quelques secondes au Large-v3 de 3 Go qui vient à bout des audios difficiles et des langues rares. Chaque téléchargement est vérifié par SHA-256, et vous pouvez supprimer un modèle à tout moment pour libérer de l'espace.",
        "六个 Whisper 模型：从 78 MB、数秒出稿的 Tiny，到 3 GB、能应对高难度音频和小语种的 Large-v3。每次下载都经过 SHA-256 校验，随时可删除模型释放空间。",
      ),
      bullets: [
        l("Checksum-verified downloads", "Téléchargements vérifiés par somme de contrôle", "下载经校验和验证"),
        l("Speed and accuracy ratings at a glance", "Notes de vitesse et de précision en un coup d'œil", "速度与精度一目了然"),
        l("Turbo & Large-v3 in Pro", "Turbo et Large-v3 avec Pro", "Pro 解锁 Turbo 与 Large-v3"),
      ],
      scene: "models",
    },
    {
      id: "export-block",
      eyebrow: l("Exports", "Exports", "导出"),
      title: l(
        "From transcript to subtitles in one click.",
        "De la transcription aux sous-titres en un clic.",
        "一键从文稿到字幕。",
      ),
      body: l(
        "Ship SRT or WebVTT straight to your video editor, Markdown to your notes, JSON to your pipeline — timestamps included, formatting handled. What you export is exactly what you edited.",
        "Envoyez du SRT ou du WebVTT directement dans votre logiciel de montage, du Markdown dans vos notes, du JSON dans votre pipeline — horodatages inclus, mise en forme gérée. Ce que vous exportez est exactement ce que vous avez édité.",
        "SRT 或 WebVTT 直接进剪辑软件，Markdown 进笔记，JSON 进自动化流程——自带时间戳，格式无忧。导出的就是你编辑后的内容。",
      ),
      bullets: [
        l("TXT · Markdown · SRT · WebVTT · JSON", "TXT · Markdown · SRT · WebVTT · JSON", "TXT · Markdown · SRT · WebVTT · JSON"),
        l("Frame-accurate subtitle timing", "Sous-titres calés à l'image près", "字幕时间精确到帧"),
        l("Clean, predictable file naming", "Nommage de fichiers propre et prévisible", "文件命名清晰可预测"),
      ],
      scene: "export",
    },
  ],

  screenshots: [
    {
      id: "shot-editor",
      scene: "editor",
      title: l("The editor", "L'éditeur", "编辑器"),
      description: l(
        "Playback follows the transcript — the spoken segment stays highlighted.",
        "La lecture suit la transcription — le segment prononcé reste surligné.",
        "播放跟随文稿——正在朗读的片段保持高亮。",
      ),
    },
    {
      id: "shot-models",
      scene: "models",
      title: l("Model manager", "Gestionnaire de modèles", "模型管理器"),
      description: l(
        "Download, verify, and remove Whisper models without leaving the app.",
        "Téléchargez, vérifiez et supprimez les modèles Whisper sans quitter l'app.",
        "无需离开应用即可下载、校验和删除 Whisper 模型。",
      ),
    },
    {
      id: "shot-export",
      scene: "export",
      title: l("Export", "Export", "导出"),
      description: l(
        "Five formats, one dialog — subtitles, notes, and structured data.",
        "Cinq formats, une seule fenêtre — sous-titres, notes et données structurées.",
        "五种格式，一个对话框——字幕、笔记与结构化数据。",
      ),
    },
    {
      id: "shot-dropzone",
      scene: "dropzone",
      title: l("Drag & drop", "Glisser-déposer", "拖放即用"),
      description: l(
        "Drop any audio or video file to start — the queue handles the rest.",
        "Déposez n'importe quel fichier audio ou vidéo — la file d'attente s'occupe du reste.",
        "拖入任意音频或视频文件即可开始——队列会处理剩下的事。",
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
        "Everything you need for everyday transcription.",
        "Tout ce qu'il faut pour la transcription au quotidien.",
        "满足日常转写所需的一切。",
      ),
      features: [
        l("Tiny, Base, Small & Medium models", "Modèles Tiny, Base, Small et Medium", "Tiny、Base、Small、Medium 模型"),
        l("All five export formats", "Les cinq formats d'export", "全部五种导出格式"),
        l("Full transcript editor", "Éditeur de transcription complet", "完整文稿编辑器"),
        l("All languages, including auto-detect", "Toutes les langues, détection automatique incluse", "全部语言，含自动检测"),
        l("No account required", "Aucun compte requis", "无需注册账号"),
      ],
      cta: "download",
      highlighted: false,
    },
    {
      id: "pro",
      name: l("Pro", "Pro", "专业版"),
      amountUsd: 9.99,
      billing: "one-time",
      description: l(
        "Maximum accuracy for work that matters. Pay once, keep it forever.",
        "Une précision maximale pour ce qui compte. Payez une fois, gardez-le pour toujours.",
        "为重要工作提供最高精度。一次付费，永久拥有。",
      ),
      features: [
        l("Everything in Free", "Tout ce qui est dans Gratuit", "包含免费版全部功能"),
        l("Turbo model — near-flagship accuracy, far faster", "Modèle Turbo — précision quasi maximale, bien plus rapide", "Turbo 模型——接近旗舰精度，速度快数倍"),
        l("Large-v3 model — maximum accuracy", "Modèle Large-v3 — précision maximale", "Large-v3 模型——最高精度"),
        l("Bought once, unlocked everywhere — Mac, iPhone and iPad share the same purchase", "Acheté une fois, débloqué partout — Mac, iPhone et iPad partagent le même achat", "一次购买，随处解锁——Mac、iPhone 和 iPad 共享同一次购买"),
        l("Free updates for all 1.x releases", "Mises à jour gratuites pour toutes les versions 1.x", "1.x 全系列免费更新"),
      ],
      cta: "buy",
      highlighted: true,
    },
  ],

  faq: [
    {
      id: "faq-privacy",
      question: l(
        "Does my audio really never leave my device?",
        "Mon audio ne quitte-t-il vraiment jamais mon appareil ?",
        "我的音频真的不会离开我的设备吗？",
      ),
      answer: l(
        "Really. Transcription runs locally on whisper.cpp with Metal acceleration. The app is sandboxed, has no telemetry, and the only network requests it ever makes are the model downloads you explicitly start. Purchases are verified through Apple's own on-device receipt system — we never see them, and there's nothing to activate.",
        "Vraiment. La transcription s'exécute localement via whisper.cpp avec l'accélération Metal. L'application est sandboxée, sans télémétrie, et les seules requêtes réseau qu'elle effectue sont les téléchargements de modèles que vous lancez explicitement. Les achats sont vérifiés via le système de reçus propre à Apple, sur l'appareil — nous ne les voyons jamais, et il n'y a rien à activer.",
        "真的。转写通过 whisper.cpp 在本地运行，并由 Metal 加速。应用运行在沙盒中、没有遥测，唯一的网络请求是你主动发起的模型下载。购买通过 Apple 自有的设备端收据系统核实——我们从不接触这些信息，也无需任何激活步骤。",
      ),
    },
    {
      id: "faq-pro",
      question: l(
        "What exactly does Pro unlock?",
        "Que débloque exactement la version Pro ?",
        "专业版到底解锁什么？",
      ),
      answer: l(
        "Pro unlocks the two highest-accuracy models: Turbo (near-flagship accuracy at several times the speed of Large) and Large-v3 (maximum accuracy for difficult recordings and rare languages). Everything else — the editor, all exports, all languages — is free.",
        "Pro débloque les deux modèles les plus précis : Turbo (précision quasi maximale, plusieurs fois plus rapide que Large) et Large-v3 (précision maximale pour les enregistrements difficiles et les langues rares). Tout le reste — l'éditeur, tous les exports, toutes les langues — est gratuit.",
        "专业版解锁两个精度最高的模型：Turbo（接近旗舰精度，速度是 Large 的数倍）和 Large-v3（针对高难度录音和小语种的最高精度）。其余功能——编辑器、全部导出、全部语言——都是免费的。",
      ),
    },
    {
      id: "faq-license",
      question: l(
        "How does Pro unlock work?",
        "Comment fonctionne le déblocage Pro ?",
        "专业版如何解锁？",
      ),
      answer: l(
        "Pro is a one-time in-app purchase billed by Apple through the App Store — there's no license key, no account, and no activation step. Buy it once and it's unlocked on every Mac, iPhone and iPad signed into the same Apple Account: just open Settings → Pro and tap Restore Purchases.",
        "Pro est un achat intégré unique, facturé par Apple via l'App Store — il n'y a ni clé de licence, ni compte, ni étape d'activation. Achetez-le une fois et il est débloqué sur tous les Mac, iPhone et iPad connectés au même identifiant Apple : ouvrez simplement Réglages → Pro et appuyez sur Restaurer les achats.",
        "专业版是通过 App Store 由 Apple 计费的一次性应用内购买——没有许可证密钥，无需账号，也不需要激活步骤。购买一次，即可在登录同一 Apple 账户的所有 Mac、iPhone 和 iPad 上解锁：只需打开「设置 → 专业版」并点按「恢复购买」。",
      ),
    },
    {
      id: "faq-hardware",
      question: l(
        "Do I need an Apple Silicon Mac?",
        "Faut-il un Mac Apple Silicon ?",
        "需要 Apple Silicon 的 Mac 吗？",
      ),
      answer: l(
        "Apple Silicon is recommended — Metal acceleration makes large models dramatically faster — but Intel Macs are fully supported. On Intel, we suggest the Tiny through Medium models for comfortable speeds.",
        "Apple Silicon est recommandé — l'accélération Metal rend les grands modèles nettement plus rapides — mais les Mac Intel sont entièrement pris en charge. Sur Intel, nous conseillons les modèles Tiny à Medium pour des vitesses confortables.",
        "推荐 Apple Silicon——Metal 加速让大模型快得多——但 Intel Mac 也完全支持。在 Intel 上建议使用 Tiny 至 Medium 模型以获得流畅速度。",
      ),
    },
    {
      id: "faq-refund",
      question: l(
        "What if it doesn't work for me?",
        "Et si ça ne me convient pas ?",
        "如果不适合我怎么办？",
      ),
      answer: l(
        "Try the Free version first — it's the same app with the same editor and exports. If you buy Pro and it isn't right for you, Apple handles refunds for all App Store purchases directly: go to reportaproblem.apple.com, or Settings → your name → Media & Purchases → your purchase history on your device.",
        "Essayez d'abord la version gratuite — c'est la même application, avec le même éditeur et les mêmes exports. Si vous achetez Pro et qu'il ne vous convient pas, c'est Apple qui gère directement les remboursements pour tous les achats effectués sur l'App Store : rendez-vous sur reportaproblem.apple.com, ou Réglages → votre nom → Média et achats → votre historique d'achats sur votre appareil.",
        "请先试用免费版——它就是同一款应用，编辑器和导出功能完全相同。如果购买专业版后觉得不合适，所有 App Store 购买的退款均由 Apple 直接处理：请访问 reportaproblem.apple.com，或在设备上前往「设置 → 你的姓名 → 媒体与购买项目 → 购买历史记录」。",
      ),
    },
    {
      id: "faq-devices",
      question: l(
        "On how many devices can I use Pro?",
        "Sur combien d'appareils puis-je utiliser Pro ?",
        "专业版可以在几台设备上使用？",
      ),
      answer: l(
        "On every Mac, iPhone, and iPad signed into the Apple Account you used to buy it — that's what a universal purchase means. Setting up a new device takes one tap: Settings → Pro → Restore Purchases.",
        "Sur tous les Mac, iPhone et iPad connectés à l'identifiant Apple utilisé pour l'achat — c'est le principe de l'achat universel. Configurer un nouvel appareil ne prend qu'un geste : Réglages → Pro → Restaurer les achats.",
        "登录同一 Apple 账户（即购买时使用的账户）的所有 Mac、iPhone 和 iPad 都可以使用——这正是通用购买的含义。在新设备上启用只需一步：设置 → 专业版 → 恢复购买。",
      ),
    },
  ],

  requirements: [
    {
      id: "req-os",
      label: l("Operating system", "Système d'exploitation", "操作系统"),
      value: l(
        "macOS 14 Sonoma+, iOS 17+, or iPadOS 17+",
        "macOS 14 Sonoma+, iOS 17+ ou iPadOS 17+",
        "macOS 14 Sonoma 及以上、iOS 17 及以上，或 iPadOS 17 及以上",
      ),
    },
    {
      id: "req-chip",
      label: l("Processor (Mac)", "Processeur (Mac)", "处理器（Mac）"),
      value: l(
        "Apple Silicon recommended · Intel Macs supported",
        "Apple Silicon recommandé · Mac Intel pris en charge",
        "推荐 Apple Silicon · 支持 Intel Mac",
      ),
    },
    {
      id: "req-ram",
      label: l("Memory", "Mémoire", "内存"),
      value: l(
        "8 GB (16 GB for the Large models)",
        "8 Go (16 Go pour les grands modèles)",
        "8 GB（使用大模型建议 16 GB）",
      ),
    },
    {
      id: "req-disk",
      label: l("Disk space", "Espace disque", "磁盘空间"),
      value: l(
        "Models: 78 MB – 3 GB each, downloaded on demand",
        "Modèles : 78 Mo à 3 Go chacun, téléchargés à la demande",
        "模型：每个 78 MB – 3 GB，按需下载",
      ),
    },
    {
      id: "req-network",
      label: l("Internet", "Internet", "网络"),
      value: l(
        "Only for downloading models",
        "Uniquement pour télécharger les modèles",
        "仅下载模型时需要",
      ),
    },
  ],

  changelog: [
    {
      version: "1.0.0",
      date: "2026-07-17",
      title: l("Initial release", "Version initiale", "首个正式版"),
      changes: [
        l(
          "Local transcription with six Whisper models, from Tiny to Large-v3 and Turbo",
          "Transcription locale avec six modèles Whisper, de Tiny à Large-v3 et Turbo",
          "本地转写，提供从 Tiny 到 Large-v3 与 Turbo 共六个 Whisper 模型",
        ),
        l(
          "Transcript editor with search, timestamp navigation, and synced playback highlighting",
          "Éditeur de transcription avec recherche, navigation par horodatage et surlignage synchronisé",
          "文稿编辑器：搜索、时间戳导航、播放同步高亮",
        ),
        l(
          "Exports to TXT, Markdown, SRT, WebVTT, and JSON",
          "Exports en TXT, Markdown, SRT, WebVTT et JSON",
          "导出 TXT、Markdown、SRT、WebVTT、JSON",
        ),
        l(
          "In-app model manager with SHA-256 verified downloads",
          "Gestionnaire de modèles intégré avec téléchargements vérifiés par SHA-256",
          "内置模型管理器，下载经 SHA-256 校验",
        ),
        l(
          "Sandboxed and telemetry-free, distributed on the Mac App Store and the iOS App Store",
          "Sandboxée et sans télémétrie, distribuée sur le Mac App Store et l'App Store iOS",
          "运行在沙盒中且零遥测，已上架 Mac App Store 和 iOS App Store",
        ),
      ],
    },
  ],

  // Aucun témoignage tant qu'il n'existe pas de citation réelle et
  // attribuée avec l'accord de son auteur. Les placeholders qui figuraient
  // ici (noms inventés) étaient en ligne : retirés le 2026-08-20.
  reviews: [],
};

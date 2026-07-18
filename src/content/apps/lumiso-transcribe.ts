import { l, type AppDefinition } from "@/content/types";

/**
 * Lumiso Transcribe — native macOS transcription, entirely on-device.
 *
 * Facts here mirror the app source (LumisoTranscribe repo): model catalog
 * and Pro gating from `ModelCatalog`, license product ID from
 * `LicenseVerifier.expectedProductID`, requirements from the README.
 */
export const lumisoTranscribe: AppDefinition = {
  slug: "lumiso-transcribe",
  name: "Lumiso Transcribe",
  category: "productivity",

  tagline: l(
    "Audio in. Transcript out. Nothing leaves your Mac.",
    "De l'audio au texte. Rien ne quitte votre Mac.",
    "音频进，文稿出。一切都在你的 Mac 上完成。",
  ),
  shortDescription: l(
    "Turn recordings and videos into accurate transcripts and subtitles — processed entirely on your Mac, with zero uploads.",
    "Transformez enregistrements et vidéos en transcriptions et sous-titres précis — traités entièrement sur votre Mac, sans aucun envoi.",
    "将录音和视频转换为精准的文字稿和字幕——全部在你的 Mac 本地处理，绝不上传。",
  ),
  longDescription: l(
    "Lumiso Transcribe is a native macOS app built on Whisper with Metal acceleration. Drag in a recording, pick a model, and get a polished transcript you can edit, search, and export as TXT, Markdown, SRT, WebVTT, or JSON. Your audio never touches a server — interviews, meetings, and drafts stay yours.",
    "Lumiso Transcribe est une application macOS native fondée sur Whisper avec accélération Metal. Glissez un enregistrement, choisissez un modèle, et obtenez une transcription soignée que vous pouvez éditer, rechercher et exporter en TXT, Markdown, SRT, WebVTT ou JSON. Votre audio ne touche jamais un serveur — vos entretiens, réunions et brouillons restent à vous.",
    "Lumiso Transcribe 是一款基于 Whisper 并采用 Metal 加速的原生 macOS 应用。拖入录音，选择模型，即可得到可编辑、可搜索的精美文字稿，并导出为 TXT、Markdown、SRT、WebVTT 或 JSON。你的音频永远不会经过服务器——访谈、会议和草稿始终属于你。",
  ),

  platforms: ["macOS 14+"],
  version: "1.0.0",
  releasedAt: "2026-07-17",
  updatedAt: "2026-07-17",
  status: "available",
  heroScene: "editor",

  licenseProductID: "com.lumiso.transcribe",
  paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_LUMISO_PRO,
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL_LUMISO ??
    "https://downloads.theappsthere.com/lumiso-transcribe/LumisoTranscribe-1.0.0.dmg",
  fileSizeMb: 38,

  features: [
    {
      id: "private",
      icon: "lock",
      title: l("100% on-device", "100 % local", "完全本地运行"),
      description: l(
        "Transcription runs on your Mac with Metal acceleration. No account, no cloud, no telemetry.",
        "La transcription s'exécute sur votre Mac avec l'accélération Metal. Pas de compte, pas de cloud, pas de télémétrie.",
        "转写在你的 Mac 上通过 Metal 加速完成。无需账号，没有云端，没有遥测。",
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
      amountUsd: 29,
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
        l("License verified offline — no activation server", "Licence vérifiée hors ligne — aucun serveur d'activation", "许可证离线验证——无需激活服务器"),
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
        "Does my audio really never leave my Mac?",
        "Mon audio ne quitte-t-il vraiment jamais mon Mac ?",
        "我的音频真的不会离开我的 Mac 吗？",
      ),
      answer: l(
        "Really. Transcription runs locally on whisper.cpp with Metal acceleration. The app is sandboxed, has no telemetry, and the only network requests it ever makes are the model downloads you explicitly start — even license activation happens offline.",
        "Vraiment. La transcription s'exécute localement via whisper.cpp avec l'accélération Metal. L'application est sandboxée, sans télémétrie, et les seules requêtes réseau qu'elle effectue sont les téléchargements de modèles que vous lancez explicitement — même l'activation de licence se fait hors ligne.",
        "真的。转写通过 whisper.cpp 在本地运行，并由 Metal 加速。应用运行在沙盒中、没有遥测，唯一的网络请求是你主动发起的模型下载——连许可证激活都是离线完成的。",
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
        "How does the license work?",
        "Comment fonctionne la licence ?",
        "许可证如何运作？",
      ),
      answer: l(
        "After purchase you receive a license key by email. Paste it into Settings → License and you're done — the key is a cryptographically signed token the app verifies offline, so there's no activation server, no account, and it keeps working without an internet connection.",
        "Après l'achat, vous recevez une clé de licence par e-mail. Collez-la dans Réglages → Licence et c'est terminé — la clé est un jeton signé cryptographiquement que l'application vérifie hors ligne : pas de serveur d'activation, pas de compte, et elle continue de fonctionner sans connexion internet.",
        "购买后你会通过电子邮件收到许可证密钥。将其粘贴到「设置 → 许可证」即可——密钥是经过加密签名的令牌，应用在本地离线验证，因此没有激活服务器、无需账号，断网也能正常使用。",
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
        "Try the Free version first — it's the same app with the same editor and exports. If you buy Pro and it isn't right for you, email us within 14 days for a full refund, no questions asked.",
        "Essayez d'abord la version gratuite — c'est la même application, avec le même éditeur et les mêmes exports. Si vous achetez Pro et qu'il ne vous convient pas, écrivez-nous sous 14 jours pour un remboursement intégral, sans justification.",
        "请先试用免费版——它就是同一款应用，编辑器和导出功能完全相同。如果购买专业版后觉得不合适，14 天内发邮件给我们即可全额退款，无需任何理由。",
      ),
    },
    {
      id: "faq-devices",
      question: l(
        "On how many Macs can I use my license?",
        "Sur combien de Mac puis-je utiliser ma licence ?",
        "一份许可证可以在几台 Mac 上使用？",
      ),
      answer: l(
        "On every Mac you personally use. The license is per-person, not per-machine — we think that's the fair way to do it.",
        "Sur tous les Mac que vous utilisez personnellement. La licence est par personne, pas par machine — c'est notre idée d'un modèle équitable.",
        "你个人使用的每一台 Mac 都可以。许可证按人授权，而非按设备——我们认为这才公平。",
      ),
    },
  ],

  requirements: [
    {
      id: "req-os",
      label: l("Operating system", "Système d'exploitation", "操作系统"),
      value: l("macOS 14 Sonoma or newer", "macOS 14 Sonoma ou plus récent", "macOS 14 Sonoma 或更新版本"),
    },
    {
      id: "req-chip",
      label: l("Processor", "Processeur", "处理器"),
      value: l(
        "Apple Silicon recommended · Intel supported",
        "Apple Silicon recommandé · Intel pris en charge",
        "推荐 Apple Silicon · 支持 Intel",
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
        "App: 38 MB · Models: 78 MB – 3 GB each",
        "App : 38 Mo · Modèles : 78 Mo à 3 Go chacun",
        "应用：38 MB · 模型：每个 78 MB – 3 GB",
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
          "Offline license activation — sandboxed, hardened runtime, zero telemetry",
          "Activation de licence hors ligne — sandbox, runtime durci, zéro télémétrie",
          "离线许可证激活——沙盒运行、强化运行时、零遥测",
        ),
      ],
    },
  ],

  // PLACEHOLDER testimonials for layout purposes — replace with real,
  // attributed customer quotes before launch (see README → Content).
  reviews: [
    {
      id: "rev-1",
      author: "Camille R.",
      role: l("Podcast producer", "Productrice de podcasts", "播客制作人"),
      rating: 5,
      quote: l(
        "I stopped uploading interviews to cloud services the day I found this. Same accuracy, none of the worry.",
        "J'ai arrêté d'envoyer mes entretiens dans le cloud le jour où je l'ai découvert. Même précision, zéro inquiétude.",
        "发现它那天起，我就不再把采访上传到云端了。精度一样，却完全不用担心。",
      ),
    },
    {
      id: "rev-2",
      author: "Thomas B.",
      role: l("PhD researcher", "Doctorant", "博士研究员"),
      rating: 5,
      quote: l(
        "Two hours of field recordings transcribed over lunch, on a MacBook Air. The synced playback makes verification painless.",
        "Deux heures d'enregistrements de terrain transcrites pendant le déjeuner, sur un MacBook Air. La lecture synchronisée rend la vérification indolore.",
        "午饭时间就在 MacBook Air 上转完了两小时的田野录音。同步播放让核对轻松无比。",
      ),
    },
    {
      id: "rev-3",
      author: "Mei L.",
      role: l("Video editor", "Monteuse vidéo", "视频剪辑师"),
      rating: 4,
      quote: l(
        "SRT export drops straight into my timeline. I'd pay for that feature alone.",
        "L'export SRT s'intègre directement dans ma timeline. Je paierais rien que pour ça.",
        "SRT 导出直接进时间线。光这一个功能就值回票价。",
      ),
    },
  ],
};

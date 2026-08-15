import { l, type AppDefinition } from "@/content/types";

/**
 * Stagebox Remote — preamp control for Yamaha Tio1608-D and compatible
 * R-series stageboxes, from iPhone, iPad and Mac.
 *
 * Facts here mirror the app source (stagebox-remote repo): free-tier slot
 * count from `Store.freeSlots`, IAP product ID from `Store.proID`,
 * deployment targets from `app/project.yml`, protocol details from
 * `legacy/PROTOCOL.md`.
 */
export const stageboxRemote: AppDefinition = {
  slug: "stagebox-remote",
  name: l("Stagebox Remote", "Stagebox Remote", "Stagebox Remote"),
  category: "utilities",

  tagline: l(
    "Your stagebox preamps, from anywhere in the room.",
    "Vos préamplis de scène, depuis n'importe où dans la salle.",
    "在场地任意位置，掌控你的舞台接线盒前级。",
  ),
  shortDescription: l(
    "Set gain, +48V and high-pass on your Yamaha stageboxes from an iPhone, iPad or Mac — with live meters and automatic discovery.",
    "Réglez gain, +48V et coupe-bas de vos boîtiers Yamaha depuis un iPhone, un iPad ou un Mac — vumètres en temps réel et découverte automatique.",
    "通过 iPhone、iPad 或 Mac 调整雅马哈接线盒的增益、+48V 和高通滤波——实时电平表，自动发现设备。",
  ),
  longDescription: l(
    "Walk the room while you set your gains. Stagebox Remote talks directly to your Yamaha Tio1608-D and compatible R-series units over Wi-Fi — no console, no laptop, no proprietary software in between.",
    "Parcourez la salle pendant que vous réglez vos gains. Stagebox Remote dialogue directement avec vos Yamaha Tio1608-D et boîtiers compatibles de la série R en Wi-Fi — sans console, sans ordinateur, sans logiciel propriétaire entre les deux.",
    "一边走动一边调增益。Stagebox Remote 通过 Wi-Fi 直连你的雅马哈 Tio1608-D 及兼容的 R 系列设备——不需要调音台、电脑或任何专有软件。",
  ),

  platforms: ["iOS 16+", "iPadOS 16+", "macOS 13+"],
  version: "1.0.0",
  releasedAt: "2026-08-14",
  updatedAt: "2026-08-14",
  status: "available",
  heroScene: "console",

  licenseProductID: "com.stageboxremote.app.pro",
  // App Store Connect app ID 6801357928 (bundle com.stageboxremote.app),
  // created 14 Aug 2026. Flip this on once the app has actually cleared
  // App Review — apps.apple.com 404s for an app that isn't live yet.
  // appStoreUrl: "https://apps.apple.com/app/id6801357928",
  appStoreUrl: undefined,

  features: [
    {
      id: "discovery",
      icon: "zap",
      title: l("Finds your units", "Trouve vos boîtiers", "自动找到你的设备"),
      description: l(
        "Units appear on their own over the network. On a routed or filtered network, type an address once and it's remembered.",
        "Les boîtiers apparaissent seuls sur le réseau. Sur un réseau routé ou filtré, saisissez une adresse une fois : elle est mémorisée.",
        "设备会自动出现在网络中。在路由或受限网络上，手动输入一次地址即可被记住。",
      ),
    },
    {
      id: "multi",
      icon: "cpu",
      title: l("Several units at once", "Plusieurs boîtiers à la fois", "同时管理多台设备"),
      description: l(
        "Each unit gets its own connection and its own channel count, read from the device — 8, 16 or 32 inputs.",
        "Chaque boîtier a sa propre connexion et son propre nombre de canaux, lu sur l'appareil — 8, 16 ou 32 entrées.",
        "每台设备拥有独立连接，通道数直接从设备读取——8、16 或 32 路输入。",
      ),
    },
    {
      id: "meters",
      icon: "waves",
      title: l("Live meters", "Vumètres en direct", "实时电平表"),
      description: l(
        "Refreshed 25 times a second, with a peak-hold that freezes the worst peak while you walk the stage.",
        "Rafraîchis 25 fois par seconde, avec un maintien de crête qui fige le pic le plus fort pendant que vous parcourez le plateau.",
        "每秒刷新 25 次，峰值保持功能会在你走动时锁定最高峰值。",
      ),
    },
    {
      id: "phantom",
      icon: "shield",
      title: l("+48V with a safety net", "+48V avec garde-fou", "+48V 安全确认"),
      description: l(
        "Switching phantom power on asks first — a mis-tap can damage a ribbon mic. Switching it off never asks.",
        "L'activation de l'alimentation fantôme demande confirmation — un appui accidentel peut endommager un micro à ruban. La coupure, jamais.",
        "开启幻象电源前会先确认——误触可能损坏铝带话筒。关闭则从不询问。",
      ),
    },
    {
      id: "reconnect",
      icon: "lock",
      title: l("Survives the network", "Résiste au réseau", "网络中断也不怕"),
      description: l(
        "A unit that reboots or changes address is found again on its own. Units are remembered by identity, not by IP.",
        "Un boîtier qui redémarre ou change d'adresse est retrouvé tout seul. Les boîtiers sont mémorisés par identité, pas par IP.",
        "设备重启或更换地址后会自动重新连接。设备按身份记忆，而非 IP。",
      ),
    },
    {
      id: "local",
      icon: "download",
      title: l("Nothing leaves the venue", "Rien ne sort de la salle", "数据不出场地"),
      description: l(
        "No account, no cloud, no telemetry. The app talks to your units on the local network and to nothing else.",
        "Pas de compte, pas de cloud, pas de télémétrie. L'app parle à vos boîtiers sur le réseau local, et à rien d'autre.",
        "无需账号，没有云端，没有遥测。应用只与本地网络上的设备通信。",
      ),
    },
  ],

  featureBlocks: [
    {
      id: "console-block",
      eyebrow: l("Channel strips", "Tranches de canal", "通道条"),
      title: l(
        "Gain, phantom and high-pass — nothing else in the way.",
        "Gain, fantôme et coupe-bas — rien d'autre pour encombrer.",
        "增益、幻象、高通——没有多余的东西。",
      ),
      body: l(
        "One strip per input: number, +48V, meter, gain, HPF. Hold − or + to run the gain up quickly, and watch the meter answer in real time. The strips wrap to fit the screen, from three across on an iPhone to a full rack of 32 on an iPad.",
        "Une tranche par entrée : numéro, +48V, vumètre, gain, HPF. Maintenez − ou + pour faire défiler le gain, et voyez le vumètre répondre en temps réel. Les tranches s'ajustent à l'écran, de trois de front sur iPhone à un rack complet de 32 sur iPad.",
        "每路输入一条通道条：编号、+48V、电平表、增益、HPF。长按 − 或 + 可快速调整增益，电平表实时响应。通道条自适应屏幕，从 iPhone 上的三列到 iPad 上完整的 32 路。",
      ),
      bullets: [
        l("Meters with peak hold", "Vumètres avec maintien de crête", "带峰值保持的电平表"),
        l("Confirmation before enabling +48V", "Confirmation avant d'activer le +48V", "开启 +48V 前需确认"),
        l("Changes apply instantly, confirmed by the unit", "Les changements s'appliquent aussitôt, confirmés par le boîtier", "更改即时生效，并由设备回执确认"),
      ],
      scene: "console",
    },
    {
      id: "units-block",
      eyebrow: l("Your rack", "Votre parc", "你的机架"),
      title: l(
        "However many units, wherever they are.",
        "Quel que soit le nombre de boîtiers, où qu'ils soient.",
        "无论多少台设备，无论在哪里。",
      ),
      body: l(
        "Units are discovered on every network interface, and the app reads each one's real input count rather than assuming. Switch between them from the top of the screen; the unit you're looking at streams its meters, the others stay connected in the background.",
        "Les boîtiers sont découverts sur chaque interface réseau, et l'app lit le nombre réel d'entrées de chacun plutôt que de le supposer. Passez de l'un à l'autre depuis le haut de l'écran ; le boîtier affiché diffuse ses vumètres, les autres restent connectés en arrière-plan.",
        "应用会在每个网络接口上发现设备，并读取每台设备真实的输入数量，而非想当然。在屏幕顶部即可切换；当前查看的设备推送电平数据，其余设备保持后台连接。",
      ),
      bullets: [
        l("Automatic discovery, plus manual addresses", "Découverte automatique, plus adresses manuelles", "自动发现，也支持手动地址"),
        l("Channel count read from each unit", "Nombre de canaux lu sur chaque boîtier", "通道数从每台设备读取"),
        l("Automatic reconnection after a dropout", "Reconnexion automatique après une coupure", "断线后自动重连"),
      ],
      scene: "units",
    },
  ],

  screenshots: [
    {
      id: "shot-console",
      scene: "console",
      title: l("The console", "La console", "控制台"),
      description: l(
        "One strip per input, with meters running even on locked channels.",
        "Une tranche par entrée, vumètres actifs même sur les canaux verrouillés.",
        "每路输入一条通道条，锁定的通道电平表照常工作。",
      ),
    },
    {
      id: "shot-units",
      scene: "units",
      title: l("Your units", "Vos boîtiers", "你的设备"),
      description: l(
        "Everything found on the network, with its address and input count.",
        "Tout ce qui est trouvé sur le réseau, avec adresse et nombre d'entrées.",
        "网络上发现的所有设备，含地址与输入数量。",
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
        "Four channels of your choice, for as long as you like.",
        "Quatre canaux de votre choix, aussi longtemps que vous voulez.",
        "任选四个通道，不限时长。",
      ),
      features: [
        l("4 channels you pick yourself", "4 canaux que vous choisissez", "自选 4 个通道"),
        l("Any unit, any channel — reassign any time", "N'importe quel boîtier, n'importe quel canal — réassignable à tout moment", "任意设备、任意通道，随时重新分配"),
        l("Live meters on every channel, including locked ones", "Vumètres en direct sur tous les canaux, même verrouillés", "所有通道均有实时电平表，包括锁定的通道"),
        l("Unlimited units", "Boîtiers illimités", "设备数量不限"),
        l("No account required", "Aucun compte requis", "无需注册账号"),
      ],
      cta: "download",
      highlighted: false,
    },
    {
      id: "pro",
      name: l("Pro", "Pro", "专业版"),
      amountUsd: 19.99,
      billing: "one-time",
      description: l(
        "Every channel on every unit. Pay once, keep it forever.",
        "Tous les canaux de tous vos boîtiers. Payez une fois, gardez-le pour toujours.",
        "所有设备的所有通道。一次付费，永久拥有。",
      ),
      features: [
        l("Everything in Free", "Tout ce qui est dans Gratuit", "包含免费版全部功能"),
        l("Unlimited channels on every unit", "Canaux illimités sur chaque boîtier", "每台设备通道不限"),
        l("Bought once, unlocked everywhere — iPhone, iPad and Mac share the same purchase", "Acheté une fois, débloqué partout — iPhone, iPad et Mac partagent le même achat", "一次购买，随处解锁——iPhone、iPad 和 Mac 共享同一次购买"),
        l("Free updates for all 1.x releases", "Mises à jour gratuites pour toutes les versions 1.x", "1.x 全系列免费更新"),
      ],
      cta: "buy",
      highlighted: true,
    },
  ],

  faq: [
    {
      id: "faq-compatibility",
      question: l(
        "Which units does it work with?",
        "Avec quels boîtiers fonctionne-t-elle ?",
        "支持哪些设备？",
      ),
      answer: l(
        "It is built and tested against the Yamaha Tio1608-D. The same control protocol is shared across Yamaha's R-series input racks, so Tio1608-D, Rio1608-D, Rio3224-D, their D2 revisions and the Ri8-D are expected to work — the app reads each unit's input count from the device itself rather than assuming 16. Output-only units such as the Ro8-D will connect but have no preamps to control, and MTX/MRX processors use a different parameter tree and are not supported. If a unit isn't recognised it says so plainly instead of failing silently.",
        "Elle est développée et testée sur le Yamaha Tio1608-D. Le même protocole de contrôle est partagé par les racks d'entrées de la série R de Yamaha : Tio1608-D, Rio1608-D, Rio3224-D, leurs révisions D2 et le Ri8-D devraient donc fonctionner — l'app lit le nombre d'entrées directement sur l'appareil plutôt que de supposer 16. Les boîtiers de sorties comme le Ro8-D se connectent mais n'ont aucun préampli à piloter, et les processeurs MTX/MRX utilisent un autre arbre de paramètres : ils ne sont pas pris en charge. Si un boîtier n'est pas reconnu, l'app le dit clairement au lieu d'échouer en silence.",
        "本应用基于雅马哈 Tio1608-D 开发并测试。雅马哈 R 系列输入机架共用同一控制协议，因此 Tio1608-D、Rio1608-D、Rio3224-D、其 D2 版本以及 Ri8-D 预计均可使用——应用会直接从设备读取输入通道数，而不是假定为 16。Ro8-D 等纯输出设备可以连接，但没有前级可控；MTX/MRX 处理器使用不同的参数树，不受支持。若设备无法识别，应用会明确提示，而不会无声失败。",
      ),
    },
    {
      id: "faq-not-found",
      question: l(
        "The app doesn't find my unit. What should I check?",
        "L'app ne trouve pas mon boîtier. Que vérifier ?",
        "应用找不到我的设备，该检查什么？",
      ),
      answer: l(
        "Check three things, in this order. First, allow the Local Network permission the first time the app asks — if it was declined, the app cannot reach anything and the symptom looks like a network fault; you can re-enable it in Settings → Stagebox Remote. Second, make sure your device is on the same network as the unit. Third, if the venue network filters broadcast, open ⚙︎ → Manual address and type the unit's IP: that path bypasses discovery entirely and is remembered for next time.",
        "Vérifiez trois choses, dans cet ordre. D'abord, acceptez l'autorisation « Réseau local » à la première demande — refusée, l'app ne peut plus rien joindre et le symptôme ressemble à une panne réseau ; vous pouvez la réactiver dans Réglages → Stagebox Remote. Ensuite, assurez-vous que votre appareil est sur le même réseau que le boîtier. Enfin, si le réseau de la salle filtre la diffusion, ouvrez ⚙︎ → Adresse manuelle et saisissez l'IP du boîtier : ce chemin contourne toute la découverte et il est mémorisé pour la fois suivante.",
        "请按顺序检查三点。第一，首次使用时允许「本地网络」权限——若被拒绝，应用将无法访问任何设备，症状看起来像网络故障；可在「设置 → Stagebox Remote」中重新开启。第二，确认你的设备与接线盒在同一网络。第三，如果场地网络过滤广播，请打开 ⚙︎ →「手动地址」输入设备 IP：这条路径完全绕过自动发现，并会被记住。",
      ),
    },
    {
      id: "faq-free",
      question: l(
        "How do the four free channels work?",
        "Comment fonctionnent les quatre canaux gratuits ?",
        "四个免费通道怎么用？",
      ),
      answer: l(
        "You choose them. On first run they're assigned to channels 1–4 of the first unit that connects, but you can move them anywhere in your rack — tap a locked channel and it takes a free slot, or offers to swap one if all four are in use. Slots are stored against the unit's identity and the channel number, so they survive a restart and a change of IP address. Meters keep running on locked channels, so you can still see signal on every input.",
        "C'est vous qui les choisissez. Au premier lancement ils sont attribués aux canaux 1 à 4 du premier boîtier connecté, mais vous pouvez les déplacer n'importe où dans votre parc — appuyez sur un canal verrouillé et il prend un emplacement libre, ou propose l'échange si les quatre sont utilisés. Les emplacements sont enregistrés par identité de boîtier et numéro de canal : ils survivent à un redémarrage et à un changement d'adresse IP. Les vumètres restent actifs sur les canaux verrouillés, vous voyez donc le signal sur toutes les entrées.",
        "由你来选。首次运行时会分配给首台连接设备的 1–4 通道，但你可以把它们移到机架中的任何位置——点按锁定的通道即可占用一个空闲名额，若四个都已占用则会提示替换。名额按设备身份与通道号保存，因此重启或 IP 变更后依然有效。锁定通道的电平表照常工作，所有输入的信号都看得见。",
      ),
    },
    {
      id: "faq-pro",
      question: l(
        "How does Pro unlock work?",
        "Comment fonctionne le déblocage Pro ?",
        "专业版如何解锁？",
      ),
      answer: l(
        "Pro is a one-time in-app purchase billed by Apple through the App Store — there's no license key, no account, and no activation step. Buy it once and it's unlocked on every iPhone, iPad and Mac signed into the same Apple Account: open ⚙︎ and tap Restore Purchases.",
        "Pro est un achat intégré unique, facturé par Apple via l'App Store — il n'y a ni clé de licence, ni compte, ni étape d'activation. Achetez-le une fois et il est débloqué sur tous les iPhone, iPad et Mac connectés au même identifiant Apple : ouvrez ⚙︎ et appuyez sur Restaurer les achats.",
        "专业版是通过 App Store 由 Apple 计费的一次性应用内购买——没有许可证密钥，无需账号，也不需要激活。购买一次，即可在登录同一 Apple 账户的所有 iPhone、iPad 和 Mac 上解锁：打开 ⚙︎ 并点按「恢复购买」。",
      ),
    },
    {
      id: "faq-phantom",
      question: l(
        "Why does it ask before switching on +48V?",
        "Pourquoi demande-t-elle confirmation avant d'activer le +48V ?",
        "为什么开启 +48V 前要确认？",
      ),
      answer: l(
        "Because phantom power sent by accident can damage ribbon microphones and some line-level sources, and a stagebox is often out of sight when you're tapping a screen. Switching phantom off is harmless and never asks. If you'd rather work without the prompt, turn it off in ⚙︎ → Preamps.",
        "Parce qu'une alimentation fantôme envoyée par erreur peut endommager les micros à ruban et certaines sources ligne, et qu'un boîtier de scène est souvent hors de vue quand on tapote un écran. Couper la fantôme est sans risque et ne demande jamais confirmation. Si vous préférez travailler sans la question, désactivez-la dans ⚙︎ → Préamplis.",
        "因为误发幻象电源可能损坏铝带话筒和某些线路电平设备，而你在点屏幕时接线盒往往不在视线内。关闭幻象电源没有风险，因此从不询问。若不想要该提示，可在 ⚙︎ →「前级」中关闭。",
      ),
    },
    {
      id: "faq-security",
      question: l(
        "Is the connection to my units secure?",
        "La connexion à mes boîtiers est-elle sécurisée ?",
        "与设备的连接安全吗？",
      ),
      answer: l(
        "Be aware that the Yamaha control protocol itself has no authentication and no encryption — that is a property of the hardware, not of this app. Any device on the same network can control the preamps, including the manufacturer's own software. Treat your audio network the way you'd treat any production network: keep it separate from guest Wi-Fi. The app adds nothing of its own: no account, no cloud, no telemetry, and it talks only to your units.",
        "Sachez que le protocole de contrôle Yamaha lui-même n'a ni authentification ni chiffrement — c'est une propriété du matériel, pas de cette app. N'importe quel appareil du même réseau peut piloter les préamplis, y compris le logiciel du constructeur. Traitez votre réseau audio comme n'importe quel réseau de production : gardez-le séparé du Wi-Fi invité. L'app n'ajoute rien de son côté : pas de compte, pas de cloud, pas de télémétrie, et elle ne parle qu'à vos boîtiers.",
        "请注意，雅马哈的控制协议本身没有认证也没有加密——这是硬件的特性，而非本应用所致。同一网络上的任何设备都可以控制前级，包括厂商自家的软件。请像对待任何演出网络那样对待你的音频网络：与访客 Wi-Fi 隔离。应用本身不增加任何风险：无账号、无云端、无遥测，且只与你的设备通信。",
      ),
    },
    {
      id: "faq-support",
      question: l(
        "Something's wrong, or I have a request. How do I reach you?",
        "Un problème, ou une demande ? Comment vous joindre ?",
        "遇到问题或有需求，如何联系？",
      ),
      answer: l(
        "Email support@appsthere.com. It helps enormously to include your unit model and firmware version (both shown in the app header once connected), your iOS or macOS version, and what the app displayed at the moment things went wrong. If a unit isn't recognised, the model name the app shows is exactly what we need.",
        "Écrivez à support@appsthere.com. Il est très utile d'indiquer le modèle et la version de firmware de votre boîtier (tous deux affichés dans l'en-tête de l'app une fois connecté), votre version d'iOS ou de macOS, et ce que l'app affichait au moment du problème. Si un boîtier n'est pas reconnu, le nom de modèle affiché par l'app est exactement ce qu'il nous faut.",
        "请发送邮件至 support@appsthere.com。若能附上设备型号与固件版本（连接后显示在应用顶栏）、你的 iOS 或 macOS 版本，以及出问题时应用显示的内容，将极大帮助我们定位问题。如果设备未被识别，应用显示的型号名称正是我们需要的信息。",
      ),
    },
  ],

  requirements: [
    {
      id: "req-os",
      label: l("Operating system", "Système d'exploitation", "操作系统"),
      value: l(
        "iOS 16+, iPadOS 16+, or macOS 13 Ventura+",
        "iOS 16+, iPadOS 16+ ou macOS 13 Ventura+",
        "iOS 16 及以上、iPadOS 16 及以上，或 macOS 13 Ventura 及以上",
      ),
    },
    {
      id: "req-hardware",
      label: l("Hardware", "Matériel", "硬件"),
      value: l(
        "Yamaha Tio1608-D or a compatible R-series input rack",
        "Yamaha Tio1608-D ou un rack d'entrées compatible de la série R",
        "雅马哈 Tio1608-D 或兼容的 R 系列输入机架",
      ),
    },
    {
      id: "req-network",
      label: l("Network", "Réseau", "网络"),
      value: l(
        "Your device and the units on the same local network",
        "Votre appareil et les boîtiers sur le même réseau local",
        "你的设备与接线盒处于同一本地网络",
      ),
    },
    {
      id: "req-permission",
      label: l("Permission", "Autorisation", "权限"),
      value: l(
        "Local Network access, requested at first launch",
        "Accès au réseau local, demandé au premier lancement",
        "首次启动时请求的本地网络访问权限",
      ),
    },
    {
      id: "req-internet",
      label: l("Internet", "Internet", "互联网"),
      value: l(
        "Not required — the app never leaves your local network",
        "Non requis — l'app ne quitte jamais votre réseau local",
        "无需联网——应用从不离开你的本地网络",
      ),
    },
  ],

  changelog: [
    {
      version: "1.0.0",
      date: "2026-08-14",
      title: l("Initial release", "Version initiale", "首个正式版"),
      changes: [
        l(
          "Gain, +48V and high-pass control for Yamaha Tio1608-D and compatible R-series units",
          "Contrôle du gain, du +48V et du coupe-bas pour les Yamaha Tio1608-D et boîtiers compatibles de la série R",
          "支持雅马哈 Tio1608-D 及兼容 R 系列设备的增益、+48V 与高通控制",
        ),
        l(
          "Several units controlled in parallel, each with its own connection and channel count",
          "Plusieurs boîtiers pilotés en parallèle, chacun avec sa connexion et son nombre de canaux",
          "可并行控制多台设备，各自拥有独立连接与通道数",
        ),
        l(
          "Automatic discovery on every network interface, with manual addresses as a fallback",
          "Découverte automatique sur chaque interface réseau, avec adresses manuelles en secours",
          "在每个网络接口上自动发现设备，并支持手动地址作为备选",
        ),
        l(
          "Live meters with global peak hold",
          "Vumètres en direct avec maintien de crête global",
          "实时电平表，支持全局峰值保持",
        ),
        l(
          "Confirmation before enabling phantom power, switchable in Settings",
          "Confirmation avant d'activer l'alimentation fantôme, débrayable dans les Réglages",
          "开启幻象电源前确认，可在设置中关闭",
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

import { l, type BlogPost } from "@/content/types";

/**
 * Blog posts, newest first. To publish: add a post object here — the index,
 * post pages, sitemap, and RSS feed all derive from this list.
 */
export const posts: BlogPost[] = [
  {
    slug: "introducing-lumiso-transcribe",
    category: "updates",
    title: l(
      "Introducing Lumiso Transcribe 1.0",
      "Voici Lumiso Transcribe 1.0",
      "Lumiso Transcribe 1.0 正式发布",
    ),
    excerpt: l(
      "Our first app is here: professional transcription that runs entirely on your Mac. No uploads, no subscriptions, no compromises.",
      "Notre première application est là : une transcription professionnelle qui s'exécute entièrement sur votre Mac. Sans envoi, sans abonnement, sans compromis.",
      "我们的第一款应用来了：完全在你的 Mac 上运行的专业转写。不上传、不订阅、不妥协。",
    ),
    publishedAt: "2026-07-17",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          l(
            "Today we're shipping Lumiso Transcribe 1.0, the first app under the AppsThere name. It turns audio and video into accurate, editable transcripts and subtitles — and it does all of it on your Mac. Nothing is uploaded, ever.",
            "Nous publions aujourd'hui Lumiso Transcribe 1.0, la première application signée AppsThere. Elle transforme audio et vidéo en transcriptions et sous-titres précis et éditables — et tout se passe sur votre Mac. Rien n'est jamais envoyé.",
            "今天我们发布了 Lumiso Transcribe 1.0——AppsThere 旗下的第一款应用。它把音频和视频变成精准、可编辑的文字稿和字幕，而且全部在你的 Mac 上完成。任何数据都不会被上传。",
          ),
          l(
            "We built it because the alternatives all asked for the same trade: hand your recordings to someone's server, or accept clunky tooling. Interviews, client calls, and drafts deserve better than that trade.",
            "Nous l'avons construite parce que toutes les alternatives imposaient le même marché : confier vos enregistrements au serveur de quelqu'un d'autre, ou accepter des outils pénibles. Vos entretiens, appels clients et brouillons méritent mieux que ce marché.",
            "我们做这款应用，是因为现有选择都要求同一种交换：要么把录音交给别人的服务器，要么忍受笨重的工具。访谈、客户通话和草稿值得更好的选择。",
          ),
        ],
      },
      {
        heading: l("What's in 1.0", "Ce que contient la 1.0", "1.0 包含什么"),
        paragraphs: [
          l(
            "Six Whisper models from Tiny to Large-v3, an editor with synced playback highlighting, search and timestamp navigation, and exports to TXT, Markdown, SRT, WebVTT, and JSON. The app is sandboxed, hardened, and telemetry-free.",
            "Six modèles Whisper de Tiny à Large-v3, un éditeur avec surlignage synchronisé à la lecture, recherche et navigation par horodatage, et des exports en TXT, Markdown, SRT, WebVTT et JSON. L'application est sandboxée, durcie et sans télémétrie.",
            "六个 Whisper 模型（从 Tiny 到 Large-v3）、带播放同步高亮的编辑器、搜索与时间戳导航，以及 TXT、Markdown、SRT、WebVTT、JSON 导出。应用运行在沙盒中、经过加固、零遥测。",
          ),
          l(
            "The Free version is genuinely useful — four models, every export format, the full editor. Pro adds the Turbo and Large-v3 models for maximum accuracy, for a one-time $29. No subscription; that's a principle, not a promotion.",
            "La version gratuite est réellement utile — quatre modèles, tous les formats d'export, l'éditeur complet. Pro ajoute les modèles Turbo et Large-v3 pour une précision maximale, pour 29 $ une seule fois. Pas d'abonnement : c'est un principe, pas une promotion.",
            "免费版真正可用——四个模型、全部导出格式、完整编辑器。专业版增加 Turbo 和 Large-v3 模型以获得最高精度，一次性 29 美元。没有订阅——这是原则，不是促销。",
          ),
        ],
      },
      {
        heading: l("What's next", "La suite", "接下来"),
        paragraphs: [
          l(
            "Speaker labels, batch queues, and more languages are on the roadmap. If Lumiso saves you an afternoon of typing, tell us what would save you two.",
            "L'étiquetage des locuteurs, les files de traitement par lots et davantage de langues sont au programme. Si Lumiso vous épargne un après-midi de frappe, dites-nous ce qui vous en épargnerait deux.",
            "说话人标注、批量队列和更多语言已在路线图上。如果 Lumiso 帮你省下了一下午的打字时间，欢迎告诉我们还能帮你省下什么。",
          ),
        ],
      },
    ],
  },
  {
    slug: "why-on-device-transcription",
    category: "ai",
    title: l(
      "Why on-device AI is the right default",
      "Pourquoi l'IA locale est le bon choix par défaut",
      "为什么本地 AI 才是正确的默认选项",
    ),
    excerpt: l(
      "Modern laptops run flagship-class speech models locally. Once that's true, sending your audio to a server becomes a choice — and usually the wrong one.",
      "Les portables modernes exécutent localement des modèles vocaux de premier plan. Dès lors, envoyer son audio à un serveur devient un choix — et généralement le mauvais.",
      "现代笔记本已能在本地运行旗舰级语音模型。既然如此，把音频发送到服务器就成了一种选择——而且通常是错误的选择。",
    ),
    publishedAt: "2026-07-10",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          l(
            "For years, good transcription meant cloud transcription: the models were too big for consumer machines. That stopped being true. Whisper-class models now run comfortably on an M-series MacBook — Metal does the heavy lifting, and a one-hour interview transcribes in minutes.",
            "Pendant des années, bien transcrire signifiait transcrire dans le cloud : les modèles étaient trop lourds pour les machines grand public. Ce n'est plus vrai. Les modèles de classe Whisper tournent désormais confortablement sur un MacBook à puce M — Metal fait le gros du travail, et un entretien d'une heure se transcrit en quelques minutes.",
            "多年来，好的转写就意味着云端转写：模型对个人电脑太大了。这已成过去。Whisper 级别的模型如今在 M 系列 MacBook 上运行自如——Metal 承担繁重计算，一小时的访谈几分钟就能转完。",
          ),
        ],
      },
      {
        heading: l("The privacy math", "Le calcul de la confidentialité", "隐私账"),
        paragraphs: [
          l(
            "Audio is among the most sensitive data you produce: it carries voices, names, and things said off the record. Every upload creates a copy you no longer control, governed by a policy you didn't write and can't audit. Local processing removes the entire category of risk instead of managing it.",
            "L'audio compte parmi les données les plus sensibles que vous produisez : il porte des voix, des noms, des propos tenus en aparté. Chaque envoi crée une copie que vous ne contrôlez plus, régie par une politique que vous n'avez pas écrite et ne pouvez pas auditer. Le traitement local supprime la catégorie de risque entière au lieu de la gérer.",
            "音频是你产生的最敏感的数据之一：它承载着声音、名字，以及不宜公开的谈话。每一次上传都会产生一份你无法再控制的副本，受制于一份你没写过、也无法审计的条款。本地处理不是在管理这类风险，而是彻底消除它。",
          ),
          l(
            "It's also simply faster in practice: no upload time, no queue, no rate limits, and it works on a plane. The cloud's remaining advantage — accuracy — evaporated when the big models learned to run locally.",
            "C'est aussi tout simplement plus rapide en pratique : pas de temps d'envoi, pas de file d'attente, pas de quotas, et ça fonctionne en avion. Le dernier avantage du cloud — la précision — s'est évaporé quand les grands modèles ont appris à tourner en local.",
            "实际用起来也更快：没有上传时间、没有排队、没有限额，在飞机上也能用。当大模型学会在本地运行后，云端仅剩的优势——精度——也不复存在了。",
          ),
        ],
      },
      {
        heading: l("Our commitment", "Notre engagement", "我们的承诺"),
        paragraphs: [
          l(
            "Every app we ship follows the same rule: your data stays on your machine unless you explicitly export it. Not as a premium feature — as the baseline.",
            "Chaque application que nous publions suit la même règle : vos données restent sur votre machine sauf si vous les exportez explicitement. Pas comme option premium — comme socle.",
            "我们发布的每一款应用都遵循同一条规则：除非你主动导出，数据永远留在你的设备上。这不是付费特性，而是底线。",
          ),
        ],
      },
    ],
  },
  {
    slug: "five-tips-cleaner-transcripts",
    category: "tips",
    title: l(
      "Five habits for cleaner transcripts",
      "Cinq habitudes pour des transcriptions plus propres",
      "让文字稿更干净的五个习惯",
    ),
    excerpt: l(
      "Model choice matters less than recording habits. Five small changes that improve accuracy more than upgrading hardware.",
      "Le choix du modèle compte moins que vos habitudes d'enregistrement. Cinq petits changements qui améliorent la précision plus qu'un nouveau matériel.",
      "模型选择的影响其实不如录音习惯。五个小改变，比升级硬件更能提升准确率。",
    ),
    publishedAt: "2026-07-03",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          l(
            "We spend a lot of time looking at transcription errors, and most of them trace back to the recording, not the model. Here are the five habits that pay off most.",
            "Nous passons beaucoup de temps à analyser les erreurs de transcription, et la plupart remontent à l'enregistrement, pas au modèle. Voici les cinq habitudes les plus rentables.",
            "我们花了大量时间分析转写错误，发现多数问题出在录音而非模型。以下五个习惯回报最高。",
          ),
        ],
      },
      {
        heading: l("The five", "Les cinq", "这五个习惯"),
        paragraphs: [
          l(
            "One: get the microphone within arm's length — distance is the single biggest accuracy killer. Two: record in lossless or high-bitrate formats; heavily compressed voice notes lose the consonants models rely on. Three: one speaker at a time — overlap confuses even flagship models.",
            "Un : placez le micro à portée de bras — la distance est le premier tueur de précision. Deux : enregistrez en sans-perte ou à haut débit ; les notes vocales très compressées perdent les consonnes dont dépendent les modèles. Trois : un locuteur à la fois — les chevauchements troublent même les meilleurs modèles.",
            "第一：话筒放在一臂之内——距离是准确率的头号杀手。第二：用无损或高码率格式录音；过度压缩的语音备忘录会丢失模型赖以识别的辅音。第三：一次一人发言——重叠对话连旗舰模型也会犯糊涂。",
          ),
          l(
            "Four: set the language explicitly when you know it; auto-detect is good, but certainty is better, especially for short clips. Five: pick the model by the job — Base for quick drafts you'll skim, Turbo or Large-v3 when every word will be quoted.",
            "Quatre : précisez la langue quand vous la connaissez ; la détection automatique est bonne, la certitude est meilleure, surtout sur les clips courts. Cinq : choisissez le modèle selon la tâche — Base pour un brouillon à survoler, Turbo ou Large-v3 quand chaque mot sera cité.",
            "第四：知道语言时就明确指定；自动检测不错，但确定性更好，短音频尤其如此。第五：按任务选模型——快速浏览用 Base，逐字引用就用 Turbo 或 Large-v3。",
          ),
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

import { l, type Testimonial } from "@/content/types";

/**
 * PLACEHOLDER testimonials for layout purposes — replace with real,
 * attributed customer quotes before launch (see README → Content).
 * Avatars are generated from initials; no stock photos.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    author: "Camille R.",
    role: l("Podcast producer", "Productrice de podcasts", "播客制作人"),
    rating: 5,
    quote: l(
      "Native apps that feel like the platform they run on — fast, quiet, no accounts. This is how software used to feel.",
      "Des applications natives qui respectent leur plateforme — rapides, discrètes, sans compte. C'est le logiciel comme avant.",
      "真正的原生应用——快速、安静、无需账号。这才是软件本来的样子。",
    ),
  },
  {
    id: "t-2",
    author: "Thomas B.",
    role: l("PhD researcher", "Doctorant", "博士研究员"),
    rating: 5,
    quote: l(
      "Bought once, own forever, works offline. The pricing model alone earned my trust.",
      "Acheté une fois, à moi pour toujours, fonctionne hors ligne. Le modèle de prix a suffi à gagner ma confiance.",
      "一次购买，永久拥有，离线可用。光是定价模式就赢得了我的信任。",
    ),
  },
  {
    id: "t-3",
    author: "Mei L.",
    role: l("Video editor", "Monteuse vidéo", "视频剪辑师"),
    rating: 5,
    quote: l(
      "Every detail is considered — from the drag-and-drop to the export naming. You can tell one team sweats the small stuff.",
      "Chaque détail est pensé — du glisser-déposer au nommage des exports. On sent une équipe qui soigne les petites choses.",
      "每个细节都经过推敲——从拖放到导出命名。看得出这个团队在乎小事。",
    ),
  },
];

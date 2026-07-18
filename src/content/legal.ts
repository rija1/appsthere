import { l, type Localized } from "@/content/types";

export interface LegalSection {
  heading: Localized;
  paragraphs: Localized[];
}

export interface LegalDoc {
  slug: "privacy" | "terms" | "refunds";
  title: Localized;
  updatedAt: string;
  intro: Localized;
  sections: LegalSection[];
}

/**
 * Paddle requires a reachable privacy policy, terms, and refund policy
 * before approving a domain for checkout. Review with counsel before
 * relying on these texts.
 */
export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: l("Privacy Policy", "Politique de confidentialité", "隐私政策"),
    updatedAt: "2026-07-17",
    intro: l(
      "Privacy isn't a feature of our apps — it's the reason they're built the way they are. This policy covers both our applications and this website.",
      "La confidentialité n'est pas une fonctionnalité de nos applications — c'est la raison de leur conception. Cette politique couvre nos applications et ce site web.",
      "隐私不是我们应用的一项功能——而是它们如此设计的原因。本政策涵盖我们的应用程序和本网站。",
    ),
    sections: [
      {
        heading: l("In our apps", "Dans nos applications", "在应用中"),
        paragraphs: [
          l(
            "Our applications process your files entirely on your device. They contain no telemetry, no analytics, and no advertising identifiers. The only network requests they make are ones you explicitly trigger, such as downloading a transcription model or checking for an app update. Your content — audio, video, transcripts — is never transmitted to us or to any third party.",
            "Nos applications traitent vos fichiers entièrement sur votre appareil. Elles ne contiennent ni télémétrie, ni outil d'analyse, ni identifiant publicitaire. Les seules requêtes réseau qu'elles effectuent sont celles que vous déclenchez explicitement, comme le téléchargement d'un modèle de transcription ou la vérification d'une mise à jour. Votre contenu — audio, vidéo, transcriptions — ne nous est jamais transmis, ni à aucun tiers.",
            "我们的应用完全在你的设备上处理文件。应用不包含任何遥测、分析或广告标识符。它们发出的唯一网络请求是你明确触发的请求，例如下载转写模型或检查应用更新。你的内容——音频、视频、文字稿——绝不会传输给我们或任何第三方。",
          ),
        ],
      },
      {
        heading: l("On this website", "Sur ce site web", "在本网站上"),
        paragraphs: [
          l(
            "This website sets no advertising or analytics cookies. If you subscribe to our newsletter, we store your email address solely to send you the occasional product announcement, and every email includes an unsubscribe link.",
            "Ce site ne dépose aucun cookie publicitaire ou d'analyse. Si vous vous abonnez à notre lettre d'information, nous conservons votre adresse e-mail uniquement pour vous envoyer d'occasionnelles annonces produit, et chaque e-mail contient un lien de désabonnement.",
            "本网站不设置任何广告或分析 Cookie。如果你订阅我们的邮件通讯，我们仅为发送偶尔的产品公告而保存你的邮箱地址，且每封邮件都包含退订链接。",
          ),
        ],
      },
      {
        heading: l("When you purchase", "Lors d'un achat", "购买时"),
        paragraphs: [
          l(
            "Purchases are processed by Paddle.com, our merchant of record. Paddle collects the billing information required to complete the transaction under its own privacy policy. We receive your email address and order details so we can issue your license key and provide support — nothing more. License keys embed the purchase email so the license can be verified offline.",
            "Les achats sont traités par Paddle.com, notre revendeur officiel. Paddle collecte les informations de facturation nécessaires à la transaction selon sa propre politique de confidentialité. Nous recevons votre adresse e-mail et le détail de la commande afin d'émettre votre clé de licence et d'assurer le support — rien de plus. Les clés de licence contiennent l'e-mail d'achat pour permettre une vérification hors ligne.",
            "购买由我们的官方经销商 Paddle.com 处理。Paddle 根据其自身的隐私政策收集完成交易所需的账单信息。我们仅收到你的邮箱地址和订单详情，用于签发许可证密钥和提供支持——仅此而已。许可证密钥内嵌购买邮箱，以便离线验证许可证。",
          ),
        ],
      },
      {
        heading: l("Your rights", "Vos droits", "你的权利"),
        paragraphs: [
          l(
            "You may request access to, correction of, or deletion of the personal data we hold (your email address and order history) at any time by writing to support@appsthere.com. Deleting your data does not invalidate licenses you have already purchased.",
            "Vous pouvez demander l'accès, la rectification ou la suppression des données personnelles que nous détenons (votre adresse e-mail et l'historique de commandes) à tout moment en écrivant à support@appsthere.com. La suppression de vos données n'invalide pas les licences déjà achetées.",
            "你可以随时写信至 support@appsthere.com，要求访问、更正或删除我们持有的个人数据（你的邮箱地址和订单历史）。删除数据不会使你已购买的许可证失效。",
          ),
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: l("Terms of Service", "Conditions d'utilisation", "服务条款"),
    updatedAt: "2026-07-17",
    intro: l(
      "These terms govern your use of AppsThere website and the purchase and use of our applications. By purchasing or using our software, you agree to them.",
      "Ces conditions régissent votre utilisation du site AppsThere ainsi que l'achat et l'utilisation de nos applications. En achetant ou en utilisant nos logiciels, vous les acceptez.",
      "本条款约束你对 AppsThere 网站的使用以及对我们应用程序的购买和使用。购买或使用我们的软件即表示你同意这些条款。",
    ),
    sections: [
      {
        heading: l("License", "Licence", "许可"),
        paragraphs: [
          l(
            "When you purchase a Pro license, we grant you a perpetual, non-exclusive, non-transferable license to use the application on any device you personally use. The license is per person: a single license may not be shared across multiple people or resold. Free versions may be used without charge for any lawful purpose.",
            "Lorsque vous achetez une licence Pro, nous vous accordons une licence perpétuelle, non exclusive et non transférable d'utilisation de l'application sur tout appareil que vous utilisez personnellement. La licence est individuelle : une même licence ne peut être partagée entre plusieurs personnes ni revendue. Les versions gratuites peuvent être utilisées sans frais pour tout usage licite.",
            "购买专业版许可证后，我们授予你一份永久、非独占、不可转让的许可，允许你在个人使用的任何设备上使用该应用。许可证按人授权：同一份许可证不得由多人共享或转售。免费版可出于任何合法目的免费使用。",
          ),
        ],
      },
      {
        heading: l("Purchases", "Achats", "购买"),
        paragraphs: [
          l(
            "Orders are processed by Paddle.com, acting as merchant of record. Paddle handles payment, applicable taxes, and invoicing. Prices are shown before checkout and may change for future purchases; a price change never affects a license you already own.",
            "Les commandes sont traitées par Paddle.com, agissant en tant que revendeur officiel. Paddle gère le paiement, les taxes applicables et la facturation. Les prix sont affichés avant le paiement et peuvent évoluer pour les achats futurs ; un changement de prix n'affecte jamais une licence déjà acquise.",
            "订单由作为官方经销商的 Paddle.com 处理。Paddle 负责支付、适用税费和发票。价格在结账前显示，未来购买的价格可能调整；价格变动绝不影响你已拥有的许可证。",
          ),
        ],
      },
      {
        heading: l("Updates", "Mises à jour", "更新"),
        paragraphs: [
          l(
            "A license includes all updates within the purchased major version (for example, all 1.x releases). Paid major upgrades, if any, will be offered separately and are always optional.",
            "Une licence inclut toutes les mises à jour de la version majeure achetée (par exemple, toutes les versions 1.x). Les mises à niveau majeures payantes, le cas échéant, seront proposées séparément et resteront toujours optionnelles.",
            "许可证包含所购主版本内的全部更新（例如全部 1.x 版本）。如有付费的主版本升级，将单独提供且始终可选。",
          ),
        ],
      },
      {
        heading: l("Warranty & liability", "Garantie et responsabilité", "保证与责任"),
        paragraphs: [
          l(
            "The software is provided \"as is\", without warranty of any kind, to the maximum extent permitted by law. Our total liability for any claim related to the software is limited to the amount you paid for it. Nothing in these terms limits rights that consumer law grants you and that cannot be waived.",
            "Le logiciel est fourni « en l'état », sans garantie d'aucune sorte, dans la mesure maximale permise par la loi. Notre responsabilité totale pour toute réclamation liée au logiciel est limitée au montant que vous avez payé. Rien dans ces conditions ne limite les droits que le droit de la consommation vous accorde et auxquels il ne peut être renoncé.",
            "在法律允许的最大范围内，本软件按「现状」提供，不附带任何形式的保证。对于与软件相关的任何索赔，我们的全部责任以你实际支付的金额为限。本条款不限制消费者法律赋予你且不可放弃的任何权利。",
          ),
        ],
      },
      {
        heading: l("Contact", "Contact", "联系方式"),
        paragraphs: [
          l(
            "Questions about these terms? Write to support@appsthere.com.",
            "Des questions sur ces conditions ? Écrivez à support@appsthere.com.",
            "对这些条款有疑问？请写信至 support@appsthere.com。",
          ),
        ],
      },
    ],
  },
  {
    slug: "refunds",
    title: l("Refund Policy", "Politique de remboursement", "退款政策"),
    updatedAt: "2026-07-17",
    intro: l(
      "Every purchase is covered by a 14-day, no-questions-asked refund policy.",
      "Chaque achat est couvert par une garantie de remboursement de 14 jours, sans justification.",
      "每笔购买均享有 14 天无理由退款保障。",
    ),
    sections: [
      {
        heading: l("How it works", "Comment ça marche", "如何退款"),
        paragraphs: [
          l(
            "If a purchase isn't right for you, email support@appsthere.com within 14 days of the order — or use the refund link in your Paddle receipt — and the full amount will be returned to your original payment method. Refunds are typically processed within 3–5 business days. Your license key is deactivated for future major versions but nothing is uninstalled from your machine.",
            "Si un achat ne vous convient pas, écrivez à support@appsthere.com dans les 14 jours suivant la commande — ou utilisez le lien de remboursement de votre reçu Paddle — et le montant intégral sera reversé sur votre moyen de paiement d'origine. Les remboursements sont généralement traités sous 3 à 5 jours ouvrés. Votre clé de licence est désactivée pour les futures versions majeures, mais rien n'est désinstallé de votre machine.",
            "如果购买不符合你的需求，请在下单后 14 天内写信至 support@appsthere.com——或使用 Paddle 收据中的退款链接——全额款项将退回你的原支付方式。退款通常在 3–5 个工作日内处理完毕。你的许可证密钥将对未来的主版本停用，但你机器上的任何内容都不会被卸载。",
          ),
          l(
            "Tip: the Free version is the same application with the same editor and exports, so you can evaluate everything except the two Pro models before spending anything.",
            "Astuce : la version gratuite est la même application, avec le même éditeur et les mêmes exports — vous pouvez donc tout évaluer, hormis les deux modèles Pro, avant de dépenser quoi que ce soit.",
            "提示：免费版就是同一款应用，拥有相同的编辑器和导出功能，因此在花钱之前，你可以体验除两个专业版模型之外的全部功能。",
          ),
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((doc) => doc.slug === slug);
}

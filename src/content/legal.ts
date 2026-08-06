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
 * Shared across every app in the catalog (see `content/apps`), not
 * duplicated per app: today's apps all share the same practices — no data
 * collection, purchases exclusively through the App Store — so one set of
 * docs is accurate for all of them and there's nothing to keep in sync
 * across copies. App Store Connect only requires *a* reachable privacy
 * policy URL, not one unique per app.
 * If a future app's practices genuinely differ (e.g. it collects data, or
 * sells outside the App Store), give it its own paragraph within the
 * relevant section here rather than forking a whole new document — until
 * that happens, keep this shared. Review with counsel before relying on
 * these texts.
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
            "Pro upgrades are sold as an in-app purchase handled entirely by Apple through the App Store. Payment is processed by Apple under its own privacy policy; we never see your payment details and receive no personal information about you. The app checks your purchase status through Apple's own on-device receipt system — there is no license key, no account, and no purchase data of any kind on our servers, because we don't operate any.",
            "Les mises à niveau Pro sont vendues sous forme d'achat intégré, entièrement géré par Apple via l'App Store. Le paiement est traité par Apple selon sa propre politique de confidentialité ; nous ne voyons jamais vos informations de paiement et ne recevons aucune information personnelle vous concernant. L'application vérifie votre statut d'achat via le système de reçus propre à Apple, sur l'appareil — il n'y a ni clé de licence, ni compte, ni donnée d'achat sur nos serveurs, puisque nous n'en exploitons aucun.",
            "专业版升级作为应用内购买销售，完全由 Apple 通过 App Store 处理。付款由 Apple 根据其自身的隐私政策处理；我们从不接触你的付款信息，也不会收到任何与你相关的个人信息。应用通过 Apple 自有的设备端收据系统核实购买状态——没有许可证密钥，没有账号，我们的服务器上也没有任何购买数据，因为我们根本不运营任何服务器。",
          ),
        ],
      },
      {
        heading: l("Your rights", "Vos droits", "你的权利"),
        paragraphs: [
          l(
            "Because we hold no personal data about you — no account, no email address, no purchase or order history — there is nothing on our side to access, correct, or delete. Your Apple Account and its purchase history are managed entirely by Apple; you can review or request deletion of that information through your Apple Account settings.",
            "Comme nous ne détenons aucune donnée personnelle vous concernant — ni compte, ni adresse e-mail, ni historique d'achat ou de commande — il n'y a rien de notre côté à consulter, corriger ou supprimer. Votre identifiant Apple et son historique d'achats sont entièrement gérés par Apple ; vous pouvez consulter ou demander la suppression de ces informations depuis les réglages de votre identifiant Apple.",
            "由于我们不持有任何与你相关的个人数据——没有账号、没有邮箱地址、没有购买或订单历史——我们这边没有任何数据可供查阅、更正或删除。你的 Apple 账户及其购买历史完全由 Apple 管理；你可以通过 Apple 账户设置查阅或申请删除这些信息。",
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
            "Pro upgrades are sold exclusively as in-app purchases through Apple's App Store, which acts as the retailer of record. Apple handles payment, applicable taxes, and invoicing under its own terms. Prices are shown in the app and on the App Store before you buy, and may change for future purchases; a price change never affects a purchase you've already made.",
            "Les mises à niveau Pro sont vendues exclusivement sous forme d'achats intégrés via l'App Store d'Apple, qui agit en tant que revendeur officiel. Apple gère le paiement, les taxes applicables et la facturation selon ses propres conditions. Les prix sont affichés dans l'application et sur l'App Store avant l'achat, et peuvent évoluer pour les achats futurs ; un changement de prix n'affecte jamais un achat déjà effectué.",
            "专业版升级仅通过 Apple App Store 以应用内购买的形式销售，Apple 在其中担任官方零售商。Apple 按其自身条款负责支付、适用税费和开具发票。价格会在应用内和 App Store 上于购买前显示，未来购买的价格可能调整；价格变动绝不影响你已完成的购买。",
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
    updatedAt: "2026-08-06",
    intro: l(
      "Every Pro purchase is a one-time in-app purchase billed by Apple through the App Store, so Apple — not us — processes refunds.",
      "Chaque achat Pro est un achat intégré unique facturé par Apple via l'App Store ; c'est donc Apple, et non nous, qui traite les remboursements.",
      "每笔专业版购买都是通过 App Store 由 Apple 计费的一次性应用内购买，因此退款由 Apple 处理，而非我们。",
    ),
    sections: [
      {
        heading: l("How to request a refund", "Comment demander un remboursement", "如何申请退款"),
        paragraphs: [
          l(
            "Because Apple is the retailer of record for every purchase, we have no ability to issue refunds ourselves and no visibility into your payment details. To request one, go to reportaproblem.apple.com and sign in with the Apple Account used for the purchase, or on your device open Settings → your name → Media & Purchases → View Account → Purchase History, find the purchase, and choose \"Report a Problem.\" Apple reviews and decides these requests under its own refund policy.",
            "Apple étant le revendeur officiel de chaque achat, nous ne sommes pas en mesure d'émettre nous-mêmes de remboursement et n'avons aucune visibilité sur vos informations de paiement. Pour en demander un, rendez-vous sur reportaproblem.apple.com et connectez-vous avec l'identifiant Apple utilisé pour l'achat, ou sur votre appareil ouvrez Réglages → votre nom → Média et achats → Voir le compte → Historique des achats, retrouvez l'achat, puis choisissez « Signaler un problème ». Apple examine et statue sur ces demandes selon sa propre politique de remboursement.",
            "由于 Apple 是每笔购买的官方零售商，我们无法自行办理退款，也无法查看你的付款信息。如需申请退款，请访问 reportaproblem.apple.com 并使用购买时所用的 Apple 账户登录，或在设备上打开「设置 → 你的姓名 → 媒体与购买项目 → 查看账户 → 购买历史记录」，找到该笔购买后选择「报告问题」。Apple 会依据其自身的退款政策审核并裁定这些申请。",
          ),
          l(
            "Tip: the Free version is the same application with the same editor and exports, so you can evaluate everything except the Turbo and Large models before buying Pro.",
            "Astuce : la version gratuite est la même application, avec le même éditeur et les mêmes exports — vous pouvez donc tout évaluer, hormis les modèles Turbo et Large, avant d'acheter Pro.",
            "提示：免费版就是同一款应用，拥有相同的编辑器和导出功能，因此在购买专业版之前，你可以体验除 Turbo 和 Large 模型之外的全部功能。",
          ),
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((doc) => doc.slug === slug);
}

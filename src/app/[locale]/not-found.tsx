import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="container-page flex flex-col items-center gap-5 py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="max-w-md text-muted-foreground">{t("body")}</p>
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        {t("back")}
      </Link>
    </div>
  );
}

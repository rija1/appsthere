import { setRequestLocale } from "next-intl/server";
import { Cta } from "@/components/home/cta";
import { FeaturedApps } from "@/components/home/featured-apps";
import { Hero } from "@/components/home/hero";
import { HomeFaq } from "@/components/home/home-faq";
import { Testimonials } from "@/components/home/testimonials";
import { WhyUs } from "@/components/home/why-us";
import { site } from "@/lib/site";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.email,
        logo: `${site.url}/icon.png`,
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhyUs />
      <FeaturedApps />
      <Testimonials />
      <HomeFaq />
      <Cta />
    </>
  );
}

import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import MenuExperience from "@/components/menu/menu-experience";
import { JsonLd } from "@/components/shared/json-ld";
import { menuJsonLd } from "@/lib/structured-data";
import { restaurant } from "@/lib/site";

export const metadata: Metadata = {
  title: "منوی رستوران ایرانی",
  description:
    "منوی کامل رستوران خانچی در سعادت‌آباد؛ قیمت و توضیحات کباب‌ها، خورشت‌ها، پلوها، غذاهای سنتی، پیش‌غذا، سالاد و دمنوش.",
  alternates: { canonical: "/menu" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: restaurant.name,
    title: "منوی رستوران ایرانی خانچی",
    description:
      "منوی کامل خانچی؛ غذاهای اصیل ایرانی، کباب‌های زغالی، خورشت، پلو، پیش‌غذا و دمنوش.",
    url: "/menu",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "منوی غذاهای اصیل ایرانی رستوران خانچی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "منوی رستوران ایرانی خانچی",
    description:
      "منوی کامل خانچی؛ غذاهای اصیل ایرانی، کباب‌های زغالی، خورشت، پلو، پیش‌غذا و دمنوش.",
    images: [
      {
        url: "/twitter-image",
        alt: "منوی غذاهای اصیل ایرانی رستوران خانچی",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuJsonLd} />
      <MenuExperience />
      <SiteFooter />
    </>
  );
}

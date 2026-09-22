import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { MenuSection } from "@/components/sections/menu/menu-section";
import { ReviewsSection } from "@/components/sections/reviews/reviews-section";
import { StorySection } from "@/components/sections/story/story-section";
import { SkipLink } from "@/components/shared/skip-link";
import { JsonLd } from "@/components/shared/json-ld";
import { restaurantJsonLd } from "@/lib/structured-data";
import { restaurant } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد" },
  description: restaurant.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: restaurant.name,
    title: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد",
    description: restaurant.description,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "رستوران خانچی؛ طعم اصیل ایران در سعادت‌آباد تهران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد",
    description: restaurant.description,
    images: [
      {
        url: "/twitter-image",
        alt: "رستوران خانچی؛ طعم اصیل ایران در سعادت‌آباد تهران",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={restaurantJsonLd} />
      <SkipLink />
      <SiteHeader activePage="home" />

      <main id="main-content">
        <HeroSection />
        <MenuSection />
        <StorySection />
        <GallerySection />
        <ReviewsSection />
      </main>

      <SiteFooter />
    </>
  );
}

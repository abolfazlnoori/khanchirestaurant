import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { MenuSection } from "@/components/sections/menu/menu-section";
import { ReviewsSection } from "@/components/sections/reviews/reviews-section";
import { StorySection } from "@/components/sections/story/story-section";
import { SkipLink } from "@/components/shared/skip-link";

export default function Home() {
  return (
    <>
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

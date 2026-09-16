import { HeroArtwork } from "./hero-artwork";
import { HeroContent } from "./hero-content";
import { HeroMeta } from "./hero-meta";

export function HeroSection() {
  return (
    <section id="top" className="relative bg-mist pt-[45px] max-[900px]:bg-[#F6F2EC] max-[900px]:pt-0" aria-labelledby="hero-title">
      <div className="hero-pattern relative mx-auto grid min-h-[572px] w-[calc(100%-72px)] grid-cols-[1.05fr_0.95fr] items-center overflow-x-clip overflow-y-visible border border-[#eee5d9] bg-[#F6F2EC] max-[900px]:min-h-0 max-[900px]:w-full max-[900px]:grid-cols-1 max-[900px]:border-0 max-[900px]:pt-[18px] max-[900px]:pb-2">
        <HeroContent />
        <HeroArtwork />
      </div>
      <HeroMeta />
    </section>
  );
}

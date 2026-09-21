"use client";

export function HeroMeta() {
  const scrollDown = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollBy({
      top: Math.min(window.innerHeight * 0.55, 520),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="grid min-h-[128px] grid-cols-3 items-center bg-mist px-[max(5vw,64px)] text-[13px] text-[#5d635f] [direction:ltr] max-[900px]:min-h-[73px] max-[900px]:grid-cols-1 max-[900px]:px-5 max-[900px]:pb-2.5" data-motion="reveal" data-motion-delay="220">
      <div className="grid justify-self-start text-left leading-tight [direction:ltr] max-[900px]:hidden"><span lang="en">@KHANCHI.RESTAURANT</span><a href="tel:+982122389873" lang="en">021-22389873</a></div>
      <button
        className="group inline-flex min-h-11 cursor-pointer items-center justify-self-center gap-2 border-0 bg-transparent p-0 font-semibold text-ink [direction:rtl] [font:inherit]"
        type="button"
        onClick={scrollDown}
        aria-label="کمی پایین‌تر بروید"
      >
        <span>پایین بروید</span>
        <span className="inline-block text-gold transition-transform duration-300 group-hover:translate-y-1 max-[900px]:text-xs" aria-hidden="true">↓</span>
      </button>
      <div className="grid justify-self-end text-right [direction:rtl] max-[900px]:hidden"><span>همه‌روزه</span><span>۱۱:۳۰ — ۲۴:۰۰</span></div>
    </div>
  );
}

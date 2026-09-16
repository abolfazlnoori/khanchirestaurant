export function HeroMeta() {
  return (
    <div className="grid min-h-[128px] grid-cols-3 items-center bg-mist px-[max(5vw,64px)] text-[13px] text-[#5d635f] [direction:ltr] max-[900px]:min-h-[73px] max-[900px]:grid-cols-1 max-[900px]:px-5 max-[900px]:pb-2.5">
      <div className="grid justify-self-start text-left font-serif text-[11px] leading-tight [direction:ltr] max-[900px]:hidden"><span lang="en">@KHANCHI.RESTAURANT</span><a href="tel:+982122389873" lang="en">021-22389873</a></div>
      <p className="m-0 justify-self-center font-semibold text-ink [direction:rtl] max-[900px]:text-xs">پایین بروید <span className="me-2.5" aria-hidden="true">↓</span></p>
      <div className="grid justify-self-end text-right [direction:rtl] max-[900px]:hidden"><span>همه‌روزه</span><span>۱۱:۳۰ — ۲۴:۰۰</span></div>
    </div>
  );
}

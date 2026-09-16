import { ArrowLeft } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-cream max-[420px]:mt-[5px] max-[420px]:bg-cream-mobile">
      <section className="px-6 pt-[30px] pb-3 text-center max-[900px]:px-[22px] max-[900px]:pt-[65px] max-[900px]:pb-[50px]" aria-labelledby="footer-title">
        <p className="mb-[18px] text-[32px] font-extrabold max-[900px]:text-[28px]">خانچی</p>
        <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="footer-title">اصالت ایرانی، برای لحظه‌های امروزی</h2>
        <p className="mt-4 text-[17px] text-muted max-[900px]:text-sm">خانچی — رستوران اصیل ایرانی در سعادت‌آباد تهران</p>
        <div className="mt-[34px] flex items-center justify-center gap-[30px] max-[900px]:mt-5 max-[900px]:flex-col max-[900px]:gap-2">
          <a className="inline-flex min-h-12 items-center justify-center gap-3.5 bg-ink px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#174531] max-[900px]:min-h-[46px] max-[900px]:px-[18px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="tel:+982122389873">رزرو میز <ArrowLeft /></a>
          <a className="inline-flex min-h-12 items-center justify-center gap-3.5 px-0 text-[15px] font-semibold max-[900px]:min-h-[46px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="#menu">رفتن به صفحه منو <ArrowLeft /></a>
        </div>
      </section>

      <div className="grid grid-cols-4 border-y border-line px-[max(6vw,48px)] py-[30px] max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:py-3">
        <div className="min-h-[78px] px-9 max-[900px]:min-h-0 max-[900px]:px-0 max-[900px]:py-[19px]">
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:text-base">موقعیت</h3>
          <p className="m-0 text-sm">سعادت‌آباد، تهران</p>
        </div>
        <div className="min-h-[78px] border-r border-line px-9 max-[900px]:min-h-0 max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-0 max-[900px]:py-[19px]">
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:text-base">ساعات فعالیت</h3>
          <p className="m-0 text-sm">همه‌روزه ۱۱:۳۰ تا ۲۴:۰۰</p>
        </div>
        <div className="min-h-[78px] border-r border-line px-9 max-[900px]:min-h-0 max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-0 max-[900px]:py-[19px]">
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:text-base">تماس</h3>
          <a className="block text-sm" href="tel:+982122389873">۰۲۱-۲۲۳۸ ۹۸۷۳</a>
          <a className="block text-sm" href="tel:+989032805147">۰۹۰۳ ۲۸۰ ۵۱۴۷</a>
        </div>
        <div className="min-h-[78px] border-r border-line px-9 max-[900px]:min-h-0 max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-0 max-[900px]:py-[19px]">
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:text-base">اینستاگرام</h3>
          <a className="block text-sm" href="https://instagram.com/khanchi.restaurant" rel="noreferrer" target="_blank" lang="en">@khanchi.restaurant</a>
        </div>
      </div>

      <div className="grid min-h-[63px] grid-cols-3 items-center px-[max(6vw,48px)] text-xs max-[900px]:min-h-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-1 max-[900px]:px-6 max-[900px]:py-3 max-[420px]:min-h-[102px]">
        <p className="m-0 max-[900px]:hidden">خانچی</p>
        <p className="m-0 justify-self-center font-serif text-[9px] tracking-[0.06em] text-gold max-[900px]:justify-self-start" lang="en">AUTHENTIC PERSIAN CUISINE</p>
        <p className="m-0 justify-self-end font-serif text-lg [direction:ltr] max-[900px]:hidden" lang="en">KH</p>
      </div>
    </footer>
  );
}

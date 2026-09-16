import { ArrowLeft, MenuIcon } from "@/components/icons";

const navigation = [
  { href: "#story", label: "داستان خانچی" },
  { href: "#experience", label: "تجربه میزبانی" },
  { href: "#gallery", label: "گالری" },
  { href: "#contact", label: "اطلاعات تماس" },
];

function Brand() {
  return (
    <a className="col-start-3 inline-flex min-h-12 items-center justify-self-end gap-4 [direction:ltr] max-[900px]:col-start-2" href="#top" aria-label="خانچی، صفحه اصلی">
      <div className="flex flex-col">
        <span className="text-[22px] font-extrabold [direction:rtl]">خانچی</span>
        <p className="text-[8px] text-[#59615D] [direction:rtl]">KHANCHI RESTAURANT</p>
      </div>
      <span className="h-[46px] w-px bg-[#bdbdb9] max-[900px]:hidden" aria-hidden="true" />
      <span className="font-serif text-xl tracking-[0.08em] max-[900px]:hidden" lang="en">KH</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-20 h-[102px] bg-mist max-[900px]:h-[60px] max-[900px]:bg-white">
      <div className="mx-auto grid h-full w-[min(1320px,calc(100%-64px))] grid-cols-[1fr_auto_1fr] items-center [direction:ltr] max-[900px]:w-[calc(100%-32px)] max-[900px]:grid-cols-2">
        <Brand />

        <nav className="col-start-2 row-start-1 flex items-center justify-center gap-[clamp(28px,4vw,64px)] text-sm text-[#4f554f] [direction:rtl] max-[900px]:hidden" aria-label="پیمایش اصلی">
          {navigation.map((item) => (
            <a className="relative inline-flex min-h-11 items-center after:absolute after:inset-x-0 after:bottom-[7px] after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100" key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="col-start-1 row-start-1 inline-flex min-h-11 items-center justify-self-start gap-3 text-sm font-semibold [direction:rtl] max-[900px]:hidden [&_svg]:size-[17px] [&_svg]:transition-transform hover:[&_svg]:-translate-x-1" href="#menu">
          مشاهده منو
          <ArrowLeft />
        </a>

        <details className="relative col-start-1 row-start-1 hidden justify-self-start [direction:rtl] max-[900px]:block">
          <summary className="grid size-12 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden" aria-label="باز کردن منو"><MenuIcon className="size-[22px]" /></summary>
          <nav className="absolute top-[52px] left-0 grid w-[min(280px,calc(100vw-32px))] border border-line bg-[rgb(248_243_233/0.98)] p-2.5 shadow-[0_20px_45px_rgb(5_35_20/0.14)]" aria-label="پیمایش موبایل">
            {navigation.map((item) => (
              <a className="flex min-h-12 items-center border-b border-line px-3.5 last:border-b-0" key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="flex min-h-12 items-center px-3.5" href="#menu">مشاهده منو</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

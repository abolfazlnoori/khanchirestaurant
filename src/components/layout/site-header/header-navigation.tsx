import { MenuIcon } from "@/components/shared/icons";
import { navigationItems } from "./navigation.data";

export function DesktopNavigation() {
  return (
    <nav className="col-start-2 row-start-1 flex items-center justify-center gap-[clamp(28px,4vw,64px)] text-sm text-[#4f554f] [direction:rtl] max-[900px]:hidden" aria-label="پیمایش اصلی">
      {navigationItems.map((item) => (
        <a className="relative inline-flex min-h-11 items-center after:absolute after:inset-x-0 after:bottom-[7px] after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100" key={item.href} href={item.href}>{item.label}</a>
      ))}
    </nav>
  );
}

export function MobileNavigation() {
  return (
    <details className="relative col-start-1 row-start-1 hidden justify-self-start [direction:rtl] max-[900px]:block">
      <summary className="grid size-12 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden" aria-label="باز کردن منو"><MenuIcon className="size-[22px]" /></summary>
      <nav className="absolute top-[52px] left-0 grid w-[min(280px,calc(100vw-32px))] border border-line bg-[rgb(248_243_233/0.98)] p-2.5 shadow-[0_20px_45px_rgb(5_35_20/0.14)]" aria-label="پیمایش موبایل">
        {navigationItems.map((item) => (
          <a className="flex min-h-12 items-center border-b border-line px-3.5 last:border-b-0" key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a className="flex min-h-12 items-center px-3.5" href="#menu">مشاهده منو</a>
      </nav>
    </details>
  );
}

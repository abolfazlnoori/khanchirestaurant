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

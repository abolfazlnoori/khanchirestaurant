import Link from "next/link";
import { navigationItems } from "./navigation.data";
import type { NavigationItemId } from "./navigation.data";

export function DesktopNavigation({ activePage }: { activePage: NavigationItemId }) {
  return (
    <nav className="flex items-center justify-center gap-12 text-[15px] [direction:rtl]" aria-label="پیمایش اصلی">
      {navigationItems.map((item) => (
        <Link
          className={`relative inline-flex min-h-11 items-center px-1 transition-colors after:absolute after:inset-x-1 after:bottom-[5px] after:h-[2px] after:origin-center after:rounded-full after:bg-gold after:transition-transform after:duration-300 ${
            activePage === item.id
              ? "font-semibold text-ink after:scale-x-100"
              : "text-[#66706a] after:scale-x-0 hover:text-ink hover:after:scale-x-100 focus-visible:after:scale-x-100"
          }`}
          key={item.id}
          href={item.href}
          aria-current={activePage === item.id ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

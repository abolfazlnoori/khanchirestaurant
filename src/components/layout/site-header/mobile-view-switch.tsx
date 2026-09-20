import { HomeIcon, MenuIcon } from "@/components/shared/icons";
import Link from "next/link";
import { navigationItems } from "./navigation.data";
import type { NavigationItemId } from "./navigation.data";

const iconById = {
  home: HomeIcon,
  menu: MenuIcon,
} as const;

export function MobileViewSwitch({ activePage }: { activePage: NavigationItemId }) {
  return (
    <nav className="mobile-view-switch [direction:rtl]" aria-label="پیمایش اصلی موبایل">
      <div className="mx-auto flex h-full w-full max-w-[430px] items-stretch">
        {navigationItems.map((item) => {
          const Icon = iconById[item.id];
          const isActive = activePage === item.id;

          return (
            <Link
              className={`group relative flex flex-1 flex-col items-center justify-center gap-0.5 pt-1 text-[11px] font-semibold transition-colors ${
                isActive ? "text-gold" : "text-[#7b817d] hover:text-ink"
              }`}
              href={item.href}
              key={item.id}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="size-[21px] transition-transform duration-200 group-active:scale-90" />
              <span>{item.label}</span>
              <span
                className={`absolute bottom-1.5 h-[2px] w-7 rounded-full bg-gold transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

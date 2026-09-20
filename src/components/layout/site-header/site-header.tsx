import { PhoneIcon } from "@/components/shared/icons";
import { DesktopNavigation } from "./header-navigation";
import { MobileViewSwitch } from "./mobile-view-switch";
import type { NavigationItemId } from "./navigation.data";
import { SiteBrand } from "./site-brand";

export function SiteHeader({ activePage }: { activePage: NavigationItemId }) {
  return (
    <>
      <header className="sticky top-0 z-50 hidden h-[96px] border-b border-[var(--header-line)] bg-[var(--header-bg)] shadow-[var(--header-shadow)] backdrop-blur-xl min-[901px]:block">
        <div className="mx-auto grid h-full w-[min(1320px,calc(100%-64px))] grid-cols-[1fr_auto_1fr] items-center [direction:ltr]">
          <div className="col-start-3 row-start-1 justify-self-end">
            <SiteBrand />
          </div>
          <div className="col-start-2 row-start-1">
            <DesktopNavigation activePage={activePage} />
          </div>

          <a
            className="group col-start-1 row-start-1 inline-flex min-h-11 items-center justify-self-start gap-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:text-gold [direction:rtl]"
            href="tel:+982122389873"
            aria-label="تماس با رستوران خانچی"
          >
            <PhoneIcon className="size-[16px] transition-transform duration-200 group-hover:-rotate-12" />
            تماس با ما
          </a>
        </div>
      </header>

      <header className="site-mobile-header sticky top-0 z-50 border-b border-[var(--header-line)] bg-[var(--header-bg)] shadow-[0_8px_24px_rgb(0_25_4/0.045)] backdrop-blur-xl min-[901px]:hidden">
        <div className="flex h-[70px] items-center justify-center px-5">
          <SiteBrand compact />
        </div>
      </header>

      <MobileViewSwitch activePage={activePage} />
    </>
  );
}

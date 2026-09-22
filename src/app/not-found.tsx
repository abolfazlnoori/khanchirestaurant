import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { SkipLink } from "@/components/shared/skip-link";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <SiteHeader activePage="home" />
      <main
        id="main-content"
        className="grid min-h-[55vh] place-items-center bg-paper px-6 py-24 text-center"
      >
        <div>
          <p className="text-sm font-semibold text-gold">خطای ۴۰۴</p>
          <h1 className="mt-3 text-[clamp(36px,6vw,64px)] font-extrabold text-ink">
            این صفحه پیدا نشد
          </h1>
          <p className="mt-5 text-muted">
            نشانی واردشده درست نیست یا این صفحه جابه‌جا شده است.
          </p>
          <Link
            className="mt-8 inline-flex min-h-12 items-center bg-ink px-7 font-semibold text-white transition-colors hover:bg-[#174531]"
            href="/"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

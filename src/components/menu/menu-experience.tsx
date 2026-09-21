"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { BillSheet, GarsonView } from "./bill-components";
import { formatPrice } from "./menu-data";
import { FeaturedStrip, MenuHero } from "./menu-landing";
import { MenuView } from "./menu-view";
import { useBill } from "./use-bill";

export default function MenuExperience() {
  const router = useRouter();
  const bill = useBill();
  const [view, setView] = useState<"home" | "menu">("menu");
  const [billOpen, setBillOpen] = useState(false);
  const [garsonOpen, setGarsonOpen] = useState(false);

  const goto = (nextView: "home" | "menu") => {
    if (nextView === "home") {
      router.push("/");
      return;
    }

    setView(nextView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGarson = () => {
    setBillOpen(false);
    setGarsonOpen(true);
  };

  return (
    <div dir="rtl" className="menu-page min-h-screen bg-[#fafafa] text-[#10231c]">
      <SiteHeader activePage="menu" />

      {view === "home" ? (
        <>
          <MenuHero onBrowse={() => goto("menu")} />
          <FeaturedStrip onBrowse={() => goto("menu")} />
        </>
      ) : (
        <MenuView bill={bill} onGarson={openGarson} />
      )}

      {bill.count > 0 && (
        <button
          type="button"
          onClick={() => setBillOpen(true)}
          className="khanchi-fab-enter fixed inset-x-4 z-40 flex items-center justify-between rounded-[2px] bg-[#10231c] px-5 py-3.5 text-[#f8f7f5] shadow-[0_18px_40px_-18px_rgba(16,35,28,0.7)] transition-transform duration-200 active:scale-[0.985] lg:hidden"
          style={{ bottom: "calc(env(safe-area-inset-bottom) + 68px)" }}
        >
          <span
            className="flex items-center gap-2 text-[15px]"
            style={{ fontFamily: "'IRANSansX:DemiBold'" }}
          >
            <span
              className="grid h-[22px] min-w-[22px] place-items-center rounded-full bg-[#9a6d32] px-1 text-[12px]"
              style={{ fontFamily: "'IRANSansX:Bold'" }}
            >
              {bill.count.toLocaleString("fa-IR")}
            </span>
            مشاهده فاکتور
          </span>
          <span
            className="text-[15px]"
            style={{ fontFamily: "'IRANSansX:DemiBold'" }}
          >
            {bill.hasMissingPrices
              ? "قیمت نامشخص"
              : `${formatPrice(bill.total)} تومان`}
          </span>
        </button>
      )}

      <BillSheet
        bill={bill}
        open={billOpen}
        onClose={() => setBillOpen(false)}
        onGarson={openGarson}
      />
      {garsonOpen && (
        <GarsonView bill={bill} onClose={() => setGarsonOpen(false)} />
      )}
    </div>
  );
}

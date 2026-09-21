"use client";

import { useMemo, useState } from "react";
import { BillContents } from "./bill-components";
import { categories } from "./menu-data";
import { categoryIcon, IconMenuBook, IconSearch } from "./menu-icons";
import { MenuItemCard } from "./menu-item-card";
import type { BillApi } from "./use-bill";

function CategoryRail({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const pills = [
    { id: "all", title: "همه", icon: IconMenuBook },
    ...categories.map((category) => ({
      id: category.id,
      title: category.title,
      icon: categoryIcon[category.id] ?? IconMenuBook,
    })),
  ];

  return (
    <div
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
      style={{ scrollbarWidth: "none" }}
    >
      {pills.map((pill) => {
        const isActive = active === pill.id;
        const Icon = pill.icon;

        return (
          <button
            key={pill.id}
            type="button"
            onClick={() => onSelect(pill.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-[1px] border px-4 py-2 text-[14px] transition-all duration-200 active:scale-[0.97] ${
              isActive
                ? "border-[#10231c] bg-[#10231c] text-[#f8f7f5]"
                : "border-[#e2ddd2] bg-[#f6f2ec]/50 text-[#647069] hover:border-[#9a6d32] hover:text-[#10231c]"
            }`}
            style={{ fontFamily: "'IRANSansX:Medium'" }}
          >
            {pill.title}
            <Icon
              size={17}
              className={`transition-transform duration-200 ${isActive ? "scale-110 text-[#d8b06a]" : "text-[#9a6d32]"}`}
            />
          </button>
        );
      })}
    </div>
  );
}

export function MenuView({
  bill,
  onGarson,
}: {
  bill: BillApi;
  onGarson: () => void;
}) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visibleSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories
      .filter((category) => active === "all" || category.id === active)
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            !normalizedQuery ||
            item.name.includes(query.trim()) ||
            item.description.includes(query.trim()),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [active, query]);

  const resultCount = visibleSections.reduce(
    (total, category) => total + category.items.length,
    0,
  );

  return (
    <section className="bg-[#fafafa]">
      <div className="khanchi-header-enter sticky top-[70px] z-30 border-b border-[#f0ebe1] bg-[#fafafa]/95 backdrop-blur-sm lg:top-[92px]">
        <div className="mx-auto max-w-[1440px] px-5 py-4 lg:px-16">
          <div className="flex flex-col gap-3 lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-[280px]">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9a6d32]">
                <IconSearch size={17} />
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="جستجوی غذا…"
                className="h-[44px] w-full rounded-[1px] border border-[#e2ddd2] bg-[#f6f2ec]/50 pe-11 ps-4 text-[14px] text-[#10231c] outline-none transition-colors placeholder:text-[#9a938a] focus:border-[#9a6d32]"
                style={{ fontFamily: "'IRANSansX:Regular'" }}
              />
            </div>
            <div className="min-w-0 lg:flex-1">
              <CategoryRail active={active} onSelect={setActive} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-28 pt-10 lg:px-16 lg:pb-20 lg:pt-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_368px] lg:items-start lg:gap-10">
          <div>
            {resultCount === 0 ? (
              <div className="flex flex-col items-end gap-4 py-24 text-right" data-motion="reveal">
                <p
                  className="text-[24px] text-[#17231c]"
                  style={{ fontFamily: "'Abar High:Bold'" }}
                >
                  نتیجه‌ای یافت نشد
                </p>
                <p
                  className="text-[14px] text-[#647069]"
                  style={{ fontFamily: "'IRANSansX:Regular'" }}
                >
                  عبارت دیگری جستجو کنید یا دستهٔ دیگری را انتخاب کنید.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActive("all");
                  }}
                  className="rounded-[1px] border border-[#10231c] px-5 py-2.5 text-[14px] text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]"
                  style={{ fontFamily: "'IRANSansX:DemiBold'" }}
                >
                  نمایش همهٔ غذاها
                </button>
              </div>
            ) : (
              visibleSections.map((category, index) => (
                <div key={category.id} className={index !== 0 ? "mt-16" : ""}>
                  <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#ece7dc] pb-5 text-right max-[900px]:mb-10 max-[900px]:pb-7" data-motion="reveal">
                    <div className="flex items-center gap-3">
                      <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[2px] border border-[#e6ddce] bg-[#f6f2ec] text-[#9a6d32]">
                        {(categoryIcon[category.id] ?? IconMenuBook)({ size: 24 })}
                      </span>
                      <div>
                        <h3
                          className="text-[clamp(26px,3.4vw,40px)] leading-[1.15] text-[#17231c]"
                          style={{ fontFamily: "'Abar High:Bold'" }}
                        >
                          {category.title}
                        </h3>
                        <p
                          className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#a87b3d]"
                          style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}
                        >
                          {category.kicker}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        qty={bill.bill[item.id]?.qty ?? 0}
                        onAdd={() => bill.add(item)}
                        onDec={() => bill.dec(item.id)}
                        motionIndex={itemIndex}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-[168px] overflow-hidden rounded-[3px] border border-[#eae4d9] bg-[#f4f2ee] shadow-[0_24px_60px_-40px_rgba(16,35,28,0.55)]" data-motion="reveal" data-motion-delay="80">
              <BillContents bill={bill} onGarson={onGarson} variant="panel" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

"use client";

/* Dynamic menu photos include externally hosted editorial images. */
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories, formatPrice, type MenuItem } from './menu-data';
import {
  categoryIcon,
  IconChevronLeft,
  IconCheck,
  IconClose,
  IconHome,
  IconLeaf,
  IconMenuBook,
  IconMinus,
  IconNote,
  IconPlus,
  IconReceipt,
  IconSearch,
  IconStar,
  IconTrash,
} from './menu-icons';
import { IconChili } from './menu-icons';
import type { Diet } from './menu-data';

const assetPathPrefix = '/assets/menu';
const imgEyebrowRule = `${assetPathPrefix}/85571.svg`;
const imgFooterRule = `${assetPathPrefix}/e75ca.svg`;
const imgWordDivider = `${assetPathPrefix}/a4cc6.svg`;
const imgStarters = `${assetPathPrefix}/c78bb.png`;
const imgMain = `${assetPathPrefix}/e5fa0.png`;
const imgDrinks = `${assetPathPrefix}/71c5e.png`;

// Girih tiles carried over from the landing page's hero pattern.
const girihRows = [
  ['e01ce', 'e84d2', '88b3d', 'e01ce', 'e84d2', '88b3d'],
  ['38521', '98f6e', 'd3341', '38521', '98f6e', 'd3341'],
  ['98660', '7857e', '7548c', '98660', '7857e', '7548c'],
  ['5fc5b', '55118', 'a169c', '5fc5b', '55118', 'a169c'],
];

/* ============================ shared primitives ============================ */

function GirihPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none opacity-25 ${className}`} aria-hidden>
      <div className="grid grid-rows-4">
        {girihRows.map((row, r) => (
          <div key={r} className="flex">
            {row.map((tile, c) => (
              <img
                key={`${r}-${c}`}
                src={`${assetPathPrefix}/${tile}.svg`}
                alt=""
                className="block h-[92px] w-[92px] max-w-none"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={imgEyebrowRule} alt="" className="h-px w-[34px]" aria-hidden />
      <span
        className="whitespace-nowrap text-[14px] text-[#9a6d32]"
        style={{ fontFamily: "'IRANSansX:DemiBold'" }}
      >
        {label}
      </span>
    </div>
  );
}

function DietBadge({ diet }: { diet: Diet }) {
  const map = {
    vegetarian: { label: 'گیاهی', Icon: IconLeaf, cls: 'text-[#3f6b3f] border-[#3f6b3f]/25 bg-[#eef3ec]' },
    spicy: { label: 'تند', Icon: IconChili, cls: 'text-[#9d3b28] border-[#9d3b28]/25 bg-[#f6ece8]' },
  }[diet];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[1px] border px-2 py-[3px] text-[10px] ${map.cls}`}
      style={{ fontFamily: "'IRANSansX:DemiBold'" }}
    >
      <map.Icon size={11} />
      {map.label}
    </span>
  );
}

/* ============================ Bill store ============================ */

type BillEntry = { item: MenuItem; qty: number; note: string };
type Bill = Record<string, BillEntry>;

function useBill() {
  const [bill, setBill] = useState<Bill>({});
  const add = (item: MenuItem) =>
    setBill((b) => ({
      ...b,
      [item.id]: { item, qty: (b[item.id]?.qty ?? 0) + 1, note: b[item.id]?.note ?? '' },
    }));
  const dec = (id: string) =>
    setBill((b) => {
      const cur = b[id];
      if (!cur) return b;
      if (cur.qty <= 1) {
        const next = { ...b };
        delete next[id];
        return next;
      }
      return { ...b, [id]: { ...cur, qty: cur.qty - 1 } };
    });
  const remove = (id: string) =>
    setBill((b) => {
      const next = { ...b };
      delete next[id];
      return next;
    });
  const setNote = (id: string, note: string) =>
    setBill((b) => (b[id] ? { ...b, [id]: { ...b[id], note } } : b));
  const clear = () => setBill({});
  const entries = Object.values(bill);
  const count = entries.reduce((s, e) => s + e.qty, 0);
  const total = entries.reduce((s, e) => s + e.qty * e.item.price, 0);
  return { bill, add, dec, remove, setNote, clear, entries, count, total };
}

type BillApi = ReturnType<typeof useBill>;

/* ============================ Header ============================ */

function Wordmark() {
  return (
    <div className="flex items-center gap-3" aria-label="خانچی">
      <div className="text-right leading-none">
        <p className="text-[28px] text-[#17221e]" style={{ fontFamily: "'Abar High:Bold'" }}>
          خانچی
        </p>
        <p
          className="mt-1 text-[6px] tracking-[0.12em] text-[#59615d]"
          style={{ fontFamily: "'Lora:SemiBold'" }}
        >
          KHANCHI RESTAURANT
        </p>
      </div>
      <img src={imgWordDivider} alt="" aria-hidden className="hidden h-[44px] w-px sm:block" />
      <p
        className="hidden text-[29px] text-[#17221e] sm:block"
        style={{ fontFamily: "'Maname:Regular'" }}
      >
        KH
      </p>
    </div>
  );
}

function Header({ view, onView }: { view: 'home' | 'menu'; onView: (v: 'home' | 'menu') => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#f0ebe1] bg-[#fafafa]/92 backdrop-blur-sm">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:h-[92px] lg:px-16">
        <Wordmark />

        <nav aria-label="پیمایش اصلی" className="hidden items-center gap-9 lg:flex" style={{ fontFamily: "'IRANSansX:Medium'" }}>
          {(['home', 'menu'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => onView(v)}
              className={`relative text-[14px] transition-colors ${
                view === v ? 'text-[#10231c]' : 'text-[#647069] hover:text-[#10231c]'
              }`}
            >
              {v === 'home' ? 'خانه' : 'منوی رستوران'}
              {view === v && <span className="absolute -bottom-1.5 right-0 h-[2px] w-full rounded-full bg-[#9a6d32]" />}
            </button>
          ))}
          <span className="text-[14px] text-[#647069]">گالری</span>
          <span className="text-[14px] text-[#647069]">داستان خانچی</span>
        </nav>
      </div>
    </header>
  );
}

/* ============================ Home view ============================ */

function MenuHero({ onBrowse }: { onBrowse: () => void }) {
  return (
    <section className="relative overflow-hidden border-b border-[#f0ebe1] bg-[#f0eff0]">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[28px] h-[calc(100%-56px)] w-[calc(100%-48px)] -translate-x-1/2 overflow-hidden rounded-[2px] border border-[#f0ebe1] bg-[#f6f2ec] lg:top-[36px] lg:h-[calc(100%-72px)] lg:w-[calc(100%-72px)]">
          <GirihPattern className="absolute -right-16 -top-4" />
          <GirihPattern className="absolute -left-20 -top-24 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f6f2ec]/70 to-[#f6f2ec]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f6f2ec]/80" />
        </div>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-8 py-20 lg:px-32 lg:py-32">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Eyebrow label="منوی خانچی" className="justify-center" />
          <h1
            className="mt-6 text-[clamp(40px,7vw,80px)] leading-[1.2] text-[#10231c]"
            style={{ fontFamily: "'Abar High:Bold'" }}
          >
            سفرهٔ خانچی،
            <br />
            بشقاب به بشقاب
          </h1>
          <p
            className="mt-6 max-w-[560px] text-[15px] leading-[2.1] text-[#647069] lg:text-[16px]"
            style={{ fontFamily: "'IRANSansX:Regular'" }}
          >
            از عطر زعفران تا گرمای یک سفرهٔ ایرانی؛ هر بخش از منو با همان دقت و
            احترامی چیده شده که میهمان در قلب سعادت‌آباد تجربه می‌کند.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBrowse}
              className="group inline-flex h-[48px] items-center gap-2 rounded-[1px] border border-[#10231c] bg-[#10231c] px-6 text-[16px] text-[#f8f7f5] transition-colors hover:bg-[#173328]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              مشاهدهٔ منو
              <IconChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedStrip({ onBrowse }: { onBrowse: () => void }) {
  const cards = [
    { kicker: 'STARTERS • SHARE', title: 'پیش‌غذا', desc: 'شروعی آرام با طعم‌های دقیق و گیاهان معطر.', img: imgStarters },
    { kicker: 'SIGNATURE • FIRE', title: 'غذای اصلی', desc: 'جایی که مواد ممتاز و تکنیک حرفه‌ای شاهکار می‌آفرینند.', img: imgMain },
    { kicker: 'APERITIF • NIGHT', title: 'نوشیدنی', desc: 'مجموعه‌ای سنجیده برای همراهی‌ای دلنشین با طعم‌ها.', img: imgDrinks },
  ];
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-16 lg:py-20">
      <div className="mb-10 flex flex-col items-center gap-5 text-center">
        <Eyebrow label="امضای خانچی" className="justify-center" />
        <h2
          className="max-w-[640px] text-[clamp(28px,4vw,48px)] leading-[1.25] text-[#17231c]"
          style={{ fontFamily: "'Abar High:Bold'" }}
        >
          هر بشقاب، یک روایت کامل
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <button
            key={c.title}
            type="button"
            onClick={onBrowse}
            className="group flex flex-col overflow-hidden rounded-[2px] border border-[#eae4d9] bg-[#f0eff0] text-right"
          >
            <div className="h-[210px] overflow-hidden bg-[#e6e2da]">
              <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col items-end gap-2 px-6 pb-5 pt-6">
              <p className="text-[11px] uppercase tracking-wide text-[#8c857a]" style={{ fontFamily: "'Inter:Medium'" }}>
                {c.kicker}
              </p>
              <p className="text-[26px] text-[#252520]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
                {c.title}
              </p>
              <p className="text-[12px] leading-[1.9] text-[#252520]" style={{ fontFamily: "'IRANSansX:Medium'" }}>
                {c.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ============================ Menu card ============================ */

function MenuCard({ item, qty, onAdd, onDec }: { item: MenuItem; qty: number; onAdd: () => void; onDec: () => void }) {
  const inBill = qty > 0;
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[3px] border bg-[#f4f2ee] transition-all duration-300 ${
        item.unavailable
          ? 'border-[#e7e2d7] opacity-70'
          : 'border-[#eae4d9] hover:-translate-y-0.5 hover:border-[#9a6d32]/45 hover:shadow-[0_22px_48px_-30px_rgba(16,35,28,0.6)]'
      }`}
    >
      <div className="relative h-[200px] overflow-hidden bg-[#e6e2da]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ${
            item.unavailable ? 'grayscale' : 'group-hover:scale-105'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10231c]/10 to-transparent" />
        {/* top-start (right in RTL) badges */}
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          {item.popular && (
            <span
              className="inline-flex items-center gap-1 rounded-[1px] bg-[#10231c] px-2 py-[3px] text-[10px] text-[#f8f7f5]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              <IconStar size={10} className="text-[#d8b06a]" />
              محبوب
            </span>
          )}
          {item.diet.map((d) => (
            <DietBadge key={d} diet={d} />
          ))}
        </div>
        {item.unavailable && (
          <div className="absolute inset-0 grid place-items-center bg-[#f6f2ec]/45">
            <span
              className="rounded-[1px] border border-[#10231c]/25 bg-[#fafafa]/90 px-3 py-1 text-[12px] text-[#10231c]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              فعلاً ناموجود
            </span>
          </div>
        )}
        {inBill && !item.unavailable && (
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-[1px] bg-[#9a6d32] px-2 py-[3px] text-[10px] text-[#f8f7f5]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
            <IconCheck size={11} /> در فاکتور
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-end gap-2 px-5 pb-4 pt-5 text-right">
        <h4 className="text-[19px] text-[#17231c]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
          {item.name}
        </h4>
        <p className="text-[10px] uppercase tracking-[0.14em] text-[#a3937a]" style={{ fontFamily: "'Inter:Medium'" }}>
          {item.latin}
        </p>
        <p className="min-h-[36px] text-[12px] leading-[1.85] text-[#6e706a]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
          {item.description}
        </p>

        <div className="mt-2 flex w-full items-center justify-between gap-3 border-t border-[#ebe5da] pt-3">
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] text-[#10231c]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
              {formatPrice(item.price)}
            </span>
            <span className="text-[10px] text-[#9a6d32]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
              تومان
            </span>
          </div>

          {item.unavailable ? (
            <span className="text-[12px] text-[#a3937a]" style={{ fontFamily: "'IRANSansX:Medium'" }}>
              —
            </span>
          ) : inBill ? (
            <div className="inline-flex items-center gap-2 rounded-[1px] border border-[#10231c] bg-[#10231c] text-[#f8f7f5]">
              <button type="button" onClick={onAdd} aria-label="افزودن" className="grid h-[36px] w-[34px] place-items-center hover:text-[#d8b06a]">
                <IconPlus size={15} />
              </button>
              <span className="min-w-[16px] text-center text-[14px]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
                {qty.toLocaleString('fa-IR')}
              </span>
              <button type="button" onClick={onDec} aria-label="کاهش" className="grid h-[36px] w-[34px] place-items-center hover:text-[#d8b06a]">
                <IconMinus size={15} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex h-[36px] items-center gap-1.5 rounded-[1px] border border-[#10231c] px-3 text-[13px] text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              <IconPlus size={14} />
              افزودن به فاکتور
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ============================ Category rail ============================ */

function CategoryRail({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const pills = [{ id: 'all', title: 'همه', icon: IconMenuBook }, ...categories.map((c) => ({ id: c.id, title: c.title, icon: categoryIcon[c.id] }))];
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0" style={{ scrollbarWidth: 'none' }}>
      {pills.map((p) => {
        const isActive = active === p.id;
        const Icon = p.icon;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-[1px] border px-4 py-2 text-[14px] transition-all duration-200 ${
              isActive
                ? 'border-[#10231c] bg-[#10231c] text-[#f8f7f5]'
                : 'border-[#e2ddd2] bg-[#f6f2ec]/50 text-[#647069] hover:border-[#9a6d32] hover:text-[#10231c]'
            }`}
            style={{ fontFamily: "'IRANSansX:Medium'" }}
          >
            <Icon size={17} className={isActive ? 'text-[#d8b06a]' : 'text-[#9a6d32]'} />
            {p.title}
          </button>
        );
      })}
    </div>
  );
}

/* ============================ Menu view ============================ */

function MenuView({ bill, onGarson }: { bill: BillApi; onGarson: () => void }) {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');

  const visibleSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => active === 'all' || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (it) => !q || it.name.includes(query.trim()) || it.latin.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query]);

  const resultCount = visibleSections.reduce((s, c) => s + c.items.length, 0);

  return (
    <section className="bg-[#fafafa]">
      {/* Category + search bar */}
      <div className="sticky top-[76px] z-30 border-b border-[#f0ebe1] bg-[#fafafa]/95 backdrop-blur-sm lg:top-[92px]">
        <div className="mx-auto max-w-[1440px] px-5 py-4 lg:px-16">
          <div className="flex flex-col gap-3 lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-[280px]">
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9a6d32]">
                <IconSearch size={17} />
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی غذا…"
                className="h-[44px] w-full rounded-[1px] border border-[#e2ddd2] bg-[#f6f2ec]/50 pe-4 ps-11 text-[14px] text-[#10231c] outline-none transition-colors placeholder:text-[#9a938a] focus:border-[#9a6d32]"
                style={{ fontFamily: "'IRANSansX:Regular'" }}
              />
            </div>
            <div className="min-w-0 lg:flex-1">
              <CategoryRail active={active} onSelect={setActive} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: menu grid + sticky bill panel. Mobile: single column. */}
      <div className="mx-auto max-w-[1440px] px-5 pb-28 pt-10 lg:px-16 lg:pb-20 lg:pt-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_368px] lg:items-start lg:gap-10">
          {/* Menu column */}
          <div>
            {resultCount === 0 ? (
              <div className="flex flex-col items-end gap-4 py-24 text-right">
                <p className="text-[24px] text-[#17231c]" style={{ fontFamily: "'Abar High:Bold'" }}>
                  نتیجه‌ای یافت نشد
                </p>
                <p className="text-[14px] text-[#647069]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
                  عبارت دیگری جستجو کنید یا دستهٔ دیگری را انتخاب کنید.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setActive('all');
                  }}
                  className="rounded-[1px] border border-[#10231c] px-5 py-2.5 text-[14px] text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]"
                  style={{ fontFamily: "'IRANSansX:DemiBold'" }}
                >
                  نمایش همهٔ غذاها
                </button>
              </div>
            ) : (
              visibleSections.map((cat, i) => (
                <div key={cat.id} className={i !== 0 ? 'mt-16' : ''}>
                  <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#ece7dc] pb-5 text-right">
                    <p className="hidden text-[13px] text-[#647069] sm:block" style={{ fontFamily: "'IRANSansX:Regular'" }}>
                      {cat.note}
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="text-[clamp(26px,3.4vw,40px)] leading-[1.15] text-[#17231c]" style={{ fontFamily: "'Abar High:Bold'" }}>
                          {cat.title}
                        </h3>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#a87b3d]" style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}>
                          {cat.kicker}
                        </p>
                      </div>
                      <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[2px] border border-[#e6ddce] bg-[#f6f2ec] text-[#9a6d32]">
                        {categoryIcon[cat.id]?.({ size: 24 })}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {cat.items.map((item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        qty={bill.bill[item.id]?.qty ?? 0}
                        onAdd={() => bill.add(item)}
                        onDec={() => bill.dec(item.id)}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop sticky bill panel */}
          <aside className="hidden lg:block">
            <div className="sticky top-[168px] overflow-hidden rounded-[3px] border border-[#eae4d9] bg-[#f4f2ee] shadow-[0_24px_60px_-40px_rgba(16,35,28,0.55)]">
              <BillContents bill={bill} onGarson={onGarson} variant="panel" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================ Bill contents (shared) ============================ */

function BillContents({ bill, onGarson, variant }: { bill: BillApi; onGarson: () => void; variant: 'panel' | 'sheet' }) {
  const scrollCls = variant === 'sheet' ? 'max-h-[46vh]' : 'max-h-[calc(100vh-360px)]';
  return (
    <div className="flex flex-col">
      {/* head */}
      <div className="flex items-center justify-between border-b border-[#e7e0d3] bg-[#f6f2ec] px-5 py-4">
        <div className="flex items-center gap-2.5 text-right">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-[2px] border border-[#e0d6c4] bg-[#fafafa] text-[#9a6d32]">
            <IconReceipt size={19} />
          </span>
          <div>
            <p className="text-[19px] text-[#17231c]" style={{ fontFamily: "'Abar High:Bold'" }}>
              فاکتور شما
            </p>
            <p className="text-[10px] tracking-[0.16em] text-[#9a7444]" style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}>
              ESTIMATED BILL
            </p>
          </div>
        </div>
        {bill.count > 0 && (
          <span className="grid h-[26px] min-w-[26px] place-items-center rounded-full bg-[#10231c] px-1.5 text-[12px] text-[#f8f7f5]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
            {bill.count.toLocaleString('fa-IR')}
          </span>
        )}
      </div>

      {bill.entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 px-8 py-16 text-center">
          <IconReceipt size={38} className="text-[#d9d2c4]" />
          <p className="text-[17px] text-[#17231c]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
            فاکتور خالی است
          </p>
          <p className="text-[13px] leading-[1.9] text-[#647069]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
            از منو، غذاهای دلخواه را با «افزودن به فاکتور» انتخاب کنید تا فهرست‌تان برای گارسون آماده شود.
          </p>
        </div>
      ) : (
        <>
          <ul className={`flex flex-col divide-y divide-[#ece7dc] overflow-y-auto ${scrollCls}`}>
            {bill.entries.map(({ item, qty, note }) => (
              <li key={item.id} className="px-4 py-4">
                <div className="flex gap-3">
                  <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-[2px] bg-[#e6e2da]">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-[15px] leading-tight text-[#17231c]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
                        {item.name}
                      </h5>
                      <button type="button" onClick={() => bill.remove(item.id)} className="mt-0.5 text-[#a3937a] transition-colors hover:text-[#9d3b28]" aria-label="حذف">
                        <IconTrash size={15} />
                      </button>
                    </div>
                    <p className="mt-0.5 text-[11px] text-[#8c857a]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
                      {formatPrice(item.price)} تومان / واحد
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[15px] text-[#10231c]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
                        {formatPrice(item.price * qty)}
                        <span className="mr-1 text-[10px] text-[#9a6d32]" style={{ fontFamily: "'IRANSansX:Regular'" }}>تومان</span>
                      </span>
                      <div className="inline-flex items-center overflow-hidden rounded-[1px] border border-[#d9d2c4] bg-[#fafafa]">
                        <button type="button" onClick={() => bill.add(item)} className="grid h-[28px] w-[28px] place-items-center text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]" aria-label="افزودن">
                          <IconPlus size={13} />
                        </button>
                        <span className="min-w-[26px] text-center text-[13px]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
                          {qty.toLocaleString('fa-IR')}
                        </span>
                        <button type="button" onClick={() => bill.dec(item.id)} className="grid h-[28px] w-[28px] place-items-center text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]" aria-label="کاهش">
                          <IconMinus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-2 rounded-[1px] border border-[#e7e0d3] bg-[#faf8f4] px-2.5 py-1.5">
                  <IconNote size={14} className="shrink-0 text-[#9a6d32]" />
                  <input
                    value={note}
                    onChange={(e) => bill.setNote(item.id, e.target.value)}
                    placeholder="یادداشت (مثلاً بدون پیاز)…"
                    className="w-full bg-transparent text-right text-[12px] text-[#10231c] outline-none placeholder:text-[#a3937a]"
                    style={{ fontFamily: "'IRANSansX:Regular'" }}
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* summary — separated from the list */}
          <div className="border-t-2 border-[#e0d6c4] bg-[#f6f2ec] px-5 py-4">
            <div className="flex items-center justify-between text-[13px] text-[#647069]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
              <span>{bill.count.toLocaleString('fa-IR')} مورد</span>
              <span>برآورد مجموع</span>
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-[26px] text-[#10231c]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
                {formatPrice(bill.total)}
                <span className="mr-1 text-[12px] text-[#9a6d32]" style={{ fontFamily: "'IRANSansX:Regular'" }}>تومان</span>
              </span>
            </div>

            <button
              type="button"
              onClick={onGarson}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[1px] bg-[#10231c] py-3.5 text-[15px] text-[#f8f7f5] transition-colors hover:bg-[#173328]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              <IconMenuBook size={18} />
              نمایش به گارسون
            </button>
            <button
              type="button"
              onClick={bill.clear}
              className="mt-2 flex w-full items-center justify-center gap-1.5 py-1.5 text-[12px] text-[#9a938a] transition-colors hover:text-[#9d3b28]"
              style={{ fontFamily: "'IRANSansX:Medium'" }}
            >
              <IconTrash size={13} />
              پاک کردن فاکتور
            </button>
            <p className="mt-2 text-center text-[11px] leading-[1.7] text-[#8c857a]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
              این فقط یک فاکتور تخمینی است؛ سفارش ثبت نشده و پرداختی انجام نگرفته است.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

/* ============================ Mobile bill sheet ============================ */

function BillSheet({ bill, open, onClose, onGarson }: { bill: BillApi; open: boolean; onClose: () => void; onGarson: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-[#10231c]/45 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 flex max-h-[92vh] flex-col overflow-hidden rounded-t-[18px] border-t border-[#e2ddd2] bg-[#fafafa] shadow-[0_-24px_60px_-24px_rgba(16,35,28,0.6)]">
        <div className="flex items-center justify-between px-5 pb-1 pt-3">
          <div className="mx-auto h-1 w-12 rounded-full bg-[#d9d2c4]" />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#e2ddd2] bg-[#fafafa] text-[#647069]"
          aria-label="بستن"
        >
          <IconClose size={18} />
        </button>
        <div className="overflow-y-auto pb-[env(safe-area-inset-bottom)]">
          <BillContents bill={bill} onGarson={onGarson} variant="sheet" />
        </div>
      </div>
    </div>
  );
}

/* ============================ Garson view ============================ */

function GarsonView({ bill, onClose }: { bill: BillApi; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#f6f2ec]">
      <div className="mx-auto max-w-[720px] px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-right">
            <p className="text-[28px] text-[#10231b]" style={{ fontFamily: "'Abar High:Bold'" }}>
              سفارش من
            </p>
            <p className="text-[11px] tracking-[0.2em] text-[#9a7444]" style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}>
              FOR THE WAITER · ESTIMATE
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-[1px] border border-[#d9d2c4] px-4 py-2 text-[14px] text-[#10231c] transition-colors hover:border-[#9a6d32]"
            style={{ fontFamily: "'IRANSansX:Medium'" }}
          >
            <IconChevronLeft size={16} className="rotate-180" />
            بازگشت
          </button>
        </div>

        <div className="rounded-[2px] border border-[#e4ddd0] bg-[#fafafa]">
          {bill.entries.map(({ item, qty, note }, i) => (
            <div key={item.id} className={`flex items-start justify-between gap-4 px-6 py-5 ${i !== 0 ? 'border-t border-[#ece7dc]' : ''}`}>
              <div className="flex-1 text-right">
                <p className="text-[26px] leading-[1.4] text-[#17231c]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
                  {item.name}
                </p>
                {note && (
                  <p className="mt-1 text-[15px] text-[#9d3b28]" style={{ fontFamily: "'IRANSansX:Medium'" }}>
                    یادداشت: {note}
                  </p>
                )}
                <p className="mt-1 text-[14px] text-[#647069]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
                  {formatPrice(item.price * qty)} تومان
                </p>
              </div>
              <span
                className="grid h-[52px] min-w-[52px] place-items-center rounded-[2px] bg-[#10231c] text-[26px] text-[#f8f7f5]"
                style={{ fontFamily: "'IRANSansX:Bold'" }}
              >
                {qty.toLocaleString('fa-IR')}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-[2px] bg-[#10231c] px-6 py-5 text-[#f8f7f5]">
          <div className="text-right">
            <p className="text-[16px]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
              برآورد مجموع
            </p>
            <p className="text-[12px] text-[#c9d4cd]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
              {bill.count.toLocaleString('fa-IR')} مورد
            </p>
          </div>
          <span className="text-[30px]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
            {formatPrice(bill.total)} تومان
          </span>
        </div>

        <div className="mt-6 rounded-[2px] border border-[#e0c9a3] bg-[#f8f1e6] px-5 py-4 text-right">
          <p className="text-[14px] leading-[2] text-[#7a5528]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
            این فهرست فقط برای هماهنگی با گارسون است. سفارش هنوز ثبت نشده، هیچ پرداختی
            انجام نگرفته و مبلغ نهایی توسط رستوران محاسبه می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================ Footer + Mobile nav ============================ */

function Footer() {
  const details = [
    { label: 'اینستاگرام', values: ['@khanchi.restaurant'] },
    { label: 'تماس', values: ['۰۲۱-۲۲۳۸ ۹۸۷۳', '۰۹۰۳ ۲۸۰ ۵۱۴۷'] },
    { label: 'ساعات فعالیت', values: ['همه‌روزه ۱۱:۳۰ تا ۲۴:۰۰'] },
    { label: 'موقعیت', values: ['سعادت‌آباد، تهران'] },
  ];
  return (
    <footer className="bg-[#f8f6f1] pb-24 lg:pb-0">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 pb-8 pt-12 text-center">
        <p className="text-[34px] text-[#10231b]" style={{ fontFamily: "'Abar High:Bold'" }}>
          خانچی
        </p>
        <p className="max-w-[760px] text-[clamp(26px,4vw,42px)] leading-[1.25] text-[#10231b]" style={{ fontFamily: "'Abar High:Bold'" }}>
          اصالت ایرانی، برای لحظه‌های امروزی
        </p>
        <p className="max-w-[560px] text-[14px] text-[#817c70]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
          خانچی — رستوران اصیل ایرانی در سعادت‌آباد تهران
        </p>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <img src={imgFooterRule} alt="" aria-hidden className="h-px w-full" />
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        {details.map((d) => (
          <div key={d.label} className="flex flex-col items-end gap-3 text-right">
            <p className="text-[12px] text-[#9a7444]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
              {d.label}
            </p>
            {d.values.map((v) => (
              <p key={v} className="text-[13px] text-[#10231b]" style={{ fontFamily: "'IRANSansX:Regular'" }} dir={/[A-Za-z@]/.test(v) ? 'ltr' : 'rtl'}>
                {v}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <img src={imgFooterRule} alt="" aria-hidden className="h-px w-full" />
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 text-[#9a7444] lg:px-16">
        <p className="text-[14px]" style={{ fontFamily: "'Abar High:Regular'" }}>
          خانچی
        </p>
        <p className="text-[11px] tracking-wide" style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}>
          AUTHENTIC PERSIAN CUISINE
        </p>
      </div>
    </footer>
  );
}

function BottomNav({ view, onView }: { view: 'home' | 'menu'; onView: (v: 'home' | 'menu') => void }) {
  const items = [
    { id: 'home' as const, label: 'خانه', Icon: IconHome },
    { id: 'menu' as const, label: 'منو', Icon: IconMenuBook },
  ];
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#f0ebe1] bg-[#fafafa]/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-[440px] items-stretch">
        {items.map(({ id, label, Icon }) => {
          const active = view === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onView(id)}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${active ? 'text-[#9a6d32]' : 'text-[#8c857a]'}`}
            >
              <Icon size={22} />
              <span className="text-[11px]" style={{ fontFamily: "'IRANSansX:Medium'" }}>
                {label}
              </span>
              <span className={`h-[2px] w-6 rounded-full transition-colors ${active ? 'bg-[#9a6d32]' : 'bg-transparent'}`} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ============================ App ============================ */

export default function MenuExperience() {
  const router = useRouter();
  const bill = useBill();
  const [view, setView] = useState<'home' | 'menu'>('menu');
  const [billOpen, setBillOpen] = useState(false);
  const [garsonOpen, setGarsonOpen] = useState(false);

  const goto = (v: 'home' | 'menu') => {
    if (v === 'home') {
      router.push('/');
      return;
    }
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGarson = () => {
    setBillOpen(false);
    setGarsonOpen(true);
  };

  return (
    <div dir="rtl" className="menu-page min-h-screen bg-[#fafafa] text-[#10231c]">
      <Header view={view} onView={goto} />

      {view === 'home' ? (
        <>
          <MenuHero onBrowse={() => goto('menu')} />
          <FeaturedStrip onBrowse={() => goto('menu')} />
        </>
      ) : (
        <MenuView bill={bill} onGarson={openGarson} />
      )}

      <Footer />

      {/* Mobile sticky bill FAB — sits above the bottom nav, never overlapping */}
      {bill.count > 0 && (
        <button
          type="button"
          onClick={() => setBillOpen(true)}
          className="fixed inset-x-4 z-40 flex items-center justify-between rounded-[2px] bg-[#10231c] px-5 py-3.5 text-[#f8f7f5] shadow-[0_18px_40px_-18px_rgba(16,35,28,0.7)] lg:hidden"
          style={{ bottom: 'calc(env(safe-area-inset-bottom) + 68px)' }}
        >
          <span className="flex items-center gap-2 text-[15px]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
            <span className="grid h-[22px] min-w-[22px] place-items-center rounded-full bg-[#9a6d32] px-1 text-[12px]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
              {bill.count.toLocaleString('fa-IR')}
            </span>
            مشاهده فاکتور
          </span>
          <span className="text-[15px]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
            {formatPrice(bill.total)} تومان
          </span>
        </button>
      )}

      <BottomNav view={view} onView={goto} />

      <BillSheet bill={bill} open={billOpen} onClose={() => setBillOpen(false)} onGarson={openGarson} />
      {garsonOpen && <GarsonView bill={bill} onClose={() => setGarsonOpen(false)} />}
    </div>
  );
}

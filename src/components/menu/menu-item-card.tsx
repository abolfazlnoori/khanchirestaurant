import type { MenuItem } from "./menu-data";
import { formatPrice } from "./menu-data";
import { DietBadge } from "./menu-primitives";
import {
  IconCartPlus,
  IconCheck,
  IconMinus,
  IconPlus,
  IconStar,
} from "./menu-icons";
import { ProductVisual } from "./product-visual";

type MenuItemCardProps = {
  item: MenuItem;
  qty: number;
  onAdd: () => void;
  onDec: () => void;
  motionIndex?: number;
};

export function MenuItemCard({ item, qty, onAdd, onDec, motionIndex = 0 }: MenuItemCardProps) {
  const inBill = qty > 0;

  return (
    <article
      data-motion="reveal"
      data-motion-delay={String((motionIndex % 6) * 40)}
      className={`group relative flex flex-col overflow-hidden rounded-[3px] border bg-[#f4f2ee] transition-all duration-300 ${
        item.unavailable
          ? "border-[#e7e2d7] opacity-70"
          : "border-[#eae4d9] hover:-translate-y-0.5 hover:border-[#9a6d32]/45 hover:shadow-[0_22px_48px_-30px_rgba(16,35,28,0.6)]"
      }`}
    >
      <div className="relative h-[200px] overflow-hidden bg-[#e6e2da]">
        <ProductVisual
          product={item}
          sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) 50vw, 33vw"
          className={`transition-transform duration-700 ${
            item.unavailable ? "grayscale" : "group-hover:scale-[1.015]"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10231c]/10 to-transparent" />
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          {item.popular && (
            <span
              className="inline-flex items-center gap-1 rounded-[1px] bg-[#10231c] px-2 py-[3px] text-[10px] text-[#f8f7f5]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              محبوب
              <IconStar size={10} className="text-[#d8b06a]" />
            </span>
          )}
          {item.diet.map((diet) => <DietBadge key={diet} diet={diet} />)}
          {item.needsReview && (
            <span
              className="rounded-[1px] border border-[#d8b06a]/30 bg-[#f6f2ec]/90 px-2 py-[3px] text-[9px] text-[#7a5528]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              نام نیازمند بررسی
            </span>
          )}
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
          <div className="khanchi-quantity-pop absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-[1px] bg-[#9a6d32] px-2 py-[3px] text-[10px] text-[#f8f7f5]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
            در فاکتور
            <IconCheck size={11} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-end gap-2 px-5 pb-4 pt-5 text-right">
        <h3 className="text-[19px] text-[#17231c]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
          {item.name}
        </h3>
        <p className="min-h-[36px] text-[12px] leading-[1.85] text-[#6e706a]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
          {item.description || "توضیحات تکمیلی به‌زودی درج می‌شود."}
        </p>

        <div className="mt-2 flex w-full items-center justify-between gap-3 border-t border-[#ebe5da] pt-3 max-[900px]:mt-4 max-[900px]:pt-4">
          <div className="flex items-baseline gap-1">
            {item.price === null ? (
              <span
                className="text-[12px] text-[#8c857a]"
                style={{ fontFamily: "'IRANSansX:Medium'" }}
              >
                قیمت درج نشده
              </span>
            ) : (
              <>
                <span className="text-[20px] text-[#10231c]" style={{ fontFamily: "'IRANSansX:DemiBold'" }}>
                  {formatPrice(item.price)}
                </span>
                <span className="text-[10px] text-[#9a6d32]" style={{ fontFamily: "'IRANSansX:Regular'" }}>
                  تومان
                </span>
              </>
            )}
          </div>

          {item.unavailable ? (
            <span className="text-[12px] text-[#a3937a]" style={{ fontFamily: "'IRANSansX:Medium'" }}>—</span>
          ) : inBill ? (
            <div className="inline-flex items-center gap-2 rounded-[1px] border border-[#10231c] bg-[#10231c] text-[#f8f7f5]">
              <button type="button" onClick={onAdd} aria-label="افزودن" className="grid h-[36px] w-[34px] place-items-center hover:text-[#d8b06a]">
                <IconPlus size={15} />
              </button>
              <span key={qty} className="khanchi-quantity-pop min-w-[16px] text-center text-[14px]" style={{ fontFamily: "'IRANSansX:Bold'" }}>
                {qty.toLocaleString("fa-IR")}
              </span>
              <button type="button" onClick={onDec} aria-label="کاهش" className="grid h-[36px] w-[34px] place-items-center hover:text-[#d8b06a]">
                <IconMinus size={15} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onAdd}
              className="grid size-9 shrink-0 place-items-center rounded-[1px] border border-[#10231c] text-[#10231c] transition duration-200 hover:-translate-y-0.5 hover:bg-[#10231c] hover:text-[#f8f7f5] active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6d32]"
              aria-label={`افزودن ${item.name} به فاکتور`}
              title="افزودن به فاکتور"
            >
              <IconCartPlus size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

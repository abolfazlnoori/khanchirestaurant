"use client";

import { formatPrice } from "./menu-data";
import {
  IconChevronLeft,
  IconClose,
  IconMenuBook,
  IconMinus,
  IconNote,
  IconPlus,
  IconReceipt,
  IconTrash,
} from "./menu-icons";
import { ProductVisual } from "./product-visual";
import type { BillApi } from "./use-bill";

export function BillContents({
  bill,
  onGarson,
  variant,
}: {
  bill: BillApi;
  onGarson: () => void;
  variant: "panel" | "sheet";
}) {
  const scrollClass =
    variant === "sheet" ? "max-h-[46vh]" : "max-h-[calc(100vh-360px)]";

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-[#e7e0d3] bg-[#f6f2ec] px-5 py-4">
        <div className="flex items-center gap-2.5 text-right">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-[2px] border border-[#e0d6c4] bg-[#fafafa] text-[#9a6d32]">
            <IconReceipt size={19} />
          </span>
          <div>
            <p
              className="text-[19px] text-[#17231c]"
              style={{ fontFamily: "'Abar High:Bold'" }}
            >
              فاکتور شما
            </p>
            <p
              className="text-[10px] tracking-[0.16em] text-[#9a7444]"
              style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}
            >
              ESTIMATED BILL
            </p>
          </div>
        </div>
        {bill.count > 0 && (
          <span
            className="grid h-[26px] min-w-[26px] place-items-center rounded-full bg-[#10231c] px-1.5 text-[12px] text-[#f8f7f5]"
            style={{ fontFamily: "'IRANSansX:Bold'" }}
          >
            {bill.count.toLocaleString("fa-IR")}
          </span>
        )}
      </div>

      {bill.entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 px-8 py-16 text-center">
          <IconReceipt size={38} className="text-[#d9d2c4]" />
          <p
            className="text-[17px] text-[#17231c]"
            style={{ fontFamily: "'Abar High:SemiBold'" }}
          >
            فاکتور خالی است
          </p>
          <p
            className="text-[13px] leading-[1.9] text-[#647069]"
            style={{ fontFamily: "'IRANSansX:Regular'" }}
          >
            از منو، غذاهای دلخواه را با «افزودن به فاکتور» انتخاب کنید تا
            فهرست‌تان برای گارسون آماده شود.
          </p>
        </div>
      ) : (
        <>
          <ul
            className={`flex flex-col divide-y divide-[#ece7dc] overflow-y-auto ${scrollClass}`}
          >
            {bill.entries.map(({ item, qty, note }) => (
              <li key={item.id} className="px-4 py-4">
                <div className="flex gap-3">
                  <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-[2px]">
                    <ProductVisual product={item} sizes="58px" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="flex items-start justify-between gap-2">
                      <h5
                        className="text-[15px] leading-tight text-[#17231c]"
                        style={{ fontFamily: "'Abar High:SemiBold'" }}
                      >
                        {item.name}
                      </h5>
                      <button
                        type="button"
                        onClick={() => bill.remove(item.id)}
                        className="mt-0.5 text-[#a3937a] transition-colors hover:text-[#9d3b28]"
                        aria-label="حذف"
                      >
                        <IconTrash size={15} />
                      </button>
                    </div>
                    <p
                      className="mt-0.5 text-[11px] text-[#8c857a]"
                      style={{ fontFamily: "'IRANSansX:Regular'" }}
                    >
                      {item.price === null
                        ? "قیمت واحد درج نشده"
                        : `${formatPrice(item.price)} تومان / واحد`}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span
                        className="text-[15px] text-[#10231c]"
                        style={{ fontFamily: "'IRANSansX:DemiBold'" }}
                      >
                        {item.price === null ? (
                          "نیازمند استعلام"
                        ) : (
                          <>
                            {formatPrice(item.price * qty)}
                            <span
                              className="mr-1 text-[10px] text-[#9a6d32]"
                              style={{ fontFamily: "'IRANSansX:Regular'" }}
                            >
                              تومان
                            </span>
                          </>
                        )}
                      </span>
                      <div className="inline-flex items-center overflow-hidden rounded-[1px] border border-[#d9d2c4] bg-[#fafafa]">
                        <button
                          type="button"
                          onClick={() => bill.add(item)}
                          className="grid h-[28px] w-[28px] place-items-center text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]"
                          aria-label="افزودن"
                        >
                          <IconPlus size={13} />
                        </button>
                        <span
                          className="min-w-[26px] text-center text-[13px]"
                          style={{ fontFamily: "'IRANSansX:Bold'" }}
                        >
                          {qty.toLocaleString("fa-IR")}
                        </span>
                        <button
                          type="button"
                          onClick={() => bill.dec(item.id)}
                          className="grid h-[28px] w-[28px] place-items-center text-[#10231c] transition-colors hover:bg-[#10231c] hover:text-[#f8f7f5]"
                          aria-label="کاهش"
                        >
                          <IconMinus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-2 rounded-[1px] border border-[#e7e0d3] bg-[#faf8f4] px-2.5 py-1.5">
                  <input
                    value={note}
                    onChange={(event) => bill.setNote(item.id, event.target.value)}
                    placeholder="یادداشت (مثلاً بدون پیاز)…"
                    className="w-full bg-transparent text-right text-[12px] text-[#10231c] outline-none placeholder:text-[#a3937a]"
                    style={{ fontFamily: "'IRANSansX:Regular'" }}
                  />
                  <IconNote size={14} className="shrink-0 text-[#9a6d32]" />
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t-2 border-[#e0d6c4] bg-[#f6f2ec] px-5 py-4">
            <div
              className="flex items-center justify-between text-[13px] text-[#647069]"
              style={{ fontFamily: "'IRANSansX:Regular'" }}
            >
              <span>{bill.count.toLocaleString("fa-IR")} مورد</span>
              <span>برآورد مجموع</span>
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span
                className="text-[26px] text-[#10231c]"
                style={{ fontFamily: "'IRANSansX:Bold'" }}
              >
                {bill.hasMissingPrices ? (
                  "پس از استعلام"
                ) : (
                  <>
                    {formatPrice(bill.total)}
                    <span
                      className="mr-1 text-[12px] text-[#9a6d32]"
                      style={{ fontFamily: "'IRANSansX:Regular'" }}
                    >
                      تومان
                    </span>
                  </>
                )}
              </span>
            </div>

            <button
              type="button"
              onClick={onGarson}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[1px] bg-[#10231c] py-3.5 text-[15px] text-[#f8f7f5] transition-colors hover:bg-[#173328]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              نمایش به گارسون
              <IconMenuBook size={18} />
            </button>
            <button
              type="button"
              onClick={bill.clear}
              className="mt-2 flex w-full items-center justify-center gap-1.5 py-1.5 text-[12px] text-[#9a938a] transition-colors hover:text-[#9d3b28]"
              style={{ fontFamily: "'IRANSansX:Medium'" }}
            >
              پاک کردن فاکتور
              <IconTrash size={13} />
            </button>
            <p
              className="mt-2 text-center text-[11px] leading-[1.7] text-[#8c857a]"
              style={{ fontFamily: "'IRANSansX:Regular'" }}
            >
              این فقط یک فاکتور تخمینی است؛ سفارش ثبت نشده و پرداختی انجام
              نگرفته است.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function BillSheet({
  bill,
  open,
  onClose,
  onGarson,
}: {
  bill: BillApi;
  open: boolean;
  onClose: () => void;
  onGarson: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-[#10231c]/45 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="absolute inset-x-0 flex flex-col overflow-hidden rounded-t-[18px] border-t border-[#e2ddd2] bg-[#fafafa] shadow-[0_-24px_60px_-24px_rgba(16,35,28,0.6)]"
        style={{
          bottom: "calc(66px + env(safe-area-inset-bottom))",
          maxHeight:
            "calc(100dvh - 66px - env(safe-area-inset-bottom) - 16px)",
        }}
      >
        <div className="flex items-center justify-between px-5 pb-1 pt-3">
          <div className="mx-auto h-1 w-12 rounded-full bg-[#d9d2c4]" />
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <BillContents bill={bill} onGarson={onGarson} variant="sheet" />
        </div>
      </div>
    </div>
  );
}

export function GarsonView({ bill, onClose }: { bill: BillApi; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#f6f2ec]">
      <div className="mx-auto max-w-[720px] px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-right">
            <p
              className="text-[28px] text-[#10231b]"
              style={{ fontFamily: "'Abar High:Bold'" }}
            >
              سفارش من
            </p>
            <p
              className="text-[11px] tracking-[0.2em] text-[#9a7444]"
              style={{ fontFamily: "'Cormorant Garamond:SemiBold'" }}
            >
              FOR THE WAITER · ESTIMATE
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-[1px] border border-[#d9d2c4] px-4 py-2 text-[14px] text-[#10231c] transition-colors hover:border-[#9a6d32]"
            style={{ fontFamily: "'IRANSansX:Medium'" }}
          >
            بازگشت
            <IconChevronLeft size={16} className="rotate-180" />
          </button>
        </div>

        <div className="rounded-[2px] border border-[#e4ddd0] bg-[#fafafa]">
          {bill.entries.map(({ item, qty, note }, index) => (
            <div
              key={item.id}
              className={`flex items-start justify-between gap-4 px-6 py-5 ${
                index !== 0 ? "border-t border-[#ece7dc]" : ""
              }`}
            >
              <div className="flex-1 text-right">
                <p
                  className="text-[26px] leading-[1.4] text-[#17231c]"
                  style={{ fontFamily: "'Abar High:SemiBold'" }}
                >
                  {item.name}
                </p>
                {note && (
                  <p
                    className="mt-1 text-[15px] text-[#9d3b28]"
                    style={{ fontFamily: "'IRANSansX:Medium'" }}
                  >
                    یادداشت: {note}
                  </p>
                )}
                <p
                  className="mt-1 text-[14px] text-[#647069]"
                  style={{ fontFamily: "'IRANSansX:Regular'" }}
                >
                  {item.price === null
                    ? "قیمت درج نشده"
                    : `${formatPrice(item.price * qty)} تومان`}
                </p>
              </div>
              <span
                className="grid h-[52px] min-w-[52px] place-items-center rounded-[2px] bg-[#10231c] text-[26px] text-[#f8f7f5]"
                style={{ fontFamily: "'IRANSansX:Bold'" }}
              >
                {qty.toLocaleString("fa-IR")}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-[2px] bg-[#10231c] px-6 py-5 text-[#f8f7f5]">
          <div className="text-right">
            <p
              className="text-[16px]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              برآورد مجموع
            </p>
            <p
              className="text-[12px] text-[#c9d4cd]"
              style={{ fontFamily: "'IRANSansX:Regular'" }}
            >
              {bill.count.toLocaleString("fa-IR")} مورد
            </p>
          </div>
          <span
            className="text-[30px]"
            style={{ fontFamily: "'IRANSansX:Bold'" }}
          >
            {bill.hasMissingPrices
              ? "پس از استعلام"
              : `${formatPrice(bill.total)} تومان`}
          </span>
        </div>

        <div className="mt-6 rounded-[2px] border border-[#e0c9a3] bg-[#f8f1e6] px-5 py-4 text-right">
          <p
            className="text-[14px] leading-[2] text-[#7a5528]"
            style={{ fontFamily: "'IRANSansX:Regular'" }}
          >
            این فهرست فقط برای هماهنگی با گارسون است. سفارش هنوز ثبت نشده، هیچ
            پرداختی انجام نگرفته و مبلغ نهایی توسط رستوران محاسبه می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}

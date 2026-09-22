"use client";

import { useEffect, useState } from "react";
import { allItems, type MenuItem } from "./menu-data";

type BillEntry = {
  item: MenuItem;
  qty: number;
  note: string;
};

type Bill = Record<string, BillEntry>;

type StoredBillEntry = {
  id: string;
  qty: number;
  note: string;
};

const BILL_STORAGE_KEY = "khanchi:bill:v1";
const menuItemsById = new Map(allItems.map((item) => [item.id, item]));

function restoreBill(): Bill {
  try {
    const storedValue = window.localStorage.getItem(BILL_STORAGE_KEY);
    if (!storedValue) return {};

    const storedEntries: unknown = JSON.parse(storedValue);
    if (!Array.isArray(storedEntries)) return {};

    return storedEntries.reduce<Bill>((restoredBill, storedEntry) => {
      if (
        typeof storedEntry !== "object" ||
        storedEntry === null ||
        !("id" in storedEntry) ||
        !("qty" in storedEntry) ||
        !("note" in storedEntry)
      ) {
        return restoredBill;
      }

      const { id, qty, note } = storedEntry as Partial<StoredBillEntry>;
      const item = typeof id === "string" ? menuItemsById.get(id) : undefined;

      if (
        !item ||
        typeof qty !== "number" ||
        !Number.isSafeInteger(qty) ||
        qty <= 0 ||
        typeof note !== "string"
      ) {
        return restoredBill;
      }

      restoredBill[item.id] = { item, qty, note };
      return restoredBill;
    }, {});
  } catch {
    return {};
  }
}

function persistBill(bill: Bill) {
  try {
    const storedEntries: StoredBillEntry[] = Object.values(bill).map(
      ({ item, qty, note }) => ({ id: item.id, qty, note }),
    );

    if (storedEntries.length === 0) {
      window.localStorage.removeItem(BILL_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(BILL_STORAGE_KEY, JSON.stringify(storedEntries));
  } catch {
    // Storage can be unavailable or full; the in-memory bill should still work.
  }
}

export function useBill() {
  const [bill, setBill] = useState<Bill>({});
  const [hasRestoredBill, setHasRestoredBill] = useState(false);

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      setBill(restoreBill());
      setHasRestoredBill(true);
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (!hasRestoredBill) return;
    persistBill(bill);
  }, [bill, hasRestoredBill]);

  const add = (item: MenuItem) =>
    setBill((currentBill) => ({
      ...currentBill,
      [item.id]: {
        item,
        qty: (currentBill[item.id]?.qty ?? 0) + 1,
        note: currentBill[item.id]?.note ?? "",
      },
    }));

  const dec = (id: string) =>
    setBill((currentBill) => {
      const currentEntry = currentBill[id];
      if (!currentEntry) return currentBill;

      if (currentEntry.qty <= 1) {
        const nextBill = { ...currentBill };
        delete nextBill[id];
        return nextBill;
      }

      return { ...currentBill, [id]: { ...currentEntry, qty: currentEntry.qty - 1 } };
    });

  const remove = (id: string) =>
    setBill((currentBill) => {
      const nextBill = { ...currentBill };
      delete nextBill[id];
      return nextBill;
    });

  const setNote = (id: string, note: string) =>
    setBill((currentBill) =>
      currentBill[id]
        ? { ...currentBill, [id]: { ...currentBill[id], note } }
        : currentBill,
    );

  const clear = () => setBill({});
  const entries = Object.values(bill);
  const count = entries.reduce((sum, entry) => sum + entry.qty, 0);
  const total = entries.reduce(
    (sum, entry) => sum + entry.qty * (entry.item.price ?? 0),
    0,
  );
  const hasMissingPrices = entries.some((entry) => entry.item.price === null);

  return {
    bill,
    add,
    dec,
    remove,
    setNote,
    clear,
    entries,
    count,
    total,
    hasMissingPrices,
  };
}

export type BillApi = ReturnType<typeof useBill>;

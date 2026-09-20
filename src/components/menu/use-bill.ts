"use client";

import { useState } from "react";
import type { MenuItem } from "./menu-data";

type BillEntry = {
  item: MenuItem;
  qty: number;
  note: string;
};

type Bill = Record<string, BillEntry>;

export function useBill() {
  const [bill, setBill] = useState<Bill>({});

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
  const total = entries.reduce((sum, entry) => sum + entry.qty * entry.item.price, 0);

  return { bill, add, dec, remove, setNote, clear, entries, count, total };
}

export type BillApi = ReturnType<typeof useBill>;

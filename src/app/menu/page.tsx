import type { Metadata } from "next";
import MenuExperience from "@/components/menu/menu-experience";

export const metadata: Metadata = {
  title: "منوی رستوران | خانچی",
  description: "منوی رستوران خانچی؛ انتخاب غذا، نوشیدنی و دسر و آماده‌سازی فاکتور تخمینی برای گارسون.",
};

export default function MenuPage() {
  return <MenuExperience />;
}

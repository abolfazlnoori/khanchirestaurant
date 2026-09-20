import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import MenuExperience from "@/components/menu/menu-experience";

export const metadata: Metadata = {
  title: "منوی رستوران | خانچی",
  description: "منوی رستوران خانچی؛ انتخاب غذا، نوشیدنی و دسر و آماده‌سازی فاکتور تخمینی برای گارسون.",
};

export default function MenuPage() {
  return (
    <>
      <MenuExperience />
      <SiteFooter />
    </>
  );
}

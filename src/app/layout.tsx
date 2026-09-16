import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abar = localFont({
  src: [
    { path: "./fonts/AbarHighFaNum-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/AbarHighFaNum-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/AbarHighFaNum-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/AbarHigh-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-abar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "خانچی | رستوران اصیل ایرانی",
  description: "خانچی، روایتی معاصر از طعم اصیل و مهمان‌نوازی ایرانی در سعادت‌آباد تهران.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${abar.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

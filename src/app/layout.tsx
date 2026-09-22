import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionOrchestrator } from "@/components/shared/motion-orchestrator";
import { allowIndexing, restaurant, siteUrl } from "@/lib/site";
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
  metadataBase: siteUrl,
  title: {
    default: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد",
    template: "%s | خانچی",
  },
  description: restaurant.description,
  applicationName: restaurant.name,
  authors: [{ name: restaurant.name, url: "/" }],
  creator: restaurant.name,
  publisher: restaurant.name,
  category: "restaurant",
  keywords: [
    "رستوران خانچی",
    "رستوران ایرانی سعادت آباد",
    "رستوران سنتی تهران",
    "غذای ایرانی",
    "کباب ایرانی",
    "Khanchi Restaurant",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: restaurant.name,
    title: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد",
    description: restaurant.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "خانچی | رستوران اصیل ایرانی در سعادت‌آباد",
    description: restaurant.description,
  },
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#002b17",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth" className={`${abar.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionOrchestrator />
        {children}
      </body>
    </html>
  );
}

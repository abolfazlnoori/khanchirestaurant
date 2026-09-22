const fallbackSiteUrl = "https://khanchirestaurant.com";

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  try {
    return new URL(configuredUrl || fallbackSiteUrl);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be an absolute URL (received: ${configuredUrl}).`,
    );
  }
}

export const siteUrl = getSiteUrl();
export const allowIndexing = process.env.SITE_ALLOW_INDEXING !== "false";

export const restaurant = {
  name: "خانچی",
  latinName: "Khanchi Restaurant",
  description:
    "رستوران خانچی در سعادت‌آباد تهران؛ روایتی معاصر از غذاهای اصیل ایرانی، کباب‌های زغالی و مهمان‌نوازی ایرانی.",
  shortDescription:
    "رستوران اصیل ایرانی در سعادت‌آباد تهران با منوی غذاهای سنتی، کباب و نوشیدنی.",
  telephone: "+982122389873",
  mobile: "+989032805147",
  displayTelephone: "۰۲۱-۲۲۳۸ ۹۸۷۳",
  displayMobile: "۰۹۰۳ ۲۸۰ ۵۱۴۷",
  address: {
    streetAddress: "سعادت‌آباد",
    addressLocality: "تهران",
    addressRegion: "تهران",
    addressCountry: "IR",
  },
  displayAddress: "سعادت‌آباد، تهران",
  openingHours: "همه‌روزه ۱۱:۳۰ تا ۲۴:۰۰",
  instagram: "https://instagram.com/khanchi.restaurant",
  instagramHandle: "@khanchi.restaurant",
  cuisine: ["غذای ایرانی", "کباب ایرانی", "غذای سنتی"],
  heroImage: "/assets/images/9b805236df92fb6ed53b77b3728bb5f6fbb6dc1c.png",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

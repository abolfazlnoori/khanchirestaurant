export type Review = {
  quote: string;
  name: string;
  occasion: string;
  active?: boolean;
};

export const reviews: readonly Review[] = [
  { quote: "محیط و پذیرایی بسیار دلنشین بود", name: "آرمان رضایی", occasion: "مهمان خصوصی · جشن تولد" },
  { quote: "سرویس‌دهی و کیفیت فوق‌العاده بود", name: "مهسا و نیما", occasion: "مهمان خصوصی · شام سالگرد", active: true },
  { quote: "غذا و محیط عالی بود", name: "سارا احمدی", occasion: "مهمان خصوصی · شام دوستانه" },
];

import { FooterBrandBar } from "./footer-brand-bar";
import { FooterContactGrid } from "./footer-contact-grid";
import { FooterCta } from "./footer-cta";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-cream max-[420px]:mt-[5px] max-[420px]:bg-cream-mobile">
      <FooterCta />
      <FooterContactGrid />
      <FooterBrandBar />
    </footer>
  );
}

import Image from "next/image";
import type { MenuItem } from "./menu-data";

type ProductVisualProps = {
  product: MenuItem;
  className?: string;
  sizes: string;
};

export function ProductVisual({
  product,
  className = "",
  sizes,
}: ProductVisualProps) {
  if (product.image) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#f6f2ec] ${className}`}
      role="img"
      aria-label={`تصویر پیش‌فرض ${product.name}`}
    >
      <Image
        src="/assets/patterns/pattern-aboutus.png"
        alt=""
        fill
        sizes={sizes}
        aria-hidden="true"
        className="object-cover opacity-25"
      />
    </div>
  );
}

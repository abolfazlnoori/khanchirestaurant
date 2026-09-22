import { ImageWithSkeleton } from "@/components/shared/image-with-skeleton";
import type { MenuItem } from "./menu-data";

type ProductVisualProps = {
  product: MenuItem;
  className?: string;
  sizes: string;
  eager?: boolean;
};

export function ProductVisual({
  product,
  className = "",
  sizes,
  eager = false,
}: ProductVisualProps) {
  if (product.image) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <ImageWithSkeleton
          src={product.image}
          alt={`${product.name} از منوی رستوران خانچی`}
          fill
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#f6f2ec] ${className}`}
    >
      <ImageWithSkeleton
        src="/assets/patterns/pattern-aboutus.png"
        alt=""
        fill
        sizes={sizes}
        loading={eager ? "eager" : undefined}
        fetchPriority={eager ? "high" : undefined}
        aria-hidden="true"
        className="object-cover opacity-25"
      />
    </div>
  );
}

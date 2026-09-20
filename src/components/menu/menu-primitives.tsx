import Image from "next/image";
import type { Diet } from "./menu-data";
import { IconChili, IconLeaf } from "./menu-icons";
import { assetPathPrefix, girihRows, menuLandingImages } from "./menu-assets";

export function GirihPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none opacity-25 ${className}`} aria-hidden>
      <div className="grid grid-rows-4">
        {girihRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((tile, columnIndex) => (
              <Image
                key={`${rowIndex}-${columnIndex}`}
                src={`${assetPathPrefix}/${tile}.svg`}
                alt=""
                width={92}
                height={92}
                className="block h-[92px] w-[92px] max-w-none"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Eyebrow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image src={menuLandingImages.eyebrowRule} alt="" width={34} height={1} className="h-px w-[34px]" aria-hidden />
      <span
        className="whitespace-nowrap text-[14px] text-[#9a6d32]"
        style={{ fontFamily: "'IRANSansX:DemiBold'" }}
      >
        {label}
      </span>
    </div>
  );
}

export function DietBadge({ diet }: { diet: Diet }) {
  const badge = {
    vegetarian: { label: "گیاهی", Icon: IconLeaf, className: "text-[#3f6b3f] border-[#3f6b3f]/25 bg-[#eef3ec]" },
    spicy: { label: "تند", Icon: IconChili, className: "text-[#9d3b28] border-[#9d3b28]/25 bg-[#f6ece8]" },
  }[diet];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[1px] border px-2 py-[3px] text-[10px] ${badge.className}`}
      style={{ fontFamily: "'IRANSansX:DemiBold'" }}
    >
      {badge.label}
      <badge.Icon size={11} />
    </span>
  );
}

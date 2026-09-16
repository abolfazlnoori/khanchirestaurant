import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3.5 text-[15px] font-semibold text-gold max-[900px]:mb-3.5 max-[900px]:gap-2.5 max-[900px]:text-xs">
      <span className="h-px w-10 bg-current max-[900px]:w-[34px]" aria-hidden="true" />
      {children}
    </p>
  );
}

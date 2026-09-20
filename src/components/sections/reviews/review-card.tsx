import { StarIcon, UserIcon } from "@/components/shared/icons";
import type { Review } from "./reviews.data";

const starIndexes = [0, 1, 2, 3, 4] as const;

type ReviewCardProps = Review & {
  mobile?: boolean;
};

export function ReviewCard({ quote, name, occasion, active = false, mobile = false }: ReviewCardProps) {
  return (
    <article
      className={`min-h-[240px] flex-col items-center text-center ${
        mobile
          ? `absolute inset-0 flex min-h-[250px] justify-center border border-line p-[34px_24px_24px] transition-[opacity,transform] duration-400 ease-out ${
              active
                ? "z-10 translate-x-0 opacity-100"
                : "pointer-events-none z-0 translate-x-3 opacity-0"
            }`
          : "flex px-11 pt-1.5 [&+article]:border-r [&+article]:border-line"
      }`}
      aria-hidden={mobile ? !active : undefined}
    >
      <span className="font-serif text-[50px] leading-none text-gold" aria-hidden="true">“</span>
      {mobile && <div className="mt-3 mb-3 h-px w-[180px] shrink-0 bg-line" aria-hidden="true" />}
      <blockquote className={`${mobile ? "m-0 min-h-0 text-[19px]" : "mt-[18px] min-h-[58px] text-lg"} font-semibold text-[#65655f]`}>{quote}</blockquote>
      {!mobile && <div className="my-[14px_18px] h-px w-[180px] bg-line" aria-hidden="true" />}
      <UserIcon className={`${mobile ? "hidden" : ""} mb-1 size-5 text-gold`} />
      <h3 className="m-0 text-lg font-semibold text-gold">{name}</h3>
      <p className="mt-1 mb-3.5 text-[13px] text-[#7a7973]">{occasion}</p>
      <div className="flex gap-0.5 text-gold [direction:ltr] [&_svg]:size-[11px]" aria-label="امتیاز پنج از پنج">
        {starIndexes.map((index) => <StarIcon key={index} />)}
      </div>
    </article>
  );
}

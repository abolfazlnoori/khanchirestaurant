import { StarIcon, UserIcon } from "@/components/shared/icons";
import type { Review } from "./reviews.data";

const starIndexes = [0, 1, 2, 3, 4] as const;

export function ReviewCard({ quote, name, occasion, active = false }: Review) {
  return (
    <article className={`min-h-[240px] flex-col items-center px-11 pt-1.5 text-center [&+article]:border-r [&+article]:border-line max-[900px]:hidden${active ? " flex max-[900px]:!flex max-[900px]:min-h-[250px] max-[900px]:justify-center max-[900px]:border max-[900px]:border-line max-[900px]:p-[34px_24px_24px]" : " flex"}`}>
      <span className="font-serif text-[50px] leading-none text-gold" aria-hidden="true">“</span>
      <blockquote className="mt-[18px] min-h-[58px] text-lg font-semibold text-[#65655f] max-[900px]:mt-3 max-[900px]:min-h-0 max-[900px]:text-[19px]">{quote}</blockquote>
      <div className="my-[14px_18px] h-px w-[180px] bg-line" aria-hidden="true" />
      <UserIcon className="mb-1 size-5 text-gold" />
      <h3 className="m-0 text-lg font-semibold text-gold">{name}</h3>
      <p className="mt-1 mb-3.5 text-[13px] text-[#7a7973]">{occasion}</p>
      <div className="flex gap-0.5 text-gold [direction:ltr] [&_svg]:size-[11px]" aria-label="امتیاز پنج از پنج">
        {starIndexes.map((index) => <StarIcon key={index} />)}
      </div>
    </article>
  );
}

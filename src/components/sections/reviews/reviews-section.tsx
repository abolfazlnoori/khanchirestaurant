import { SectionLabel } from "@/components/shared/section-label";
import { MobileReviewsCarousel } from "./mobile-reviews-carousel";
import { ReviewCard } from "./review-card";
import { reviews } from "./reviews.data";

export function ReviewsSection() {
  return (
    <section className="bg-paper pt-[115px] pb-[82px] max-[900px]:pt-[58px] max-[900px]:pb-[42px]" aria-labelledby="reviews-title">
      <div className="mx-auto w-[min(1248px,calc(100%-64px))] text-center max-[900px]:w-[min(calc(100%-40px),720px)] max-[420px]:w-[calc(100%-28px)] [&>p:first-child]:justify-center" data-motion="reveal">
        <SectionLabel>نظرات مهمانان</SectionLabel>
        <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="reviews-title">خانچی، از نگاه شما</h2>
        <p className="mt-5 text-[17px] text-muted max-[900px]:hidden">نظرات شما مهمانان عزیز، مسیر خانچی را شفاف‌تر می‌کند.</p>
      </div>

      <div className="mx-auto mt-[52px] grid w-[min(1248px,calc(100%-64px))] grid-cols-3 max-[900px]:hidden">
        {reviews.map((review, index) => <ReviewCard key={review.quote} {...review} motionIndex={index} />)}
      </div>

      <MobileReviewsCarousel />
    </section>
  );
}

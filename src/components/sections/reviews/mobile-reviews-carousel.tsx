"use client";

import { useEffect, useState } from "react";
import { ReviewCard } from "./review-card";
import { reviews } from "./reviews.data";

const initialReviewIndex = Math.max(0, reviews.findIndex((review) => review.active));
const rotationInterval = 5500;

export function MobileReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(initialReviewIndex);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length);
    }, rotationInterval);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="hidden max-[900px]:block">
      <div
        className="relative mx-auto mt-[26px] min-h-[250px] w-[calc(100%-48px)] overflow-hidden max-[420px]:w-[calc(100%-24px)]"
        aria-roledescription="carousel"
        aria-label="نظرات مهمانان"
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.quote}
            {...review}
            active={index === activeIndex}
            mobile
          />
        ))}
      </div>

      <div className="mt-[22px] flex items-center justify-center [direction:ltr]" aria-label="انتخاب نظر">
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={review.quote}
              className="group grid size-11 cursor-pointer place-items-center border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`نمایش نظر ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`block rounded-full transition-[width,height,background-color] duration-300 ${
                  isActive ? "h-0.5 w-11 bg-gold" : "size-[5px] bg-[#d7d2c9] group-hover:bg-gold/60"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

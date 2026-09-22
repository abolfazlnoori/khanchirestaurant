"use client";

import { ImageWithSkeleton } from "@/components/shared/image-with-skeleton";
import { useCallback, useEffect, useRef, useState } from "react";

const closeDuration = 180;

export function ExperiencePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const closingRef = useRef(false);

  const closeViewer = useCallback(() => {
    if (closingRef.current) return;

    videoRef.current?.pause();
    closingRef.current = true;
    setIsClosing(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimerRef.current = window.setTimeout(() => {
      closingRef.current = false;
      setIsClosing(false);
      setIsOpen(false);
      triggerRef.current?.focus();
    }, reduceMotion ? 0 : closeDuration);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const video = videoRef.current;
    const scrollPosition = window.scrollY;
    const previousStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";

    const playFrame = window.requestAnimationFrame(() => {
      void video?.play().catch(() => {
        // Native controls remain available if a browser blocks autoplay.
      });
    });

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.cancelAnimationFrame(playFrame);
      window.removeEventListener("keydown", closeOnEscape);
      video?.pause();
      body.style.overflow = previousStyles.overflow;
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.width = previousStyles.width;
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
    };
  }, [closeViewer, isOpen]);

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  return (
    <>
      <div
        id="experience"
        className="video-placeholder group mx-auto mt-[92px] aspect-[3.2] w-[min(1248px,calc(100%-64px))] overflow-hidden border border-[#214b34] max-[900px]:mt-[34px] max-[900px]:aspect-[1.66] max-[900px]:w-[calc(100%-48px)] max-[420px]:w-[calc(100%-44px)]"
        data-motion="scale"
      >
        <ImageWithSkeleton
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          src="/assets/images/Chef image.png"
          alt="سرآشپز خانچی در حال آماده‌سازی غذا"
          fill
          sizes="(max-width: 900px) calc(100vw - 48px), 1248px"
        />
        <div className="video-placeholder__frame" aria-hidden="true" />
        <button
          ref={triggerRef}
          className="video-placeholder__play cursor-pointer p-0 transition-[transform,background-color,border-color] duration-200 hover:scale-105 hover:border-white hover:bg-[#081810]/55 active:scale-95"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="پخش ویدیوی معرفی رستوران خانچی"
        />
      </div>

      <div
        className="mx-auto mt-3.5 flex w-[min(1248px,calc(100%-64px))] justify-between text-xs text-[#6d726d] [direction:ltr] max-[900px]:mt-2.5 max-[900px]:w-[calc(100%-48px)] max-[900px]:text-[10px] max-[420px]:w-[calc(100%-44px)] [&>span:first-child]:max-[900px]:hidden [&>span:last-child]:max-[900px]:ml-auto"
        data-motion="reveal"
        data-motion-delay="100"
      >
        <span lang="en">THE ART OF PERSIAN HOSPITALITY</span>
        <span>اصالت در طعم، ظرافت در میزبانی</span>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4 ${isClosing ? "khanchi-sheet-scrim-out" : "khanchi-sheet-scrim-in"}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-video-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
        >
          <h2 id="experience-video-title" className="sr-only">
            ویدیوی معرفی رستوران خانچی
          </h2>
          <button
            type="button"
            onClick={closeViewer}
            className="fixed top-[max(16px,env(safe-area-inset-top))] right-4 z-10 grid size-12 place-items-center rounded-full border border-white/35 bg-black/45 text-white backdrop-blur-md transition duration-200 hover:border-white hover:bg-white hover:text-black active:scale-95"
            aria-label="بستن ویدیو"
            autoFocus
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>

          <video
            ref={videoRef}
            className={`h-auto max-h-[calc(100dvh-32px)] w-auto max-w-[calc(100vw-32px)] bg-black object-contain shadow-[0_28px_90px_rgba(0,0,0,0.55)] ${isClosing ? "khanchi-sheet-out" : "khanchi-modal-in"}`}
            width={1080}
            height={1920}
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster="/assets/images/Chef image.png"
            aria-label="ویدیوی معرفی رستوران خانچی"
          >
            <source src="/assets/video/3.mp4" type="video/mp4" />
            مرورگر شما امکان پخش این ویدیو را ندارد.
          </video>
        </div>
      )}
    </>
  );
}

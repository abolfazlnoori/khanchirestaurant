"use client";

import { useEffect } from "react";

const motionSelector = "[data-motion]";

export function MotionOrchestrator() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observed = new WeakSet<Element>();

    const reveal = (element: HTMLElement) => {
      element.dataset.motionState = "visible";
      observer?.unobserve(element);

      const delay = Number(element.dataset.motionDelay ?? 0);
      window.setTimeout(() => {
        delete element.dataset.motionReady;
        delete element.dataset.motionState;
        element.style.removeProperty("--motion-delay");
      }, 450 + Math.min(delay, 240));
    };

    const observer = reduceMotion.matches
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) reveal(entry.target as HTMLElement);
            });
          },
          { rootMargin: "0px 0px -10%", threshold: 0.08 },
        );

    const register = (root: ParentNode) => {
      const elements = [
        ...(root instanceof HTMLElement && root.matches(motionSelector) ? [root] : []),
        ...root.querySelectorAll<HTMLElement>(motionSelector),
      ];

      elements.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);

        if (reduceMotion.matches) {
          element.dataset.motionState = "visible";
          return;
        }

        const delay = Number(element.dataset.motionDelay ?? 0);
        element.style.setProperty("--motion-delay", `${Math.min(delay, 240)}ms`);
        element.dataset.motionReady = "true";
        observer?.observe(element);
      });
    };

    register(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) register(node);
        });
      });
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
}

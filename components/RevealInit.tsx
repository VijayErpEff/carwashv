"use client";

import { useEffect } from "react";

/**
 * Enables scroll reveals without ever gating content on JS:
 * adds `js` to <html> (so the hide-then-animate CSS engages) and observes
 * every [data-reveal]. If JS never runs, the `js` class is absent and all
 * content stays visible.
 */
export default function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    root.classList.add("js");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    els.forEach((el) => {
      // Anything already in view on load reveals on the next frame.
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}

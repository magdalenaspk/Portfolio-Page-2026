"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Gallery } from "@/content/types";

// Phone flows: one row on tablet and desktop so a journey reads left to right,
// a swipeable row on phones so nothing wraps into uneven rows.
const phoneCols: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

function layoutClass(g: Gallery) {
  if (g.variant === "desktop") {
    return `grid ${g.items.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`;
  }
  return `flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 sm:-mx-8 sm:px-8 md:mx-auto md:px-0 md:pb-0 md:overflow-visible md:grid ${
    phoneCols[Math.min(g.items.length, 6)]
  }`;
}

export function ScreenGallery({ gallery }: { gallery: Gallery }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.items;
  const isPhone = gallery.variant !== "desktop";
  // Phone screens share one frame so rows line up; "cards" keeps natural heights.
  const framed = gallery.variant === undefined || gallery.variant === "phone";
  const width =
    gallery.variant === "desktop"
      ? items.length === 1
        ? "max-w-5xl mx-auto"
        : ""
      : items.length <= 2
        ? gallery.variant === "cards"
          ? "max-w-3xl mx-auto"
          : "max-w-xl mx-auto"
        : items.length === 3
          ? "max-w-3xl mx-auto"
          : "";

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <figure className="mt-10">
      <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-200/70 px-4 py-8 sm:px-8 md:px-10 md:py-12">
        <div
          className={`gap-4 sm:gap-6 ${layoutClass(gallery)} ${width} items-start`}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              className={`group text-left focus:outline-none ${
                isPhone ? "shrink-0 w-[58%] sm:w-[40%] snap-start md:w-auto" : ""
              }`}
              aria-label={`Enlarge: ${item.caption ?? item.alt}`}
            >
              <span
                className={`block overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-lime-500 ${
                  isPhone ? "rounded-[18px]" : "rounded-xl"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`block w-full ${
                    framed ? "aspect-[375/812] object-cover object-top" : "h-auto"
                  }`}
                />
              </span>
              {item.caption && (
                <span className="mt-3 block text-xs sm:text-sm leading-snug text-neutral-600">
                  {item.caption}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      {gallery.caption && (
        <figcaption className="mt-3 text-sm text-neutral-500 text-center">
          {gallery.caption}
        </figcaption>
      )}

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption ?? current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/90 backdrop-blur-sm p-4 sm:p-10"
            onClick={close}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className={`max-h-[82vh] w-auto max-w-full object-contain shadow-2xl ${
                isPhone ? "rounded-[24px]" : "rounded-xl"
              }`}
            />
            {current.caption && (
              <p className="mt-4 text-sm text-neutral-300 text-center max-w-xl">
                {current.caption}
              </p>
            )}
            {items.length > 1 && (
              <div className="mt-4 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  aria-label="Previous screen"
                >
                  ←
                </button>
                <span className="text-xs text-neutral-400 tabular-nums">
                  {(open ?? 0) + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  aria-label="Next screen"
                >
                  →
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Gallery } from "@/content/types";

// Every screen in a row gets the same width, whatever the count, so a single
// screen is never blown up. Phone rows swipe on small viewports.
const ITEM_WIDTH = { phone: 200, cards: 260 } as const;

function layoutClass(g: Gallery) {
  if (g.variant === "desktop") {
    return `grid ${g.items.length === 1 ? "grid-cols-1 md:w-1/2 md:mx-auto" : "grid-cols-1 md:grid-cols-2"}`;
  }
  // One or two screens fit side by side on phones, so they never scroll.
  if (g.items.length <= 2) {
    return `grid ${g.items.length === 1 ? "grid-cols-1 max-w-[60%] mx-auto" : "grid-cols-2"} md:max-w-none justify-center`;
  }
  return "flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:grid md:justify-center";
}

export function ScreenGallery({ gallery }: { gallery: Gallery }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.items;
  const isPhone = gallery.variant !== "desktop";
  // Phone screens share one frame so rows line up; "cards" keeps natural heights.
  const framed = gallery.variant === undefined || gallery.variant === "phone";
  const colW =
    gallery.itemWidth ??
    (gallery.variant === "cards" ? (gallery.size === "small" ? 220 : ITEM_WIDTH.cards) : ITEM_WIDTH.phone);
  const gridStyle = isPhone
    ? { gridTemplateColumns: `repeat(${items.length}, minmax(0, ${colW}px))` }
    : undefined;

  // Phone rows with 3+ screens swipe; track which screen is in view for the dots.
  const swipes = isPhone && items.length > 2;
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const row = rowRef.current;
    if (!row || !swipes) return;
    const onScroll = () => {
      const first = row.children[0] as HTMLElement | undefined;
      if (!first) return;
      const stepW = first.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || "0");
      const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
      setActive(atEnd ? items.length - 1 : Math.round(row.scrollLeft / stepW));
    };
    row.addEventListener("scroll", onScroll, { passive: true });
    return () => row.removeEventListener("scroll", onScroll);
  }, [swipes, items.length]);

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
          ref={rowRef}
          className={`gap-4 sm:gap-6 ${layoutClass(gallery)} items-start`}
          style={gridStyle}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              className={`group text-left focus:outline-none ${
                swipes ? "shrink-0 w-[68%] sm:w-[38%] snap-start md:w-auto" : ""
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
        {swipes && (
          <div className="mt-4 flex justify-center gap-1.5 md:hidden" aria-hidden="true">
            {items.map((item, i) => (
              <span
                key={item.src}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-neutral-700" : "w-1.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        )}
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

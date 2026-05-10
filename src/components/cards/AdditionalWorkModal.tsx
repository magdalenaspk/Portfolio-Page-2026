"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdditionalWorkItem } from "@/content/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { Badge } from "@/components/ui/Badge";

interface AdditionalWorkModalProps {
  item: AdditionalWorkItem | null;
  onClose: () => void;
}

export function AdditionalWorkModal({ item, onClose }: AdditionalWorkModalProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMobile(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [item]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const hidden  = isMobile ? { y: "100%" } : { x: "100%" };
  const visible = isMobile ? { y: 0 }      : { x: 0 };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel — bottom sheet on mobile, right drawer on desktop */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl overflow-hidden flex flex-col max-h-[90vh]
                       md:inset-y-0 md:left-auto md:right-0 md:bottom-auto md:top-0 md:w-[520px] md:max-w-[90vw] md:max-h-full md:rounded-none md:rounded-l-2xl md:shadow-2xl"
          >
            {/* Drag handle (mobile only) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden shrink-0">
              <div className="w-10 h-1 rounded-full bg-neutral-200" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors shadow-sm"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain">
              {/* Thumbnail */}
              <div
                className="aspect-[4/3] shrink-0"
                style={{ background: item.thumbnail.background ?? "#F5F5F5" }}
              >
                <PlaceholderImage
                  src={item.thumbnail.src}
                  alt={item.thumbnail.alt}
                  label={`${item.id + 10}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  {item.company}
                </p>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {item.overview && (
                  <p className="text-neutral-600 leading-relaxed mb-8">
                    {item.overview}
                  </p>
                )}

                {item.sections && item.sections.length > 0 && (
                  <div className="space-y-6">
                    {item.sections.map((section) => (
                      <div key={section.heading}>
                        <div className="h-px bg-neutral-100 mb-6" />
                        <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                          {section.heading}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                          {section.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="h-6 md:hidden" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/motion/StaggerChildren";
import { AdditionalWorkItem } from "@/content/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { AdditionalWorkModal } from "./AdditionalWorkModal";

interface AdditionalWorkCardProps {
  item: AdditionalWorkItem;
}

export function AdditionalWorkCard({ item }: AdditionalWorkCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isClickable = !!item.overview;

  return (
    <>
      <motion.div variants={itemVariants}>
        <div
          onClick={() => isClickable && setModalOpen(true)}
          className={`group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300 h-full flex flex-col ${isClickable ? "cursor-pointer" : ""}`}
        >
          {/* Thumbnail */}
          <div
            className="relative overflow-hidden aspect-[4/3]"
            style={{ background: item.thumbnail.background ?? "#F5F5F5" }}
          >
            <PlaceholderImage
              src={item.thumbnail.src}
              alt={item.thumbnail.alt}
              label={`${item.id + 10}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex-1">
            <p className="text-xs font-medium text-neutral-500 mb-1 uppercase tracking-wider">
              {item.company}
            </p>
            <h3 className="text-base font-bold text-neutral-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          {/* Read more indicator */}
          {isClickable && (
            <div className="px-5 pb-5 flex items-center gap-1 text-xs font-medium text-neutral-500 group-hover:text-lime-700 transition-colors">
              Read more
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          )}
        </div>
      </motion.div>

      <AdditionalWorkModal
        item={modalOpen ? item : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

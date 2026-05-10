"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/components/motion/StaggerChildren";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/content/types";
import { PlaceholderImage } from "./PlaceholderImage";

interface LockedProjectCardProps {
  project: Project;
}

export function LockedProjectCard({ project }: LockedProjectCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <div className="block bg-white rounded-2xl overflow-hidden border border-neutral-100 cursor-default">
        {/* Thumbnail — grayscale + blur */}
        <div className="relative overflow-hidden aspect-[3/2] bg-neutral-100">
          <PlaceholderImage
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            label="6"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <svg
                className="w-5 h-5 text-neutral-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <Badge variant="default" className="bg-white/90 backdrop-blur-sm text-neutral-600">
              Coming Soon
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-neutral-400 mb-1">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-neutral-300 mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

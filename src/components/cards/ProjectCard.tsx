"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/motion/StaggerChildren";
import { Project } from "@/content/types";
import { PlaceholderImage } from "./PlaceholderImage";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-xl transition-all duration-300"
      >
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden aspect-[3/2]"
          style={{ background: project.thumbnail.background ?? "#f5f5f4" }}
        >
          <PlaceholderImage
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            label={`${project.id}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          <p className="text-xs font-medium text-neutral-500 mb-1 uppercase tracking-wider">
            {project.company}
          </p>
          <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-lime-700 mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="px-6 pb-6 flex items-center gap-1 text-sm font-medium text-neutral-500 group-hover:text-lime-700 transition-colors">
          View case study
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

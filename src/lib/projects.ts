import { selectedProjects } from "@/content/projects";
import { Project } from "@/content/types";

export function getPublishedProjects(): Project[] {
  return selectedProjects.filter((p) => p.status === "published");
}

export function getProjectBySlug(slug: string): Project | null {
  return (
    selectedProjects.find(
      (p) => p.slug === slug && p.status === "published"
    ) ?? null
  );
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const published = getPublishedProjects();
  const index = published.findIndex((p) => p.slug === currentSlug);
  return {
    prev: index > 0 ? published[index - 1] : null,
    next: index < published.length - 1 ? published[index + 1] : null,
  };
}

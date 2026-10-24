import { selectedProjects, workshops } from "@/content/projects";
import { Project } from "@/content/types";

const groups: Project[][] = [selectedProjects, workshops];

function published(list: Project[]): Project[] {
  return list.filter((p) => p.status === "published");
}

// All published case studies (projects + workshops), used for static params
export function getPublishedProjects(): Project[] {
  return groups.flatMap(published);
}

export function getProjectBySlug(slug: string): Project | null {
  return getPublishedProjects().find((p) => p.slug === slug) ?? null;
}

export function isWorkshop(slug: string): boolean {
  return workshops.some((p) => p.slug === slug);
}

// Prev/next stay within the same group (projects or workshops)
export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const group =
    groups.map(published).find((g) => g.some((p) => p.slug === currentSlug)) ??
    [];
  const index = group.findIndex((p) => p.slug === currentSlug);
  return {
    prev: index > 0 ? group[index - 1] : null,
    next: index >= 0 && index < group.length - 1 ? group[index + 1] : null,
  };
}

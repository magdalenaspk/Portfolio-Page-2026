// ─── Project Types ─────────────────────────────────────────────────────────────

export type ProjectStatus = "published" | "coming-soon";

export interface ProjectImage {
  src: string; // Path relative to /public, e.g. "/images/projects/project-1/hero.jpg"
  alt: string;
  width: number;
  height: number;
  background?: string; // CSS gradient/color rendered behind transparent PNGs
}

export interface CaseStudySection {
  heading: string;
  body: string; // Supports \n for paragraphs
  image?: ProjectImage;
  presentation?: string; // Path to PDF in /public
}

export interface Project {
  id: number;
  slug: string;
  status: ProjectStatus;
  title: string;
  subtitle: string; // One-liner shown on card
  description: string; // Short description for card
  company: string;
  role?: string;
  platform?: string;
  tags: string[];
  thumbnail: ProjectImage;
  // Case study fields — only required when status === "published"
  heroImage?: ProjectImage;
  overview?: string;
  sections?: CaseStudySection[];
}

// ─── Additional Work ────────────────────────────────────────────────────────────

export interface AdditionalWorkSection {
  heading: string;
  body: string;
}

export interface AdditionalWorkItem {
  id: number;
  title: string;
  company: string;
  description: string;
  tags: string[];
  thumbnail: ProjectImage;
  externalUrl?: string;
  overview?: string;
  sections?: AdditionalWorkSection[];
}

// ─── Hero ───────────────────────────────────────────────────────────────────────

export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

// ─── About ──────────────────────────────────────────────────────────────────────

export interface AboutStrength {
  title: string;
  body: string;
}

export interface TimelineEntry {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface Testimonial {
  body: string;
  author: string;
  role: string;
}

export interface AboutContent {
  heading: string;
  intro: string;
  strengths: AboutStrength[];
  testimonials: Testimonial[];
  tools: string[];
  competencies: string[];
  education: TimelineEntry[];
  experience: TimelineEntry[];
  portraitImage: ProjectImage;
}

// ─── Contact ────────────────────────────────────────────────────────────────────

export interface ContactContent {
  heading: string;
  subheading: string;
  email: string;
  linkedInUrl: string;
  linkedInLabel: string;
  portfolioPdfUrl: string;
  portfolioPdfLabel: string;
}

// ─── Navigation ─────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Site Metadata ───────────────────────────────────────────────────────────────

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  locale: string;
}

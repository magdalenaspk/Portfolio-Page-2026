// ─── Project Types ─────────────────────────────────────────────────────────────

export type ProjectStatus = "published" | "coming-soon";

export interface ProjectImage {
  src: string; // Path relative to /public, e.g. "/images/projects/project-1/hero.jpg"
  alt: string;
  width: number;
  height: number;
  background?: string; // CSS gradient/color rendered behind transparent PNGs
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Gallery {
  variant?: "phone" | "cards" | "desktop"; // phone = framed screens in a row, cards = natural heights, desktop = two columns
  items: GalleryItem[];
  size?: "small"; // narrower row for small components
  itemWidth?: number; // px per screen on wide layouts, overriding the variant default
  caption?: string;
}

export type IconName =
  | "eye" | "sparkle" | "users" | "cursor" | "expand" | "layers" | "tag" | "key"
  | "beaker" | "chart" | "bolt" | "gift" | "shield" | "sort" | "trash" | "undo"
  | "chat" | "grid" | "mail" | "sheet" | "stack" | "tabs" | "x" | "phone" | "globe";

// A large-number callout. Context names the initiative/test so results stay separate.
export interface Stat {
  value: string;
  label: string;
  context?: string;
}

// An icon-led point, for lists that read better scanned than as prose.
export interface Point {
  icon: IconName;
  title: string;
  body?: string;
  tag?: string; // Small status label, e.g. "Planned", "Exploration"
}

export interface CaseStudySection {
  heading: string;
  body: string; // Supports \n for paragraphs
  stats?: Stat[];
  points?: Point[];
  afterPoints?: string; // Text shown below the points
  image?: ProjectImage;
  imageCaption?: string; // Small caption under the side image, e.g. a status label
  presentation?: string; // Path to PDF in /public
  media?: "onboarding-video"; // Renders an embedded video instead of the image
  gallery?: Gallery; // Full-width row of screens below the text
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
  timeframe?: string; // e.g. "Q2 2025 – Q3 2026"
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
  earlierWork?: string;
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

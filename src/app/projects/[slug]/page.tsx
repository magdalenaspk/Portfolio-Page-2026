import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getPublishedProjects,
  getAdjacentProjects,
} from "@/lib/projects";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { PlaceholderImage } from "@/components/cards/PlaceholderImage";
import { OnboardingAnimation } from "@/components/OnboardingAnimation";
import { PresentationWrapper } from "@/components/PresentationWrapper";

interface PageProps {
  params: { slug: string };
}

// Pre-render only published projects
export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage
        ? [{ url: project.heroImage.src }]
        : undefined,
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <article className="pt-8">
      {/* Hero area */}
      <Container as="div" className="pb-16">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-neutral-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#selected-projects"
              className="hover:text-neutral-600 transition-colors"
            >
              Work
            </Link>
            <span>/</span>
            <span className="text-neutral-600">{project.title}</span>
          </nav>

          {/* Title block */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-lime-600 mb-6">
              {project.subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500 mb-6">
              {project.company && (
                <div>
                  <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                    Company
                  </span>
                  <span className="font-medium text-neutral-700">
                    {project.company}
                  </span>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                    Role
                  </span>
                  <span className="font-medium text-neutral-700">
                    {project.role}
                  </span>
                </div>
              )}
              {project.platform && (
                <div>
                  <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                    Platform
                  </span>
                  <span className="font-medium text-neutral-700">
                    {project.platform}
                  </span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Hero image */}
      {project.heroImage && (
        <SlideUp delay={0.1}>
          <Container as="div">
          <div className="w-full aspect-[960/420] overflow-hidden" style={{ background: project.thumbnail.background ?? "#f5f5f5" }}>
            {/* PLACEHOLDER: Replace PlaceholderImage with next/image once hero.jpg is available */}
            <PlaceholderImage
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              label={`${project.id}`}
              className="w-full h-full"
            />
          </div>
          </Container>
        </SlideUp>
      )}

      {/* Overview */}
      {project.overview && (
        <Container as="div" className="py-16">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="h-1 w-12 bg-lime-300 rounded-full mb-8" />
              <p className="text-xl text-neutral-600 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </FadeIn>
        </Container>
      )}

      {/* Case study sections */}
      {project.sections && project.sections.length > 0 && (
        <div className="space-y-0">
          {project.sections.map((section, i) => (
            <FadeIn key={section.heading} delay={0.1}>
              <section
                className={`py-16 ${i % 2 === 1 ? "bg-neutral-50/60" : ""}`}
              >
                <Container>
                  <div
                    className={
                      section.image
                        ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        : "max-w-3xl mx-auto"
                    }
                  >
                    {/* Text */}
                    <div className={section.image && i % 2 === 1 ? "order-2 lg:order-1" : ""}>
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                        {section.heading}
                      </h2>
                      <div className="prose-body text-neutral-600 leading-relaxed text-base md:text-lg space-y-4">
                        {section.body.split("\n\n").map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>
                    </div>

                    {/* Section image / animation */}
                    {section.image && (
                      project.slug === "app-onboarding-redesign" && i === 1 ? (
                        <div
                          className={`rounded-2xl bg-neutral-100 overflow-hidden flex items-center justify-center p-6 ${
                            i % 2 === 1 ? "order-1 lg:order-2" : ""
                          }`}
                        >
                          <OnboardingAnimation />
                        </div>
                      ) : (
                        <div
                          className={`rounded-2xl aspect-[4/3] bg-neutral-100 p-4 ${
                            i % 2 === 1 ? "order-1 lg:order-2" : ""
                          }`}
                        >
                          <PlaceholderImage
                            src={section.image.src}
                            alt={section.image.alt}
                            label={`${project.id}.${i + 1}`}
                            className="w-full h-full rounded-xl overflow-hidden"
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Presentation viewer (full width, below text) */}
                  {section.presentation && (
                    <div className="mt-10">
                      <PresentationWrapper src={section.presentation} />
                    </div>
                  )}
                </Container>
              </section>
            </FadeIn>
          ))}
        </div>
      )}

      {/* Prev / Next navigation */}
      <Container as="div" className="py-20 border-t border-neutral-100 mt-8">
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex-1 flex items-center gap-4 p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 transition-colors shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-0.5">
                  Previous
                </p>
                <p className="font-semibold text-neutral-800">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex-1 flex items-center justify-end gap-4 p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300 text-right"
            >
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-0.5">
                  Next
                </p>
                <p className="font-semibold text-neutral-800">{next.title}</p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 transition-colors shrink-0"
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
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        <div className="mt-8 text-center">
          <Button href="/#selected-projects" variant="ghost">
            ← Back to all work
          </Button>
        </div>
      </Container>
    </article>
  );
}

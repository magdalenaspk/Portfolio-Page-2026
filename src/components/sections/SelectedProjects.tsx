import { selectedProjects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { LockedProjectCard } from "@/components/cards/LockedProjectCard";

export function SelectedProjects() {
  return (
    <section id="selected-projects" className="py-12 md:py-24 bg-neutral-50/50">
      <Container>
        <SectionHeading
          title="Selected Projects"
          subtitle="End-to-end case studies across growth, engagement, and product strategy."
        />
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-2xl mx-auto md:max-w-none"
        >
          {selectedProjects.map((project) =>
            project.status === "coming-soon" ? (
              <LockedProjectCard key={project.id} project={project} />
            ) : (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </StaggerChildren>
      </Container>
    </section>
  );
}

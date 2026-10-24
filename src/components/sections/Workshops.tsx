import { workshops } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function Workshops() {
  const items = workshops.filter((w) => w.status === "published");
  if (items.length === 0) return null;

  return (
    <section id="workshops" className="py-12 md:py-24">
      <Container>
        <SectionHeading
          title="Workshops"
          subtitle="Sessions I've hosted to share methods and tools with other designers."
        />
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-2xl mx-auto md:max-w-none"
        >
          {items.map((item) => (
            <ProjectCard key={item.id} project={item} ctaLabel="View workshop" />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

import { additionalWork } from "@/content/additional-work";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { AdditionalWorkCard } from "@/components/cards/AdditionalWorkCard";

export function AdditionalWork() {
  return (
    <section className="py-12 md:py-24">
      <Container>
        <SectionHeading
          title="Additional Work"
          subtitle="More projects worth knowing about."
        />
        <StaggerChildren
          staggerDelay={0.1}
          className="flex flex-col gap-4 lg:gap-6"
        >
          {additionalWork.map((item) => (
            <AdditionalWorkCard key={item.id} item={item} />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

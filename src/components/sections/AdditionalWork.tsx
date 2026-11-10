import { additionalWork } from "@/content/additional-work";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { AdditionalWorkCard } from "@/components/cards/AdditionalWorkCard";

// In preview (locked) mode, cards keep their teaser but drop the detail text.
export function AdditionalWork({ preview = false }: { preview?: boolean }) {
  const items = preview
    ? additionalWork.map((item) => ({ ...item, overview: undefined, sections: undefined }))
    : additionalWork;
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
          {items.map((item) => (
            <AdditionalWorkCard key={item.id} item={item} />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

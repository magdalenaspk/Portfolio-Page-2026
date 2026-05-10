import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { Timeline } from "@/components/sections/Timeline";
import { PlaceholderImage } from "@/components/cards/PlaceholderImage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Magdalena Sapkowska — Product Designer based in Berlin with 10+ years of experience.",
};

export default function AboutPage() {
  const paragraphs = aboutContent.intro.split("\n\n");

  return (
    <div className="pt-16 md:pt-24">
      {/* Intro section */}
      <Container as="section" className="py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Portrait */}
          <SlideUp delay={0.1} className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100 max-w-md mx-auto lg:mx-0">
              {/* PLACEHOLDER: Replace PlaceholderImage with next/image once portrait.jpg is available */}
              <PlaceholderImage
                src={aboutContent.portraitImage.src}
                alt={aboutContent.portraitImage.alt}
                label="M"
                className="w-full h-full"
              />
            </div>
          </SlideUp>

          {/* Text */}
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
              {aboutContent.heading}
            </h1>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-lg text-neutral-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* What I bring */}
      <section className="py-10 md:py-20 bg-neutral-50/60">
        <Container>
          <FadeIn>
            <SectionHeading
              title="What I bring to a team"
              subtitle="Six principles that guide how I work."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.strengths.map((strength, i) => (
              <FadeIn key={strength.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-100 h-full hover:shadow-sm transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-lime-300 mb-4" />
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {strength.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-20 bg-neutral-50/60">
        <Container>
          <FadeIn>
            <SectionHeading
              title="What colleagues say"
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutContent.testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-100 h-full flex flex-col gap-4">
                  <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                    {t.body}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.author}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & Competencies */}
      <Container as="section" className="py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Tools & Software</h2>
            <div className="flex flex-wrap gap-3">
              {aboutContent.tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-sm px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Competencies</h2>
            <div className="flex flex-wrap gap-3">
              {aboutContent.competencies.map((item) => (
                <Badge key={item} variant="outline" className="text-sm px-4 py-2">
                  {item}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Experience */}
      <section className="py-10 md:py-20 bg-neutral-50/60">
        <Container>
          <FadeIn>
            <SectionHeading title="Experience" />
          </FadeIn>
          <Timeline entries={aboutContent.experience} />
        </Container>
      </section>

      {/* Education */}
      <Container as="section" className="py-10 md:py-20">
        <FadeIn>
          <SectionHeading title="Education & Certifications" />
        </FadeIn>
        <Timeline entries={aboutContent.education} />
      </Container>

      {/* CTA */}
      <section className="py-10 md:py-20 border-t border-neutral-100">
        <Container>
          <FadeIn>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Let&apos;s connect
              </h2>
              <p className="text-neutral-500 mb-8">
                Open to new opportunities and conversations.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in touch
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}

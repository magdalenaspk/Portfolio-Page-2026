import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import ContactTriangleStage from "@/components/ContactTriangleStage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Magdalena Sapkowska — Product Designer based in Berlin.",
};

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
  delay?: number;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
  download,
  delay = 0,
}: ContactCardProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : download
    ? { download: true }
    : {};

  return (
    <FadeIn delay={delay}>
      <a
        href={href}
        {...linkProps}
        className="group flex items-center gap-5 p-6 bg-white border border-neutral-100 rounded-2xl hover:border-lime-300 hover:shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-lime-300 flex items-center justify-center transition-colors duration-300 shrink-0">
          <span className="text-neutral-600 group-hover:text-neutral-950 transition-colors">
            {icon}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
            {label}
          </p>
          <p className="text-base font-medium text-neutral-900 truncate">
            {value}
          </p>
        </div>
        <svg
          className="w-5 h-5 text-neutral-500 group-hover:text-lime-700 ml-auto shrink-0 transition-all duration-300 group-hover:translate-x-1"
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
      </a>
    </FadeIn>
  );
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <ContactTriangleStage />
      <Container as="section" className="pt-24 pb-20 md:pt-32 md:pb-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              {contactContent.heading}
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed">
              {contactContent.subheading}
            </p>
          </FadeIn>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          <ContactCard
            delay={0.1}
            label="Email"
            value={contactContent.email}
            href={`mailto:${contactContent.email}`}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            }
          />

          <ContactCard
            delay={0.2}
            label="LinkedIn"
            value={contactContent.linkedInLabel}
            href={contactContent.linkedInUrl}
            external
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />

          <ContactCard
            delay={0.3}
            label="CV"
            value="Download CV"
            href="/Magdalena-Sapkowska-CV-2026.pdf"
            download
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            }
          />

        </div>
      </Container>
    </div>
  );
}

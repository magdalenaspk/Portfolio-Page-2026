"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import TriangleStage from "@/components/TriangleStage";

// Split text into word spans for staggered animation
function AnimatedWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const nameWords = heroContent.name.split(" ");
  const nameDelay = nameWords.length * 0.08;

  return (
    <section className="relative md:min-h-screen flex items-start md:items-center overflow-hidden">
      <TriangleStage />

      <Container className="pt-16 pb-12 md:pt-24 md:pb-32 relative z-10">
        <div>
          {/* Name */}
          <h1 id="hero-name" className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-neutral-900 leading-[1.05]">
            <AnimatedWords text={heroContent.name} />
          </h1>


          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: nameDelay + 0.3 }}
            className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-2xl"
          >
            {heroContent.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: nameDelay + 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={heroContent.ctaHref} variant="primary" size="lg">
              {heroContent.ctaText}
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            <Button href={heroContent.secondaryCtaHref} variant="secondary" size="lg">
              {heroContent.secondaryCtaText}
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: nameDelay + 1.2, duration: 0.6 }}
            className="mt-12 md:mt-20 flex items-center gap-2 text-sm text-neutral-500"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/content/navigation";
import { Container } from "./Container";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const cubeVariants = {
  enter: (dir: "up" | "down") => ({
    y: dir === "down" ? "100%" : "-100%",
    rotateX: dir === "down" ? 60 : -60,
    opacity: 0,
  }),
  center: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
  exit: (dir: "up" | "down") => ({
    y: dir === "down" ? "-100%" : "100%",
    rotateX: dir === "down" ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroNameVisible, setHeroNameVisible] = useState(true);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const el = document.getElementById("hero-name");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroNameVisible(entry!.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" } // account for header height
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <Link
              href="/"
              className="font-display font-extrabold text-base text-neutral-900 hover:text-neutral-600 transition-colors tracking-[-0.03em] overflow-hidden"
              style={{ perspective: "400px", display: "inline-block" }}
            >
              <AnimatePresence mode="wait" custom={scrollDirection}>
                <motion.span
                  key={heroNameVisible ? "portfolio" : "name"}
                  custom={scrollDirection}
                  variants={cubeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ display: "inline-block", transformOrigin: "50% 50%" }}
                >
                  {isHome && heroNameVisible ? "Portfolio" : "Magdalena Sapkowska"}
                </motion.span>
              </AnimatePresence>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime-300 rounded-full transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -mr-2 text-neutral-700 hover:text-neutral-900"
              aria-label="Open navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-100">
              <Link
                href="/"
                className="font-display font-extrabold text-base text-neutral-900 tracking-[-0.03em]"
                onClick={() => setMobileOpen(false)}
              >
                {isHome && heroNameVisible ? "Portfolio" : "Magdalena Sapkowska"}
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-neutral-700 hover:text-neutral-900"
                aria-label="Close navigation"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-semibold text-neutral-900 hover:text-lime-600 transition-colors border-b border-neutral-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

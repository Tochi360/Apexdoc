"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnnouncementPill } from "@/components/ui/AnnouncementPill";
import { Button } from "@/components/ui/Button";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { WordRotator } from "@/components/ui/WordRotator";
import {
  HERO_PRINCIPLES,
  HERO_ROTATING_WORDS,
  HERO_STATS,
} from "@/lib/constants";
import {
  fadeUp,
  fadeUpReduced,
  stagger,
  staggerReduced,
  viewOnce,
  wordReveal,
  wordRevealReduced,
} from "@/lib/animations";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const headlineWords = ["Records", "management,"];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-ink-night overflow-hidden flex flex-col"
      aria-labelledby="hero-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "20%",
            right: "-10%",
            width: "1000px",
            height: "1000px",
            variant: "blue",
            drift: true,
          },
          {
            bottom: "10%",
            left: "5%",
            width: "600px",
            height: "600px",
            variant: "cream",
            drift: true,
          },
        ]}
        gradient="bg-gradient-to-br from-ink-night via-ink-navy to-ink-deepest"
      />
      <div className="grain-overlay absolute inset-0 z-[1]" aria-hidden />

      {/* Metadata bar */}
      <div className="relative z-10 border-b border-white/[0.06] mt-[72px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="label-mono">[ 001 / 048 ] RECORDS MANAGEMENT</span>
          <span className="label-mono-sm hidden md:inline">
            VOLUME 01 · CANADIAN OWNED · 2026
          </span>
          <span className="label-mono-sm flex items-center gap-2">
            SCROLL TO BEGIN ↓
            <motion.span
              animate={reducedMotion ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden
            >
              ↓
            </motion.span>
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[65%_35%] gap-12 lg:gap-8 items-end">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reducedMotion ? staggerReduced : stagger}
            >
              <motion.div variants={reducedMotion ? fadeUpReduced : fadeUp}>
                <AnnouncementPill text="Now serving Canadian SMBs nationwide" />
              </motion.div>

              <h1 id="hero-heading" className="mt-8">
                <span className="block">
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={word}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={reducedMotion ? wordRevealReduced : wordReveal}
                      className="display-thin inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <WordRotator words={HERO_ROTATING_WORDS} />
              </h1>

              <motion.p
                className="body-lg mt-8 max-w-xl"
                variants={reducedMotion ? fadeUpReduced : fadeUp}
              >
                A discreet, professional records management practice for Canadian
                small and medium-sized businesses. We organize, digitize, secure, and
                steward your documents — so you can focus on the work that matters.
              </motion.p>

              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                variants={reducedMotion ? fadeUpReduced : fadeUp}
              >
                <Button href="#contact">Begin your audit</Button>
                <Button href="#method" variant="ghost">
                  Explore our method
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Principles sidebar */}
          <motion.div
            className="lg:text-right space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewOnce}
            variants={reducedMotion ? staggerReduced : stagger}
          >
            {HERO_PRINCIPLES.map((principle, i) => (
              <motion.div key={principle.label} variants={reducedMotion ? fadeUpReduced : fadeUp}>
                {i > 0 && (
                  <div className="h-px bg-white/[0.08] my-6 lg:ml-auto lg:w-full max-w-xs" />
                )}
                <p
                  className="label-mono-sm mb-2"
                  style={{ color: "var(--accent-cream)" }}
                >
                  [ {principle.label} ]
                </p>
                {principle.lines.map((line) => (
                  <p key={line} className="body-sm text-ice-muted">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="relative z-10 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="lg:px-8 first:lg:pl-0">
                <p
                  className="font-sans font-extralight text-[clamp(1.5rem,3vw,2rem)] leading-none tracking-tightest text-ice-bright"
                  style={{ fontWeight: 200, letterSpacing: "-0.04em" }}
                >
                  {stat.value}
                </p>
                <p className="label-mono-sm mt-2">{stat.label}</p>
                <p className="label-mono-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

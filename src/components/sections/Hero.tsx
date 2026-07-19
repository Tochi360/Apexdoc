"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { WordRotator } from "@/components/ui/WordRotator";
import { HERO_ROTATING_WORDS } from "@/lib/constants";
import {
  fadeUp,
  fadeUpReduced,
  stagger,
  staggerReduced,
  wordReveal,
  wordRevealReduced,
} from "@/lib/animations";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const headlineWords = ["Records", "Management,"];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-paper-light overflow-hidden flex flex-col"
      aria-labelledby="hero-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "10%",
            right: "-15%",
            width: "1000px",
            height: "1000px",
            variant: "warm",
            drift: true,
          },
          {
            bottom: "5%",
            left: "-5%",
            width: "700px",
            height: "700px",
            variant: "sand",
            drift: true,
          },
        ]}
        gradient="bg-gradient-to-br from-paper-brightest via-paper-light to-paper"
      />
      <div className="grain-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 lg:px-12 pt-[72px] py-16 lg:py-24 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reducedMotion ? staggerReduced : stagger}
        >
          <h1 id="hero-heading">
            <span className="inline-flex flex-wrap items-baseline gap-x-[0.3em]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={reducedMotion ? wordRevealReduced : wordReveal}
                  className="display-thin"
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
            <Button href="#contact">Get a free records audit</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

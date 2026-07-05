"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { fadeUp, fadeUpReduced, viewOnce } from "@/lib/animations";

export function OpeningStatement() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -60]);

  return (
    <section
      ref={ref}
      className="relative bg-paper overflow-hidden py-32 lg:py-48"
      aria-labelledby="opening-heading"
    >
      <GlowBackground
        glows={[
          {
            bottom: "10%",
            right: "-5%",
            width: "800px",
            height: "800px",
            variant: "warm",
          },
        ]}
        gradient="bg-gradient-to-b from-paper via-paper-warm/30 to-paper"
      />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12"
      >
        <span className="label-mono block mb-12">[ 02 — A NOTE ON RECORDS ]</span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? fadeUpReduced : fadeUp}
        >
          <h2 id="opening-heading">
            <span className="display-thin block">Most businesses don&apos;t think</span>
            <span className="display-thin block">about their records — until</span>
            <span className="display-thin block">they have to.</span>
            <span className="display-italic block mt-4">
              We help them never have to.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? fadeUpReduced : fadeUp}
          className="mt-20 flex flex-col gap-6"
        >
          <div className="h-px w-[30%] bg-border-strong" aria-hidden />
          <a href="#services" className="label-mono hover:text-ink-deep transition-colors">
            [ 03 — SERVICES ↓ ]
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

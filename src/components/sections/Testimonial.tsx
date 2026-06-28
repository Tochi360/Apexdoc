"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { fadeUp, fadeUpReduced, viewOnce } from "@/lib/animations";

export function Testimonial() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="testimonial"
      className="relative bg-ink-night overflow-hidden py-32 lg:py-40"
      aria-labelledby="testimonial-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "0%",
            left: "50%",
            width: "900px",
            height: "900px",
            variant: "cream",
            drift: true,
          },
        ]}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <span className="label-mono-sm block mb-12 text-center">[ FILED 03.2026 ]</span>

        <motion.blockquote
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? fadeUpReduced : fadeUp}
        >
          <span
            className="absolute -top-8 -left-2 md:-left-4 text-accent-cream font-serif italic select-none pointer-events-none"
            style={{ fontSize: "120px", lineHeight: 1, opacity: 0.4 }}
            aria-hidden
          >
            &ldquo;
          </span>

          <p
            id="testimonial-heading"
            className="display-thin relative z-10"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            We had records going back ten years scattered across six filing cabinets
            and three shared drives. Apex built us a system in eight weeks. We passed
            our last audit with{" "}
            <span
              className="display-italic"
              style={{ fontSize: "inherit" }}
            >
              zero findings.
            </span>
          </p>

          <footer className="mt-10 flex items-center gap-4">
            <span className="h-px w-8 bg-accent-cream" aria-hidden />
            <div>
              <p className="label-mono-sm" style={{ color: "var(--accent-blue)" }}>
                OPERATIONS DIRECTOR
              </p>
              <p className="body-sm">Canadian Professional Services Firm</p>
            </div>
            <div
              className="ml-auto w-20 h-8 border border-white/10 rounded text-xs flex items-center justify-center text-ice-faint hidden sm:flex"
              aria-hidden
            >
              LOGO
            </div>
          </footer>
        </motion.blockquote>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="label-mono hover:text-ice-bright transition-colors duration-300"
          >
            [ 08 — CONTACT ↓ ]
          </a>
        </div>
      </div>
    </section>
  );
}

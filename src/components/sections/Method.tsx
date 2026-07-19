"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { WeightContrastHeading } from "@/components/ui/WeightContrastHeading";
import { METHOD_STEPS } from "@/lib/constants";
import { fadeUp, fadeUpReduced, stagger, staggerReduced, viewOnce } from "@/lib/animations";

export function Method() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <section
      id="method"
      className="relative bg-paper-warm overflow-hidden py-32 lg:py-40"
      aria-labelledby="method-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "-10%",
            left: "5%",
            width: "700px",
            height: "700px",
            variant: "sand",
          },
        ]}
        gradient="bg-gradient-to-b from-paper-warm via-sand/20 to-paper-warm"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <WeightContrastHeading
          as="h2"
          id="method-heading"
          lines={[
            { thin: "Four steps," },
            { thin: "", italic: "zero guesswork." },
          ]}
        />

        <p className="body-lg mt-6 max-w-xl">
          Every engagement follows the same disciplined sequence. No surprises, no
          shortcuts.
        </p>

        <div ref={containerRef} className="mt-20 relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px bg-ink-faint/30">
            <motion.div
              className="h-full bg-accent-bronze origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="lg:hidden absolute top-0 bottom-0 left-[1.5rem] w-px bg-ink-faint/30">
            <motion.div
              className="w-full bg-accent-bronze origin-top"
              style={{ height: lineWidth }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewOnce}
            variants={reducedMotion ? staggerReduced : stagger}
          >
            {METHOD_STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={reducedMotion ? fadeUpReduced : fadeUp}
                className="relative pl-12 lg:pl-0"
              >
                <p
                  className="display-thin"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {step.number}
                </p>
                <div className="w-10 h-px bg-accent-bronze mt-4 mb-6" aria-hidden />
                <h3 className="heading-lg mb-4">{step.title}</h3>
                <p className="body max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

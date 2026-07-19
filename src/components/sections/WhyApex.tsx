"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { Hairline } from "@/components/ui/Hairline";
import { WeightContrastHeading } from "@/components/ui/WeightContrastHeading";
import { PRINCIPLES } from "@/lib/constants";
import { fadeUp, fadeUpReduced, stagger, staggerReduced, viewOnce } from "@/lib/animations";

export function WhyApex() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="practice"
      className="relative bg-paper-light overflow-hidden py-32 lg:py-40"
      aria-labelledby="practice-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "10%",
            left: "-10%",
            width: "800px",
            height: "800px",
            variant: "warm",
            drift: true,
          },
        ]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <WeightContrastHeading
          as="h2"
          id="practice-heading"
          lines={[
            { thin: "The method" },
            { thin: "", italic: "matters." },
          ]}
        />

        <p className="body-lg mt-6 max-w-xl">
          Six principles that govern every engagement. Each one earned the hard way.
        </p>

        <motion.div
          className="mt-16 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? staggerReduced : stagger}
        >
          {PRINCIPLES.map((principle) => (
            <motion.div key={principle.number} variants={reducedMotion ? fadeUpReduced : fadeUp}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12">
                <div className="md:col-span-2">
                  <span className="label-index text-base">{principle.number}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="heading-md">{principle.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="body">{principle.description}</p>
                </div>
              </div>
              <Hairline variant="default" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

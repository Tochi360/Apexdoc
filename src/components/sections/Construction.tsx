"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WeightContrastHeading } from "@/components/ui/WeightContrastHeading";
import { ConstructionPhoto } from "@/components/illustrations/ConstructionPhoto";
import { CONSTRUCTION_RECORDS } from "@/lib/constants";
import { fadeUp, fadeUpReduced, stagger, staggerReduced, viewOnce } from "@/lib/animations";

export function Construction() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="industries"
      className="relative bg-ink-night overflow-hidden"
      aria-labelledby="construction-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "30%",
            right: "0%",
            width: "600px",
            height: "600px",
            variant: "cream",
          },
        ]}
        className="lg:hidden"
      />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[600px]">
        <ConstructionPhoto />

        <div className="relative py-32 lg:py-40 px-6 lg:px-12 lg:pl-16 flex flex-col justify-center">
          <GlowBackground
            glows={[
              {
                top: "20%",
                right: "-20%",
                width: "500px",
                height: "500px",
                variant: "blue",
              },
            ]}
            className="hidden lg:block"
          />

          <div className="relative z-10">
            <SectionLabel index="05" title="INDUSTRY SPECIALTY" />

            <WeightContrastHeading
              as="h2"
              id="construction-heading"
              lines={[
                { thin: "Built for ", italic: "Canadian" },
                { thin: "construction." },
              ]}
            />

            <p className="body-lg mt-6 max-w-lg">
              Specialized records management for Canadian construction firms — contracts,
              change orders, RFIs, site reports, safety documentation, drawings, and
              closeouts. From day one on site to long after handover, your project
              records are organized and protected.
            </p>

            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              variants={reducedMotion ? staggerReduced : stagger}
            >
              {CONSTRUCTION_RECORDS.map((record, i) => (
                <motion.div
                  key={record}
                  variants={reducedMotion ? fadeUpReduced : fadeUp}
                  className="flex items-baseline gap-3"
                >
                  <span className="label-index shrink-0">
                    {String(i + 1).padStart(2, "0")} ·
                  </span>
                  <span className="text-ice-warm text-[0.9375rem]">{record}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10">
              <Button href="#contact">Request a construction assessment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

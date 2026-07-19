"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { WeightContrastHeading } from "@/components/ui/WeightContrastHeading";
import { WorkspacePhoto } from "@/components/illustrations/WorkspacePhoto";
import { SMB_RECORD_TYPES } from "@/lib/constants";
import { fadeUp, fadeUpReduced, stagger, staggerReduced, viewOnce } from "@/lib/animations";

export function WhoWeServe() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="who-we-serve"
      className="relative bg-paper overflow-hidden"
      aria-labelledby="who-we-serve-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "30%",
            right: "0%",
            width: "600px",
            height: "600px",
            variant: "warm",
          },
        ]}
        className="lg:hidden"
      />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[600px]">
        <WorkspacePhoto />

        <div className="relative py-32 lg:py-40 px-6 lg:px-12 lg:pl-16 flex flex-col justify-center">
          <GlowBackground
            glows={[
              {
                top: "20%",
                right: "-20%",
                width: "500px",
                height: "500px",
                variant: "sand",
              },
            ]}
            className="hidden lg:block"
          />

          <div className="relative z-10">
            <WeightContrastHeading
              as="h2"
              id="who-we-serve-heading"
              lines={[
                { thin: "Built for ", italic: "Canadian" },
                { thin: "small business." },
              ]}
            />

            <p className="body-lg mt-6 max-w-lg">
              Records management designed for Canadian small and medium-sized businesses
              — from five-person professional firms to growing teams of five hundred.
              Financial records, HR files, client contracts, compliance documentation,
              and day-to-day correspondence — organized, accessible, and protected.
            </p>

            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              variants={reducedMotion ? staggerReduced : stagger}
            >
              {SMB_RECORD_TYPES.map((record, i) => (
                <motion.div
                  key={record}
                  variants={reducedMotion ? fadeUpReduced : fadeUp}
                  className="flex items-baseline gap-3"
                >
                  <span className="label-index shrink-0">
                    {String(i + 1).padStart(2, "0")} ·
                  </span>
                  <span className="text-ink text-[0.9375rem]">{record}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10">
              <Button href="#contact">Get a free records audit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

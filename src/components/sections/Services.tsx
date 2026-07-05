"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WeightContrastHeading } from "@/components/ui/WeightContrastHeading";
import { SERVICES } from "@/lib/constants";
import { fadeUp, fadeUpReduced, stagger, staggerReduced, viewOnce } from "@/lib/animations";

export function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative bg-paper-light overflow-hidden py-32 lg:py-40"
      aria-labelledby="services-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "10%",
            right: "-10%",
            width: "900px",
            height: "900px",
            variant: "sand",
            drift: true,
          },
        ]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel index="03" title="SERVICES" meta="05 DISCIPLINES" />

        <WeightContrastHeading
          as="h2"
          id="services-heading"
          lines={[
            { thin: "Five disciplines." },
            { thin: "", italic: "One discipline." },
          ]}
        />

        <p className="body-lg mt-6 max-w-xl">
          From initial audit to ongoing stewardship — a complete records management
          practice built for Canadian regulatory realities.
        </p>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? staggerReduced : stagger}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const gridClass =
              service.index === "04"
                ? "lg:col-span-2 lg:row-start-2 lg:col-start-1"
                : service.index === "05"
                  ? "lg:row-start-2 lg:col-start-3"
                  : "";

            return (
              <motion.div
                key={service.index}
                variants={reducedMotion ? fadeUpReduced : fadeUp}
                className={gridClass}
              >
                <Card featured={service.featured} className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="label-index">[ {service.index} ]</span>
                    <Icon className="w-5 h-5 text-ink-soft" strokeWidth={1.25} />
                  </div>
                  <h3 className="heading-md mb-3">{service.title}</h3>
                  <p className="body-sm flex-1">{service.description}</p>
                  <a
                    href="#method"
                    className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-deep text-sm font-medium mt-6 border-b border-transparent hover:border-accent-blue transition-all duration-300 w-fit"
                  >
                    Learn the method
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16">
          <a
            href="#method"
            className="label-mono hover:text-ink-deep transition-colors duration-300"
          >
            [ 04 — METHOD ↓ ]
          </a>
        </div>
      </div>
    </section>
  );
}

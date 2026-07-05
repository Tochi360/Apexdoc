"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { fadeUp, fadeUpReduced, viewOnce } from "@/lib/animations";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative bg-ink-deep overflow-hidden py-40 lg:py-48"
      aria-labelledby="cta-heading"
    >
      <GlowBackground
        glows={[
          {
            top: "0%",
            left: "-10%",
            width: "1000px",
            height: "1000px",
            variant: "bronze",
            drift: true,
          },
          {
            bottom: "0%",
            right: "-5%",
            width: "600px",
            height: "600px",
            variant: "warm",
          },
        ]}
        gradient="bg-gradient-to-b from-ink-deep via-ink-deepest to-ink-deepest"
      />
      <div className="grain-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="label-mono block mb-12 text-accent-bronze">[ READY ]</span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? fadeUpReduced : fadeUp}
        >
          <h2 id="cta-heading">
            <span className="display-thin-inverted block">Take the first step.</span>
            <span
              className="display-thin-inverted block mt-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Begin with a{" "}
              <span
                className="display-italic-inverted"
                style={{ fontSize: "inherit" }}
              >
                complimentary
              </span>
            </span>
            <span
              className="display-thin-inverted block"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              records audit.
            </span>
          </h2>

          <p className="body-lg mt-8 max-w-2xl mx-auto text-ink-whisper">
            No commitment, no obligation, no contracts. A complete diagnostic of your
            current records situation — yours to keep regardless of whether we work
            together.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button href="#inquiry-form" size="lg">
              Begin records audit
            </Button>
            <Button href="mailto:info@apexdms.ca" variant="ghostDark" size="lg">
              Contact our practice
            </Button>
          </div>

          <p className="label-mono-sm mt-12 text-ink-faint">
            RESPONSE TIME · WITHIN 24 HOURS · MONDAY TO FRIDAY
          </p>
        </motion.div>

        <motion.form
          id="inquiry-form"
          className="max-w-2xl mx-auto mt-20 bg-white/[0.04] border border-white/[0.1] rounded-lg p-8 lg:p-10 backdrop-blur-sm text-left"
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          variants={reducedMotion ? fadeUpReduced : fadeUp}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { id: "name", label: "NAME", type: "text", placeholder: "Your name" },
              { id: "email", label: "EMAIL", type: "email", placeholder: "you@company.com" },
              { id: "business", label: "BUSINESS", type: "text", placeholder: "Company name" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="label-mono-sm block mb-3 text-ink-faint">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-accent-bronze px-0 py-3 text-paper-light placeholder-ink-faint outline-none transition-colors duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="label-mono-sm block mb-3 text-ink-faint">
              MESSAGE
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your records situation..."
              className="w-full bg-transparent border-0 border-b border-white/20 focus:border-accent-bronze px-0 py-3 text-paper-light placeholder-ink-faint outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <Button type="submit" className="w-full justify-center mt-10">
            Submit inquiry
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

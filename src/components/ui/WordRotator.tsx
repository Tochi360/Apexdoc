"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/animations";

interface WordRotatorProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

export function WordRotator({
  words,
  interval = 4000,
  className = "display-italic",
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval, reducedMotion]);

  const currentWord = words[index];

  if (reducedMotion) {
    return (
      <span className={className} aria-label={`Words: ${words.join(", ")}`}>
        {words[0]}
      </span>
    );
  }

  return (
    <span
      className="inline-block relative"
      aria-live="polite"
      aria-label={`Rotating emphasis: ${words.join(", ")}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          className={`${className} block`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.7, ease: cinematicEase, delay: 0.4 }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

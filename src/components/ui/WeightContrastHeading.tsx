"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpReduced, viewOnce } from "@/lib/animations";
import { useReducedMotion } from "framer-motion";

interface WeightContrastHeadingProps {
  as?: "h1" | "h2" | "h3";
  id?: string;
  lines: { thin?: string; italic?: string }[];
  className?: string;
  size?: "display" | "large" | "medium";
  align?: "left" | "center";
}

const sizeStyles = {
  display: {
    thin: undefined as React.CSSProperties | undefined,
    italic: undefined as React.CSSProperties | undefined,
  },
  large: {
    thin: { fontSize: "clamp(1.5rem, 3vw, 2.5rem)" },
    italic: { fontSize: "clamp(1.5rem, 3vw, 2.5rem)" },
  },
  medium: {
    thin: { fontSize: "clamp(2rem, 4vw, 3rem)" },
    italic: { fontSize: "clamp(2rem, 4vw, 3rem)" },
  },
};

export function WeightContrastHeading({
  as: Tag = "h2",
  id,
  lines,
  className = "",
  size = "display",
  align = "left",
}: WeightContrastHeadingProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center" : "text-left";
  const styles = sizeStyles[size];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={reducedMotion ? fadeUpReduced : fadeUp}
    >
      <Tag className={`${alignClass} ${className}`} id={id}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line.thin && (
              <span className="display-thin" style={styles.thin}>
                {line.thin}
              </span>
            )}
            {line.italic && (
              <span className="display-italic" style={styles.italic}>
                {line.thin ? " " : ""}
                {line.italic}
              </span>
            )}
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

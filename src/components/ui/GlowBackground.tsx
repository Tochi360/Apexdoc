"use client";

import { motion, useReducedMotion } from "framer-motion";

export type GlowVariant = "warm" | "sand" | "bronze" | "blue";

interface GlowConfig {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  height: string;
  variant: GlowVariant;
  drift?: boolean;
}

interface GlowBackgroundProps {
  glows: GlowConfig[];
  className?: string;
  gradient?: string;
}

const glowGradients: Record<GlowVariant, string> = {
  warm: "radial-gradient(circle, var(--glow-warm) 0%, transparent 60%)",
  sand: "radial-gradient(circle, var(--glow-sand) 0%, transparent 65%)",
  bronze: "radial-gradient(circle, var(--glow-bronze) 0%, transparent 60%)",
  blue: "radial-gradient(circle, var(--glow-blue) 0%, transparent 60%)",
};

export function GlowBackground({
  glows,
  className = "",
  gradient = "bg-gradient-to-br from-paper-light via-paper to-paper-light",
}: GlowBackgroundProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className={`absolute inset-0 ${gradient}`} aria-hidden />
      {glows.map((glow, i) => {
        const style: React.CSSProperties = {
          top: glow.top,
          right: glow.right,
          bottom: glow.bottom,
          left: glow.left,
          width: glow.width,
          height: glow.height,
          background: glowGradients[glow.variant],
          filter: "blur(60px)",
        };

        if (glow.drift && !reducedMotion) {
          return (
            <motion.div
              key={i}
              className="absolute"
              style={style}
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
          );
        }

        return <div key={i} className="absolute" style={style} aria-hidden />;
      })}
    </div>
  );
}

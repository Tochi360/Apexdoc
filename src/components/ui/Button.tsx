"use client";

import { forwardRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: "arrow-up-right" | "arrow-right" | "none";
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs",
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-blue hover:bg-accent-blue-deep text-ink-night font-medium rounded-full transition-colors duration-300",
  ghost:
    "bg-transparent hover:bg-white/[0.04] text-ice-warm hover:text-ice-bright border border-white/15 hover:border-white/30 font-medium rounded-full transition-all duration-300",
  link: "bg-transparent text-accent-blue hover:text-ice-bright font-medium border-b border-transparent hover:border-accent-blue rounded-none px-0 py-0 transition-all duration-300",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      href,
      icon = variant === "primary" ? "arrow-up-right" : "arrow-right",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = [
      "inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4",
      variantClasses[variant],
      variant !== "link" ? sizeClasses[size] : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const IconComponent = icon === "arrow-up-right" ? ArrowUpRight : ArrowRight;
    const iconSize = variant === "link" ? "w-3.5 h-3.5" : "w-4 h-4";

    const content = (
      <>
        {children}
        {icon !== "none" && (
          <IconComponent className={iconSize} strokeWidth={1.5} aria-hidden />
        )}
      </>
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

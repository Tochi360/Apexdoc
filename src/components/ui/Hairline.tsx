type HairlineVariant = "default" | "strong" | "bronze" | "blue";

interface HairlineProps {
  variant?: HairlineVariant;
  width?: string;
  className?: string;
}

const variantClasses: Record<HairlineVariant, string> = {
  default: "bg-border",
  strong: "bg-border-strong",
  bronze: "bg-accent-bronze/40",
  blue: "bg-accent-blue",
};

export function Hairline({
  variant = "default",
  width = "w-full",
  className = "",
}: HairlineProps) {
  return (
    <div
      className={`h-px ${width} ${variantClasses[variant]} ${className}`}
      aria-hidden
    />
  );
}

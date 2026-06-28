interface CardProps {
  children: React.ReactNode;
  featured?: boolean;
  className?: string;
}

export function Card({ children, featured = false, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-white/[0.02] rounded-lg p-8 backdrop-blur-sm
        transition-all duration-500
        hover:bg-white/[0.04] hover:border-white/[0.16]
        ${featured ? "border border-border-warm relative overflow-hidden" : "border border-white/[0.08]"}
        ${className}
      `}
    >
      {featured && (
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cream to-transparent opacity-40"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}

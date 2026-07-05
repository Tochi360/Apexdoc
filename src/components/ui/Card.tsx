interface CardProps {
  children: React.ReactNode;
  featured?: boolean;
  className?: string;
}

export function Card({ children, featured = false, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-paper-brightest border rounded-lg p-8
        transition-all duration-500
        hover:bg-paper hover:border-border-strong hover:paper-shadow-soft
        ${featured ? "border-border-warm relative overflow-hidden" : "border-border"}
        ${className}
      `}
    >
      {featured && (
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-bronze to-transparent opacity-50"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}

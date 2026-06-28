interface SectionLabelProps {
  index: string;
  title: string;
  meta?: string;
  className?: string;
}

export function SectionLabel({
  index,
  title,
  meta,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <span className="label-mono">
        [ {index} — {title} ]
      </span>
      <span className="h-px w-12 bg-border-strong" aria-hidden />
      {meta && <span className="label-mono-sm">{meta}</span>}
    </div>
  );
}

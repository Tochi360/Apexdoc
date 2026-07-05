interface AnnouncementPillProps {
  text: string;
}

export function AnnouncementPill({ text }: AnnouncementPillProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper-brightest border border-border-strong">
      <div
        className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse motion-reduce:animate-none"
        aria-hidden
      />
      <span className="label-mono-sm text-ink-muted">{text}</span>
    </div>
  );
}

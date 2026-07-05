import Image from "next/image";

export function WorkspacePhoto() {
  return (
    <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        alt="Clean modern office workspace with documents and organized filing"
        fill
        className="object-cover grayscale"
        style={{
          filter: "grayscale(100%) brightness(0.95) contrast(1.05) sepia(0.15)",
        }}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-paper-light via-paper-light/50 to-transparent"
        aria-hidden
      />
    </div>
  );
}

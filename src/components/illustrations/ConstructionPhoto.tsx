import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONSTRUCTION_RECORDS } from "@/lib/constants";

export function ConstructionPhoto() {
  return (
    <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
        alt="Modern construction site with architectural documentation and blueprints"
        fill
        className="object-cover grayscale brightness-[0.6] contrast-[1.1]"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-night via-ink-night/40 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-ink-night/20 mix-blend-multiply"
        aria-hidden
      />
    </div>
  );
}

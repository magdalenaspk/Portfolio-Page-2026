import { cn } from "@/lib/utils";

// Fallback colour palette used when no real image is available
const colours = [
  ["#e8f4f8", "#b8d9e8"],
  ["#f0f8e8", "#c8e8b0"],
  ["#f8f0e8", "#e8c8a0"],
  ["#f0e8f8", "#c8b0e8"],
  ["#e8f8f0", "#b0e8c8"],
  ["#f8e8f0", "#e8b0c8"],
];

interface PlaceholderImageProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
}

export function PlaceholderImage({ src, alt, label, className }: PlaceholderImageProps) {
  const idx = (parseInt(label, 10) - 1 + colours.length) % colours.length;
  const [bg, accent] = colours[idx] ?? colours[0]!;

  // If a real image path is provided, render it
  if (src && !src.includes("PLACEHOLDER")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-contain", className)}
      />
    );
  }

  // Fallback placeholder
  return (
    <div
      className={cn("flex items-center justify-center select-none", className)}
      style={{ backgroundColor: bg }}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-4">
        <div
          className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-lg font-bold"
          style={{ backgroundColor: accent, color: "#fff" }}
        >
          {label}
        </div>
        <p className="text-xs text-neutral-400 mt-1">Image placeholder</p>
      </div>
    </div>
  );
}

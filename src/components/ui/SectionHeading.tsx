import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-500 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-12 bg-lime-300 rounded-full",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}

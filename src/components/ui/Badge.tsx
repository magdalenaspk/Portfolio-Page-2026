import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "lime" | "outline";
  className?: string;
}

const variantClasses = {
  default: "bg-neutral-100 text-neutral-700",
  lime: "bg-lime-300 text-neutral-950",
  outline: "border border-neutral-200 text-neutral-600",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
  download?: boolean | string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonElementProps extends BaseProps {
  href?: never;
  external?: never;
  download?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type ButtonProps = LinkProps | ButtonElementProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-lime-300 text-neutral-950 hover:bg-lime-200 font-semibold shadow-sm",
  secondary:
    "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-medium",
  ghost:
    "text-neutral-600 hover:text-neutral-900 underline-offset-4 hover:underline font-medium",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, download, ...linkRest } = rest;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          className={classes}
          {...(linkRest as object)}
        >
          {children}
        </a>
      );
    }
    if (download) {
      return (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = rest as ButtonElementProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
    >
      {children}
    </button>
  );
}

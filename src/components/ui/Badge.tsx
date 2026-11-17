import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "accent" | "surface" | "muted" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent-primary text-palette-text-dark font-semibold",
  surface: "bg-surface text-palette-text-primary border border-border-subtle",
  muted: "bg-bg-secondary text-palette-text-muted border border-border-subtle",
  outline: "bg-accent-primary/[0.08] text-accent-primary border border-border-accent",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "py-0.5 px-2.5 text-xs rounded-full gap-1.5",
  md: "py-1 px-3.5 text-xs rounded-full gap-2",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "surface",
      size = "md",
      dot = false,
      dotColor = "bg-accent-primary",
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium tracking-wide uppercase select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                dotColor
              )}
            />
            <span
              className={cn("relative inline-flex rounded-full h-2 w-2", dotColor)}
            />
          </span>
        )}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

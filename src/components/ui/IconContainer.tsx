import * as React from "react";
import { cn } from "@/lib/utils";

export type IconContainerVariant = "surface" | "accent" | "ghost";
export type IconContainerSize = "sm" | "md" | "lg";
export type IconContainerShape = "rounded" | "circle";

export interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IconContainerVariant;
  size?: IconContainerSize;
  shape?: IconContainerShape;
}

const variantStyles: Record<IconContainerVariant, string> = {
  surface: "bg-surface border border-border-subtle text-accent-primary shadow-subtle",
  accent: "bg-accent-primary text-palette-text-dark font-medium shadow-subtle",
  ghost: "bg-white/[0.04] border border-border-subtle text-palette-text-muted",
};

const sizeStyles: Record<IconContainerSize, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-11 w-11 text-base",
  lg: "h-14 w-14 text-lg",
};

const shapeStyles: Record<IconContainerShape, string> = {
  rounded: "rounded-xl",
  circle: "rounded-full",
};

export const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  (
    {
      className,
      variant = "surface",
      size = "md",
      shape = "rounded",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center shrink-0 transition-colors duration-200",
          variantStyles[variant],
          sizeStyles[size],
          shapeStyles[shape],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconContainer.displayName = "IconContainer";

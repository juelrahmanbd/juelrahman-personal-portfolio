import * as React from "react";
import { cn } from "@/lib/utils";

export type CardSurface = "default" | "elevated" | "subtle";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: CardSurface;
  interactive?: boolean;
}

const surfaceClasses: Record<CardSurface, string> = {
  default: "bg-surface border-border-subtle shadow-card",
  elevated: "bg-surface-elevated border-border-strong shadow-elevated",
  subtle: "bg-bg-secondary border-border-subtle shadow-subtle",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      surface = "default",
      interactive = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border p-6 transition-all duration-200 ease-out relative overflow-hidden",
          surfaceClasses[surface],
          interactive &&
            "hover:border-border-strong hover:bg-surface-elevated hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-heading-3 text-palette-text-primary font-semibold tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-body-small text-palette-text-muted mt-1 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-body-regular text-palette-text-muted", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 border-t border-border-subtle mt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string | React.ReactNode;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn("h-full w-px bg-border-subtle", className)}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn("relative flex items-center w-full my-6", className)}
          {...props}
        >
          <div className="flex-grow border-t border-border-subtle" />
          <span className="shrink-0 px-3 text-xs uppercase tracking-wider text-palette-text-subtle bg-bg-primary">
            {label}
          </span>
          <div className="flex-grow border-t border-border-subtle" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn("w-full border-t border-border-subtle my-6", className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

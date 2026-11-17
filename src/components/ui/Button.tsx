import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "icon";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-palette-text-dark font-semibold shadow-subtle hover:bg-accent-hover hover:shadow-glow-accent active:scale-[0.98]",
  secondary:
    "bg-surface text-palette-text-primary border border-border-subtle hover:bg-surface-elevated hover:border-border-strong active:scale-[0.98]",
  outline:
    "bg-transparent text-palette-text-primary border border-border-strong hover:bg-white/[0.06] hover:border-white/30 active:scale-[0.98]",
  ghost:
    "bg-transparent text-palette-text-muted hover:text-palette-text-primary hover:bg-white/[0.06] active:scale-[0.98]",
  icon:
    "bg-surface text-palette-text-muted border border-border-subtle hover:text-palette-text-primary hover:bg-surface-elevated hover:border-border-strong active:scale-[0.95]",
};

const sizeStyles: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
    md: "h-11 px-5 text-sm rounded-xl gap-2",
    lg: "h-12 px-6 text-base rounded-2xl gap-2.5",
  },
  secondary: {
    sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
    md: "h-11 px-5 text-sm rounded-xl gap-2",
    lg: "h-12 px-6 text-base rounded-2xl gap-2.5",
  },
  outline: {
    sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
    md: "h-11 px-5 text-sm rounded-xl gap-2",
    lg: "h-12 px-6 text-base rounded-2xl gap-2.5",
  },
  ghost: {
    sm: "h-9 px-3 text-xs rounded-lg gap-1.5",
    md: "h-11 px-4 text-sm rounded-xl gap-2",
    lg: "h-12 px-5 text-base rounded-2xl gap-2.5",
  },
  icon: {
    sm: "h-9 w-9 p-0 rounded-lg justify-center",
    md: "h-11 w-11 p-0 rounded-xl justify-center",
    lg: "h-12 w-12 p-0 rounded-2xl justify-center",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[variant][size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

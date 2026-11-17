import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  id?: string;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, helperText, error, required, id, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full flex flex-col space-y-1.5", className)} {...props}>
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wider text-palette-text-muted flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-accent-primary ml-1">*</span>}
            </span>
          </label>
        )}
        {children}
        {error ? (
          <p className="text-xs text-rose-400 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-palette-text-subtle">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          "w-full h-11 px-4 text-sm rounded-xl bg-bg-secondary text-palette-text-primary border transition-all duration-200 ease-out",
          "placeholder:text-palette-text-subtle",
          "focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "border-rose-500/80 focus:ring-rose-500" : "border-border-subtle hover:border-border-strong",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={cn(
          "w-full p-4 text-sm rounded-xl bg-bg-secondary text-palette-text-primary border transition-all duration-200 ease-out resize-y",
          "placeholder:text-palette-text-subtle",
          "focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "border-rose-500/80 focus:ring-rose-500" : "border-border-subtle hover:border-border-strong",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

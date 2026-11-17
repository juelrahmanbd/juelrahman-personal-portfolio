import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type TextLinkVariant = "default" | "accent" | "nav" | "subtle";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: TextLinkVariant;
  external?: boolean;
  withArrow?: boolean;
}

const variantStyles: Record<TextLinkVariant, string> = {
  default:
    "text-palette-text-primary hover:text-accent-primary underline-offset-4 hover:underline",
  accent:
    "text-accent-primary hover:text-accent-hover font-medium underline-offset-4 hover:underline",
  nav: "text-palette-text-muted hover:text-palette-text-primary font-medium tracking-wide transition-colors",
  subtle:
    "text-palette-text-subtle hover:text-palette-text-muted transition-colors",
};

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      className,
      href,
      variant = "default",
      external = false,
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const isExternal = external || href.startsWith("http");

    const content = (
      <>
        <span>{children}</span>
        {(withArrow || isExternal) && (
          <ArrowUpRight className="inline-block h-3.5 w-3.5 ml-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </>
    );

    const commonClasses = cn(
      "inline-flex items-center gap-0.5 transition-colors duration-200 ease-out group",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary rounded-sm",
      variantStyles[variant],
      className
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClasses}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={commonClasses} {...props}>
        {content}
      </Link>
    );
  }
);

TextLink.displayName = "TextLink";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerSize } from "./Container";

export type SectionSpacing = "compact" | "default" | "spacious";
export type SectionBackground = "primary" | "secondary" | "surface" | "transparent";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  background?: SectionBackground;
  contain?: boolean;
  containerSize?: ContainerSize;
  borderTop?: boolean;
  borderBottom?: boolean;
}

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24 lg:py-28",
  spacious: "py-24 sm:py-32 lg:py-36",
};

const backgroundClasses: Record<SectionBackground, string> = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  surface: "bg-surface",
  transparent: "bg-transparent",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "default",
      background = "transparent",
      contain = true,
      containerSize = "xl",
      borderTop = false,
      borderBottom = false,
      children,
      ...props
    },
    ref
  ) => {
    const content = contain ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden",
          spacingClasses[spacing],
          backgroundClasses[background],
          borderTop && "border-t border-border-subtle",
          borderBottom && "border-b border-border-subtle",
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = "Section";

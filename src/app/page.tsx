"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import {
  Button,
  Container,
  Section,
  Badge,
} from "@/components/ui";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Palette,
  Lock,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary text-palette-text-primary flex flex-col">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (First Viewport) */}
        <Hero />

        {/* 3. Section Anchors & Phase 02B Controlled Boundary */}
        <div id="about" className="sr-only" aria-hidden="true" />
        <div id="expertise" className="sr-only" aria-hidden="true" />
        <div id="projects" className="sr-only" aria-hidden="true" />
        <div id="testimonials" className="sr-only" aria-hidden="true" />

        {/* 4. Phase 02A Delivery & Boundary Notice */}
        <Section spacing="compact" background="secondary" borderTop borderBottom>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent" size="sm">
                  Phase 02A Complete
                </Badge>
                <Badge variant="outline" size="sm" dot dotColor="bg-emerald-400">
                  First Viewport Active
                </Badge>
              </div>
              <h2 className="text-heading-3 text-palette-text-primary font-bold">
                Navbar & Hero Section Established
              </h2>
              <p className="text-body-small text-palette-text-muted mt-1 max-w-2xl leading-relaxed">
                Adhering to strict Phase 02A scope control: Core sections (About, Expertise, Projects, Testimonials, Contact) are reserved for Phase 02B awaiting design review.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-surface border border-border-strong text-xs font-mono text-palette-text-muted flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-accent-primary" />
                <span>Phase 02B Scope Locked</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Phase 01 Design System & Token Foundation Reference */}
        <Section spacing="default" borderBottom>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Badge variant="surface" size="sm" icon={<Palette className="h-3 w-3 mr-1" />}>
                Tokens Reference
              </Badge>
              <h3 className="text-heading-2 text-palette-text-primary mt-2">Design Tokens & Component Hierarchy</h3>
              <p className="text-body-small text-palette-text-muted mt-1">
                Deep nocturnal plum (#190C2B), elevated surfaces (#321B49, #3F225C), and soft-pink accent (#F6D1DD).
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-palette-text-subtle">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>WCAG 2.1 AAA Compliant</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div className="rounded-xl border border-border-subtle p-4 bg-bg-primary flex flex-col justify-between h-36">
              <div className="h-6 w-6 rounded-md bg-bg-primary border border-border-strong" />
              <div>
                <p className="text-xs uppercase font-mono text-palette-text-subtle">Primary Background</p>
                <p className="text-sm font-semibold text-palette-text-primary">#190C2B</p>
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle p-4 bg-bg-secondary flex flex-col justify-between h-36">
              <div className="h-6 w-6 rounded-md bg-bg-secondary border border-border-strong" />
              <div>
                <p className="text-xs uppercase font-mono text-palette-text-subtle">Secondary Background</p>
                <p className="text-sm font-semibold text-palette-text-primary">#231136</p>
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-36">
              <div className="h-6 w-6 rounded-md bg-surface border border-border-strong" />
              <div>
                <p className="text-xs uppercase font-mono text-palette-text-subtle">Surface</p>
                <p className="text-sm font-semibold text-palette-text-primary">#321B49</p>
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle p-4 bg-accent-primary text-palette-text-dark flex flex-col justify-between h-36">
              <div className="h-6 w-6 rounded-md bg-accent-primary border border-palette-text-dark/20" />
              <div>
                <p className="text-xs uppercase font-mono text-palette-text-dark/70">Primary Accent</p>
                <p className="text-sm font-bold text-palette-text-dark">#F6D1DD</p>
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle p-4 bg-accent-secondary text-palette-text-dark flex flex-col justify-between h-36">
              <div className="h-6 w-6 rounded-md bg-accent-secondary border border-palette-text-dark/20" />
              <div>
                <p className="text-xs uppercase font-mono text-palette-text-dark/70">Secondary Accent</p>
                <p className="text-sm font-bold text-palette-text-dark">#E8AFC5</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. Contact Section Anchor Target */}
        <section id="contact" className="py-16 sm:py-20 bg-bg-secondary border-t border-border-subtle">
          <Container size="xl">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <Badge variant="accent" size="sm">
                Get In Touch
              </Badge>
              <h2 className="text-heading-2 text-palette-text-primary font-bold">
                Ready to collaborate on intelligent web solutions?
              </h2>
              <p className="text-body-regular text-palette-text-muted leading-relaxed">
                Whether you need a modern Next.js application, an enterprise WordPress solution, or an AI workflow integration, let&apos;s discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = `mailto:${siteConfig.personal.email}`;
                  }}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Send Email Inquiry
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open(siteConfig.personal.github, "_blank", "noopener,noreferrer");
                  }}
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  GitHub Profile
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="border-t border-border-subtle py-8 bg-bg-primary text-xs text-palette-text-subtle font-mono">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="font-bold text-palette-text-primary">{siteConfig.personal.wordmark}</span>
            <span>© {new Date().getFullYear()} {siteConfig.personal.fullName}. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
            <span>{siteConfig.personal.location}</span>
            <span className="hidden sm:inline-block">•</span>
            <span>{siteConfig.personal.role}</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}

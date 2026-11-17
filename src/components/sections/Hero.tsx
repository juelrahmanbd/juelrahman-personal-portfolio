"use client";

import * as React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  Layers,
  Cpu,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const yPosition =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 bg-bg-primary text-palette-text-primary"
    >
      {/* 1. Ambient Background Layer — Webgate-inspired plum and rose depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial plum glow at upper left */}
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#321B49]/40 blur-[130px]" />

        {/* Soft rose ambient tint at upper right */}
        <div className="absolute top-[15%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F6D1DD]/[0.045] blur-[140px]" />

        {/* Deep elevated plum glow behind identity card */}
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-[#3F225C]/35 blur-[120px]" />

        {/* Precision structural grid texture (low opacity, zero distraction) */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(246, 209, 221, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 2. Left Column: Editorial Headline, Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {/* Availability Pill Indicator */}
            <div className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border-strong text-xs text-palette-text-primary shadow-subtle transition-all duration-200 hover:border-accent-primary/40">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-medium tracking-wide">
                  {siteConfig.hero.badge}
                </span>
              </div>
            </div>

            {/* Main Typographic Headline */}
            <div className="space-y-3">
              <h1 className="text-display-large font-bold tracking-tight text-palette-text-primary leading-[1.08] break-words">
                {siteConfig.hero.headline.regular}{" "}
                <span className="text-accent-primary font-bold">
                  {siteConfig.hero.headline.accent}
                </span>
              </h1>
            </div>

            {/* Supporting Headline Copy */}
            <p className="text-body-large text-palette-text-muted leading-relaxed max-w-2xl font-normal">
              {siteConfig.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo("projects")}
                rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
                className="group shadow-subtle hover:shadow-glow-accent justify-center"
              >
                {siteConfig.hero.ctaPrimary.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("contact")}
                rightIcon={<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                className="justify-center"
              >
                {siteConfig.hero.ctaSecondary.label}
              </Button>
            </div>

            {/* Verification & Metadata Strip */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-5 text-xs text-palette-text-subtle font-mono">
              <div className="flex items-center gap-1.5 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-accent-primary" />
                <span>{siteConfig.personal.location}</span>
              </div>
              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-border-strong" />
              <div className="flex items-center gap-1.5 shrink-0">
                <Terminal className="h-3.5 w-3.5 text-accent-secondary" />
                <span>Full-Stack & Next.js</span>
              </div>
              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-border-strong" />
              <div className="flex items-center gap-1.5 shrink-0">
                <Sparkles className="h-3.5 w-3.5 text-accent-primary" />
                <span>AI Integrations & APIs</span>
              </div>
            </div>
          </div>

          {/* 3. Right Column: Custom Editorial Identity Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md rounded-2xl bg-surface border border-border-strong p-5 sm:p-7 shadow-card relative overflow-hidden backdrop-blur-sm group hover:border-border-accent transition-all duration-300">
              {/* Subtle top accent edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-strong flex items-center justify-center text-accent-primary font-bold shadow-subtle">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-palette-text-primary tracking-tight">
                      {siteConfig.personal.fullName}
                    </h2>
                    <p className="text-xs text-palette-text-subtle font-mono">
                      Engineering Architecture
                    </p>
                  </div>
                </div>

                <Badge variant="outline" size="sm" dot dotColor="bg-accent-primary">
                  Ready
                </Badge>
              </div>

              {/* Core Pillars Grid */}
              <div className="py-5 space-y-3.5">
                {siteConfig.hero.coreCapabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-bg-secondary border border-border-subtle hover:border-border-strong transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-surface border border-border-subtle shrink-0 mt-0.5">
                      {index === 0 && <Layers className="h-4 w-4 text-accent-primary" />}
                      {index === 1 && <Sparkles className="h-4 w-4 text-accent-secondary" />}
                      {index === 2 && <Cpu className="h-4 w-4 text-accent-primary" />}
                      {index === 3 && <Terminal className="h-4 w-4 text-palette-text-muted" />}
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-palette-text-subtle">
                        {capability.category}
                      </p>
                      <h3 className="text-xs sm:text-sm font-medium text-palette-text-primary mt-0.5">
                        {capability.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Validation Footer */}
              <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-palette-text-subtle font-mono">
                <span className="flex items-center gap-1.5 text-palette-text-muted">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  Next.js 15 & React 19
                </span>
                <span className="flex items-center gap-1.5 text-palette-text-muted">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent-primary shrink-0" />
                  WCAG AAA Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

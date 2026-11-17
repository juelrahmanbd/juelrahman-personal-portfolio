"use client";

import * as React from "react";
import {
  Button,
  Container,
  Section,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Divider,
  IconContainer,
  FormField,
  Input,
  Textarea,
  TextLink,
} from "@/components/ui";
import {
  Code2,
  Sparkles,
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Cpu,
  Palette,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-palette-text-primary">
      {/* 1. Global Navigation Bar Foundation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg-primary/80 border-b border-border-subtle">
        <Container size="xl" className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-accent-primary flex items-center justify-center text-palette-text-dark font-bold text-base shadow-subtle">
              JR
            </div>
            <div>
              <span className="font-semibold tracking-tight text-palette-text-primary text-sm sm:text-base">
                Md Juel Rahman
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-palette-text-subtle border-l border-border-strong pl-2 font-mono">
                AI & Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Badge variant="outline" size="sm" dot dotColor="bg-emerald-400">
              Foundation Active
            </Badge>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {}}
              leftIcon={<Terminal className="h-3.5 w-3.5 text-accent-primary" />}
            >
              Phase 01
            </Button>
          </div>
        </Container>
      </header>

      {/* 2. Visual Foundation Header */}
      <Section spacing="compact" background="secondary" borderBottom>
        <div className="max-w-3xl">
          <Badge variant="accent" size="sm" className="mb-4">
            Phase 01 Specification
          </Badge>
          <h1 className="text-display-small text-palette-text-primary font-bold tracking-tight mb-3">
            Personal Portfolio Foundation & Design System
          </h1>
          <p className="text-body-large text-palette-text-muted leading-relaxed">
            Engineered for <span className="text-palette-text-primary font-medium">Md Juel Rahman</span>.
            Combining deep nocturnal plum tones, soft rose-pink accents, geometric Plus Jakarta Sans
            typography, and atomic UI tokens into a production-ready system.
          </p>
        </div>
      </Section>

      {/* 3. Color Token System Specimen */}
      <Section spacing="default" borderBottom>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <Badge variant="surface" size="sm" icon={<Palette className="h-3 w-3 mr-1" />}>
              Tokens
            </Badge>
            <h2 className="text-heading-2 text-palette-text-primary mt-2">Color System & Semantic Tokens</h2>
            <p className="text-body-small text-palette-text-muted mt-1">
              Curated Webgate-inspired plum and rose palette verified against WCAG 2.1 AAA contrast benchmarks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-palette-text-subtle">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>WCAG AAA Compliant</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Primary Background */}
          <div className="rounded-xl border border-border-subtle p-4 bg-bg-primary flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-bg-primary border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Primary Background</p>
              <p className="text-sm font-semibold text-palette-text-primary">#190C2B</p>
              <p className="text-xs text-palette-text-muted mt-1">Canvas root surface</p>
            </div>
          </div>

          {/* Secondary Background */}
          <div className="rounded-xl border border-border-subtle p-4 bg-bg-secondary flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-bg-secondary border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Secondary Background</p>
              <p className="text-sm font-semibold text-palette-text-primary">#231136</p>
              <p className="text-xs text-palette-text-muted mt-1">Section transitions</p>
            </div>
          </div>

          {/* Surface */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-surface border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Surface</p>
              <p className="text-sm font-semibold text-palette-text-primary">#321B49</p>
              <p className="text-xs text-palette-text-muted mt-1">Cards & interactive modules</p>
            </div>
          </div>

          {/* Primary Accent */}
          <div className="rounded-xl border border-border-subtle p-4 bg-accent-primary text-palette-text-dark flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-accent-primary border border-palette-text-dark/20" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-dark/70">Primary Accent</p>
              <p className="text-sm font-bold text-palette-text-dark">#F6D1DD</p>
              <p className="text-xs text-palette-text-dark/80 mt-1">Key CTAs & focus rings</p>
            </div>
          </div>

          {/* Secondary Accent */}
          <div className="rounded-xl border border-border-subtle p-4 bg-accent-secondary text-palette-text-dark flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-accent-secondary border border-palette-text-dark/20" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-dark/70">Secondary Accent</p>
              <p className="text-sm font-bold text-palette-text-dark">#E8AFC5</p>
              <p className="text-xs text-palette-text-dark/80 mt-1">Muted badges & borders</p>
            </div>
          </div>

          {/* Primary Text */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-white border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Primary Text</p>
              <p className="text-sm font-semibold text-palette-text-primary">#FFFFFF</p>
              <p className="text-xs text-palette-text-muted mt-1">14.8:1 AAA contrast</p>
            </div>
          </div>

          {/* Muted Text */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-[#C8B9D2] border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Muted Text</p>
              <p className="text-sm font-semibold text-palette-text-primary">#C8B9D2</p>
              <p className="text-xs text-palette-text-muted mt-1">8.7:1 AAA contrast</p>
            </div>
          </div>

          {/* Light Surface */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface-light text-palette-text-dark flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-surface-light border border-palette-text-dark/20" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-dark/70">Light Surface</p>
              <p className="text-sm font-bold text-palette-text-dark">#FFF8FB</p>
              <p className="text-xs text-palette-text-dark/80 mt-1">Light context support</p>
            </div>
          </div>

          {/* Dark Text */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md bg-[#25152D] border border-border-strong" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Dark Text</p>
              <p className="text-sm font-semibold text-palette-text-primary">#25152D</p>
              <p className="text-xs text-palette-text-muted mt-1">10.8:1 on Accent</p>
            </div>
          </div>

          {/* Border Subtle */}
          <div className="rounded-xl border border-border-subtle p-4 bg-surface flex flex-col justify-between h-40">
            <div className="h-8 w-8 rounded-md border border-white/40 bg-white/[0.08]" />
            <div>
              <p className="text-xs uppercase font-mono text-palette-text-subtle">Subtle Border</p>
              <p className="text-sm font-semibold text-palette-text-primary">rgba(255,255,255,0.08)</p>
              <p className="text-xs text-palette-text-muted mt-1">Translucent separator</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Typography System Specimen */}
      <Section spacing="default" background="secondary" borderBottom>
        <div className="mb-8">
          <Badge variant="surface" size="sm" icon={<Layers className="h-3 w-3 mr-1" />}>
            Type Scale
          </Badge>
          <h2 className="text-heading-2 text-palette-text-primary mt-2">Plus Jakarta Sans & Fluid Hierarchy</h2>
          <p className="text-body-small text-palette-text-muted mt-1">
            Engineered with clamp-based fluid scales for seamless responsiveness from mobile (320px) to ultra-wide displays.
          </p>
        </div>

        <div className="space-y-6 rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Display Large • 44px – 72px • Bold</span>
            <div className="text-display-large text-palette-text-primary">
              AI-Focused Engineering
            </div>
          </div>

          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Heading 1 (H1) • 32px – 44px • Bold</span>
            <div className="text-heading-1 text-palette-text-primary">
              Full-Stack Web & WordPress Architecture
            </div>
          </div>

          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Heading 2 (H2) • 24px – 32px • Semibold</span>
            <div className="text-heading-2 text-palette-text-primary">
              Scalable Cloud, API Integrations & SaaS Applications
            </div>
          </div>

          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Heading 3 (H3) • 20px – 24px • Semibold</span>
            <div className="text-heading-3 text-palette-text-primary">
              Modern Performance, Accessible Patterns & Micro-Interactions
            </div>
          </div>

          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Body Large • 18px • Line Height 1.6</span>
            <p className="text-body-large text-palette-text-muted">
              Senior developer building high-velocity web platforms for international clients. Every component strictly follows unified tokens.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-palette-text-subtle block mb-1">Body Regular & Monospace • 16px / 14px</span>
            <p className="text-body-regular text-palette-text-muted mb-2">
              Body text configured for effortless readability across high-density retina displays and OLED screens.
            </p>
            <code className="text-xs font-mono bg-bg-primary px-3 py-1.5 rounded-lg border border-border-subtle text-accent-primary inline-block">
              font-family: var(--font-mono); // JetBrains Mono
            </code>
          </div>
        </div>
      </Section>

      {/* 5. Foundational Component Library Specimen */}
      <Section spacing="default" borderBottom>
        <div className="mb-8">
          <Badge variant="surface" size="sm" icon={<Cpu className="h-3 w-3 mr-1" />}>
            Components
          </Badge>
          <h2 className="text-heading-2 text-palette-text-primary mt-2">Foundational Component Library</h2>
          <p className="text-body-small text-palette-text-muted mt-1">
            Production-grade UI primitives built with strict accessibility, responsive layouts, and interactive feedback.
          </p>
        </div>

        {/* Buttons Matrix */}
        <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 mb-8">
          <h3 className="text-heading-3 text-palette-text-primary mb-2">Button System (5 Variants & 3 Scales)</h3>
          <p className="text-body-small text-palette-text-muted mb-6">
            All buttons support leading/trailing icons, fluid sizing, animated loader states, and disabled handling.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Primary Button
            </Button>
            <Button variant="secondary" size="md">
              Secondary Button
            </Button>
            <Button variant="outline" size="md">
              Outline Button
            </Button>
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <Button variant="icon" size="md" aria-label="Code repository">
              <Code2 className="h-5 w-5" />
            </Button>
          </div>

          <Divider label="States & Scales" />

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="md" isLoading>Loading State</Button>
            <Button variant="primary" size="md" disabled>Disabled State</Button>
          </div>
        </div>

        {/* Cards & Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Default Card */}
          <Card surface="default" interactive>
            <CardHeader>
              <div className="flex items-center justify-between">
                <IconContainer variant="surface" size="md">
                  <Code2 className="h-5 w-5" />
                </IconContainer>
                <Badge variant="accent" size="sm">Active</Badge>
              </div>
              <CardTitle className="mt-3">Surface Card</CardTitle>
              <CardDescription>Interactive card surface with #321B49 background and micro-border.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-small text-palette-text-muted">
                Elevates on hover with subtle transition, inner highlight, and border illumination.
              </p>
            </CardContent>
            <CardFooter>
              <TextLink href="#specimen" variant="accent" withArrow>
                Inspect Specimen
              </TextLink>
            </CardFooter>
          </Card>

          {/* Elevated Card */}
          <Card surface="elevated" interactive>
            <CardHeader>
              <div className="flex items-center justify-between">
                <IconContainer variant="accent" size="md">
                  <Sparkles className="h-5 w-5" />
                </IconContainer>
                <Badge variant="surface" size="sm">Elevated</Badge>
              </div>
              <CardTitle className="mt-3">Elevated Card</CardTitle>
              <CardDescription>Surface with #3F225C background for featured containers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-small text-palette-text-muted">
                Enhanced depth shadow and higher contrast border for prominent architectural elements.
              </p>
            </CardContent>
            <CardFooter>
              <TextLink href="#tokens" variant="default" withArrow>
                View Tokens
              </TextLink>
            </CardFooter>
          </Card>

          {/* Form Specimen Card */}
          <Card surface="subtle">
            <CardHeader>
              <CardTitle>Form Field System</CardTitle>
              <CardDescription>Accessible inputs with validation support.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <FormField label="Full Name" required id="specimen-name">
                <Input id="specimen-name" placeholder="Md Juel Rahman" readOnly />
              </FormField>
              <FormField label="Message" id="specimen-msg" helperText="Maximum 500 characters">
                <Textarea id="specimen-msg" placeholder="Project inquiry..." rows={2} readOnly />
              </FormField>
            </CardContent>
          </Card>
        </div>

        {/* Badges & Links Matrix */}
        <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-heading-4 text-palette-text-primary mb-3">Badge Variants</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Accent Badge</Badge>
                <Badge variant="surface">Surface Badge</Badge>
                <Badge variant="muted">Muted Badge</Badge>
                <Badge variant="outline">Outline Badge</Badge>
                <Badge variant="surface" dot dotColor="bg-emerald-400">Live Indicator</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-heading-4 text-palette-text-primary mb-3">Text Link Variants</h4>
              <div className="flex flex-wrap items-center gap-4">
                <TextLink href="#default" variant="default">Default Link</TextLink>
                <TextLink href="#accent" variant="accent" withArrow>Accent Link</TextLink>
                <TextLink href="#nav" variant="nav">Navigation Link</TextLink>
                <TextLink href="https://github.com/juelrahmanbd/juelrahman-personal-portfolio" variant="subtle" external>
                  GitHub Repository
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Technical Foundation & Architectural Readiness */}
      <Section spacing="compact" background="secondary">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-heading-4 text-palette-text-primary font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              Phase 01 Foundation Ready & Validated
            </h4>
            <p className="text-body-small text-palette-text-muted mt-1">
              Hostinger Node.js auto-deployment target • Next.js 15 App Router • React 19 • Tailwind CSS • Ready for Phase 02
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              leftIcon={<ExternalLink className="h-4 w-4" />}
            >
              Docs: docs/design-system.md
            </Button>
          </div>
        </div>
      </Section>

      {/* Global Footer Foundation */}
      <footer className="border-t border-border-subtle py-8 bg-bg-primary text-xs text-palette-text-subtle font-mono">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Md Juel Rahman. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Bangladesh</span>
            <span>•</span>
            <span>AI & Full-Stack Web Engineering</span>
          </div>
        </Container>
      </footer>
    </main>
  );
}

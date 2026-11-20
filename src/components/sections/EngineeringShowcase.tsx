"use client";

import React, { useState } from "react";
import {
  Layers,
  Bot,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Code2,
  ArrowRight,
} from "lucide-react";

type DomainKey = "fullstack" | "ai" | "wordpress";

interface DomainSpec {
  id: DomainKey;
  label: string;
  badge: string;
  title: string;
  summary: string;
  architecture: string[];
  standards: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
}

const domainSpecs: Record<DomainKey, DomainSpec> = {
  fullstack: {
    id: "fullstack",
    label: "Full-Stack & APIs",
    badge: "Next.js 15 & Node Architecture",
    title: "Type-Safe Full-Stack Systems & High-Throughput APIs",
    summary:
      "Engineered on Next.js 15 App Router, React 19, TypeScript strict mode, and distributed databases with sub-second response times and zero-downtime CI/CD deployment.",
    architecture: [
      "Next.js 15 App Router + React Server Components (RSC)",
      "Strict TypeScript with Zod runtime schema validation",
      "Supabase (PostgreSQL) & MongoDB connection pooling",
      "RESTful API design with OpenAPI contracts and rate limiting",
    ],
    standards: [
      { label: "Type Coverage", value: "100% Strict" },
      { label: "TTFB (Edge)", value: "< 95ms" },
      { label: "API Availability", value: "99.99%" },
    ],
    deliverables: [
      "Modular full-stack web applications with reactive client states",
      "Robust authentication (JWT, OAuth, secure HTTP-only cookies)",
      "Transactional database schemas with automated migrations",
      "Comprehensive test coverage with modular architecture",
    ],
  },
  ai: {
    id: "ai",
    label: "AI & Automation",
    badge: "Autonomous Agents & Workflow Automation",
    title: "Intelligent AI Integrations & Automated Task Pipelines",
    summary:
      "Building practical AI systems that connect modern LLMs (OpenAI, Claude) to real business databases, webhooks, and automation pipelines with strict cost and token controls.",
    architecture: [
      "OpenAI & Anthropic Claude API streaming integrations",
      "Structured JSON schema outputs and function calling",
      "Asynchronous background worker queues & webhook listeners",
      "Vector embeddings & retrieval-augmented generation (RAG)",
    ],
    standards: [
      { label: "Stream Latency", value: "< 350ms" },
      { label: "Token Efficiency", value: "Optimized" },
      { label: "Data Routing", value: "Zero Data Retention" },
    ],
    deliverables: [
      "Custom conversational agents with tool-calling capabilities",
      "Automated document processing & structured data extraction",
      "Third-party CRM, Slack, and email webhook automation flows",
      "Intelligent recommendation engines and analytics assistants",
    ],
  },
  wordpress: {
    id: "wordpress",
    label: "WordPress & SEO",
    badge: "Divi 5 & High-Performance Web",
    title: "High-Speed WordPress, Divi 5 & Technical SEO",
    summary:
      "Crafting bespoke WordPress solutions, clean Divi 5 component architectures, WooCommerce platforms, and technical SEO infrastructure for 95+ PageSpeed scores.",
    architecture: [
      "Modern PHP 8.2+ Object-Oriented theme & plugin engineering",
      "Divi 5 clean modular architecture & lightweight custom styling",
      "WooCommerce checkout funnel optimization & speed hardening",
      "Semantic HTML5, Open Graph, and JSON-LD schema markup",
    ],
    standards: [
      { label: "Google PageSpeed", value: "95+ / 100" },
      { label: "Largest Contentful Paint", value: "< 1.2s" },
      { label: "Core Web Vitals", value: "Passed (100%)" },
    ],
    deliverables: [
      "Bespoke WordPress theme and plugin development without bloat",
      "High-converting, frictionless WooCommerce eCommerce setups",
      "Zero-downtime server migrations, security scans, and SSL setup",
      "Complete Technical SEO audit, sitemaps, and indexing validation",
    ],
  },
};

export default function EngineeringShowcase() {
  const [activeDomain, setActiveDomain] = useState<DomainKey>("fullstack");
  const spec = domainSpecs[activeDomain];

  return (
    <section className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, Title, Summary, 2x2 Capability Grid */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-[#004275]" />
              <span>Architecture &amp; Engineering Standards</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight leading-[1.18]">
              Engineered for Speed, Precision &amp; Real-World Scale
            </h2>

            {/* Architectural Summary */}
            <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
              Bridging robust full-stack software development with cutting-edge AI workflows. Every application is architected with strict type safety, clean modular design patterns, responsive UI systems, and enterprise-grade performance.
            </p>

            {/* 2x2 Capability Grid with Official Line Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Item 1 */}
              <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#101820] mb-1.5 tracking-tight">
                  Full-Stack &amp; Custom Web Apps
                </h3>
                <p className="text-xs text-[#101820]/70 leading-relaxed">
                  Next.js App Router, React 19, TypeScript strict mode, and distributed relational databases.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#101820] mb-1.5 tracking-tight">
                  AI Workflows &amp; Automation
                </h3>
                <p className="text-xs text-[#101820]/70 leading-relaxed">
                  LLM agent integration, Claude &amp; OpenAI API streaming, webhooks, and task automation.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#101820] mb-1.5 tracking-tight">
                  WordPress, Divi 5 &amp; WooCommerce
                </h3>
                <p className="text-xs text-[#101820]/70 leading-relaxed">
                  OOP PHP plugins, custom themes, Divi 5 component architecture, and zero-bloat hooks.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#101820] mb-1.5 tracking-tight">
                  SEO, Speed &amp; Security
                </h3>
                <p className="text-xs text-[#101820]/70 leading-relaxed">
                  Core Web Vitals (LCP &lt; 1.2s), JSON-LD schema markup, CSP headers, and edge CDN delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Specification Card with Interactive Switcher */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[rgba(16,24,32,0.14)] shadow-sm overflow-hidden relative">
              {/* Top #004275 Accent Rule */}
              <div className="h-1.5 w-full bg-[#004275]" />

              <div className="p-6 sm:p-8">
                {/* Domain Switcher Tabs */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] mb-6">
                  {(["fullstack", "ai", "wordpress"] as DomainKey[]).map((key) => {
                    const isActive = activeDomain === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveDomain(key)}
                        className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 text-center select-none ${
                          isActive
                            ? "bg-white text-[#004275] shadow-xs border border-[rgba(16,24,32,0.08)]"
                            : "text-[#101820]/70 hover:text-[#101820]"
                        }`}
                      >
                        {domainSpecs[key].label}
                      </button>
                    );
                  })}
                </div>

                {/* Active Domain Header */}
                <div className="mb-5 pb-5 border-b border-[rgba(16,24,32,0.1)]">
                  <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#004275] bg-[#004275]/10 px-2.5 py-1 rounded-md mb-2">
                    {spec.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101820] tracking-tight mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#101820]/70 leading-relaxed">
                    {spec.summary}
                  </p>
                </div>

                {/* Verified Benchmarks */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                  {spec.standards.map((std, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F8FB] rounded-xl p-3 border border-[rgba(16,24,32,0.08)] text-center"
                    >
                      <div className="text-[10px] sm:text-xs text-[#101820]/60 font-medium">
                        {std.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#004275] mt-0.5">
                        {std.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Concrete Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101820]/80 mb-3">
                    Concrete Deliverables &amp; Engineering Standards
                  </h4>
                  <ul className="space-y-2.5">
                    {spec.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101820]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#004275] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="bg-[#F5F8FB] px-6 sm:px-8 py-3.5 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between text-xs">
                <span className="text-[#101820]/60 font-medium">
                  Active Spec: <strong className="text-[#004275]">{spec.label}</strong>
                </span>
                <a
                  href="#contact"
                  className="font-semibold text-[#004275] hover:text-[#003157] inline-flex items-center gap-1 group"
                >
                  <span>Request Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

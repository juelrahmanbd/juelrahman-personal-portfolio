"use client";

import React from "react";
import { TechBadge } from "@/components/icons/TechIcons";
import {
  Bot,
  Layers,
  Cpu,
  Server,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function TechnicalExpertise() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase font-mono font-bold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Bespoke Stack for Scalable Systems &amp; Intelligent AI
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A comprehensive, battle-tested technology architecture curated over 7&ndash;8 years of shipping software across modern web, cloud databases, backend infrastructure, and machine intelligence.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
          {/* ========================================================= */}
          {/* BENTO CARD 1: Autonomous AI & LLM Systems (Large 7 cols)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center text-[#004275] group-hover:scale-105 transition-transform shadow-2xs">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#004275] tracking-wider block">
                      Core Intelligence
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      Autonomous AI &amp; LLM Automation
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                  Streaming &amp; RAG
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                Engineering production-grade AI systems that link foundation LLMs (OpenAI, Anthropic Claude, Gemini) with live business data, pgvector semantic search, and tool-calling execution pipelines with sub-second stream latency.
              </p>

              {/* Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>OpenAI &amp; Anthropic Claude Streaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Retrieval-Augmented Generation (RAG)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deterministic Zod Output Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Token Budgeting &amp; Latency Caching</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <TechBadge name="OpenAI" label="OpenAI API" />
              <TechBadge name="Claude" label="Claude 3.5 Sonnet" />
              <TechBadge name="Python" label="Python" />
              <TechBadge name="Supabase" label="Supabase / pgvector" />
              <TechBadge name="REST API" label="Tool Calling &amp; Webhooks" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 2: Full-Stack Next.js 15 (Medium 5 cols)       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 transition-transform shadow-2xs">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-sky-700 tracking-wider block">
                      Frontend &amp; RSC
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      Next.js 15 &amp; React 19
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
                  100% Strict TS
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                Modern application development utilizing React Server Components, server actions, progressive hydration, and modular UI systems with strict type boundaries.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Next.js 15 App Router &amp; Server Actions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tailwind CSS Utility Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Optimistic UI &amp; State Management</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <TechBadge name="Next.js" label="Next.js 15" />
              <TechBadge name="React" label="React 19" />
              <TechBadge name="TypeScript" label="TypeScript" />
              <TechBadge name="Tailwind CSS" label="Tailwind CSS" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 3: Backend & Infrastructure (Medium 5 cols)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-2xs">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-emerald-700 tracking-wider block">
                      Backend &amp; Infrastructure
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      Cloud, APIs &amp; Databases
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  PostgreSQL / Edge
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                Relational and document storage design, connection pooling, automated schema migrations, authenticated endpoints, and containerized deployments.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supabase &amp; PostgreSQL connection pooling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>REST &amp; OpenAPI Type-Safe Endpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Docker containers &amp; CI/CD deployment</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges for Backend & Infrastructure */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <TechBadge name="Supabase" label="Supabase" />
              <TechBadge name="PostgreSQL" label="PostgreSQL" />
              <TechBadge name="MongoDB" label="MongoDB" />
              <TechBadge name="Node.js" label="Node.js" />
              <TechBadge name="Docker" label="Docker" />
              <TechBadge name="Edge Functions" label="Edge Functions" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 4: WordPress Ecosystem (Large 7 cols)          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center text-[#004275] group-hover:scale-105 transition-transform shadow-2xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#004275] tracking-wider block">
                      CMS Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      WordPress Ecosystem &amp; Performance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-[#004275] bg-[#004275]/10 border border-[#004275]/20 px-2.5 py-1 rounded-full">
                  Full-Service Depth
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                End-to-end WordPress solutions across custom themes, custom plugins, Divi 5, Elementor, and WooCommerce &mdash; engineered with clean object-oriented PHP, Google Core Web Vitals optimization, and robust staging protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Themes &amp; Custom Plugin Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Divi 5 &amp; Elementor Pro Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WooCommerce Custom Funnels &amp; Checkouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Performance, Speed &amp; Technical SEO (Rank Math)</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges for WordPress */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <TechBadge name="WordPress" label="WordPress" />
              <TechBadge name="Divi 5" label="Divi 5" />
              <TechBadge name="Elementor" label="Elementor" />
              <TechBadge name="WooCommerce" label="WooCommerce" />
              <TechBadge name="PHP" label="PHP 8.2+" />
              <TechBadge name="Rank Math" label="Rank Math" />
              <TechBadge name="PageSpeed Insights" label="PageSpeed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

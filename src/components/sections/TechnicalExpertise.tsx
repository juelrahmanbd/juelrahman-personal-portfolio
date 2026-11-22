"use client";

import React from "react";
import {
  Bot,
  Layers,
  Cpu,
  Database,
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
            <span className="tracking-wider uppercase">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Bespoke Stack for Scalable Systems &amp; Intelligent AI
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A comprehensive, battle-tested technology architecture curated over 7–8 years of shipping software across modern web, cloud databases, and machine intelligence.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
          {/* ========================================================= */}
          {/* BENTO CARD 1: Autonomous AI & Task Automation (Large)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center text-[#004275] group-hover:scale-105 transition-transform">
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
                Engineering production-grade AI systems that link foundation LLMs (OpenAI, Claude, Gemini) with business data, vector search, webhook listeners, and tool-calling execution pipelines with sub-second stream latency.
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

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              {["OpenAI API", "Claude 3.5 Sonnet", "LangChain / AI SDK", "Pinecone / pgvector", "Function Calling", "Webhooks", "JSON Schema"].map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 2: Full-Stack Web Engineering (Medium)         */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-105 transition-transform">
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

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Zod", "Server Actions"].map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 3: Cloud, APIs & Database Systems (Medium)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-emerald-700 tracking-wider block">
                      Data &amp; Cloud
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      APIs &amp; Database Scalability
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  PostgreSQL / Edge
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                Relational and document storage design, connection pooling, automated schema migrations, authenticated endpoints, and sub-second response times.
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

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              {["Supabase", "PostgreSQL", "MongoDB", "Node.js", "Docker", "Edge Functions"].map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 4: High-Performance WordPress & Divi 5 (Large)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center text-[#004275] group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#004275] tracking-wider block">
                      CMS Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
                      WordPress, Divi 5 &amp; Performance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-[#004275] bg-[#004275]/10 border border-[#004275]/20 px-2.5 py-1 rounded-full">
                  95+ PageSpeed
                </span>
              </div>

              <p className="text-sm text-[#101820]/75 leading-relaxed mb-6">
                Specialized in the latest Divi 5 modular foundation, clean PHP 8.2+ object-oriented engineering, WooCommerce custom funnel optimization, and technical SEO structure without theme bloat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Divi 5 Modular Architecture (No Bloat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Core Web Vitals 100% Passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WooCommerce Custom Funnels &amp; Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-Downtime Subdomain Staging Protocols</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              {["Divi 5", "WordPress Core", "PHP 8.2+", "WooCommerce", "Technical SEO", "Speed Optimization"].map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

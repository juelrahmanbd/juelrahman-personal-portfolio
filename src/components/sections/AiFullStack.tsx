"use client";

import React from "react";
import { TechIcon, TechBadge } from "@/components/icons/TechIcons";
import {
  Bot,
  Layers,
  Zap,
  ShieldCheck,
  Code2,
  Database,
} from "lucide-react";

export default function AiFullStack() {

  return (
    <section
      id="ai-fullstack"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Bot className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase">ENGINEERING DEEP DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            AI &amp; Full-Stack Development
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Bridging cutting-edge artificial intelligence with production-ready software engineering: sub-second streaming, strict runtime schema validation, and high-concurrency systems.
          </p>
        </div>

        {/* 2-Column Technical Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* ========================================================= */}
          {/* PILLAR 1: Autonomous AI & LLM Systems                    */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center text-[#004275] shadow-2xs">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#004275] tracking-wider block">
                      Architecture 01
                    </span>
                    <h3 className="text-xl font-bold text-[#101820]">
                      Autonomous AI &amp; LLM Pipelines
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center">
                    <TechIcon name="OpenAI" className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center">
                    <TechIcon name="Claude" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#101820]/80 leading-relaxed mb-6">
                Connecting foundation models to live business infrastructure without hallucinations or runaway API bills through structured output contracts and deterministic tool sandboxes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <Zap className="w-4 h-4 text-[#004275]" />
                    <span>Streaming Token Delivery (&lt; 350ms TTFB)</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    Edge-streamed responses via OpenAI and Claude APIs with optimistic UI rendering and cancellation tokens.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Deterministic Zod Schema Contracts</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    Guaranteed structured JSON outputs preventing invalid runtime states across database writes and tool calls.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <Database className="w-4 h-4 text-purple-600" />
                    <span>Hybrid RAG &amp; Vector Search</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    Dense vector embeddings paired with lexical full-text search (pgvector / Pinecone) for accurate document retrieval.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Metric Footer */}
            <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <TechBadge name="OpenAI" label="OpenAI API" />
                <TechBadge name="Claude" label="Claude 3.5" />
                <TechBadge name="Python" label="Python" />
              </div>
              <span className="font-mono font-bold text-[#004275] bg-[#004275]/10 px-2 py-0.5 rounded">
                &lt; 350ms First Token
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PILLAR 2: High-Performance Full-Stack Systems            */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shadow-2xs">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-sky-700 tracking-wider block">
                      Architecture 02
                    </span>
                    <h3 className="text-xl font-bold text-[#101820]">
                      Full-Stack Next.js 15 &amp; APIs
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center">
                    <TechIcon name="Next.js" className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center">
                    <TechIcon name="React" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#101820]/80 leading-relaxed mb-6">
                Type-safe, distributed web applications designed for high throughput, sub-second edge rendering, transactional integrity, and zero client layout shift.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <Code2 className="w-4 h-4 text-sky-700" />
                    <span>Next.js 15 App Router &amp; React 19 RSC</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    Zero-bundle server components, server actions, parallel routing, and edge caching for instant navigation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <Database className="w-4 h-4 text-emerald-600" />
                    <span>PostgreSQL &amp; Supabase Connection Pooling</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    High-efficiency relational schemas, automated migration pipelines, and row-level security (RLS) policies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#101820] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#004275]" />
                    <span>Enterprise Auth &amp; Rate Limiting</span>
                  </div>
                  <p className="text-xs text-[#101820]/70 leading-relaxed">
                    Secure HTTP-only cookies, OAuth 2.0 flows, and Redis/Edge token-bucket rate limiting against DDoS.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Quality Metric Footer */}
            <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <TechBadge name="PostgreSQL" label="PostgreSQL" />
                <TechBadge name="Docker" label="Docker" />
                <TechBadge name="TypeScript" label="TypeScript" />
              </div>
              <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                100% Strict TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Live Visual Code / Agent Workflow Card */}
        <div className="bg-[#101820] rounded-3xl p-6 sm:p-8 border border-white/10 text-white shadow-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-white/60">
                agent_orchestration_pipeline.ts — Production Workflow
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
              Verified Pipeline: 99.99% Execution Reliability
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <span className="text-[#004275] text-sky-400 font-bold block mb-2">01. INTAKE &amp; VALIDATION</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Raw user prompt &rarr; Context grounding via pgvector semantic search &rarr; Zod schema input sanitation &rarr; Token budget verification.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <span className="text-emerald-400 font-bold block mb-2">02. MODEL REASONING &amp; TOOLS</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Anthropic Claude 3.5 Sonnet / GPT-4o stream &rarr; Tool-call discovery &rarr; Sandboxed execution &rarr; Deterministic state updates.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <span className="text-purple-400 font-bold block mb-2">03. EDGE STREAMING RESPONSE</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                ReadableStream &rarr; RSC Server Action &rarr; Optimistic UI component rendering with sub-350ms TTFB directly into client DOM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

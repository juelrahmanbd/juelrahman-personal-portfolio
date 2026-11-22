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
      className="py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Spotlights */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-cyan-400 shadow-xs mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-widest uppercase font-mono font-bold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bespoke Stack for Scalable Systems &amp;{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Intelligent AI
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A production-proven technology architecture combining machine intelligence, deterministic modern web frameworks, resilient cloud databases, and the complete WordPress platform.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
          {/* ========================================================= */}
          {/* BENTO CARD 1: Autonomous AI & LLM Systems (Large 7 cols)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-cyan-400 tracking-wider block">
                      Core Intelligence
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Autonomous AI &amp; LLM Automation
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-full">
                  Streaming &bull; RAG
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Engineering production-grade AI systems that link foundation LLMs (OpenAI, Anthropic Claude, Gemini) with live business data, pgvector semantic search, and tool-calling execution pipelines with low stream latency.
              </p>

              {/* Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OpenAI &amp; Claude Streaming SDK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Retrieval-Augmented Generation (RAG)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deterministic Zod Output Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>pgvector Cosine Similarity Indexing</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="OpenAI" label="OpenAI API" />
              <TechBadge name="Claude" label="Claude 3.5 Sonnet" />
              <TechBadge name="Python" label="Python" />
              <TechBadge name="pgvector" label="pgvector" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 2: Full-Stack Next.js 15 & React 19 (5 cols)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-400 tracking-wider block">
                      Frontend &amp; Edge
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Full-Stack Next.js 15
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded-full">
                  React 19 &bull; TS
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Modern web platforms utilizing React 19 Server Components, App Router, strict TypeScript, Tailwind CSS, and edge caching for sub-second interactions.
              </p>

              {/* Architecture Points */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React 19 Server Components &amp; Actions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Strict TypeScript &amp; Schema Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Next.js App Router &amp; Route Handlers</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="Next.js" label="Next.js 15" />
              <TechBadge name="React" label="React 19" />
              <TechBadge name="TypeScript" label="TypeScript" />
              <TechBadge name="Tailwind CSS" label="Tailwind CSS" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 3: Backend & Infrastructure (5 cols)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-emerald-400 tracking-wider block">
                      Data &amp; Cloud
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Backend &amp; Infrastructure
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                  Containerized
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Production backend architectures utilizing Supabase, relational PostgreSQL, document-based MongoDB, Node.js microservices, Docker containers, and global Edge Functions.
              </p>

              {/* Architecture Points */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Supabase Database, Auth &amp; Realtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PostgreSQL &amp; MongoDB Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Docker Containers &amp; Edge Functions</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="Supabase" label="Supabase" />
              <TechBadge name="PostgreSQL" label="PostgreSQL" />
              <TechBadge name="MongoDB" label="MongoDB" />
              <TechBadge name="Node.js" label="Node.js" />
              <TechBadge name="Docker" label="Docker" />
              <TechBadge name="Edge Functions" label="Edge Functions" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 4: Enterprise WordPress Ecosystem (7 cols)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-purple-400 tracking-wider block">
                      CMS Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      WordPress Ecosystem &amp; Performance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-950/60 border border-purple-800/50 px-2.5 py-1 rounded-full">
                  Full Spectrum
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                End-to-end WordPress engineering from custom themes and plugins in OOP PHP 8.2+ to modern Divi 5 and Elementor Pro visual frameworks, WooCommerce eCommerce funnels, and Rank Math technical SEO.
              </p>

              {/* Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Themes, Plugins &amp; Gutenberg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Divi 5 &amp; Elementor Pro Theme Builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WooCommerce Customization &amp; Webhooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Technical SEO &amp; Core Web Vitals Tuning</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="WordPress" label="WordPress" />
              <TechBadge name="Divi 5" label="Divi 5" />
              <TechBadge name="Elementor" label="Elementor Pro" />
              <TechBadge name="WooCommerce" label="WooCommerce" />
              <TechBadge name="PHP" label="PHP 8.2+" />
              <TechBadge name="Rank Math" label="Rank Math" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

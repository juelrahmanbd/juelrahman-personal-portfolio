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
      className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-blue-700 mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-widest uppercase font-mono font-bold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Bespoke Stack for Scalable Systems &amp;{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Intelligent AI
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A production-proven technology architecture combining machine intelligence, deterministic modern web frameworks, resilient cloud databases, and the complete WordPress platform.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
          {/* ========================================================= */}
          {/* BENTO CARD 1: Autonomous AI & LLM Systems (Large 7 cols)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-600 tracking-wider block">
                      Core Intelligence
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      Autonomous AI &amp; LLM Automation
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                  Streaming &bull; RAG
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Engineering production-grade AI systems that link foundation LLMs (OpenAI, Anthropic Claude, Gemini) with live business data, pgvector semantic search, and tool-calling execution pipelines with low stream latency.
              </p>

              {/* Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>OpenAI &amp; Claude Streaming SDK</span>
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
                  <span>pgvector Cosine Similarity Indexing</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <TechBadge name="OpenAI" label="OpenAI API" className="bg-slate-50 border-slate-200 hover:border-blue-400" />
              <TechBadge name="Claude" label="Claude 3.5 Sonnet" className="bg-slate-50 border-slate-200 hover:border-blue-400" />
              <TechBadge name="Python" label="Python" className="bg-slate-50 border-slate-200 hover:border-blue-400" />
              <TechBadge name="pgvector" label="pgvector" className="bg-slate-50 border-slate-200 hover:border-blue-400" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 2: Full-Stack Next.js 15 & React 19 (5 cols)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-indigo-600 tracking-wider block">
                      Frontend &amp; Edge
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      Full-Stack Next.js 15
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                  React 19 &bull; TS
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Modern web platforms utilizing React 19 Server Components, App Router, strict TypeScript, Tailwind CSS, and edge caching for sub-second interactions.
              </p>

              {/* Architecture Points */}
              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>React 19 Server Components &amp; Actions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Strict TypeScript &amp; Schema Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Next.js App Router &amp; Route Handlers</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <TechBadge name="Next.js" label="Next.js 15" className="bg-slate-50 border-slate-200 hover:border-indigo-400" />
              <TechBadge name="React" label="React 19" className="bg-slate-50 border-slate-200 hover:border-indigo-400" />
              <TechBadge name="TypeScript" label="TypeScript" className="bg-slate-50 border-slate-200 hover:border-indigo-400" />
              <TechBadge name="Tailwind CSS" label="Tailwind CSS" className="bg-slate-50 border-slate-200 hover:border-indigo-400" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 3: Backend & Infrastructure (5 cols)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-emerald-600 tracking-wider block">
                      Data &amp; Cloud
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      Backend &amp; Infrastructure
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Containerized
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Production backend architectures utilizing Supabase, relational PostgreSQL, document-based MongoDB, Node.js microservices, Docker containers, and global Edge Functions.
              </p>

              {/* Architecture Points */}
              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supabase Database, Auth &amp; Realtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PostgreSQL &amp; MongoDB Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Docker Containers &amp; Edge Functions</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <TechBadge name="Supabase" label="Supabase" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
              <TechBadge name="PostgreSQL" label="PostgreSQL" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
              <TechBadge name="MongoDB" label="MongoDB" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
              <TechBadge name="Node.js" label="Node.js" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
              <TechBadge name="Docker" label="Docker" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
              <TechBadge name="Edge Functions" label="Edge Functions" className="bg-slate-50 border-slate-200 hover:border-emerald-400" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CARD 4: Enterprise WordPress Ecosystem (7 cols)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-purple-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-purple-600 tracking-wider block">
                      CMS Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      WordPress Ecosystem &amp; Performance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                  Full Spectrum
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                End-to-end WordPress engineering from custom themes and plugins in OOP PHP 8.2+ to modern Divi 5 and Elementor Pro visual frameworks, WooCommerce eCommerce funnels, and Rank Math technical SEO.
              </p>

              {/* Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Themes, Plugins &amp; Gutenberg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Divi 5 &amp; Elementor Pro Theme Builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WooCommerce Customization &amp; Webhooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Technical SEO &amp; Core Web Vitals Tuning</span>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <TechBadge name="WordPress" label="WordPress" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
              <TechBadge name="Divi 5" label="Divi 5" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
              <TechBadge name="Elementor" label="Elementor Pro" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
              <TechBadge name="WooCommerce" label="WooCommerce" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
              <TechBadge name="PHP" label="PHP 8.2+" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
              <TechBadge name="Rank Math" label="Rank Math" className="bg-slate-50 border-slate-200 hover:border-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

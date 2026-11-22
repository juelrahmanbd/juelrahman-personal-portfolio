"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";
import {
  ArrowRight,
  ShieldCheck,
  Bot,
  Layers,
  Sparkles,
  ExternalLink,
  Terminal,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background Architectural Mesh & Soft Ambient Lights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/8 via-cyan-400/5 to-indigo-500/8 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Two-Column Cinematic Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Value Proposition & CTAs          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800">
                Available for Senior AI &amp; Full-Stack Engagements
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-[11px] font-mono font-semibold text-blue-600">Global Remote</span>
            </div>

            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-blue-600" />
                AI ENGINEER &bull; FULL-STACK ARCHITECT
              </span>
            </div>

            {/* Primary Headline with Editorial Serif Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-slate-950 leading-[1.02] mb-4">
              {siteConfig.name}
            </h1>

            {/* Subheadline with Elegant Serif Contrast */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-700 leading-snug mb-5">
              Architecting{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Intelligent
              </span>{" "}
              AI Systems &amp; Scalable Web Applications
            </p>

            {/* Value Statement */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              Engineering robust digital products bridging foundation LLMs, autonomous multi-agent pipelines, deterministic full-stack Next.js applications, and comprehensive enterprise WordPress solutions across custom themes, plugins, Divi 5, and WooCommerce.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Featured Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Technical Call</span>
              </a>

              <a
                href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}` : "#contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>WhatsApp Direct</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Technical Discipline Pillars (Verified Capabilities, No Fabricated Metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-0.5">
                  AI Systems
                </div>
                <div className="text-xs text-slate-700 font-medium">LLMs &bull; RAG &bull; Agents</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-0.5">
                  Full-Stack
                </div>
                <div className="text-xs text-slate-700 font-medium">Next.js 15 &bull; React 19</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-0.5">
                  Infrastructure
                </div>
                <div className="text-xs text-slate-700 font-medium">Supabase &bull; Docker &bull; SQL</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-0.5">
                  WordPress
                </div>
                <div className="text-xs text-slate-700 font-medium">Themes &bull; Plugins &bull; Divi 5</div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real Portrait Photo in Cyber-Card Frame     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft Ambient Light Halo */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-indigo-500/15 rounded-[36px] blur-2xl -z-10 opacity-70 animate-pulse-slow"
                aria-hidden="true"
              />

              {/* Main Architectural Glass Frame */}
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden group">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-blue-500/40 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-blue-500/40 font-mono text-[10px] select-none">+</span>
                <span className="absolute bottom-2 left-2 text-blue-500/40 font-mono text-[10px] select-none">+</span>
                <span className="absolute bottom-2 right-2 text-blue-500/40 font-mono text-[10px] select-none">+</span>

                {/* Top Telemetry Header Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 px-1 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>SYSTEM ID // JUEL-01</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Portrait Photo Container */}
                <div className="relative w-full aspect-[819/1024] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                  <Image
                    src="/images/juel-hero.jpg"
                    alt="Md. Juel Rahman — AI Engineer & Full-Stack Web Developer"
                    width={819}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay for Clean Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none opacity-80" />

                  {/* Floating Identity Chip Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 shadow-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold tracking-tight text-slate-900">Md. Juel Rahman</span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        ONLINE
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">
                      AI-Driven Architecture &bull; Full-Stack &bull; WordPress
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Strip */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Verified Solutions Consultant</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-blue-600">
                    Global Client Base
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Foundation Capability Banners Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Capability 1 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="OpenAI" className="w-4 h-4" />
                  <TechIcon name="Claude" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                Autonomous AI &amp; LLMs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                OpenAI &amp; Claude streaming, function calling, pgvector semantic search, and automated agent workflows.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-600 font-semibold">
              <span>RAG &bull; Tool Calling</span>
            </div>
          </div>

          {/* Capability 2 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="Next.js" className="w-4 h-4" />
                  <TechIcon name="React" className="w-4 h-4" />
                  <TechIcon name="TypeScript" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-indigo-600 transition-colors">
                Full-Stack Next.js 15
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                React 19 Server Components, App Router, TypeScript strict contracts, Zod schemas, and low-latency APIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-indigo-600 font-semibold">
              <span>RSC &bull; TypeScript</span>
            </div>
          </div>

          {/* Capability 3 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                  <TechIcon name="WordPress" className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="WooCommerce" className="w-4 h-4" />
                  <TechIcon name="Divi 5" className="w-4 h-4" />
                  <TechIcon name="Elementor" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-purple-600 transition-colors">
                WordPress Ecosystem
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom themes &amp; plugins, Divi 5, Elementor Pro, WooCommerce stores, and technical SEO with Rank Math.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-purple-600 font-semibold">
              <span>Themes &bull; Divi &bull; Woo</span>
            </div>
          </div>

          {/* Capability 4 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="Docker" className="w-4 h-4" />
                  <TechIcon name="PostgreSQL" className="w-4 h-4" />
                  <TechIcon name="Supabase" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-emerald-600 transition-colors">
                Backend &amp; Infrastructure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supabase, PostgreSQL, MongoDB, Node.js microservices, Docker containers, and edge deployment automation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-600 font-semibold">
              <span>Docker &bull; SQL &bull; Node</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

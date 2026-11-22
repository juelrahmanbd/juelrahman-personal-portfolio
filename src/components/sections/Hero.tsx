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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#07090E] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background Architectural Mesh & Radial Lights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none -z-10"
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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.5)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200">
                Available for Senior AI &amp; Full-Stack Engagements
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="text-[11px] font-mono text-cyan-400">Global Remote</span>
            </div>

            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                AI ENGINEER &bull; FULL-STACK ARCHITECT
              </span>
            </div>

            {/* Primary Headline with Editorial Serif Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white leading-[1.02] mb-4">
              {siteConfig.name}
            </h1>

            {/* Subheadline with Elegant Serif Contrast */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 leading-snug mb-5">
              Architecting{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Intelligent
              </span>{" "}
              AI Systems &amp; Scalable Web Applications
            </p>

            {/* Value Statement */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              Engineering robust digital products bridging foundation LLMs, autonomous multi-agent pipelines, deterministic full-stack Next.js applications, and comprehensive enterprise WordPress solutions across custom themes, plugins, Divi 5, and WooCommerce.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border border-white/20 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Featured Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Technical Call</span>
              </a>

              <a
                href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}` : "#contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>WhatsApp Direct</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Technical Discipline Pillars (Verified Capabilities, No Fabricated Metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/[0.08]">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-0.5">
                  AI Systems
                </div>
                <div className="text-xs text-slate-300 font-medium">LLMs &bull; RAG &bull; Agents</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-0.5">
                  Full-Stack
                </div>
                <div className="text-xs text-slate-300 font-medium">Next.js 15 &bull; React 19</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
                  Infrastructure
                </div>
                <div className="text-xs text-slate-300 font-medium">Supabase &bull; Docker &bull; SQL</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-0.5">
                  WordPress
                </div>
                <div className="text-xs text-slate-300 font-medium">Themes &bull; Plugins &bull; Divi 5</div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real Portrait Photo in Cyber-Card Frame     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glowing Ambient Halo */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/20 rounded-[36px] blur-2xl -z-10 opacity-70 animate-pulse-slow"
                aria-hidden="true"
              />

              {/* Main Architectural Glass Frame */}
              <div className="relative rounded-3xl border border-white/[0.12] bg-[#0D111A]/90 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-cyan-400/50 font-mono text-[10px] select-none">+</span>
                <span className="absolute top-2 right-2 text-cyan-400/50 font-mono text-[10px] select-none">+</span>
                <span className="absolute bottom-2 left-2 text-cyan-400/50 font-mono text-[10px] select-none">+</span>
                <span className="absolute bottom-2 right-2 text-cyan-400/50 font-mono text-[10px] select-none">+</span>

                {/* Top Telemetry Header Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08] px-1 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SYSTEM ID // JUEL-01</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Portrait Photo Container */}
                <div className="relative w-full aspect-[819/1024] rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1]">
                  <Image
                    src="/images/juel-hero.jpg"
                    alt="Md. Juel Rahman — AI Engineer & Full-Stack Web Developer"
                    width={819}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay for Cinematic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent pointer-events-none opacity-90" />

                  {/* Floating Identity Chip Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0D111A]/85 backdrop-blur-xl border border-white/[0.14] text-white shadow-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold tracking-tight text-white">Md. Juel Rahman</span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        ONLINE
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      AI-Driven Architecture &bull; Full-Stack &bull; WordPress
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Strip */}
                <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Verified Solutions Consultant</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-cyan-400">
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
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="OpenAI" className="w-4 h-4" />
                  <TechIcon name="Claude" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-cyan-300 transition-colors">
                Autonomous AI &amp; LLMs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                OpenAI &amp; Claude streaming, function calling, pgvector semantic search, and automated agent workflows.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span>RAG &bull; Tool Calling</span>
            </div>
          </div>

          {/* Capability 2 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="Next.js" className="w-4 h-4" />
                  <TechIcon name="React" className="w-4 h-4" />
                  <TechIcon name="TypeScript" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-cyan-300 transition-colors">
                Full-Stack Next.js 15
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                React 19 Server Components, App Router, TypeScript strict contracts, Zod schemas, and low-latency APIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-blue-400">
              <span>RSC &bull; TypeScript</span>
            </div>
          </div>

          {/* Capability 3 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <TechIcon name="WordPress" className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="WooCommerce" className="w-4 h-4" />
                  <TechIcon name="Divi 5" className="w-4 h-4" />
                  <TechIcon name="Elementor" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-purple-300 transition-colors">
                WordPress Ecosystem
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom themes &amp; plugins, Divi 5, Elementor Pro, WooCommerce stores, and technical SEO with Rank Math.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-purple-400">
              <span>Themes &bull; Divi &bull; Woo</span>
            </div>
          </div>

          {/* Capability 4 */}
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <TechIcon name="Docker" className="w-4 h-4" />
                  <TechIcon name="PostgreSQL" className="w-4 h-4" />
                  <TechIcon name="Supabase" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-emerald-300 transition-colors">
                Backend &amp; Infrastructure
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supabase, PostgreSQL, MongoDB, Node.js microservices, Docker containers, and edge deployment automation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-emerald-400">
              <span>Docker &bull; SQL &bull; Node</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

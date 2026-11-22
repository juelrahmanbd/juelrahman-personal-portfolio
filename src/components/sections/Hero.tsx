"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolioData";
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Bot,
  Zap,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.08)] overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#004275]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Two-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Value Proposition & CTAs          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.12)] shadow-xs mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#101820]">
                Available for Q4/Q1 Projects &amp; Consulting
              </span>
            </div>

            {/* Eyebrow & Name */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#004275] bg-[#004275]/10 px-2.5 py-1 rounded-md">
                ✦ AI Engineer &amp; Full-Stack Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101820] mb-4 leading-[1.08]">
              {siteConfig.name}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl font-bold text-[#004275] mb-4 tracking-tight">
              Architecting Intelligent AI Systems &amp; High-Performance Web Applications
            </p>

            {/* Value Statement */}
            <p className="text-base sm:text-lg text-[#101820]/80 leading-relaxed max-w-2xl mb-8">
              7–8 years of hands-on engineering experience designing modern full-stack web applications, autonomous LLM agents, scalable APIs, and bespoke WordPress &amp; Divi 5 architectures that deliver measurable business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#101820] bg-white border border-[#004275] hover:bg-[#F5F8FB] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
              >
                <span>Book a Consultation</span>
              </a>

              <a
                href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}` : "#contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-[#004275] hover:underline"
              >
                <span>WhatsApp Direct</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[rgba(16,24,32,0.1)]">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#101820] font-mono">7–8 Yrs</div>
                <div className="text-xs text-[#101820]/70 font-medium">Industry Exp</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#004275] font-mono">95+</div>
                <div className="text-xs text-[#101820]/70 font-medium">PageSpeed Standard</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#101820] font-mono">100%</div>
                <div className="text-xs text-[#101820]/70 font-medium">Type-Safe Stack</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">Zero</div>
                <div className="text-xs text-[#101820]/70 font-medium">Downtime Deploy</div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real Portrait Photo in High-End Frame       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Offset Geometric Accent Backing */}
              <div
                className="absolute -inset-3 rounded-3xl border-2 border-[#004275]/20 bg-white/60 -z-10 translate-x-3 translate-y-3 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Architectural Card */}
              <div className="relative rounded-2xl border border-[rgba(16,24,32,0.16)] bg-white p-3 sm:p-4 shadow-md overflow-hidden group">
                {/* Continuous Micro-Beam Accent Top Bar */}
                <div className="relative h-1 w-full bg-[#004275] rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Portrait Photo Container */}
                <div className="relative w-full aspect-[819/1024] rounded-xl overflow-hidden bg-slate-900 border border-[rgba(16,24,32,0.1)]">
                  <Image
                    src="/images/juel-hero.jpg"
                    alt="Md. Juel Rahman — AI Engineer & Full-Stack Web Developer"
                    width={819}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay for subtle depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Frosted Identity Chip Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#101820]/85 backdrop-blur-md border border-white/20 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold tracking-tight">Md. Juel Rahman</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        ONLINE
                      </span>
                    </div>
                    <p className="text-[11px] text-white/80 font-medium">
                      AI-Driven Web Architecture &amp; Custom Software
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Strip */}
                <div className="mt-3 pt-3 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1.5 text-[#101820]/80 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#004275]" />
                    <span>Verified Solutions Consultant</span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#004275]">
                    Global Client Base
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Foundation Capability Banners Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.12)] shadow-xs hover:border-[#004275]/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101820] text-sm mb-1">Autonomous AI &amp; LLMs</h3>
            <p className="text-xs text-[#101820]/70 leading-relaxed">
              OpenAI &amp; Claude streaming, function calling, RAG pipelines, and automated business workflows.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.12)] shadow-xs hover:border-[#004275]/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101820] text-sm mb-1">Full-Stack Next.js 15</h3>
            <p className="text-xs text-[#101820]/70 leading-relaxed">
              React 19 Server Components, TypeScript strict mode, Zod validation, and high-throughput APIs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.12)] shadow-xs hover:border-[#004275]/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101820] text-sm mb-1">WordPress &amp; Divi 5</h3>
            <p className="text-xs text-[#101820]/70 leading-relaxed">
              Modular Divi 5 templates, custom PHP 8.2 plugins, WooCommerce funnels, and 95+ PageSpeed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[rgba(16,24,32,0.12)] shadow-xs hover:border-[#004275]/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#101820] text-sm mb-1">Enterprise Staging</h3>
            <p className="text-xs text-[#101820]/70 leading-relaxed">
              Isolated staging subdomains, zero-downtime database sync, and robust production protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

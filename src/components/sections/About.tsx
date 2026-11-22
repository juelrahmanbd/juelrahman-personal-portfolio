"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Code2,
  Users,
  Terminal,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Briefcase,
      title: "Pragmatic & Solution-Driven",
      desc: "Delivering real, observable business value and solid architecture rather than chasing vanity frameworks.",
    },
    {
      icon: TrendingUp,
      title: "Extensible Architecture",
      desc: "Engineered on strict TypeScript contracts and modular domain boundaries designed to scale gracefully.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Defensive Design",
      desc: "Protected with schema sanitization, defensive error handling, safe database migrations, and isolated staging.",
    },
    {
      icon: Code2,
      title: "Clean & Maintainable Code",
      desc: "Self-documenting codebases, deterministic state lifecycles, and minimal third-party dependency bloat.",
    },
    {
      icon: Users,
      title: "User-Centric Performance",
      desc: "Sub-second interaction feedback, zero layout shifts, accessible semantic DOM, and refined responsive polish.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#090C12] border-b border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Clean Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* ========================================================= */}
          {/* 1. LEFT COLUMN — Architectural Portrait Frame (Photo 2)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Offset Accent Backing Frame */}
              <div
                className="absolute -inset-2.5 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 -z-10 translate-x-3 translate-y-3 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Architectural Card */}
              <div className="relative rounded-3xl border border-white/[0.12] bg-[#0D111A]/90 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
                {/* Continuous Micro-Beam Accent Top Bar */}
                <div className="relative h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/60 animate-micro-beam pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Portrait Image Frame */}
                <div className="relative w-full aspect-[819/1024] rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1]">
                  <Image
                    src="/images/juel-about.jpg"
                    alt="Md. Juel Rahman — Practical, Solution-Focused Developer & AI Engineer"
                    width={819}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Bottom Status & Credentials Strip */}
                <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      Available for Hire &amp; Advisory
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-md">
                    Senior Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. RIGHT COLUMN — Narrative Biography                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold text-cyan-400 mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>ABOUT ME &bull; BACKGROUND &amp; PHILOSOPHY</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Bridging Machine Intelligence with{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Production-Grade
              </span>{" "}
              Web Systems
            </h2>

            {/* Narrative Body Copy (No Fabricated Metrics) */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              <p>
                I am <span className="font-semibold text-white">Md. Juel Rahman</span>, an AI Engineer and Full-Stack Software Developer based in Dhaka, Bangladesh, collaborating with founders, high-growth startups, and established enterprises globally.
              </p>
              <p>
                My work centers around turning ambitious ideas into durable, high-throughput digital software. Rather than treating artificial intelligence as a superficial wrapper, I engineer autonomous agent workflows, deterministic tool sandboxes, and vector retrieval systems tightly coupled with production web stacks.
              </p>
              <p>
                Across modern web ecosystems, I architect scalable platforms using Next.js 15, React 19, TypeScript, and modern cloud databases. Concurrently, I bring deep, full-spectrum mastery to the WordPress ecosystem—developing custom themes, bespoke plugins, WooCommerce eCommerce engines, and high-velocity Divi 5 &amp; Elementor architectures without the customary bloat.
              </p>
            </div>

            {/* Quick Status Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-8">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Focus</span>
                  <span className="text-xs font-semibold text-white">AI &bull; Full-Stack &bull; CMS</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Delivery</span>
                  <span className="text-xs font-semibold text-white">Production Quality</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Location</span>
                  <span className="text-xs font-semibold text-white">Dhaka &bull; Global Remote</span>
                </div>
              </div>
            </div>

            {/* Review Technical Expertise CTA */}
            <div>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
              >
                <span>Review Technical Expertise Bento Grid</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Pillar Development Philosophy Grid */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Core Engineering Principles
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              The foundational standards guiding every architecture, codebase, and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-3.5 group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

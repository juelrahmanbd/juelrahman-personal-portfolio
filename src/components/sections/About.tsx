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
  ArrowRight,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Briefcase,
      title: "Practical & High-ROI",
      desc: "Delivering real business solutions rather than chasing vanity buzzwords.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      desc: "Engineered on strict TypeScript and modular patterns built to grow seamlessly.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      desc: "Hardened against regressions with sanitized inputs, auth guards, and safe staging.",
    },
    {
      icon: Code2,
      title: "Clean & Maintainable",
      desc: "Organized, self-documenting code with predictable state and zero technical debt.",
    },
    {
      icon: Users,
      title: "User-Centric Performance",
      desc: "Sub-second response times, zero layout shifts (CLS < 0.05), and accessible UI.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
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
                className="absolute -inset-2.5 rounded-3xl border border-[#004275]/25 bg-[#F5F8FB] -z-10 translate-x-3 translate-y-3 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Architectural Card */}
              <div className="relative rounded-2xl border border-[rgba(16,24,32,0.14)] bg-[#F5F8FB] p-3 sm:p-4 shadow-sm overflow-hidden group">
                {/* Continuous Micro-Beam Accent Top Bar */}
                <div className="relative h-1 w-full bg-[#004275] rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Portrait Image Frame */}
                <div className="relative w-full aspect-[819/1024] rounded-xl overflow-hidden bg-slate-100 border border-[rgba(16,24,32,0.08)]">
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
                <div className="mt-3 pt-3 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-[#101820]">
                      Available for Hire &amp; Advisory
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#004275] bg-[#004275]/10 px-2.5 py-0.5 rounded-md">
                    7–8 Yrs Practical Exp
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. RIGHT COLUMN — Narrative Biography & Core Philosophy   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
              <span className="tracking-wider uppercase">ABOUT ME</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight leading-tight mb-4">
              A Practical, Solution-Focused Developer &amp; AI Engineer
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-[#101820]/80 leading-relaxed mb-8">
              <p>
                I&apos;m <strong>Md. Juel Rahman</strong>, a tech professional with <strong>7–8 years of practical industry experience</strong> across modern web engineering and intelligent digital systems. I work at the intersection of full-stack engineering and artificial intelligence to build robust, business-critical applications, end-to-end WordPress platforms, API architectures, and autonomous workflow automation.
              </p>
              <p>
                My methodology is rooted in delivering practical, scalable, and intelligent software that solves tangible problems for businesses. Whether architecting a Next.js SaaS backend, fine-tuning an LLM tool-calling agent, or optimizing an enterprise WordPress WooCommerce store for maximum performance and Google Core Web Vitals, I align deep technical rigor with commercial goals.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)]">
              <div>
                <span className="text-xs font-semibold text-[#101820]/60 block mb-0.5">Primary Specialization</span>
                <span className="text-sm font-bold text-[#101820]">AI &amp; Full-Stack Web</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#101820]/60 block mb-0.5">CMS &amp; Speed Stacks</span>
                <span className="text-sm font-bold text-[#101820]">WordPress Ecosystem</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#101820]/60 block mb-0.5">Communication</span>
                <span className="text-sm font-bold text-[#004275]">Fluent English / Direct</span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="flex items-center gap-4">
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#004275] hover:text-[#003157] group"
              >
                <span>Review Technical Expertise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Pillar Development Approach */}
        <div className="pt-12 border-t border-[rgba(16,24,32,0.1)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101820] tracking-tight mb-2">
              My 5-Pillar Development Philosophy
            </h3>
            <p className="text-sm text-[#101820]/75">
              The engineering standards applied to every line of code, database query, and UI component I author.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F8FB] rounded-2xl p-5 border border-[rgba(16,24,32,0.1)] hover:border-[#004275]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-white border border-[rgba(16,24,32,0.08)] flex items-center justify-center text-[#004275] mb-3 shadow-2xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-[#101820] mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#101820]/75 leading-relaxed">{item.desc}</p>
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

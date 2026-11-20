"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/portfolioData";
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
  const approachIcons = [
    Briefcase,
    TrendingUp,
    ShieldCheck,
    Code2,
    Users,
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Clean Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================= */}
          {/* 1. LEFT COLUMN — Architectural Portrait Frame             */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle Offset Architectural Accent Backing Frame */}
              <div
                className="absolute -inset-2.5 rounded-2xl border border-[#004275]/20 bg-[#F5F8FB] -z-10 translate-x-2 translate-y-2 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Architectural Card */}
              <div className="relative rounded-xl border border-[rgba(16,24,32,0.14)] bg-[#F5F8FB] p-3 sm:p-4 shadow-xs overflow-hidden group">
                {/* Continuous Micro-Beam Accent Top Bar */}
                <div className="relative h-1 w-full bg-[#004275] rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Portrait Image Frame */}
                <div className="relative w-full aspect-[682/1024] rounded-lg overflow-hidden bg-slate-100 border border-[rgba(16,24,32,0.08)] max-w-full">
                  <Image
                    src="/juel-about.png"
                    alt="Md. Juel Rahman — Full-Stack Web Developer and AI Engineer"
                    width={682}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full max-w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Bottom Status / Experience Strip */}
                <div className="mt-3 pt-3 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-[#101820]">
                      Available for Projects
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
          {/* 2. RIGHT COLUMN — Bio & 5-Pillar Development Approach     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-3.5 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
              <span className="tracking-wider uppercase">ABOUT ME</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101820] tracking-tight leading-tight mb-4">
              {siteConfig.about.heading}
            </h2>

            {/* 2 Concise High-Signal Bio Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#475569] leading-relaxed mb-7">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Development Approach Subtitle */}
            <div className="pt-2 mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#004275]">
                My Development Approach
              </h3>
            </div>

            {/* 5-Pillar Structured Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {siteConfig.about.approach.map((item, idx) => {
                const Icon = approachIcons[idx] || Briefcase;
                const isLastItem = idx === siteConfig.about.approach.length - 1;

                return (
                  <div
                    key={idx}
                    className={`bg-[#F5F8FB] border border-[rgba(16,24,32,0.12)] hover:border-[#004275]/40 rounded-xl p-3 flex items-start gap-3 transition-colors ${
                      isLastItem ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-[rgba(16,24,32,0.08)] text-[#004275] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#101820] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] leading-snug truncate">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact CTA Row */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#004275] text-white text-xs sm:text-sm font-semibold hover:bg-[#003157] transition-all shadow-xs"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-semibold text-[#101820] hover:bg-slate-100 transition-colors"
              >
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

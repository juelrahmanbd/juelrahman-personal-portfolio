"use client";

import React from "react";
import {
  siteConfig,
  trustHighlights,
  trustedTechnologies,
} from "@/data/portfolioData";
import {
  Sparkles,
  Calendar,
  Layers,
  Globe,
  Code2,
  FileCode2,
  Terminal,
  Database,
  Bot,
  Brain,
  Rocket,
  Palette,
  ShoppingCart,
  Flame,
  GitBranch,
  Compass,
  Binary,
  Cpu,
  BarChart3,
  Server,
  User,
} from "lucide-react";

export default function Hero() {
  // Helper to map technology icon names to Lucide icons
  const getTechIcon = (name: string) => {
    switch (name) {
      case "HTML5":
        return <Code2 className="w-3.5 h-3.5 text-[#E34F26]" />;
      case "CSS3":
        return <Palette className="w-3.5 h-3.5 text-[#1572B6]" />;
      case "JavaScript":
        return <FileCode2 className="w-3.5 h-3.5 text-[#EAB308]" />;
      case "Node.js":
        return <Server className="w-3.5 h-3.5 text-[#16A34A]" />;
      case "Express.js":
        return <Cpu className="w-3.5 h-3.5 text-[#11152F]" />;
      case "PHP":
        return <Terminal className="w-3.5 h-3.5 text-[#777BB4]" />;
      case "WordPress":
        return <Globe className="w-3.5 h-3.5 text-[#21759B]" />;
      case "WooCommerce":
        return <ShoppingCart className="w-3.5 h-3.5 text-[#9333EA]" />;
      case "Supabase":
        return <Database className="w-3.5 h-3.5 text-[#10B981]" />;
      case "Firebase":
        return <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />;
      case "MongoDB":
        return <Database className="w-3.5 h-3.5 text-[#16A34A]" />;
      case "Tailwind CSS":
        return <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />;
      case "GitHub":
        return <GitBranch className="w-3.5 h-3.5 text-[#11152F]" />;
      case "Figma":
        return <Palette className="w-3.5 h-3.5 text-[#F24E1E]" />;
      case "ChatGPT":
        return <Bot className="w-3.5 h-3.5 text-[#10B981]" />;
      case "Cursor":
        return <Compass className="w-3.5 h-3.5 text-[#11152F]" />;
      case "Claude":
        return <Brain className="w-3.5 h-3.5 text-[#D97706]" />;
      case "OpenAI Codex":
        return <Binary className="w-3.5 h-3.5 text-[#4F46E5]" />;
      case "Google Antigravity":
        return <Rocket className="w-3.5 h-3.5 text-[#6847E8]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#6847E8]" />;
    }
  };

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar className="w-5 h-5 text-[#6847E8]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#6847E8]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#6847E8]" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-[#6847E8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#6847E8]" />;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAFAFF]"
    >
      {/* Soft Ambient Radial Background Glows matching the reference image */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#F1EDFF] via-[#F1EDFF]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10 opacity-70"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6847E8]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Floating Abstract Decorative UI Elements (Left side) */}
        <div
          className="hidden xl:block absolute left-2 top-10 w-48 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#E9E7F5] shadow-card hover:shadow-card-hover transition-all duration-300 -rotate-3"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 pb-3 border-b border-[#E9E7F5]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-auto text-[10px] text-[#8E93AB] font-mono">code.tsx</span>
          </div>
          <div className="mt-3.5 bg-gradient-to-br from-[#F1EDFF] to-[#E9E7F5]/50 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6847E8] to-[#5234CC] flex items-center justify-center text-white shadow-sm mb-2">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="w-20 h-2 bg-[#6847E8]/20 rounded-full mb-1" />
            <div className="w-14 h-1.5 bg-[#6847E8]/10 rounded-full" />
          </div>
        </div>

        {/* Floating Abstract Decorative UI Elements (Right side) */}
        <div
          className="hidden xl:block absolute right-2 top-8 w-52 space-y-3 pointer-events-none"
          aria-hidden="true"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-[#E9E7F5] shadow-card rotate-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F1EDFF] flex items-center justify-center text-[#6847E8]">
                <User className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="w-20 h-2 bg-[#11152F]/20 rounded-full" />
                <div className="w-14 h-1.5 bg-[#6847E8]/40 rounded-full" />
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3.5 border border-[#E9E7F5] shadow-card -rotate-1 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-[#8E93AB] uppercase">Performance</span>
              <div className="text-xs font-bold text-[#11152F]">99.8% Speed</div>
            </div>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Top Pill Badge matching reference image */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FEF08A] shadow-2xs mb-6 text-xs sm:text-sm font-medium text-[#854D0E]">
            <span className="text-amber-500 text-xs">✦</span>
            <span>Welcome to My Portfolio</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#11152F] mb-3">
            {siteConfig.name}
          </h1>

          {/* Professional Title in Purple Gradient */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6847E8] via-[#7B59F4] to-[#5234CC] bg-clip-text text-transparent mb-5 tracking-tight">
            {siteConfig.role}
          </p>

          {/* Descriptive Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#626780] leading-relaxed max-w-2xl mb-8">
            {siteConfig.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14">
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6847E8] to-[#5234CC] hover:from-[#5b3adb] hover:to-[#4528b8] shadow-md hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6847E8] focus-visible:ring-offset-2"
            >
              <Layers className="w-4 h-4" />
              <span>View Portfolio</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#11152F] bg-white border border-[#E9E7F5] hover:bg-[#F1EDFF]/50 hover:border-[#D4CFF2] shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6847E8] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-[#6847E8]" />
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>

        {/* 4 Professional Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {trustHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-200 flex items-center gap-3.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F1EDFF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getTrustIcon(item.icon)}
              </div>
              <div>
                <div className="font-bold text-[#11152F] text-sm sm:text-base leading-snug">
                  {item.title}
                </div>
                <div className="text-xs text-[#626780] font-medium leading-snug">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Showcase Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-sm sm:text-base font-bold text-[#11152F] tracking-tight">
              Trusted Technologies & Tools
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {trustedTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9E7F5] hover:border-[#6847E8]/40 hover:bg-[#F1EDFF]/40 text-xs font-medium text-[#11152F] shadow-2xs hover:shadow-xs transition-all duration-150 select-none group"
              >
                <span className="shrink-0 group-hover:scale-110 transition-transform">
                  {getTechIcon(tech.name)}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { skillCategories } from "@/data/portfolioData";
import {
  Wrench,
  Code2,
  Server,
  Globe,
  Database,
  Sparkles,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code2 className="w-4 h-4 text-[#6847E8]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#6847E8]" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-[#6847E8]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[#6847E8]" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-[#6847E8]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#6847E8]" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-[#6847E8]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#6847E8]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#004275]" />
            <span>Skills &amp; Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A practical and modern tech stack for building websites, web applications, AI solutions, and scalable digital products.
          </p>
        </div>

        {/* Skills Categorized Grid (Matches Reference Image 4 + 3 centered layout) */}
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Row 1: 4 Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.slice(0, 4).map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[rgba(16,24,32,0.1)]">
                    <div className="w-8 h-8 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center shrink-0">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="text-sm font-bold text-[#101820] tracking-tight">
                      {cat.badgeLabel}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-medium text-[#101820] hover:border-[#004275]/40 transition-colors select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 Category Cards Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {skillCategories.slice(4).map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[rgba(16,24,32,0.1)]">
                    <div className="w-8 h-8 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center shrink-0">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="text-sm font-bold text-[#101820] tracking-tight">
                      {cat.badgeLabel}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-medium text-[#101820] hover:border-[#004275]/40 transition-colors select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

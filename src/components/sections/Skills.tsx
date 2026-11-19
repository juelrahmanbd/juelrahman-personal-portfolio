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
    <section id="skills" className="py-20 md:py-28 bg-[#FAFAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDFF] border border-[#E9E7F5] text-xs font-semibold text-[#6847E8] mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Skills &amp; Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#11152F] tracking-tight mb-3">
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#626780] leading-relaxed">
            A practical and modern tech stack for building websites, web applications, AI solutions, and scalable digital products.
          </p>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header Badge */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E9E7F5]">
                  <div className="w-8 h-8 rounded-xl bg-[#F1EDFF] flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-sm font-bold text-[#11152F] tracking-tight">
                    {cat.badgeLabel}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#FAFAFF] border border-[#E9E7F5] text-xs font-medium text-[#11152F] hover:bg-[#F1EDFF] hover:border-[#6847E8]/30 transition-colors select-none"
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
    </section>
  );
}

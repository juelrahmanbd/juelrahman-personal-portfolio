"use client";

import React from "react";
import { processSteps } from "@/data/portfolioData";
import { Workflow, Search, ListTodo, Code, Sparkles, ArrowRight } from "lucide-react";

export default function Process() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-[#6847E8]" />;
      case "ListTodo":
        return <ListTodo className="w-5 h-5 text-[#6847E8]" />;
      case "Code":
        return <Code className="w-5 h-5 text-[#6847E8]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#6847E8]" />;
      default:
        return <Workflow className="w-5 h-5 text-[#6847E8]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#004275]" />
            <span>How I Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            My Development Process
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A simple, transparent, and effective process from idea to a better, optimized solution.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative group">
              <div className="bg-white rounded-3xl p-6 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] group-hover:scale-105 transition-transform">
                      {getStepIcon(step.iconName)}
                    </div>
                    <span className="text-2xl font-black text-[rgba(16,24,32,0.15)] group-hover:text-[#004275]/40 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#101820] mb-2 tracking-tight group-hover:text-[#004275] transition-colors">
                    {step.step}. {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#101820]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting arrow on desktop (between steps 1-3) */}
              {idx < processSteps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[rgba(16,24,32,0.14)] shadow-xs items-center justify-center text-[#101820]/50"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

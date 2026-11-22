"use client";

import React from "react";
import { Workflow, Search, ListTodo, Code, Sparkles, ArrowRight } from "lucide-react";

export default function Process() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Scoping",
      desc: "Deep analysis of business objectives, user workflows, schema requirements, and technical constraints.",
      icon: Search,
    },
    {
      step: "02",
      title: "Architecture & Modeling",
      desc: "Designing strict TypeScript interfaces, database schemas (PostgreSQL / Supabase), and LLM prompt contracts.",
      icon: ListTodo,
    },
    {
      step: "03",
      title: "Full-Stack Engineering",
      desc: "Iterative development across Next.js 15, React 19 RSC, edge APIs, autonomous AI tools, and WordPress core.",
      icon: Code,
    },
    {
      step: "04",
      title: "Hardening & Deployment",
      desc: "End-to-end testing, Core Web Vitals audit, staging verification, and zero-downtime production deployment.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 shadow-xs mb-4">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-widest uppercase font-mono font-bold">METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Engineering{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Delivery Pipeline
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A disciplined, transparent, and iterative development methodology from architectural blueprint to high-availability deployment.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {processSteps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.step} className="relative group">
                <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/80 h-full flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-blue-500 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow on desktop (between steps 1-3) */}
                {idx < processSteps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

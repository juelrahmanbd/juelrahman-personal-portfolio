"use client";

import React from "react";
import { siteConfig, trustHighlights } from "@/data/portfolioData";
import { Calendar, Layers, Workflow, Globe } from "lucide-react";

export default function Hero() {
  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar className="w-6 h-6 text-[#004275]" strokeWidth={1.75} />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#004275]" strokeWidth={1.75} />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-[#004275]" strokeWidth={1.75} />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#004275]" strokeWidth={1.75} />;
      default:
        return <Layers className="w-6 h-6 text-[#004275]" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.08)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Single-Column Editorial Hero Block (Aligned with reference f6e58b74.jpeg) */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] shadow-xs mb-6 text-xs sm:text-sm font-medium text-[#101820]">
            <span className="text-[#004275] font-bold text-xs">✦</span>
            <span>Welcome to My Portfolio</span>
          </div>

          {/* Display Name <h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#101820] mb-3 leading-[1.1]">
            {siteConfig.name}
          </h1>

          {/* Subheadline in Crisp #004275 */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004275] mb-5 tracking-tight">
            {siteConfig.role}
          </p>

          {/* Concise Value Statement */}
          <p className="text-base sm:text-lg text-[#101820]/80 leading-relaxed max-w-2xl mb-9">
            {siteConfig.tagline}
          </p>

          {/* Dual CTAs (Primary #004275, Secondary #ffffff with border) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
            >
              <span>View Portfolio</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-[#101820] bg-white border border-[#004275] hover:bg-[#F5F8FB] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
            >
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>

        {/* 4 Structured Capability Cards in a Clean Row (Reference f6e58b74.jpeg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {trustHighlights.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[rgba(16,24,32,0.14)] hover:border-[#004275]/50 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 group-hover:border-[#004275]/20 transition-all duration-200">
                {getCapabilityIcon(card.icon)}
              </div>
              <h3 className="font-bold text-[#101820] text-base mb-1.5 tracking-tight group-hover:text-[#004275] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#101820]/70 font-medium leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

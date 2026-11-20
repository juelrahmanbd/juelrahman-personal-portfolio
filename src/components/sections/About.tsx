"use client";

import React from "react";
import { siteConfig } from "@/data/portfolioData";
import { User, CheckCircle2, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill Badge */}
        <div className="flex justify-center md:justify-start mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs">
            <User className="w-3.5 h-3.5 text-[#004275]" />
            <span>{siteConfig.about.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight max-w-2xl">
            {siteConfig.about.heading}
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            {siteConfig.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Right Column: Development Approach Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[rgba(16,24,32,0.1)]">
                <div className="w-8 h-8 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center text-[#004275]">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#101820] tracking-tight">
                  My Development Approach
                </h3>
              </div>

              <div className="space-y-4">
                {siteConfig.about.approach.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#004275]/10 flex items-center justify-center text-[#004275] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-[#101820]">{item.title}</span>{" "}
                      <span className="text-[#101820]/70">— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

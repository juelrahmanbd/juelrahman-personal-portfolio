"use client";

import React from "react";
import { siteConfig } from "@/data/portfolioData";
import { User, CheckCircle2, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill Badge */}
        <div className="flex justify-center md:justify-start mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDFF] border border-[#E9E7F5] text-xs font-semibold text-[#6847E8]">
            <User className="w-3.5 h-3.5" />
            <span>{siteConfig.about.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#11152F] tracking-tight max-w-2xl">
            {siteConfig.about.heading}
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#626780] leading-relaxed">
            {siteConfig.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Right Column: Development Approach Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E7F5] shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-[#F1EDFF] rounded-full blur-2xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#E9E7F5]">
                <div className="w-8 h-8 rounded-xl bg-[#F1EDFF] flex items-center justify-center text-[#6847E8]">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#11152F] tracking-tight">
                  My Development Approach
                </h3>
              </div>

              <div className="space-y-4">
                {siteConfig.about.approach.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#28B77A]/10 flex items-center justify-center text-[#28B77A] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-[#11152F]">{item.title}</span>{" "}
                      <span className="text-[#626780]">— {item.desc}</span>
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

"use client";

import React from "react";
import { trustedTechnologies } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export default function TechSlider() {
  const halfIndex = Math.ceil(trustedTechnologies.length / 2);
  const row1Techs = trustedTechnologies.slice(0, halfIndex);
  const row2Techs = trustedTechnologies.slice(halfIndex);

  const row1Items = [...row1Techs, ...row1Techs];
  const row2Items = [...row2Techs, ...row2Techs];

  return (
    <section
      id="technologies"
      className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden select-none w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
          <div className="flex items-center gap-2 px-3 text-center shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
            <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
              Battle-Tested Technology Stack
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
        </div>

        {/* Dual-Row Infinite Slider Track with Edge Fade Masks */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Edge Fade Masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3.5">
            {/* Row 1: Sliding Left */}
            <div className="relative w-full overflow-hidden">
              <div
                className="animate-marquee-left flex items-center gap-3 py-1 cursor-default"
                aria-label="Frontend, backend and CMS technologies track"
              >
                {row1Items.map((tech, idx) => (
                  <div
                    key={`row1-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 hover:text-blue-600 hover:border-blue-500 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 shrink-0 select-none shadow-2xs group"
                  >
                    <span className="shrink-0 flex items-center justify-center">
                      <TechIcon
                        name={tech.name}
                        className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                      />
                    </span>
                    <span className="whitespace-nowrap font-medium tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Sliding Right */}
            <div className="relative w-full overflow-hidden">
              <div
                className="animate-marquee-right flex items-center gap-3 py-1 cursor-default"
                aria-label="Cloud databases, development tools and AI engineering workflows track"
              >
                {row2Items.map((tech, idx) => (
                  <div
                    key={`row2-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 hover:text-blue-600 hover:border-blue-500 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 shrink-0 select-none shadow-2xs group"
                  >
                    <span className="shrink-0 flex items-center justify-center">
                      <TechIcon
                        name={tech.name}
                        className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                      />
                    </span>
                    <span className="whitespace-nowrap font-medium tracking-tight">
                      {tech.name}
                    </span>
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

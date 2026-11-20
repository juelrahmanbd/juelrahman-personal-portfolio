"use client";

import React from "react";
import { trustedTechnologies } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export default function TechSlider() {
  // Split technologies into 2 balanced rows (11 and 11)
  const halfIndex = Math.ceil(trustedTechnologies.length / 2);
  const row1Techs = trustedTechnologies.slice(0, halfIndex);
  const row2Techs = trustedTechnologies.slice(halfIndex);

  // Duplicating each list to guarantee a seamless 50% translation loop with zero visual gap or jump
  const row1Items = [...row1Techs, ...row1Techs];
  const row2Items = [...row2Techs, ...row2Techs];

  return (
    <section
      id="technologies"
      className="py-10 md:py-12 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] overflow-hidden select-none w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered Short Title with Horizontal Divider Lines */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
          <div className="h-px flex-1 bg-[rgba(16,24,32,0.14)]" aria-hidden="true" />
          <div className="flex items-center gap-2 px-2 text-center shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" aria-hidden="true" />
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#101820]">
              Trusted Technologies &amp; Tools
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-[rgba(16,24,32,0.14)]" aria-hidden="true" />
        </div>

        {/* Full Container Width Dual-Row Slider Track */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Subtle Left & Right Edge Fade Masks blending into #F5F8FB */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5F8FB] via-[#F5F8FB]/90 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5F8FB] via-[#F5F8FB]/90 to-transparent z-10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3 sm:gap-3.5">
            {/* Row 1: Sliding Left */}
            <div className="relative w-full overflow-hidden">
              <div
                className="animate-marquee-left flex items-center gap-2.5 sm:gap-3 py-1 cursor-default"
                aria-label="Frontend, backend and CMS technologies track"
              >
                {row1Items.map((tech, idx) => (
                  <div
                    key={`row1-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-medium text-[#101820] shadow-2xs hover:border-[#004275] hover:text-[#004275] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-150 shrink-0 cursor-default select-none group"
                  >
                    <span className="shrink-0 flex items-center justify-center">
                      <TechIcon
                        name={tech.name}
                        className="w-4 h-4 transition-transform duration-150 group-hover:scale-110"
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
                className="animate-marquee-right flex items-center gap-2.5 sm:gap-3 py-1 cursor-default"
                aria-label="Cloud databases, development tools and AI engineering workflows track"
              >
                {row2Items.map((tech, idx) => (
                  <div
                    key={`row2-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-medium text-[#101820] shadow-2xs hover:border-[#004275] hover:text-[#004275] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-150 shrink-0 cursor-default select-none group"
                  >
                    <span className="shrink-0 flex items-center justify-center">
                      <TechIcon
                        name={tech.name}
                        className="w-4 h-4 transition-transform duration-150 group-hover:scale-110"
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

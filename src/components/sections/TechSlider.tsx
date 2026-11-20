"use client";

import React from "react";
import { trustedTechnologies } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export default function TechSlider() {
  // Duplicating the list to guarantee a seamless 50% translation loop with zero visual gap or jump
  const marqueeItems = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section className="py-10 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101820]/70">
          Trusted Technologies &amp; Tools
        </h2>
      </div>

      {/* Marquee viewport with edge fade gradient masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="animate-marquee flex items-center gap-3 py-2 cursor-default"
          aria-label="Scrolling list of technologies and tools"
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-medium text-[#101820] shadow-xs hover:border-[#004275] hover:text-[#004275] transition-all duration-150 shrink-0"
            >
              <span className="shrink-0 flex items-center justify-center">
                <TechIcon name={tech.name} className="w-4 h-4" />
              </span>
              <span className="whitespace-nowrap font-medium tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { trustedTechnologies } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";
import { ArrowLeftRight, Pause, Play } from "lucide-react";

export default function TechSlider() {
  const [isPaused, setIsPaused] = useState(false);

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
      className="py-8 lg:py-10 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] overflow-hidden select-none w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full min-w-0">
          {/* Left Column — Compact Stack & Motion Control Block (lg:col-span-4) */}
          <div className="lg:col-span-4 w-full min-w-0">
            <div className="relative overflow-hidden rounded-xl bg-white border border-[rgba(16,24,32,0.14)] p-5 sm:p-6 shadow-xs flex flex-col justify-between w-full">
              {/* Royal blue crisp left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#004275]"
                aria-hidden="true"
              />

              <div className="pl-1.5">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5F8FB] border border-[rgba(0,66,117,0.16)] text-[11px] font-bold tracking-wider text-[#004275] uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" />
                  <span>Trusted Technologies &amp; Tools</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#101820] leading-snug">
                  Production Stack &amp; AI Engineering Workflow
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#101820]/75 leading-relaxed font-normal">
                  Battle-tested technologies powering modern full-stack web applications,
                  custom WordPress &amp; Divi 5 architectures, and intelligent AI automation workflows.
                </p>
              </div>

              {/* Directional status & accessible pause/resume control */}
              <div className="mt-5 pt-4 pl-1.5 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#004275] bg-[#F5F8FB] px-2.5 py-1 rounded-md border border-[rgba(0,66,117,0.12)] select-none">
                  <ArrowLeftRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Dual-Track Sync</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  aria-pressed={isPaused}
                  aria-label={
                    isPaused
                      ? "Resume technology tracks animation"
                      : "Pause technology tracks animation"
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(16,24,32,0.14)] bg-white hover:bg-[#F5F8FB] text-[#101820] hover:text-[#004275] hover:border-[#004275] text-xs font-semibold shadow-2xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]/40"
                >
                  {isPaused ? (
                    <>
                      <Play className="w-3 h-3 fill-current text-[#004275]" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3 fill-current text-[#101820]" />
                      <span>Pause</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column — Container-Bounded 2-Row Opposite-Direction Infinite Slider (lg:col-span-8) */}
          <div className="lg:col-span-8 w-full min-w-0 overflow-hidden">
            <div className="relative overflow-hidden rounded-xl border border-[rgba(16,24,32,0.12)] bg-white/80 backdrop-blur-[2px] p-3 sm:p-4 shadow-2xs w-full min-w-0">
              {/* Left & Right gradient edge fades strictly within this card */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3">
                {/* Row 1: Sliding Left */}
                <div className="relative w-full overflow-hidden">
                  <div
                    className="animate-marquee-left flex items-center gap-2.5 sm:gap-3 py-1 cursor-default"
                    style={{ animationPlayState: isPaused ? "paused" : undefined }}
                    aria-label="Frontend, backend and CMS technologies track"
                  >
                    {row1Items.map((tech, idx) => (
                      <div
                        key={`row1-${tech.name}-${idx}`}
                        className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-medium text-[#101820] shadow-2xs hover:border-[#004275] hover:text-[#004275] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-150 shrink-0 cursor-default select-none group"
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
                    style={{ animationPlayState: isPaused ? "paused" : undefined }}
                    aria-label="Cloud databases, development tools and AI engineering workflows track"
                  >
                    {row2Items.map((tech, idx) => (
                      <div
                        key={`row2-${tech.name}-${idx}`}
                        className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs sm:text-sm font-medium text-[#101820] shadow-2xs hover:border-[#004275] hover:text-[#004275] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-150 shrink-0 cursor-default select-none group"
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
        </div>
      </div>
    </section>
  );
}

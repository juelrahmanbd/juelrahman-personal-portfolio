"use client";

import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-12 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#004275] via-[#003660] to-[#002847] p-8 sm:p-12 shadow-sm text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle Background Glow Circles */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* Left Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
                Let&apos;s discuss your idea and turn it into a practical, modern, and effective digital solution.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#004275] bg-white hover:bg-[#F5F8FB] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#004275]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#004275]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

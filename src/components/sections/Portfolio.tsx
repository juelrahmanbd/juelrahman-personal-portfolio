"use client";

import React from "react";
import { showcaseProjects } from "@/data/portfolioData";
import { Folder, ExternalLink, Bot, LayoutDashboard, ShoppingBag, Globe } from "lucide-react";

export default function Portfolio() {
  const renderLaptopMockup = (type: "business" | "ai" | "saas" | "ecommerce") => {
    switch (type) {
      case "business":
        return (
          <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-50/50 to-blue-100/30 p-4 border border-blue-200/50 flex flex-col justify-between overflow-hidden relative group-hover:border-blue-400 transition-colors">
            {/* Window bar */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-blue-200/40">
              <span className="w-2 h-2 rounded-full bg-blue-300" />
              <span className="w-2 h-2 rounded-full bg-blue-200" />
              <span className="w-2 h-2 rounded-full bg-blue-200" />
              <div className="ml-auto flex items-center gap-1 text-[10px] text-blue-600 font-medium">
                <Globe className="w-2.5 h-2.5" />
                <span>business-preview.com</span>
              </div>
            </div>
            {/* Screen UI Illustration */}
            <div className="space-y-2 py-2">
              <div className="w-3/4 h-3 bg-blue-600/20 rounded-md" />
              <div className="w-1/2 h-2 bg-blue-400/20 rounded-md" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-10 bg-white/80 rounded-lg border border-blue-100 shadow-xs flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-blue-500/20" />
                </div>
                <div className="h-10 bg-white/80 rounded-lg border border-blue-100 shadow-xs flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-blue-500/20" />
                </div>
                <div className="h-10 bg-white/80 rounded-lg border border-blue-100 shadow-xs flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-blue-500/20" />
                </div>
              </div>
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-50/50 to-purple-100/30 p-4 border border-purple-200/50 flex flex-col justify-between overflow-hidden relative group-hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-1.5 pb-2 border-b border-purple-200/40">
              <span className="w-2 h-2 rounded-full bg-purple-300" />
              <span className="w-2 h-2 rounded-full bg-purple-200" />
              <span className="w-2 h-2 rounded-full bg-purple-200" />
              <div className="ml-auto flex items-center gap-1 text-[10px] text-purple-600 font-medium">
                <Bot className="w-2.5 h-2.5" />
                <span>ai-assistant.app</span>
              </div>
            </div>
            <div className="space-y-2 py-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6847E8] to-[#5234CC] flex items-center justify-center text-white shadow-sm">
                <span className="font-extrabold text-xs">AI</span>
              </div>
              <div className="w-32 h-2.5 bg-purple-500/20 rounded-md" />
              <div className="w-20 h-2 bg-purple-400/20 rounded-md" />
            </div>
          </div>
        );
      case "saas":
        return (
          <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-50/50 to-emerald-100/30 p-4 border border-emerald-200/50 flex flex-col justify-between overflow-hidden relative group-hover:border-emerald-400 transition-colors">
            <div className="flex items-center gap-1.5 pb-2 border-b border-emerald-200/40">
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="w-2 h-2 rounded-full bg-emerald-200" />
              <span className="w-2 h-2 rounded-full bg-emerald-200" />
              <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                <LayoutDashboard className="w-2.5 h-2.5" />
                <span>saas-dashboard.io</span>
              </div>
            </div>
            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between">
                <div className="w-24 h-2.5 bg-emerald-600/20 rounded-md" />
                <div className="w-12 h-2 bg-emerald-500/20 rounded-md" />
              </div>
              <div className="flex items-end gap-2 h-14 pt-2">
                <div className="w-1/4 h-6 bg-emerald-400/30 rounded-t" />
                <div className="w-1/4 h-10 bg-emerald-500/40 rounded-t" />
                <div className="w-1/4 h-8 bg-emerald-400/30 rounded-t" />
                <div className="w-1/4 h-12 bg-emerald-600/50 rounded-t" />
              </div>
            </div>
          </div>
        );
      case "ecommerce":
        return (
          <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-pink-500/10 via-rose-50/50 to-pink-100/30 p-4 border border-pink-200/50 flex flex-col justify-between overflow-hidden relative group-hover:border-pink-400 transition-colors">
            <div className="flex items-center gap-1.5 pb-2 border-b border-pink-200/40">
              <span className="w-2 h-2 rounded-full bg-pink-300" />
              <span className="w-2 h-2 rounded-full bg-pink-200" />
              <span className="w-2 h-2 rounded-full bg-pink-200" />
              <div className="ml-auto flex items-center gap-1 text-[10px] text-pink-600 font-medium">
                <ShoppingBag className="w-2.5 h-2.5" />
                <span>store-checkout.com</span>
              </div>
            </div>
            <div className="space-y-2 py-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="w-28 h-2.5 bg-pink-500/20 rounded-md" />
              <div className="w-16 h-2 bg-pink-400/20 rounded-md" />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Folder className="w-3.5 h-3.5 text-[#004275]" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Selected Work (Showcase)
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A few sample project types to showcase the range of solutions I can build for you.
          </p>
        </div>

        {/* 4 Showcase Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-5 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Mockup Container */}
                <div className="mb-5">{renderLaptopMockup(project.mockupType)}</div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#11152F] mb-2 tracking-tight group-hover:text-[#6847E8] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#626780] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tag & Action */}
              <div className="pt-3 border-t border-[#E9E7F5]/60 flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F1EDFF] text-[#6847E8] border border-[#E9E7F5]">
                  {project.badgeText}
                </span>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6847E8] hover:text-[#5234CC] transition-colors"
                >
                  <span>Inquire</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

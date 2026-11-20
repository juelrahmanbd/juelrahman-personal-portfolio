"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioProjects } from "@/data/projectsData";
import ProjectPreviewCard from "@/components/portfolio/ProjectPreviewCard";

export default function Portfolio() {
  // Enforce max 9 items on the homepage portfolio grid
  const homepageProjects = portfolioProjects.slice(0, 9);

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-white border-b border-[rgba(16,24,32,0.1)] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F8FB] border border-[rgba(0,66,117,0.16)] text-[11px] font-bold tracking-wider text-[#004275] uppercase mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
            <span>PORTFOLIO &amp; SELECTED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight leading-tight mb-4">
            Selected Websites &amp; Digital Platforms
          </h2>

          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Live client builds, custom WordPress &amp; Divi 5 architectures, commercial lead funnels,
            and healthcare platforms delivered with verified performance, security, and responsive craft.
          </p>
        </div>

        {/* Capped at max 9 items on Homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {homepageProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectPreviewCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA to All Portfolio Page */}
        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
          >
            <span>View All Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

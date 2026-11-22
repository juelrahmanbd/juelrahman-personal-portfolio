"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/data/projectsData";
import {
  ExternalLink,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

type FilterCategory = "all" | "WordPress & Divi 5" | "Business & Agency" | "Booking, eCommerce & Healthcare";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const categories: { label: string; value: FilterCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "WordPress & Divi 5", value: "WordPress & Divi 5" },
    { label: "Business & Agency", value: "Business & Agency" },
    { label: "Booking, eCommerce & Healthcare", value: "Booking, eCommerce & Healthcare" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-3.5">
              <FolderGit2 className="w-3.5 h-3.5 text-[#004275]" />
              <span className="tracking-wider uppercase">FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight">
              Production Client Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#101820]/75 leading-relaxed">
              Real-world web systems, high-converting platforms, and custom architectures delivered for international clients across Italy, Scandinavia, Australia, and the US.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#004275] text-white shadow-xs"
                    : "bg-[#F5F8FB] text-[#101820]/80 border border-[rgba(16,24,32,0.1)] hover:border-[#004275]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#F5F8FB] rounded-2xl border border-[rgba(16,24,32,0.14)] hover:border-[#004275]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Preview Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-[rgba(16,24,32,0.1)]">
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  width={800}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Gradient & Category Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#101820]/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-xs font-semibold text-[#101820] shadow-sm hover:bg-white transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#004275] uppercase tracking-wider mb-1">
                    Client: {project.client}
                  </div>
                  <h3 className="text-lg font-bold text-[#101820] tracking-tight group-hover:text-[#004275] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#101820]/75 line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#101820]/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white border border-[rgba(16,24,32,0.1)] text-[11px] font-mono font-semibold text-[#101820]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#101820]/60 self-center">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

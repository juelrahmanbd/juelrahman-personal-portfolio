"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/data/projectsData";
import { TechBadge } from "@/components/icons/TechIcons";
import {
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";

type FilterCategory = "all" | "WordPress" | "Business & Agency" | "Booking, eCommerce & Healthcare";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const categories: { label: string; value: FilterCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "WordPress Ecosystem", value: "WordPress" },
    { label: "Business & Agency", value: "Business & Agency" },
    { label: "Booking, eCommerce & Healthcare", value: "Booking, eCommerce & Healthcare" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) =>
          activeCategory === "WordPress"
            ? p.category.includes("WordPress")
            : p.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-xs mb-4">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
              <span className="tracking-widest uppercase font-mono font-bold">FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Production Client{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Case Studies
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-world software systems, high-converting platforms, and custom architectures engineered for international clients across Italy, Scandinavia, Australia, and the US.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-white"
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
              className="group bg-[#F8FAFC] rounded-3xl border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:border-blue-400 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              {/* Top Section */}
              <div>
                {/* Preview Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    width={800}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[11px] font-mono font-bold text-blue-700 shadow-xs">
                    {project.category}
                  </div>

                  {/* Live Link Button Over Image */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-800 hover:text-blue-600 hover:border-blue-400 transition-colors shadow-xs"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Authentic Tech Badges */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tag) => (
                    <TechBadge key={tag} name={tag} label={tag} size={12} className="py-0.5 px-2 text-[11px] bg-white border-slate-200" />
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>LIVE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

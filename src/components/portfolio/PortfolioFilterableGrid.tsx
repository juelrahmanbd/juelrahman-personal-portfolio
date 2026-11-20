"use client";

import React, { useState } from "react";
import {
  portfolioProjects,
  portfolioCategories,
  PortfolioCategory,
} from "@/data/projectsData";
import ProjectPreviewCard from "./ProjectPreviewCard";

export default function PortfolioFilterableGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {portfolioCategories.map((cat) => {
          const isSelected = activeCategory === cat;
          const count =
            cat === "All"
              ? portfolioProjects.length
              : portfolioProjects.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] select-none ${
                isSelected
                  ? "bg-[#004275] text-white shadow-xs"
                  : "bg-white border border-[rgba(16,24,32,0.14)] text-[#101820]/80 hover:bg-[#F5F8FB] hover:border-[rgba(16,24,32,0.25)] hover:text-[#101820]"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectPreviewCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

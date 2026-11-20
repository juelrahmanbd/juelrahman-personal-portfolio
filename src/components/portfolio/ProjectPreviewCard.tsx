"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, ExternalLink, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectPreviewCardProps {
  project: ProjectItem;
}

export default function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
  const [imgError, setImgError] = useState(false);

  // Deterministic 2-letter monogram for fallback
  const monogram = project.client
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] overflow-hidden shadow-xs hover:border-[#004275] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full">
      {/* 1. Visual Site Preview Frame (Browser Bar + Real Homepage Screenshot) */}
      <div className="bg-[#F5F8FB] p-3 sm:p-4 border-b border-[rgba(16,24,32,0.08)] relative">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[rgba(16,24,32,0.06)]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#004275]/40 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#004275]/40 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#004275]/40 transition-colors" />
          </div>

          {/* Domain Address Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-[rgba(16,24,32,0.1)] text-[10px] font-mono text-slate-600 truncate max-w-[200px] shadow-2xs">
            <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">{project.displayUrl}</span>
          </div>

          {/* Live Indicator */}
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>

        {/* Real Homepage Visual Preview Box (Direct Live Site Link) */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video w-full rounded-xl overflow-hidden bg-white border border-[rgba(16,24,32,0.08)] group/preview shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
          title={`Visit live site: ${project.title}`}
        >
          {!imgError && project.previewImage ? (
            <Image
              src={project.previewImage}
              alt={`${project.title} live homepage preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.03]"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Clean architectural monogram/brand fallback */
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#F5F8FB] to-white text-center">
              <div className="w-12 h-12 rounded-xl bg-[#004275] text-white flex items-center justify-center font-bold text-lg mb-2 shadow-xs">
                {monogram}
              </div>
              <span className="text-xs font-bold text-[#101820] max-w-[180px] truncate">
                {project.client}
              </span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                {project.displayUrl}
              </span>
            </div>
          )}

          {/* Subtle Hover Action Overlay */}
          <div className="absolute inset-0 bg-[#004275]/15 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 border border-[#004275]/20 text-xs font-bold text-[#004275] shadow-md inline-flex items-center gap-1.5 backdrop-blur-xs">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Visit Live Site</span>
            </span>
          </div>
        </a>
      </div>

      {/* 2. Card Content & Meta */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#004275]">
              {project.category}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#101820] tracking-tight group-hover:text-[#004275] transition-colors leading-snug mb-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </a>
          </h3>

          <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>

          {/* Highlight Tags (2-3 compact pills) */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.highlights.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-[#101820]/80 bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Direct Visit Live Site Action Bar */}
        <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004275] hover:text-[#002d50] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] rounded py-1 group/btn"
          >
            <span>Visit Live Site</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>

          <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px]">
            {project.displayUrl}
          </span>
        </div>
      </div>
    </article>
  );
}

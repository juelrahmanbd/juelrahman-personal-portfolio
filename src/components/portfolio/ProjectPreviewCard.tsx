"use client";

import React from "react";
import Link from "next/link";
import { Lock, ExternalLink, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectPreviewCardProps {
  project: ProjectItem;
}

export default function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
  // Deterministic 2-letter monogram
  const monogram = project.client
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] overflow-hidden shadow-xs hover:border-[#004275] hover:-translate-y-1 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group h-full">
      {/* 1. Visual Site Preview Frame (Browser Bar + Wireframe Preview) */}
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

          <span className="w-3" aria-hidden="true" />
        </div>

        {/* Structured UI Wire-Preview Surface */}
        <div className="h-36 sm:h-40 rounded-xl bg-white border border-[rgba(16,24,32,0.08)] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#004275]/30 transition-all shadow-2xs">
          {/* Top Wire Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#004275]/10 border border-[#004275]/15 flex items-center justify-center text-[#004275] font-bold text-xs shrink-0">
                {monogram}
              </div>
              <div className="space-y-1">
                <div className="w-20 h-2 rounded bg-slate-800/15 group-hover:bg-[#004275]/30 transition-colors" />
                <div className="w-12 h-1.5 rounded bg-slate-300/40" />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-[#004275] bg-[#004275]/10 border border-[#004275]/15 px-2 py-0.5 rounded-md">
              {project.category}
            </span>
          </div>

          {/* Center Wire Block (Layout preview illustration) */}
          <div className="space-y-2 py-1">
            <div className="w-3/4 h-3 rounded bg-slate-800/15 group-hover:bg-[#004275]/25 transition-colors" />
            <div className="w-1/2 h-2 rounded bg-slate-400/20" />
            <div className="grid grid-cols-3 gap-2 pt-1.5">
              <div className="h-7 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center">
                <div className="w-8 h-1.5 rounded bg-slate-300" />
              </div>
              <div className="h-7 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center">
                <div className="w-8 h-1.5 rounded bg-slate-300" />
              </div>
              <div className="h-7 rounded-md bg-[#004275]/10 border border-[#004275]/20 flex items-center justify-center">
                <div className="w-8 h-1.5 rounded bg-[#004275]/50" />
              </div>
            </div>
          </div>

          {/* Bottom Wire Status Strip */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-slate-100 font-mono">
            <span>Verified Client Site</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Site
            </span>
          </div>
        </div>
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
            <Link href={`/portfolio/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>

          {/* Highlight Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.highlights.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-[#101820]/80 bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Action Links Bar */}
        <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#004275] hover:text-[#002d50] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] rounded"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#101820] hover:text-[#004275] group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] rounded"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

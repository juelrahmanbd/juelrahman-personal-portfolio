"use client";

import React from "react";
import { TechBadge } from "@/components/icons/TechIcons";
import { Briefcase, CheckCircle2 } from "lucide-react";

interface Milestone {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

export default function ExperienceTimeline() {
  const milestones: Milestone[] = [
    {
      period: "2024 — Present",
      role: "Senior AI Engineer & Full-Stack Consultant",
      company: "Independent Consultancy & Global Enterprise Clients",
      location: "Remote (Global)",
      description:
        "Spearheading custom AI integrations, autonomous LLM agents, and Next.js 15 full-stack architectures. Architecting deterministic function calling pipelines, hybrid RAG with pgvector, and sub-second edge streaming UI components.",
      highlights: [
        "Engineered autonomous AI tool-calling agents with strict Zod validation",
        "Built production Next.js 15 App Router applications with React 19 RSC",
        "Consulted for global founders on AI automation and modern web transitions",
      ],
      skills: ["Next.js", "React", "TypeScript", "OpenAI", "Claude", "Supabase", "pgvector", "Tailwind CSS"],
      isCurrent: true,
    },
    {
      period: "2021 — 2024",
      role: "Lead Full-Stack Web Developer & Solutions Architect",
      company: "Digital Agency & Direct Client Contracts",
      location: "International (Europe, Scandinavia, Australia)",
      description:
        "Led end-to-end architecture and deployment for custom SaaS solutions, e-commerce platforms, and high-throughput REST APIs. Standardized zero-downtime deployment pipelines, automated schema migrations, and high-conversion client funnels.",
      highlights: [
        "Architected scalable backend APIs with sub-second response times",
        "Delivered full-scale platforms including SimGolf Scandinavia and HyperMed Wellness",
        "Managed staging-to-production pipelines with zero regression records",
      ],
      skills: ["React", "Node.js", "PHP", "PostgreSQL", "Docker", "REST API", "Vercel"],
    },
    {
      period: "2018 — 2021",
      role: "WordPress & CMS Architecture Specialist",
      company: "Web Solutions Engineering",
      location: "Remote",
      description:
        "Engineered bespoke WordPress themes, custom Divi layout templates, Elementor builds, and high-performance WooCommerce stores. Mastered Google Core Web Vitals optimization, custom plugin development, and technical SEO structure on enterprise CMS deployments.",
      highlights: [
        "Pioneered modular section template architecture without page builder bloat",
        "Optimized checkout funnels for international WooCommerce merchants",
        "Engineered high-performance builds passing Google Core Web Vitals on client deployments",
      ],
      skills: ["WordPress", "Divi 5", "Elementor", "WooCommerce", "PHP", "MySQL", "Rank Math"],
    },
    {
      period: "2016 — 2018",
      role: "Front-End Developer & Web Solutions Engineer",
      company: "Digital Development Services",
      location: "Remote",
      description:
        "Authored interactive, cross-browser responsive web interfaces. Focused on foundational semantic HTML5, CSS3 layout systems, JavaScript DOM manipulation, and relational database schema modeling.",
      highlights: [
        "Delivered bespoke client web solutions with mobile-first responsiveness",
        "Engineered interactive UI widgets and form validation flows",
        "Maintained strict version control with Git and collaborative developer workflows",
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "Git", "MySQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 shadow-xs mb-4">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-widest uppercase font-mono font-bold">CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Engineering Milestones &amp;{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Career Trajectory
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A chronological record of shipping production software, leading engineering architectures, and solving real-world business challenges.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-6 md:gap-8 group hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              {/* Left Column: Period & Location */}
              <div className="md:w-1/3 flex flex-col justify-between shrink-0 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                      {milestone.period}
                    </span>
                    {milestone.isCurrent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        PRESENT
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {milestone.role}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {milestone.company}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-4">
                  {milestone.location}
                </div>
              </div>

              {/* Right Column: Narrative, Highlights, Skills */}
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    {milestone.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {milestone.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} label={skill} size={11} className="py-0.5 px-2 text-[10px] bg-slate-50 border-slate-200" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

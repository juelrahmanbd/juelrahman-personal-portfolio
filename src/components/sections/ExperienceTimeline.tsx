"use client";

import React from "react";
import {
  Briefcase,
  CheckCircle2,
} from "lucide-react";

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
        "Consulted for global business founders on AI automation and modern web transitions",
      ],
      skills: ["Next.js 15", "React 19", "TypeScript", "OpenAI / Claude API", "Supabase", "pgvector", "Tailwind CSS"],
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
      skills: ["React", "Node.js", "PHP 8.2 OOP", "PostgreSQL", "Docker", "REST APIs", "Vercel / Edge"],
    },
    {
      period: "2018 — 2021",
      role: "WordPress & CMS Architecture Specialist",
      company: "Web Solutions Engineering",
      location: "Remote",
      description:
        "Engineered bespoke WordPress themes, custom Divi layout templates, and high-performance WooCommerce stores. Mastered Google Core Web Vitals optimization, consistently delivering 95+ PageSpeed scores on complex enterprise CMS deployments.",
      highlights: [
        "Pioneered modular Divi section template architecture without page builder bloat",
        "Optimized checkout funnels for international WooCommerce merchants",
        "Achieved 100% Core Web Vitals passing rate across client portfolio sites",
      ],
      skills: ["WordPress Core", "Divi 5", "WooCommerce", "PHP", "MySQL", "Core Web Vitals", "Technical SEO"],
    },
    {
      period: "2016 — 2018",
      role: "Front-End Developer & Web Solutions Engineer",
      company: "Digital Development Services",
      location: "Remote",
      description:
        "Authored interactive, cross-browser responsive web interfaces. Focused on foundational semantic HTML5, CSS3 layout systems, JavaScript DOM manipulation, and relational database schema modeling.",
      highlights: [
        "Built 50+ bespoke client websites with mobile-first responsiveness",
        "Engineered interactive UI widgets and form validation flows",
        "Maintained strict version control with Git and collaborative developer workflows",
      ],
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Responsive UI", "Git", "MySQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase">CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            7–8 Years of Practical Industry Experience
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A chronological track record of shipping software, leading engineering architectures, and solving real-world business challenges.
          </p>
        </div>

        {/* Vertical Timeline Container (Inspired by 21st.dev timeline-02 [id: 28334]) */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Connecting Line */}
          <div
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-[rgba(16,24,32,0.14)]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-20 group">
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full border-4 ${
                    item.isCurrent
                      ? "border-emerald-500 bg-white shadow-xs"
                      : "border-[#004275] bg-white"
                  } transition-transform duration-200 group-hover:scale-125 z-10`}
                />

                {/* Card Container */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/50 hover:shadow-md transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[rgba(16,24,32,0.08)]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#004275] bg-[#004275]/10 px-2.5 py-0.5 rounded-md">
                          {item.period}
                        </span>
                        {item.isCurrent && (
                          <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-[#101820] tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#101820]/70 font-medium">
                        {item.company} &bull; {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-[#101820]/80 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#101820]/85 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(16,24,32,0.08)]">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

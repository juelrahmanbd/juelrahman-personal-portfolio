import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Lock,
  Layers,
  Workflow,
} from "lucide-react";
import { portfolioProjects } from "@/data/projectsData";
import ProjectPreviewCard from "@/components/portfolio/ProjectPreviewCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Md. Juel Rahman",
    };
  }

  return {
    title: `${project.title} | Case Study | Md. Juel Rahman`,
    description: project.summary,
    alternates: {
      canonical: `https://juelrahman.me/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study | Md. Juel Rahman`,
      description: project.summary,
      url: `https://juelrahman.me/portfolio/${slug}`,
      siteName: "Md. Juel Rahman Portfolio",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects (excluding current project)
  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#101820]/60 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#004275] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[#004275] transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#004275] truncate max-w-[240px]" aria-current="page">
              {project.shortTitle}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101820]/75 hover:text-[#004275] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Hero Header Card */}
        <section className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-8 md:p-10 shadow-xs mb-10 relative overflow-hidden">
          {/* Top Royal Blue Micro-Beam Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F8FB] border border-[rgba(0,66,117,0.16)] text-xs font-bold text-[#004275] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" />
                  <span>{project.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Production Site</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight leading-tight mb-4">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-[#101820]/80 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights & Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#101820]/60 mr-1">
                  Stack &amp; Focus:
                </span>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-[#101820] px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions & Live URL Box */}
            <div className="lg:w-72 shrink-0 bg-[#F5F8FB] rounded-xl border border-[rgba(16,24,32,0.1)] p-5 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#004275] mb-1">
                  Client / Platform
                </span>
                <div className="text-sm font-bold text-[#101820] mb-3">
                  {project.client}
                </div>

                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#004275] mb-1">
                  Live Production URL
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 bg-white border border-[rgba(16,24,32,0.08)] px-2.5 py-1.5 rounded-lg mb-4 truncate">
                  <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">{project.displayUrl}</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[rgba(16,24,32,0.08)]">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#004275] hover:bg-[#003157] shadow-xs transition-all"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#101820] bg-white border border-[rgba(16,24,32,0.14)] hover:bg-slate-50 transition-colors"
                >
                  <span>Request Similar Build</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Structured 2-Column Grid: Scope & Architecture Built vs Key User & Business Flows */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          {/* Left Column: Scope & Architecture Built (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#004275]/10 flex items-center justify-center text-[#004275]">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#101820] tracking-tight">
                  Scope &amp; Technical Architecture Built
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#101820]/70 mb-5 leading-relaxed">
                Core engineering specifications, custom layouts, and technical infrastructure delivered for this client platform.
              </p>

              <ul className="space-y-3.5">
                {project.scopeAndArchitecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#101820]/85">
                    <span className="w-5 h-5 rounded-full bg-[#004275]/10 text-[#004275] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Key User & Business Flows (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#004275]/10 flex items-center justify-center text-[#004275]">
                  <Workflow className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#101820] tracking-tight">
                  Key User Journeys &amp; Conversion Flows
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#101820]/70 mb-5 leading-relaxed">
                Frictionless user pathways engineered to guide visitors from initial interest to qualified inquiry or transaction.
              </p>

              <ul className="space-y-3.5">
                {project.keyFlows.map((flow, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#101820]/85">
                    <span className="w-5 h-5 rounded-full bg-[#F5F8FB] border border-[rgba(0,66,117,0.2)] text-[#004275] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{flow}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deliverables & Technical Highlights Grid (4 Structured Cards) */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004275] block mb-1">
              PRODUCTION DELIVERABLES
            </span>
            <h2 className="text-2xl font-extrabold text-[#101820] tracking-tight">
              Engineering Modules &amp; Client Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {project.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 shadow-2xs hover:border-[#004275]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center text-xs font-bold text-[#004275] mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#101820] mb-2 leading-snug">
                    {deliv.title}
                  </h3>
                  <p className="text-xs text-[#101820]/75 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects Row */}
        <section className="mb-16 pt-12 border-t border-[rgba(16,24,32,0.1)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#004275] block mb-1">
                EXPLORE MORE WORK
              </span>
              <h2 className="text-2xl font-extrabold text-[#101820] tracking-tight">
                Related Client Builds &amp; Platforms
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#004275] hover:underline"
            >
              <span>View All 7 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relProject) => (
              <div key={relProject.id} className="h-full">
                <ProjectPreviewCard project={relProject} />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-8 sm:p-10 shadow-xs text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-3">
            Ready to engineer your next website or custom application?
          </h2>

          <p className="text-sm sm:text-base text-[#101820]/75 max-w-xl mx-auto leading-relaxed mb-6">
            Let&apos;s map out your project requirements, technical architecture, and milestones with transparent scoping and rapid delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow-sm transition-all"
            >
              <span>Book a Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-sm font-semibold text-[#101820] hover:bg-slate-50 transition-colors"
            >
              <span>Visit {project.shortTitle} Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

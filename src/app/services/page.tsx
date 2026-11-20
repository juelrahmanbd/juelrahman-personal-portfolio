import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, Search, ChevronRight } from "lucide-react";
import ServicesCatalogFilter from "@/components/services/ServicesCatalogFilter";

export const metadata: Metadata = {
  title: "Engineering Services & Architecture Solutions | Md. Juel Rahman",
  description:
    "Explore production-grade engineering services across WordPress & Divi 5 development, custom full-stack web applications, AI automation, and high-performance technical optimization.",
  alternates: {
    canonical: "https://juelrahman.me/services",
  },
};

export default function ServicesPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Technical Scoping",
      desc: "Deep-dive analysis of your business logic, user journeys, data flow requirements, performance targets, and infrastructure constraints to establish fixed technical specifications.",
      icon: Search,
    },
    {
      step: "02",
      title: "Architecture & UX Engineering",
      desc: "Designing resilient database schemas, API contracts, modular component systems, and crisp editorial wireframes validated for 100% usability and technical feasibility.",
      icon: Shield,
    },
    {
      step: "03",
      title: "Iterative Build & Rigorous QA",
      desc: "Clean, production-grade code implementation with continuous staging verification, strict TypeScript typing, sub-second performance tuning, and cross-browser stress testing.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Deploy, Optimize & Support",
      desc: "Zero-downtime production launch, automated backups, CDN caching configuration, SSL hardening, Core Web Vitals verification (95+), and comprehensive training documentation.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FB] pt-24 pb-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#101820]/60">
            <li>
              <Link href="/" className="hover:text-[#004275] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#004275]" aria-current="page">
              Services Catalog
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase">FULL ENGINEERING CATALOG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            Comprehensive Web, Full-Stack &amp; AI Services
          </h1>
          <p className="text-base sm:text-lg text-[#101820]/75 leading-relaxed">
            From high-performance WordPress &amp; Divi 5 implementations to custom SaaS platforms, AI workflow pipelines, and enterprise performance hardening.
          </p>
        </div>

        {/* Interactive Filterable Services Grid */}
        <section className="mb-24">
          <ServicesCatalogFilter />
        </section>

        {/* Architectural 4-Step Process Section */}
        <section className="mb-24 pt-12 border-t border-[rgba(16,24,32,0.1)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-3">
              <span>✦</span>
              <span className="tracking-wider uppercase">DELIVERY METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-3">
              Engineering Process &amp; Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
              Every engagement follows an uncompromising architectural standard to guarantee clean code, rapid delivery, and verifiable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-6 shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#004275] font-mono tracking-wider">
                        STAGE {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#004275]/10 text-[#004275] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#101820] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* High-Converting Bottom Conversion Banner */}
        <section className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Top Micro-Beam Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-4">
            Have a project with specialized technical requirements?
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a full custom build, an AI integration pipeline, or high-speed optimization on an existing web platform, I can help you engineer the solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#004275] text-white text-sm font-semibold hover:bg-[#003157] transition-all shadow-xs hover:shadow-md"
            >
              <span>Book a Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-sm font-semibold text-[#101820] hover:bg-slate-50 transition-colors"
            >
              <span>View Selected Work</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

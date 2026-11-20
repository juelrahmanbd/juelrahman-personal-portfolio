import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import PortfolioFilterableGrid from "@/components/portfolio/PortfolioFilterableGrid";

export const metadata: Metadata = {
  title: "Portfolio & Verified Client Builds | Md. Juel Rahman",
  description:
    "Explore verified websites and digital platforms built by Md. Juel Rahman across WordPress, Divi 5, custom web applications, eCommerce, and booking systems.",
  alternates: {
    canonical: "https://juelrahman.me/portfolio",
  },
  openGraph: {
    title: "Portfolio & Verified Client Builds | Md. Juel Rahman",
    description:
      "Explore verified websites and digital platforms built by Md. Juel Rahman across WordPress, Divi 5, custom web applications, eCommerce, and booking systems.",
    url: "https://juelrahman.me/portfolio",
    siteName: "Md. Juel Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Portfolio
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[rgba(0,66,117,0.16)] text-[11px] font-bold tracking-wider text-[#004275] uppercase mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
            <span>VERIFIED CLIENT PROJECTS &amp; PLATFORMS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101820] tracking-tight leading-tight mb-4">
            Production Websites &amp; Digital Solutions
          </h1>

          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            A curated showcase of live client systems, staging environments, custom WordPress &amp; Divi 5 architectures,
            commercial quoting platforms, and clinical healthcare portals built with technical precision.
          </p>
        </div>

        {/* Interactive Filterable Projects Grid */}
        <PortfolioFilterableGrid />

        {/* Bottom Conversion Banner */}
        <section className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
          {/* Continuous Micro-Beam Accent Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-3">
            Planning a custom web application or WordPress platform?
          </h2>

          <p className="text-sm sm:text-base text-[#101820]/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a full site build from scratch, complex API integrations, or high-performance optimization on an existing codebase, let&apos;s discuss your technical scope.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>Start a Project Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-sm font-semibold text-[#101820] hover:bg-slate-50 transition-colors"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

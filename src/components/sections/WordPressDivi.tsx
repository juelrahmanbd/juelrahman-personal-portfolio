"use client";

import React from "react";
import {
  Globe,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Gauge,
} from "lucide-react";

export default function WordPressDivi() {
  const benchmarks = [
    { label: "Google PageSpeed Mobile", score: "96 / 100", status: "Optimal" },
    { label: "Google PageSpeed Desktop", score: "99 / 100", status: "Optimal" },
    { label: "Largest Contentful Paint (LCP)", score: "< 1.1s", status: "Fast" },
    { label: "Cumulative Layout Shift (CLS)", score: "0.00", status: "Zero Shift" },
  ];

  return (
    <section
      id="wordpress"
      className="py-20 md:py-28 bg-white border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Globe className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase">CMS ENGINEERING PILLAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            WordPress &amp; Divi 5 Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Eliminating page builder bloat with the next-generation Divi 5 framework, modern object-oriented PHP 8.2+, bespoke WooCommerce checkout funnels, and verified 95+ PageSpeed scores.
          </p>
        </div>

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-[#F5F8FB] rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.12)] hover:border-[#004275]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(16,24,32,0.1)] flex items-center justify-center text-[#004275] mb-5 shadow-2xs">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101820] mb-2">
                Divi 5 Modular Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed mb-5">
                Leveraging the new lightweight Divi 5 React-based core to create modular section templates that client teams can update without breaking design standards or slowing down the DOM.
              </p>

              <div className="space-y-2 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No legacy shortcode clutter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Semantic HTML5 section hierarchies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Custom theme &amp; child-theme extensions</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-mono font-bold text-[#004275]">
                Modular Layout Standard
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5F8FB] rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.12)] hover:border-[#004275]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(16,24,32,0.1)] flex items-center justify-center text-[#004275] mb-5 shadow-2xs">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101820] mb-2">
                95+ Core Web Vitals &amp; Speed
              </h3>
              <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed mb-5">
                Aggressive asset minification, critical CSS extraction, WebP image serving, server-side caching, and database query optimization for sub-second loads.
              </p>

              <div className="space-y-2 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>LCP under 1.2s on mobile devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Core Web Vitals compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Technical JSON-LD Schema markup</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-mono font-bold text-emerald-700">
                100% Passed Benchmarks
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F5F8FB] rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.12)] hover:border-[#004275]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(16,24,32,0.1)] flex items-center justify-center text-[#004275] mb-5 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101820] mb-2">
                Staging &amp; WooCommerce Security
              </h3>
              <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed mb-5">
                Engineered staging-to-production workflows preventing customer downtime. Bespoke WooCommerce checkout funnels with payment gateway hardening and order webhook sync.
              </p>

              <div className="space-y-2 text-xs text-[#101820]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Subdomain isolation for client review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Automated database serialization sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>High-conversion custom checkout funnels</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-mono font-bold text-[#004275]">
                Zero-Downtime Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Speed Scorecard Banner */}
        <div className="bg-[#F5F8FB] rounded-2xl p-6 sm:p-8 border border-[rgba(16,24,32,0.12)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-mono font-bold uppercase text-[#004275] tracking-wider block mb-1">
              Performance Verification
            </span>
            <h4 className="text-xl font-bold text-[#101820] tracking-tight">
              Verified Real-World Google Core Web Vitals
            </h4>
            <p className="text-xs sm:text-sm text-[#101820]/75">
              Tested on live client deployments across European and US hosting infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {benchmarks.map((b, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-[rgba(16,24,32,0.08)] text-center">
                <div className="text-base sm:text-lg font-black font-mono text-emerald-600">{b.score}</div>
                <div className="text-[11px] text-[#101820]/70 font-medium">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

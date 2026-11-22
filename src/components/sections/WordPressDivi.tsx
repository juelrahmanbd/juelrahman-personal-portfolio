"use client";

import React from "react";
import { TechIcon, TechBadge } from "@/components/icons/TechIcons";
import { CheckCircle2 } from "lucide-react";

export default function WordPressSection() {
  const wpBadges = [
    { name: "WordPress", label: "WordPress Core" },
    { name: "Divi 5", label: "Divi 5 Modular" },
    { name: "Elementor", label: "Elementor" },
    { name: "Elementor Pro", label: "Elementor Pro" },
    { name: "WooCommerce", label: "WooCommerce" },
    { name: "PHP", label: "PHP 8.2+" },
    { name: "Gutenberg", label: "Gutenberg Blocks" },
    { name: "Rank Math", label: "Rank Math SEO" },
    { name: "PageSpeed Insights", label: "PageSpeed Insights" },
    { name: "Google Search Console", label: "Search Console" },
    { name: "Custom Themes", label: "Custom Themes" },
    { name: "Custom Plugins", label: "Custom Plugins" },
  ];

  const capabilityPillars = [
    {
      category: "Architecture 01",
      title: "Custom Themes, Plugins & Core PHP",
      icon1: "WordPress",
      icon2: "PHP",
      lead: "Object-oriented PHP 8.2+, modular theme architectures, Gutenberg block development, and custom REST API integrations without theme lock-in.",
      bullets: [
        "Custom Theme Architecture & Child Themes",
        "Bespoke Plugin Development & Hooks API",
        "Gutenberg Block Editor & Full-Site Editing",
        "WordPress REST API & Custom Endpoints",
        "Automated Database Migrations & Multi-site",
      ],
      tag: "Core Engineering",
    },
    {
      category: "Architecture 02",
      title: "Divi 5 & Elementor Pro Frameworks",
      icon1: "Divi 5",
      icon2: "Elementor",
      lead: "Specialized engineering across modern visual frameworks: the new lightweight Divi 5 React core and Elementor Pro without bloated shortcodes.",
      bullets: [
        "Divi 5 Modular Layout System (No Bloat)",
        "Divi Theme & Visual Builder Mastery",
        "Elementor & Elementor Pro Theme Builder",
        "ACF Pro & Custom Field Data Modeling",
        "Responsive Pixel-Perfect Replatforming",
      ],
      tag: "Visual Builders",
    },
    {
      category: "Architecture 03",
      title: "WooCommerce & Custom Checkout Funnels",
      icon1: "WooCommerce",
      lead: "High-converting online store architectures, bespoke checkout funnels, payment gateway hardening, and automated webhook order synchronization.",
      bullets: [
        "Custom Checkout & Cart Optimization",
        "Stripe, PayPal & Regional Payment Hardening",
        "Custom Product Addons & Dynamic Pricing",
        "Inventory, CRM & Webhook Automation",
        "High-Volume WooCommerce Scaling",
      ],
      tag: "eCommerce Systems",
    },
    {
      category: "Architecture 04",
      title: "Speed, Technical SEO & Enterprise Staging",
      icon1: "PageSpeed Insights",
      icon2: "Rank Math",
      lead: "Performance-focused development achieving optimal Google Core Web Vitals, Rank Math technical SEO, schema markup, and isolated staging workflows.",
      bullets: [
        "Google Core Web Vitals Optimization",
        "Asset Minification & Critical CSS Inlining",
        "Technical SEO, Schema & Rank Math Setup",
        "Subdomain Staging & Zero-Downtime Sync",
        "Enterprise Security & Malware Hardening",
      ],
      tag: "Performance & SEO",
    },
  ];

  const standards = [
    {
      metric: "< 1.2s",
      label: "Target LCP Standard",
      detail: "Largest Contentful Paint target on real client builds",
    },
    {
      metric: "0.00",
      label: "Zero Layout Shift",
      detail: "Strict CLS prevention via reserved aspect ratios",
    },
    {
      metric: "100%",
      label: "Schema Compliance",
      detail: "Valid JSON-LD schema markup for rich snippets",
    },
    {
      metric: "Zero",
      label: "Downtime Staging",
      detail: "Subdomain isolation protocol before live deployment",
    },
  ];

  return (
    <section
      id="wordpress"
      className="py-20 md:py-28 bg-white border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Correct Positioning */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FB] border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <TechIcon name="WordPress" className="w-4 h-4" />
            <span className="tracking-wider uppercase font-mono font-bold">CMS ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            WordPress
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#004275] tracking-tight mb-4">
            WordPress Development, Architecture &amp; Performance
          </p>

          <p className="text-sm sm:text-base text-[#101820]/80 leading-relaxed max-w-2xl mx-auto">
            End-to-end WordPress development across the entire ecosystem &mdash; from custom themes and plugins to Divi 5, Elementor, Gutenberg, and WooCommerce. I build maintainable, scalable WordPress solutions, business websites, custom functionality, and optimized eCommerce experiences with a strong focus on performance, security, technical SEO, and clean architecture.
          </p>
        </div>

        {/* Authentic Brand Ecosystem Badges Showcase */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-14">
          {wpBadges.map((badge, idx) => (
            <TechBadge
              key={idx}
              name={badge.name}
              label={badge.label}
              className="py-1.5 px-3 bg-[#F5F8FB] hover:bg-white hover:border-[#004275]/50 hover:shadow-xs transition-all text-xs"
            />
          ))}
        </div>

        {/* 4 Architecture Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {capabilityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F5F8FB] rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.12)] hover:border-[#004275]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header with Authentic Brand SVGs */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[rgba(16,24,32,0.08)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(16,24,32,0.1)] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <TechIcon name={pillar.icon1} className="w-5 h-5" />
                    </div>
                    {pillar.icon2 && (
                      <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(16,24,32,0.1)] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <TechIcon name={pillar.icon2} className="w-5 h-5" />
                      </div>
                    )}
                    <div className="ml-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004275] block">
                        {pillar.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#101820] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-[#004275] bg-[#004275]/10 px-2.5 py-1 rounded-md hidden sm:inline-block">
                    {pillar.tag}
                  </span>
                </div>

                {/* Pillar Description */}
                <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed mb-6">
                  {pillar.lead}
                </p>

                {/* Key Capability Bullets */}
                <div className="space-y-2 mb-6">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#101820]/85 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Architecture Tag */}
              <div className="pt-4 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between text-xs">
                <span className="font-mono text-[#101820]/60">Standard:</span>
                <span className="font-mono font-bold text-[#004275]">
                  Clean &amp; Maintainable Codebase
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Performance Standards Card */}
        <div className="bg-[#F5F8FB] rounded-3xl p-6 sm:p-8 border border-[rgba(16,24,32,0.14)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-[rgba(16,24,32,0.08)]">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <TechIcon name="PageSpeed Insights" className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase text-[#004275] tracking-wider">
                  Performance &amp; Speed Engineering
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#101820] tracking-tight">
                Engineering Target Standards &amp; Client Deployments
              </h4>
              <p className="text-xs sm:text-sm text-[#101820]/75 mt-1 leading-relaxed">
                Applied to custom builds and speed optimization contracts across European, Scandinavian, and US infrastructure &mdash; prioritizing real user experience and Google Core Web Vitals.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                <TechIcon name="Rank Math" className="w-3.5 h-3.5" />
                <span>Rank Math Pro</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[rgba(16,24,32,0.1)] text-xs font-mono font-semibold text-[#101820]">
                <TechIcon name="Google Search Console" className="w-3.5 h-3.5" />
                <span>Search Console</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-[rgba(16,24,32,0.08)] shadow-2xs text-left"
              >
                <div className="text-xl sm:text-2xl font-black font-mono text-[#004275] mb-1">
                  {s.metric}
                </div>
                <div className="text-xs font-bold text-[#101820] mb-0.5">{s.label}</div>
                <div className="text-[11px] text-[#101820]/65 leading-tight">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

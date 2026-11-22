"use client";

import React from "react";
import { TechIcon, TechBadge } from "@/components/icons/TechIcons";
import { CheckCircle2, Globe } from "lucide-react";

export default function WordPressSection() {
  const wpBadges = [
    { name: "WordPress", label: "WordPress Core" },
    { name: "Divi 5", label: "Divi 5 Framework" },
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

  // The 16 required service capabilities
  const servicesList = [
    { title: "WordPress Website Development", category: "Core", desc: "End-to-end bespoke website architectures tailored to business goals." },
    { title: "Custom WordPress Development", category: "Core", desc: "Non-templated, tailored development for unique business workflows." },
    { title: "Divi 5 Architecture", category: "Builders", desc: "Lightweight modular layouts utilizing Divi 5's modern React core." },
    { title: "Elementor & Elementor Pro", category: "Builders", desc: "Dynamic theme templates, custom loops, and bespoke widget hooks." },
    { title: "WooCommerce Engineering", category: "eCommerce", desc: "Scalable stores, custom cart logic, and multi-currency checkouts." },
    { title: "Custom WordPress Themes", category: "Themes", desc: "Bespoke semantic child and parent themes without builder bloat." },
    { title: "Custom Plugins", category: "Plugins", desc: "Object-oriented plugins extending core functionality and third-party APIs." },
    { title: "Gutenberg Block Development", category: "Builders", desc: "Native full-site editing and React-based custom editor blocks." },
    { title: "PHP Development (PHP 8.2+)", category: "Core", desc: "Strict modern object-oriented PHP with clean lifecycle hooks." },
    { title: "API Integration & Webhooks", category: "Integration", desc: "REST API endpoints, webhook listeners, and CRM synchronization." },
    { title: "Website Migration & Staging", category: "DevOps", desc: "Zero-downtime database and asset migration to staging/production." },
    { title: "Enterprise Security", category: "Security", desc: "Database hardening, login firewalls, and vulnerability mitigation." },
    { title: "Performance Optimization", category: "Performance", desc: "Asset minification, caching strategies, and Core Web Vitals tuning." },
    { title: "Technical SEO (Rank Math)", category: "SEO", desc: "Structured data schema, canonical setup, and Google Search Console audit." },
    { title: "eCommerce Customization", category: "eCommerce", desc: "Bespoke product configurators, checkout flows, and payment gateways." },
    { title: "Maintenance & Support", category: "DevOps", desc: "Core updates, automated backups, and continuous uptime monitoring." },
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
      icon2: "WordPress",
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
      detail: "Largest Contentful Paint benchmark on production builds",
    },
    {
      metric: "< 0.05",
      label: "Target CLS Standard",
      detail: "Cumulative Layout Shift prevention via explicit aspect ratios",
    },
    {
      metric: "Strict",
      label: "Security Hardening",
      detail: "Sanitized inputs, nonces, and isolated database permissions",
    },
    {
      metric: "100%",
      label: "Responsive Parity",
      detail: "Pixel-accurate rendering across mobile, tablet, and ultra-wide",
    },
  ];

  return (
    <section
      id="wordpress"
      className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Required exact heading and eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 shadow-xs mb-4">
            <Globe className="w-3.5 h-3.5 text-purple-600" />
            <span className="tracking-widest uppercase font-mono font-bold">CMS ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-4">
            WordPress
          </h2>

          <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 mb-6">
            WordPress Development, Architecture &amp; Performance
          </p>

          {/* Required Exact Copy */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            End-to-end WordPress development across the entire ecosystem — from custom themes and plugins to Divi 5, Elementor, Gutenberg, and WooCommerce. I build maintainable, scalable WordPress solutions, business websites, custom functionality, and optimized eCommerce experiences with a strong focus on performance, security, technical SEO, and clean architecture.
          </p>
        </div>

        {/* Authentic Brand SVGs Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-16">
          {wpBadges.map((badge) => (
            <TechBadge
              key={badge.name}
              name={badge.name}
              label={badge.label}
              size={15}
              className="px-3.5 py-2 text-xs bg-[#F8FAFC] border-slate-200 hover:border-purple-400 text-slate-800 hover:text-purple-700 shadow-2xs"
            />
          ))}
        </div>

        {/* 4 Core Architectural Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {capabilityPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between group hover:border-purple-400 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200/60">
                  <span className="text-[11px] font-mono font-bold uppercase text-purple-700 tracking-wider">
                    {pillar.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <TechIcon name={pillar.icon1} className="w-5 h-5" />
                    {pillar.icon2 && <TechIcon name={pillar.icon2} className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-purple-700 transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.lead}
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {pillar.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-700">
                  {pillar.tag}
                </span>
                <span className="text-xs text-slate-500 font-medium">Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full 16-Service Capability Matrix */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200/80 shadow-xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
              Full-Spectrum WordPress Service Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Divi is one specialized component of my WordPress expertise—spanning engineering, design systems, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {servicesList.map((srv, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-2xs transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    {srv.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Technical Standards (No Fabricated Metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {standards.map((std, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-700 font-mono mb-1">
                {std.metric}
              </div>
              <div className="text-xs font-bold text-slate-900 mb-1">
                {std.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {std.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

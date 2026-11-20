"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import { ServiceIcon } from "@/components/services/ServiceIcons";

const categories = [
  "All Services",
  "WordPress & eCommerce",
  "Full-Stack & SaaS",
  "AI & Automation",
  "SEO, Speed & Security",
] as const;

type CategoryFilter = (typeof categories)[number];

export default function ServicesCatalogFilter() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Services");

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === "All Services") return true;
    return service.category === selectedCategory;
  });

  return (
    <div>
      {/* Category Filter Navigation Bar */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
        {categories.map((category) => {
          const count =
            category === "All Services"
              ? servicesData.length
              : servicesData.filter((s) => s.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? "bg-[#004275] text-white border-[#004275] shadow-xs"
                  : "bg-white text-[#101820]/75 border-[rgba(16,24,32,0.14)] hover:text-[#101820] hover:border-[#004275]/40"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services Grid (All 12 or Filtered) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service: ServiceDetail) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="group bg-white rounded-xl border border-[rgba(16,24,32,0.14)] hover:border-[#004275] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
          >
            {/* Top Micro-Beam Bar */}
            <div className="relative h-1 w-full bg-[#004275] overflow-hidden">
              <div
                className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Inner Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                {/* Header: Icon, Category Badge & Index */}
                <div className="flex items-center justify-between mb-4">
                  <ServiceIcon type={service.iconType} className="h-8" />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {service.category}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#004275] font-mono tracking-wider">
                      {service.index}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#101820] mb-2 tracking-tight group-hover:text-[#004275] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Core Stack Pill Summary */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Core Architecture
                  </p>
                  <p className="text-xs text-slate-700 font-mono line-clamp-1">
                    {service.quickSpecs.coreStack}
                  </p>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004275]">
                <span>Explore Full Architecture</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

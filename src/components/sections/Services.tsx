"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ServiceIcon } from "@/components/services/ServiceIcons";

export default function Services() {
  // Top 8 core services for the homepage 4x2 architectural grid
  const topServices = servicesData.slice(0, 8);

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
            <span className="tracking-wider uppercase">SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            Web, AI &amp; Digital Engineering Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#101820]/75 leading-relaxed max-w-2xl mx-auto">
            Custom-built technology and strategy to elevate your business, optimize operations, and drive measurable growth.
          </p>
        </div>

        {/* 4x2 Architectural Services Grid (Matches Reference Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl border border-[rgba(16,24,32,0.14)] hover:border-[#004275] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
            >
              {/* Continuous Ambient Micro-Beam Accent Top Bar */}
              <div className="relative h-1 w-full bg-[#004275] overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Card Inner Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Top Metadata Row: Official Icon & Correct Incremented Index (01–08) */}
                  <div className="flex items-center justify-between mb-4">
                    <ServiceIcon type={service.iconType} className="h-8" />
                    <span className="text-xs sm:text-sm font-bold text-[#004275] font-mono tracking-wider">
                      {service.index}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#101820] mb-2 tracking-tight group-hover:text-[#004275] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom Row: Arrow linking forward */}
                <div className="flex justify-end items-center pt-4 text-[#004275]">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered "View All Services ->" CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#004275] text-white text-sm font-semibold hover:bg-[#003157] transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

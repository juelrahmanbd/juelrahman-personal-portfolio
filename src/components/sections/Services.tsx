"use client";

import React from "react";
import { servicesList } from "@/data/portfolioData";
import {
  Sparkles,
  Globe,
  Layout,
  Layers,
  Cpu,
  ShoppingCart,
  Puzzle,
  Workflow,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-white" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-white" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-white" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-white" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-white" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5 text-white" />;
      case "Puzzle":
        return <Puzzle className="w-5 h-5 text-white" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-white" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-white" />;
      case "Search":
        return <Search className="w-5 h-5 text-white" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDFF] border border-[#E9E7F5] text-xs font-semibold text-[#6847E8] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#11152F] tracking-tight mb-3">
            Digital Solutions I Offer
          </h2>
          <p className="text-sm sm:text-base text-[#626780] leading-relaxed">
            A complete range of development and digital services to build, improve, and scale your online presence.
          </p>
        </div>

        {/* Services Grid (Matches Reference Image Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container with Distinct Theme Gradient */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform duration-200`}
                >
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#11152F] mb-2.5 tracking-tight group-hover:text-[#6847E8] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#626780] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-4 border-t border-[#FAFAFF] flex items-center text-xs font-semibold text-[#6847E8] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

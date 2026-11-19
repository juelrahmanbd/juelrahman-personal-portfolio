"use client";

import React from "react";
import { whyChooseMeItems } from "@/data/portfolioData";
import {
  Star,
  Lightbulb,
  Target,
  CheckCircle2,
  Smartphone,
  Share2,
  Zap,
  FolderKanban,
  MessageSquare,
} from "lucide-react";

export default function WhyChooseMe() {
  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-5 h-5 text-[#6847E8]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[#6847E8]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-[#6847E8]" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-[#6847E8]" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-[#6847E8]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#6847E8]" />;
      case "FolderKanban":
        return <FolderKanban className="w-5 h-5 text-[#6847E8]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#6847E8]" />;
      default:
        return <Star className="w-5 h-5 text-[#6847E8]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDFF] border border-[#E9E7F5] text-xs font-semibold text-[#6847E8] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#6847E8]/20" />
            <span>Why Work With Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#11152F] tracking-tight mb-3">
            What You Can Expect
          </h2>
          <p className="text-sm sm:text-base text-[#626780] leading-relaxed">
            More than just development — a reliable partner who understands your goals and delivers with care.
          </p>
        </div>

        {/* 8-Card Grid (4x2 on Large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseMeItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#F1EDFF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  {getItemIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#11152F] mb-2 tracking-tight group-hover:text-[#6847E8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#626780] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

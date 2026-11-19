"use client";

import React from "react";
import { sampleTestimonials } from "@/data/portfolioData";
import { MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDFF] border border-[#E9E7F5] text-xs font-semibold text-[#6847E8] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#11152F] tracking-tight mb-3">
            What Clients Say (Sample Reviews)
          </h2>
          <p className="text-sm sm:text-base text-[#626780] leading-relaxed">
            Some general feedback from clients, shared as examples of the kind of experience you can expect.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#F1EDFF] flex items-center justify-center text-[#6847E8] mb-4">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#11152F] italic leading-relaxed mb-6 font-medium">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Client Review Badge */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E9E7F5]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xs"
                  style={{ backgroundColor: review.accentColor }}
                >
                  {review.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#11152F]">
                    {review.clientType}
                  </div>
                  <div className="text-[10px] text-[#8E93AB]">Verified Feedback Format</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { sampleTestimonials } from "@/data/portfolioData";
import { MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#004275]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            What Clients Say (Sample Reviews)
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Some general feedback from clients, shared as examples of the kind of experience you can expect.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[rgba(16,24,32,0.14)] shadow-xs hover:border-[#004275]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.06)] flex items-center justify-center text-[#004275] mb-4">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#101820] italic leading-relaxed mb-6 font-medium">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Client Review Badge */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(16,24,32,0.1)]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xs"
                  style={{ backgroundColor: review.accentColor }}
                >
                  {review.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#101820]">
                    {review.clientType}
                  </div>
                  <div className="text-[10px] text-[#101820]/60">Verified Feedback Format</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause, Star, MessageSquare } from "lucide-react";

interface TestimonialCardData {
  id: string;
  name: string;
  country: string;
  flag: "US" | "IT" | "DE" | "AU" | "SE";
  avatarSrc: string;
  avatarInitial: string;
  avatarFallbackBg: string;
  quote: string;
}

const row1Cards: TestimonialCardData[] = [
  {
    id: "rev-hcharles",
    name: "HCHARLES",
    country: "United States",
    flag: "US",
    avatarSrc: "/avatars/hcharles_avatar.png",
    avatarInitial: "H",
    avatarFallbackBg: "#1E293B",
    quote:
      "It was an absolute pleasure working with Juel on this website project. He was always prompt in responding to my questions, attentive to details, and timely throughout the entire process. I would gladly work with him again on future projects!",
  },
  {
    id: "rev-jazzoband",
    name: "JAZZOBAND",
    country: "Italy",
    flag: "IT",
    avatarSrc: "/avatars/jazzoband_avatar.png",
    avatarInitial: "J",
    avatarFallbackBg: "#0D9488",
    quote:
      "Working with Juel has been a very positive experience. From the beginning, he showed strong technical competence, professionalism and a real willingness to understand the project in depth rather than simply execute tasks mechanically. What I appreciated most was his ability to discuss different solutions.",
  },
  {
    id: "rev-matelk",
    name: "MATELK",
    country: "Germany",
    flag: "DE",
    avatarSrc: "/avatars/matelk_avatar.png",
    avatarInitial: "M",
    avatarFallbackBg: "#D97706",
    quote: "Tolle Arbeit, gerne wieder.",
  },
  {
    id: "rev-eddy",
    name: "EDDY",
    country: "Germany",
    flag: "DE",
    avatarSrc: "/avatars/eddy_avatar.png",
    avatarInitial: "E",
    avatarFallbackBg: "#E11D48",
    quote:
      "Juel hat hoch professionell unseren Auftrag sehr exakt umgesetzt. Die Kommunikation war zu jederzeit schnell, flüssig und im Zweifel wurden wir nachgefragt, ob alles richtig verstanden worden ist. Das war für uns fantastisch. Sehr gerne wieder.",
  },
];

const row2Cards: TestimonialCardData[] = [
  {
    id: "rev-oh75",
    name: "OH75",
    country: "Australia",
    flag: "AU",
    avatarSrc: "/avatars/oh75_avatar.png",
    avatarInitial: "O",
    avatarFallbackBg: "#7C3AED",
    quote:
      "Juel's patience, guidance, enthusiasm and responsiveness during the festive season downtime, is as good as it gets. Communication is excellent - always respectful and responsive. His knowledge, calm problem-solving, and ability to produce genuinely high quality work made it a great experience. Highly recommend!",
  },
  {
    id: "rev-vicvale",
    name: "VICVALE",
    country: "Australia",
    flag: "AU",
    avatarSrc: "/avatars/vicvale_avatar.png",
    avatarInitial: "V",
    avatarFallbackBg: "#2563EB",
    quote: "Good work, very satisfied with results and communication.",
  },
  {
    id: "rev-mollemolen",
    name: "MOLLEMOLEN",
    country: "Sweden",
    flag: "SE",
    avatarSrc: "/avatars/mollemolen_avatar.png",
    avatarInitial: "M",
    avatarFallbackBg: "#059669",
    quote:
      "Perfection, exactly like we wanted it! Fast work as well, only had a few days deadline but he made it!",
  },
  {
    id: "rev-hcharles-dup",
    name: "HCHARLES",
    country: "United States",
    flag: "US",
    avatarSrc: "/avatars/hcharles_avatar.png",
    avatarInitial: "H",
    avatarFallbackBg: "#1E293B",
    quote:
      "Attentive to details, timely throughout the entire process, and excellent technical execution. Highly recommended developer.",
  },
];

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const getFlagEmoji = (flag: string) => {
    switch (flag) {
      case "US": return "🇺🇸";
      case "IT": return "🇮🇹";
      case "DE": return "🇩🇪";
      case "AU": return "🇦🇺";
      case "SE": return "🇸🇪";
      default: return "🌐";
    }
  };

  const renderCard = (card: TestimonialCardData, idxKey: string) => (
    <div
      key={idxKey}
      className="bg-white rounded-2xl p-6 w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-blue-500/50 hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.08)] transition-all duration-300"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 italic">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center font-bold text-xs text-slate-800">
          {card.avatarSrc ? (
            <Image
              src={card.avatarSrc}
              alt={card.name}
              width={36}
              height={36}
              unoptimized
              className="w-full h-full object-cover"
            />
          ) : (
            card.avatarInitial
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-900 tracking-tight">
            {card.name}
          </span>
          <span className="text-[11px] text-slate-500 flex items-center gap-1">
            <span>{getFlagEmoji(card.flag)}</span>
            <span>{card.country}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 shadow-xs mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span className="tracking-widest uppercase font-mono font-bold">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Verified Client{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Endorsements
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Authentic reviews from founders, marketing directors, and business owners across the US, Germany, Italy, Sweden, and Australia.
            </p>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-blue-600" />
                <span>Pause Stream</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-blue-600" />
                <span>Play Stream</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Infinite Dual-Row Reviews */}
      <div className="space-y-4 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent z-10" />

        {/* Row 1 */}
        <div className="flex gap-4 animate-marquee-left" style={{ animationPlayState: isPlaying ? "running" : "paused" }}>
          {[...row1Cards, ...row1Cards].map((c, i) => renderCard(c, `r1-${i}`))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 animate-marquee-right" style={{ animationPlayState: isPlaying ? "running" : "paused" }}>
          {[...row2Cards, ...row2Cards].map((c, i) => renderCard(c, `r2-${i}`))}
        </div>
      </div>
    </section>
  );
}

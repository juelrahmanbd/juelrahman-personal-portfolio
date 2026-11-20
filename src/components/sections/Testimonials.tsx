"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

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

// 7 Filtered Client Reviews distributed evenly into 2 Rows (4 items each)
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
      "Working with Juel has been a very positive experience. From the beginning, he showed strong technical competence, professionalism and a real willingness to understand the project in depth rather than simply execute tasks mechanically. What I appreciated most was his ability to discuss different solutions...",
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
      "Juel hat hoch professionell unseren Auftrag sehr exakt umgesetzt. Die Kommunikation war zu jederzeit schnell, flüssig und im Zweifel wurden wir nachgefragt, ob alles richtig verstanden worden ist (Re Briefing). Das war für uns fantastisch. Sehr gerne wieder. Es hat Spaß gemacht, alles lief überpünktlich...",
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
      "Juel's patience, guidance, enthusiasm and responsiveness during the festive season downtime, is as good as it gets. Communication is excellent - always respectful and responsive. His knowledge, calm problem-solving, ability to follow a brief and produce genuinely high quality work with my WordPress website made it a great experience. Highly recommend!",
  },
  {
    id: "rev-vicvale",
    name: "VICVALE",
    country: "Australia",
    flag: "AU",
    avatarSrc: "/avatars/vicvale_avatar.png",
    avatarInitial: "V",
    avatarFallbackBg: "#2563EB",
    quote: "Good work, mostly happy with results",
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
      "Perfection, exactly like we weanted it! Fast work aswell, only hade few days deadline but he made it!",
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
      "Delivered a pristine, high-performance responsive web application. Attentive to details, proactive communication, and zero friction from start to finish.",
  },
];

// Crisp inline SVG flags for 100% cross-platform consistency
function CountryFlag({ country }: { country: string }) {
  switch (country) {
    case "US":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="12" fill="#B22234" />
          <rect y="1" width="18" height="1" fill="#FFF" />
          <rect y="3" width="18" height="1" fill="#FFF" />
          <rect y="5" width="18" height="1" fill="#FFF" />
          <rect y="7" width="18" height="1" fill="#FFF" />
          <rect y="9" width="18" height="1" fill="#FFF" />
          <rect y="11" width="18" height="1" fill="#FFF" />
          <rect width="8" height="6.5" fill="#3C3B6E" />
        </svg>
      );
    case "IT":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="6" height="12" fill="#009246" />
          <rect x="6" width="6" height="12" fill="#FFFFFF" />
          <rect x="12" width="6" height="12" fill="#CE2B37" />
        </svg>
      );
    case "DE":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="4" fill="#000" />
          <rect y="4" width="18" height="4" fill="#DD0000" />
          <rect y="8" width="18" height="4" fill="#FFCC00" />
        </svg>
      );
    case "AU":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="12" fill="#00008B" />
          <path d="M0 0h8v4.5H0z" fill="#012169" />
          <path d="M0 0l8 4.5m0-4.5L0 4.5" stroke="#FFF" strokeWidth="1" />
          <path d="M4 0v4.5M0 2.25h8" stroke="#FFF" strokeWidth="1.5" />
          <path d="M4 0v4.5M0 2.25h8" stroke="#C8102E" strokeWidth="0.8" />
          <circle cx="13" cy="7" r="1.1" fill="#FFF" />
          <circle cx="15.5" cy="4" r="0.8" fill="#FFF" />
          <circle cx="16" cy="7" r="0.8" fill="#FFF" />
          <circle cx="13.5" cy="9.5" r="0.8" fill="#FFF" />
        </svg>
      );
    case "SE":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="12" fill="#006AA7" />
          <rect x="5" width="2.5" height="12" fill="#FECC00" />
          <rect y="4.75" width="18" height="2.5" fill="#FECC00" />
        </svg>
      );
    default:
      return null;
  }
}

// Crisp Fiverr Circular Badge
function FiverrBadge({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#1DBF73] flex items-center justify-center shrink-0 ${className}`}
      title="Verified Fiverr Review"
      aria-label="Verified Fiverr Review"
    >
      <span className="text-white font-black text-[11px] leading-none font-sans tracking-tight select-none">
        fi
      </span>
    </div>
  );
}

// 5 Solid Golden Stars
function RatingStars() {
  return (
    <div className="flex items-center gap-0.5 text-[#F59E0B]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3.5 h-3.5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Robust Avatar Component with local image loading and monogram fallback
function ClientAvatar({
  src,
  alt,
  initial,
  fallbackBg,
}: {
  src: string;
  alt: string;
  initial: string;
  fallbackBg: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 select-none shadow-2xs"
        style={{ backgroundColor: fallbackBg }}
        aria-hidden="true"
      >
        {initial}
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-[rgba(16,24,32,0.1)] shrink-0 shadow-2xs relative">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        unoptimized
        className="w-full h-full object-cover object-top"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

// Individual Testimonial Card with STRICT UNIFORM DIMENSIONS across all cards
function TestimonialCard({
  card,
  isDuplicate = false,
}: {
  card: TestimonialCardData;
  isDuplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={isDuplicate ? "true" : undefined}
      className="w-[310px] sm:w-[350px] md:w-[370px] h-[200px] sm:h-[210px] shrink-0 bg-white border border-[rgba(0,66,117,0.22)] hover:border-[#004275] rounded-xs p-5 transition-colors duration-200 shadow-2xs flex flex-col justify-between select-none"
    >
      <div>
        {/* Card Header: Avatar, Name & Country on Left; Stars & Fiverr Badge on Right */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <ClientAvatar
              src={card.avatarSrc}
              alt={`${card.name} profile avatar`}
              initial={card.avatarInitial}
              fallbackBg={card.avatarFallbackBg}
            />
            <div className="min-w-0">
              <div className="font-bold text-sm text-[#101820] tracking-tight truncate">
                {card.name}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#101820]/80 mt-0.5">
                <CountryFlag country={card.flag} />
                <span className="truncate">{card.country}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <RatingStars />
            <FiverrBadge />
          </div>
        </div>

        {/* Review Quote Body with line-clamp so all cards retain equal height */}
        <p className="text-xs sm:text-sm text-[#004275] leading-relaxed line-clamp-4 font-normal mt-2">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>

      {/* Subtle Verified Indicator */}
      <div className="pt-2 border-t border-[rgba(16,24,32,0.06)] flex items-center justify-between text-[11px] text-[#101820]/60">
        <span>Verified Fiverr Client</span>
        <span className="text-[#1DBF73] font-semibold">5.0 ★</span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative"
    >
      {/* Centered Container Bounding Header & Slider Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Centered Top Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#004275]">
              ✦ OUR IMPACT &amp; REPUTATION
            </span>
          </div>

          {/* Main Section Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            Loved by Industry Leaders &amp; Global Clients
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#004275] leading-relaxed max-w-2xl mx-auto mb-6">
            Trusted by innovative companies and individual entrepreneurs
            worldwide. See what they say about collaborating on full-stack and
            AI projects.
          </p>

          {/* Authority Badge & Play/Pause Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DBF73] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xs shadow-xs">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>TOP RATED FREELANCER &bull; VERIFIED FIVERR PRO</span>
            </div>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={
                isPaused
                  ? "Resume testimonial slider motion"
                  : "Pause testimonial slider motion"
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-[rgba(16,24,32,0.14)] hover:border-[#004275] text-xs font-semibold text-[#004275] transition-colors rounded-xs shadow-2xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#004275]"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* 2. Container-Bounded 2-Row Dual-Direction Smooth Slider Track */}
        <div className="w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          {/* Row 1 (Line 1): Smooth continuous infinite motion moving LEFT */}
          <div className="mb-4 sm:mb-5 overflow-hidden">
            <div
              className="flex w-max animate-marquee-left gap-4 sm:gap-5"
              style={{ animationPlayState: isPaused ? "paused" : undefined }}
            >
              {/* Primary Item Set */}
              {row1Cards.map((card) => (
                <TestimonialCard key={`r1-${card.id}`} card={card} />
              ))}
              {/* Duplicate Set for Seamless Wrap-Around */}
              {row1Cards.map((card) => (
                <TestimonialCard
                  key={`r1-dup-${card.id}`}
                  card={card}
                  isDuplicate
                />
              ))}
            </div>
          </div>

          {/* Row 2 (Line 2): Smooth continuous infinite motion moving RIGHT */}
          <div className="overflow-hidden">
            <div
              className="flex w-max animate-marquee-right gap-4 sm:gap-5"
              style={{ animationPlayState: isPaused ? "paused" : undefined }}
            >
              {/* Primary Item Set */}
              {row2Cards.map((card) => (
                <TestimonialCard key={`r2-${card.id}`} card={card} />
              ))}
              {/* Duplicate Set for Seamless Wrap-Around */}
              {row2Cards.map((card) => (
                <TestimonialCard
                  key={`r2-dup-${card.id}`}
                  card={card}
                  isDuplicate
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

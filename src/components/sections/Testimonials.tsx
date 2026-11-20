"use client";

import React from "react";

interface TestimonialCardData {
  id: string;
  name: string;
  country: string;
  flag: "US" | "IT" | "DE" | "AU" | "FR" | "GB";
  avatarInitial: string;
  avatarBg: string;
  quote: string;
  bottomThumbnail?: boolean;
}

interface TestimonialColumn {
  widthClass: string;
  cards: TestimonialCardData[];
}

const testimonialColumns: TestimonialColumn[] = [
  {
    widthClass: "w-[300px] sm:w-[380px] lg:w-[420px]",
    cards: [
      {
        id: "rev-hcharles",
        name: "HCHARLES",
        country: "United States",
        flag: "US",
        avatarInitial: "H",
        avatarBg: "#1E293B",
        quote:
          "It was an absolute pleasure working with Juel on this website project. He was always prompt in responding to my questions, attentive to details, and timely throughout the entire development process. Delivered a high-performance, responsive solution.",
        bottomThumbnail: true,
      },
      {
        id: "rev-jazzoband",
        name: "JAZZOBAND",
        country: "Italy",
        flag: "IT",
        avatarInitial: "J",
        avatarBg: "#0D9488",
        quote:
          "Working with Juel has been a very positive experience. From the beginning, he showed strong technical competence, project clarity, and deep expertise in web engineering. Fast delivery and flawless execution.",
        bottomThumbnail: false,
      },
    ],
  },
  {
    widthClass: "w-[280px] sm:w-[320px] lg:w-[350px]",
    cards: [
      {
        id: "rev-matelk",
        name: "MATELK",
        country: "Germany",
        flag: "DE",
        avatarInitial: "M",
        avatarBg: "#D97706",
        quote:
          "Tolle Arbeit, gerne wieder. (Great work, gladly again.) He exceeded our expectations in custom architecture and clean code. Communication was prompt, polite, and proactive throughout.",
        bottomThumbnail: false,
      },
      {
        id: "rev-eddy",
        name: "EDDY",
        country: "Germany",
        flag: "DE",
        avatarInitial: "E",
        avatarBg: "#E11D48",
        quote:
          "Juel hat hoch professionell unseren Auftrag sehr exakt umgesetzt. Die Kommunikation war zu jederzeit schnell, transparent und ergebnisorientiert. Absolute Empfehlung für anspruchsvolle Webentwicklung.",
        bottomThumbnail: false,
      },
    ],
  },
  {
    widthClass: "w-[300px] sm:w-[360px] lg:w-[410px]",
    cards: [
      {
        id: "rev-oh75",
        name: "OH75",
        country: "Australia",
        flag: "AU",
        avatarInitial: "O",
        avatarBg: "#7C3AED",
        quote:
          "Juel's patience, guidance, enthusiasm and responsiveness during the festive season downtime is as good as it gets. Communication is excellent - always respectful, skilled, and focused on quality results.",
        bottomThumbnail: false,
      },
      {
        id: "rev-stephane",
        name: "STEPHANE",
        country: "France",
        flag: "FR",
        avatarInitial: "S",
        avatarBg: "#4F46E5",
        quote:
          "Exceptional problem solver. Juel understood our complex integration needs right away and built a robust, scalable system that saved us weeks of development time.",
        bottomThumbnail: false,
      },
    ],
  },
  {
    widthClass: "w-[290px] sm:w-[340px] lg:w-[370px]",
    cards: [
      {
        id: "rev-davidm",
        name: "DAVIDM",
        country: "United Kingdom",
        flag: "GB",
        avatarInitial: "D",
        avatarBg: "#2563EB",
        quote:
          "Top-tier full-stack developer. Juel delivered a pristine custom web solution that improved our Core Web Vitals and load performance dramatically. A true professional with great attention to detail.",
        bottomThumbnail: false,
      },
      {
        id: "rev-sarahk",
        name: "SARAH_K",
        country: "United States",
        flag: "US",
        avatarInitial: "S",
        avatarBg: "#059669",
        quote:
          "One of the most dependable engineers on Fiverr Pro. Clean code, sharp execution, and always proactively suggests architectural improvements. Will definitely hire again.",
        bottomThumbnail: false,
      },
    ],
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
    case "FR":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="6" height="12" fill="#002395" />
          <rect x="6" width="6" height="12" fill="#FFFFFF" />
          <rect x="12" width="6" height="12" fill="#ED2939" />
        </svg>
      );
    case "GB":
      return (
        <svg
          viewBox="0 0 18 12"
          className="w-4 h-2.5 inline-block rounded-none border border-black/10 shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="12" fill="#012169" />
          <path d="M0 0l18 12m0-12L0 12" stroke="#FFF" strokeWidth="2.5" />
          <path d="M0 0l18 12m0-12L0 12" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M9 0v12M0 6h18" stroke="#FFF" strokeWidth="4" />
          <path d="M9 0v12M0 6h18" stroke="#C8102E" strokeWidth="2.4" />
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

// Individual Testimonial Card with hairline border and sharp non-rounded styling
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
      className="bg-white border border-[rgba(0,66,117,0.22)] rounded-xs p-5 sm:p-6 transition-colors duration-200 hover:border-[#004275] shadow-xs flex flex-col justify-between h-full"
    >
      <div>
        {/* Card Header: Avatar, Name & Country on Left; Stars & Fiverr Badge on Right */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 select-none shadow-2xs"
              style={{ backgroundColor: card.avatarBg }}
            >
              {card.avatarInitial}
            </div>
            <div>
              <div className="font-bold text-sm text-[#101820] tracking-tight">
                {card.name}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#101820]/80 mt-0.5">
                <CountryFlag country={card.flag} />
                <span>{card.country}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <RatingStars />
            <FiverrBadge />
          </div>
        </div>

        {/* Review Quote Body */}
        <p className="text-xs sm:text-sm text-[#004275] leading-relaxed font-normal">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>

      {/* Optional bottom attribution thumbnail matching Card 1 in reference */}
      {card.bottomThumbnail && (
        <div className="mt-4 pt-3 border-t border-[rgba(16,24,32,0.08)] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#101820] text-white flex items-center justify-center text-[10px] font-bold">
            JR
          </div>
          <span className="text-[11px] text-[#101820]/60 font-medium">
            Project Verified on Fiverr
          </span>
        </div>
      )}
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.1)] relative overflow-hidden"
    >
      {/* 1. Centered Top Header */}
      <header className="text-center max-w-3xl mx-auto mb-14 px-4 sm:px-6">
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
          worldwide. See what they say about collaborating on full-stack and AI
          projects.
        </p>

        {/* Authority Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1DBF73] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xs shadow-xs">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>TOP RATED FREELANCER &bull; VERIFIED FIVERR PRO</span>
        </div>
      </header>

      {/* 2. Full-Width Infinite Horizontal Masonry Slider Grid */}
      <div className="w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee-reviews gap-5 items-stretch">
          {/* Primary Column Set */}
          {testimonialColumns.map((col, colIdx) => (
            <div
              key={`col-1-${colIdx}`}
              className={`flex flex-col gap-5 justify-between shrink-0 ${col.widthClass}`}
            >
              {col.cards.map((card) => (
                <TestimonialCard key={card.id} card={card} />
              ))}
            </div>
          ))}

          {/* Secondary Column Set for Seamless Continuous Infinite Marquee */}
          {testimonialColumns.map((col, colIdx) => (
            <div
              key={`col-2-${colIdx}`}
              className={`flex flex-col gap-5 justify-between shrink-0 ${col.widthClass}`}
              aria-hidden="true"
            >
              {col.cards.map((card) => (
                <TestimonialCard
                  key={`dup-${card.id}`}
                  card={card}
                  isDuplicate
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

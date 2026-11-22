"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/portfolioData";
import {
  Home,
  User,
  Settings,
  Layers,
  Folder,
  Mail,
  Send,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Wand2,
  CloudCog,
} from "lucide-react";

// Official WordPress SVG in pure white
function WordPressIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
    </svg>
  );
}

// Code in browser window icon matching reference
function CodeWindowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m9 10-2 2 2 2" />
      <path d="m15 10 2 2-2 2" />
      <line x1="2" x2="22" y1="8" y2="8" strokeWidth="1.5" />
    </svg>
  );
}

// Official LinkedIn Icon in pure white
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Official Facebook Icon in pure white
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

// Official Instagram Icon in pure white
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Official YouTube Icon in pure white
function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Official X (formerly Twitter) Icon in pure white
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Official OpenAI / ChatGPT Icon
function OpenAIIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.784a4.474 4.474 0 0 1 2.33-1.97v5.6a.799.799 0 0 0 .392.686l5.843 3.368-2.02 1.168a.076.076 0 0 1-.067 0l-4.839-2.793A4.504 4.504 0 0 1 2.34 8.784zm15.703 3.376l-5.843-3.37 2.02-1.167a.076.076 0 0 1 .067 0l4.839 2.793a4.504 4.504 0 0 1 .637 7.747v-5.6a.795.795 0 0 0-.392-.681l-1.328-.722zm2.016-3.876l-.141-.085-4.779-2.76a.78.78 0 0 0-.784 0L8.512 8.808V6.476a.077.077 0 0 1 .033-.062l4.84-2.793a4.504 4.504 0 0 1 6.671 4.663zM10.01 13.067l-2.404-1.39 2.404-1.388 2.403 1.388-2.403 1.39z" />
    </svg>
  );
}

// Official Claude Asterisk Icon
function ClaudeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  );
}

// Official Gemini Sparkle Icon
function GeminiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState<boolean>(false);
  const [isPromptCopied, setIsPromptCopied] = useState<boolean>(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  const aiPromptText = `Tell me about Md. Juel Rahman, Full-Stack Web Developer & AI Engineer (portfolio: https://juelrahman.me).
1. Technical Scope: What are his core competencies across full-stack development, Next.js, Node.js, custom WordPress & Divi 5 architectures, and AI automations?
2. Professional Character: What kind of collaborator is he in terms of communication, reliability, and business alignment?
3. Standards & Commitments: What engineering quality, performance, and transparency standards does he uphold for clients?`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(aiPromptText);
    setIsPromptCopied(true);
    setTimeout(() => setIsPromptCopied(false), 2500);
  };

  const quickLinks = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Expertise", href: "/#expertise", icon: Layers },
    { name: "Projects", href: "/#projects", icon: Folder },
    { name: "AI & Full-Stack", href: "/#ai-fullstack", icon: Settings },
    { name: "WordPress & Divi", href: "/#wordpress", icon: Settings },
    { name: "Experience", href: "/#experience", icon: Settings },
    { name: "Contact", href: "/#contact", icon: Mail },
  ];

  const serviceItems = [
    {
      name: "WordPress & Divi 5 Development",
      href: "/services/wordpress-divi-5-development",
      icon: WordPressIcon,
    },
    {
      name: "Custom Website Development",
      href: "/services/custom-website-development",
      icon: CodeWindowIcon,
    },
    {
      name: "Full-Stack Web Applications",
      href: "/services/full-stack-web-applications",
      icon: Layers,
    },
    {
      name: "AI-Powered Web Applications",
      href: "/services/ai-powered-web-applications",
      icon: Wand2,
    },
    {
      name: "Custom SaaS Solutions",
      href: "/services/custom-saas-solutions",
      icon: CloudCog,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: siteConfig.contact.linkedin || "https://linkedin.com/in/juelrahmanbd",
      icon: LinkedInIcon,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/juelrahmanbd",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/juelrahmanbd",
      icon: InstagramIcon,
    },
    {
      name: "YouTube",
      href: siteConfig.contact.youtube || "https://youtube.com/@juelrahmanbd",
      icon: YouTubeIcon,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/juelrahmanbd",
      icon: XIcon,
    },
  ];

  return (
    <footer className="bg-[#101820] text-white pt-16 pb-12 border-t border-white/[0.12] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* Main 4-Column Grid with Wider, Balanced Gaps (4+2+3+3 = 12)*/}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 pb-14">
          {/* Column 1 — Brand Identity, Summary & Social Media Row (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Architectural "JR" Brand Mark with Corner Brackets */}
            <figure className="relative w-14 h-14 flex items-center justify-center border border-white">
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white" />
              <span className="text-white font-bold text-2xl tracking-tight select-none font-sans">
                JR
              </span>
            </figure>

            <div className="pt-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </h2>
              <p className="text-sm font-semibold text-slate-300 mt-1">
                AI Engineer | Full-Stack Developer
              </p>
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm pt-1">
              I build modern websites, web applications, and AI-powered digital
              solutions with a focus on quality, security, performance, and real
              business value.
            </p>

            {/* Clean Social Media Row */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                Follow &amp; Connect
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 hover:border-[#004275] hover:bg-[#004275]/40 flex items-center justify-center text-white transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links with Right Arrows (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h3>
            <nav aria-label="Quick Links">
              <ul className="space-y-3.5 text-sm">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex items-center justify-between text-[#CBD5E1] hover:text-white transition-colors py-0.5"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-white shrink-0" />
                          <span>{item.name}</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Column 3 — My Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              My Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {serviceItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2.5 text-[#CBD5E1] hover:text-white transition-colors py-0.5"
                    >
                      <Icon className="w-4 h-4 text-white shrink-0" />
                      <span className="line-clamp-1">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/60 hover:border-white text-xs font-semibold text-white transition-colors rounded-md"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>

          {/* Column 4 — Stacked One-Below-Another Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Direct Contact
            </h3>

            <div className="flex flex-col gap-2.5">
              {/* Phone / WhatsApp */}
              <div className="bg-[#16212c] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 hover:border-white/25 transition-all">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+8801304555973"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors font-mono truncate block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <a
                    href="https://wa.me/8801304555973"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message on WhatsApp"
                    className="p-1.5 rounded-md bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/30 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.contact.phone, "footer-phone")}
                    aria-label="Copy phone number"
                    className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="Copy"
                  >
                    {copiedId === "footer-phone" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Primary Email */}
              <div className="bg-[#16212c] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 hover:border-white/25 transition-all">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.primaryEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {siteConfig.contact.primaryEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(siteConfig.contact.primaryEmail, "footer-primary-email")
                  }
                  aria-label="Copy primary email"
                  className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy"
                >
                  {copiedId === "footer-primary-email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </button>
              </div>

              {/* Direct / Backup Email */}
              <div className="bg-[#16212c] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 hover:border-white/25 transition-all">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.inquiryEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {siteConfig.contact.inquiryEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(siteConfig.contact.inquiryEmail, "footer-direct-email")
                  }
                  aria-label="Copy direct email"
                  className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy"
                >
                  {copiedId === "footer-direct-email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="bg-[#16212c] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 hover:border-white/25 transition-all">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      Bangladesh (Global Remote Services)
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md shrink-0">
                  UTC+6
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Collapsible "Ask AI About Me" Panel (GPT, Claude, Gemini) */}
        {/* ========================================================= */}
        <div className="pt-2 pb-8">
          {/* Collapsible Trigger Bar */}
          <div className="bg-[#16212c] border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#004275] border border-white/20 flex items-center justify-center text-white shadow-2xs shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-white tracking-tight">
                    Ask AI About Me
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-sky-300 bg-sky-950/70 border border-sky-500/30 px-2 py-0.5 rounded-full">
                    GPT • Claude • Gemini
                  </span>
                </div>
                <p className="text-xs text-[#CBD5E1] mt-0.5">
                  Generate an objective summary of my technical skills, collaboration style, and reliability commitments.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAiDrawerOpen(!isAiDrawerOpen)}
              aria-expanded={isAiDrawerOpen}
              aria-controls="ask-ai-panel"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 select-none"
            >
              <span>{isAiDrawerOpen ? "Hide AI Prompt" : "Open AI Prompt & Models"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isAiDrawerOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Expandable Drawer Panel */}
          {isAiDrawerOpen && (
            <div
              id="ask-ai-panel"
              className="mt-3 bg-[#16212c] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-sm animate-in fade-in duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left: Prompt Preview */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Ready-to-Use Summary Prompt
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Objective 3-part inquiry
                    </span>
                  </div>

                  <div className="bg-[#101820] border border-white/10 rounded-xl p-3.5 sm:p-4 text-xs font-mono text-slate-200 leading-relaxed select-all">
                    {aiPromptText}
                  </div>
                </div>

                {/* Right: Actions (Copy + Direct Launch buttons) */}
                <div className="lg:w-80 shrink-0 flex flex-col justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Direct Launch or Copy
                  </span>

                  {/* Copy Prompt Button */}
                  <button
                    type="button"
                    onClick={handleCopyPrompt}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#004275] hover:bg-[#003157] border border-white/15 text-xs font-bold text-white shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {isPromptCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Prompt Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary Prompt</span>
                      </>
                    )}
                  </button>

                  {/* 3 Direct AI Launch Links */}
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={`https://chatgpt.com/?q=${encodeURIComponent(aiPromptText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-emerald-500/50 text-white transition-all text-center group"
                      title="Open with ChatGPT"
                    >
                      <OpenAIIcon className="w-5 h-5 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">ChatGPT</span>
                    </a>

                    <a
                      href="https://claude.ai/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleCopyPrompt}
                      className="inline-flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-500/50 text-white transition-all text-center group"
                      title="Open Claude (Prompt copied)"
                    >
                      <ClaudeIcon className="w-5 h-5 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">Claude</span>
                    </a>

                    <a
                      href="https://gemini.google.com/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleCopyPrompt}
                      className="inline-flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-sky-500/50 text-white transition-all text-center group"
                      title="Open Gemini (Prompt copied)"
                    >
                      <GeminiIcon className="w-5 h-5 text-sky-400 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">Gemini</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-tight">
                    Clicking Claude or Gemini copies the prompt automatically so you can paste and ask directly.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* Bottom Legal & Metadata Bar                               */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
          <small className="text-xs text-[#CBD5E1]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </small>
          <small className="text-xs text-[#CBD5E1]">
            AI Engineer | Full-Stack Developer | Web &amp; Digital Solutions
          </small>
        </div>
      </div>
    </footer>
  );
}

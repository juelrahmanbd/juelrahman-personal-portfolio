"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/portfolioData";
import {
  Home,
  User,
  Settings,
  Layers,
  Folder,
  Mail,
  ArrowRight,
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

// Official GitHub SVG in pure white
function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// Official LinkedIn SVG in pure white
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Skills", href: "/#skills", icon: Layers },
    { name: "Portfolio", href: "/#portfolio", icon: Folder },
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

  const socialChannels = [
    {
      name: "GitHub",
      href: siteConfig.contact.github,
      icon: GitHubIcon,
      external: true,
    },
    {
      name: "LinkedIn",
      href: siteConfig.contact.linkedin,
      icon: LinkedInIcon,
      external: true,
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      name: "WordPress",
      href: "https://profiles.wordpress.org/",
      icon: WordPressIcon,
      external: true,
    },
  ];

  return (
    <footer className="bg-[#101820] text-white pt-16 pb-12 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Column 1 — Brand Identity & Summary (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
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
              <p className="text-sm font-medium text-slate-400 mt-1">
                AI Engineer | Full-Stack Developer
              </p>
            </div>

            <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-sm pt-1">
              I build modern websites, web applications, and AI-powered digital
              solutions with a focus on quality, security, performance, and real
              business value.
            </p>
          </div>

          {/* Column 2 — Quick Links (lg:col-span-2) */}
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
                        className="group flex items-center justify-between text-[#E2E8F0] hover:text-white transition-colors py-0.5"
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
                      className="group flex items-center gap-2.5 text-[#E2E8F0] hover:text-white transition-colors py-0.5"
                    >
                      <Icon className="w-4 h-4 text-white shrink-0" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/60 hover:border-white text-xs font-medium text-white transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>

          {/* Column 4 — Connect (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Connect
            </h3>
            <p className="text-sm text-[#E2E8F0] mb-5 leading-relaxed">
              Let&apos;s connect and discuss your next project.
            </p>
            <div className="flex items-center gap-3">
              {socialChannels.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 border border-white/30 hover:border-white flex items-center justify-center text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Metadata Bar */}
        <div className="pt-8 border-t border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <small className="text-xs text-[#94A3B8]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </small>
          <small className="text-xs text-[#94A3B8]">
            AI Engineer | Full-Stack Developer | Web &amp; Digital Solutions
          </small>
        </div>
      </div>
    </footer>
  );
}

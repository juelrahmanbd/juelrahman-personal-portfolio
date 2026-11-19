"use client";

import React from "react";
import { siteConfig, navLinks } from "@/data/portfolioData";
import { GitBranch, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    { name: "WordPress Website Development", href: "#services" },
    { name: "Custom Website Development", href: "#services" },
    { name: "Full-Stack Web Applications", href: "#services" },
    { name: "AI-Powered Web Applications", href: "#services" },
    { name: "Custom SaaS Solutions", href: "#services" },
    { name: "eCommerce & Digital Solutions", href: "#services" },
  ];

  return (
    <footer className="bg-[#11152F] text-white pt-16 pb-12 border-t border-[#1D234A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#232A57]">
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6847E8] to-[#5234CC] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                {siteConfig.initials}
              </div>
              <div>
                <div className="font-bold text-white text-base tracking-tight">
                  {siteConfig.name}
                </div>
                <div className="text-xs text-[#8E93AB] font-medium">
                  {siteConfig.role}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8E93AB] max-w-sm leading-relaxed">
              I build modern websites, web applications, and AI-powered digital solutions with a focus on quality, security, performance, and real business value.
            </p>
          </div>

          {/* Quick Links (Cols 6-7) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#8E93AB]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Services (Cols 8-10) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              My Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#8E93AB]">
              {footerServices.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (Cols 11-12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1A2045] hover:bg-[#6847E8] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1A2045] hover:bg-[#6847E8] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1A2045] hover:bg-[#6847E8] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-9 h-9 rounded-xl bg-[#1A2045] hover:bg-[#6847E8] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#8E93AB]">
              Let&apos;s connect and discuss your next project.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E93AB]">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            AI Engineer | Full-Stack Developer | Web &amp; Digital Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}

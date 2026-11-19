"use client";

import React, { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/data/portfolioData";
import { Sparkles, Menu, X, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAFF]/90 backdrop-blur-md border-b border-[#E9E7F5] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6847E8] rounded-xl"
            aria-label="Md. Juel Rahman - Return to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6847E8] to-[#5234CC] flex items-center justify-center text-white font-extrabold text-sm shadow-sm transition-transform duration-200 group-hover:scale-105">
              {siteConfig.initials}
            </div>
            <span className="font-bold text-[#11152F] text-base sm:text-lg tracking-tight group-hover:text-[#6847E8] transition-colors">
              {siteConfig.shortName}
            </span>
          </a>

          {/* Center Navigation Pill (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-white/80 border border-[#E9E7F5] backdrop-blur-md px-3 py-1.5 rounded-full shadow-subtle"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? "bg-[#F1EDFF] text-[#6847E8] font-semibold shadow-xs"
                      : "text-[#626780] hover:text-[#11152F] hover:bg-[#F1EDFF]/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6847E8] to-[#5234CC] hover:from-[#5b3adb] hover:to-[#4528b8] shadow-sm hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6847E8] focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#11152F] hover:bg-[#F1EDFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6847E8] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#11152F]/40 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="bg-[#FAFAFF] border-b border-[#E9E7F5] px-6 py-6 shadow-xl flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-[#F1EDFF] text-[#6847E8] font-semibold"
                        : "text-[#11152F] hover:bg-[#F1EDFF]/60"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#E9E7F5]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6847E8] to-[#5234CC] shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let&apos;s Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

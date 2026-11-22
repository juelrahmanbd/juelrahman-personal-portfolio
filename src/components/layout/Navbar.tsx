"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

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
  }, [isHomePage]);

  const resolveHref = (href: string) => {
    if (href === "#services" && pathname.startsWith("/services")) return "/services";
    if (href === "#portfolio" && pathname.startsWith("/portfolio")) return "/portfolio";
    if (href === "#contact" && pathname.startsWith("/contact")) return "/contact";
    return isHomePage ? href : `/${href}`;
  };

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090E]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 sm:h-14 flex items-center justify-between">
          {/* 1. Architectural Monogram Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="Md. Juel Rahman — Home"
          >
            <figure className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-950 border border-blue-400/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.25)] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
              <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-cyan-400" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border-t border-r border-cyan-400" />
              <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border-b border-l border-cyan-400" />
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-cyan-400" />
              <span className="font-mono text-xs font-black text-white tracking-tight select-none">
                J
              </span>
            </figure>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-[0.2em] text-white uppercase font-sans group-hover:text-cyan-300 transition-colors">
                  JUEL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                AI &bull; Full-Stack
              </span>
            </div>
          </Link>

          {/* 2. Elevated Dark Glass Navigation Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#0D111A]/80 border border-white/[0.08] backdrop-blur-xl px-2.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            {navLinks.map((link) => {
              const isSectionActive = isHomePage && activeSection === link.href.substring(1);
              const isServiceActive = !isHomePage && link.href === "#services" && pathname.startsWith("/services");
              const isPortfolioActive = !isHomePage && link.href === "#portfolio" && pathname.startsWith("/portfolio");
              const isContactActive = !isHomePage && link.href === "#contact" && pathname.startsWith("/contact");
              const isActive = isSectionActive || isServiceActive || isPortfolioActive || isContactActive;

              return (
                <Link
                  key={link.name}
                  href={resolveHref(link.href)}
                  className={`px-3 py-1.5 text-xs lg:text-[13px] font-medium rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Primary CTA Button (Let's Talk) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={isHomePage ? "#contact" : "/contact"}
              className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* 4. Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[60px] z-40 bg-black/80 backdrop-blur-xl md:hidden animate-in fade-in duration-200 border-b border-white/10"
        >
          <div className="bg-[#0D111A] border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-3 text-white max-h-[calc(100vh-60px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isSectionActive = isHomePage && activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={resolveHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isSectionActive
                      ? "bg-blue-600/30 text-cyan-300 border border-blue-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-white/10">
              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 border border-white/20 shadow-lg"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

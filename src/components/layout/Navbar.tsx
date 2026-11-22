"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

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
  }, [isHomePage]);

  // Helper for resolving hrefs based on page
  const resolveHref = (href: string) => {
    if (href === "#services" && pathname.startsWith("/services")) {
      return "/services";
    }
    if (href === "#portfolio" && pathname.startsWith("/portfolio")) {
      return "/portfolio";
    }
    if (href === "#contact" && pathname.startsWith("/contact")) {
      return "/contact";
    }
    return isHomePage ? href : `/${href}`;
  };

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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 bg-[#101820]/95 backdrop-blur-md border-b border-white/[0.14] ${
        isScrolled ? "shadow-md py-3" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 sm:h-14 flex items-center justify-between">
          {/* ========================================================= */}
          {/* 1. Creative Logo (JUEL Only — Architectural Monogram)    */}
          {/* ========================================================= */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label="JUEL — Home"
          >
            {/* Stepped Architectural Monogram Emblem */}
            <figure className="relative w-8 h-8 rounded-lg bg-[#004275] border border-white/25 flex items-center justify-center text-white shadow-xs group-hover:border-sky-400/80 group-hover:bg-[#003660] transition-all duration-200">
              <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-white" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border-t border-r border-white" />
              <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border-b border-l border-white" />
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-white" />
              <span className="font-mono text-xs font-black text-white tracking-tight select-none">
                J
              </span>
            </figure>

            {/* Wordmark: JUEL only */}
            <div className="flex items-baseline gap-1 select-none">
              <span className="font-extrabold text-xl sm:text-2xl tracking-[0.2em] text-white uppercase font-sans group-hover:text-slate-100 transition-colors">
                JUEL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#004275] border border-sky-400" />
            </div>
          </Link>

          {/* ========================================================= */}
          {/* 2. Center Navigation Links (Elevated Deep Pill Group)    */}
          {/* ========================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#16212c] border border-white/[0.14] px-3 py-1.5 rounded-full shadow-xs"
          >
            {navLinks.map((link) => {
              const isSectionActive =
                isHomePage && activeSection === link.href.substring(1);
              const isServiceActive =
                !isHomePage &&
                link.href === "#services" &&
                pathname.startsWith("/services");
              const isPortfolioActive =
                !isHomePage &&
                link.href === "#portfolio" &&
                pathname.startsWith("/portfolio");
              const isContactActive =
                !isHomePage &&
                link.href === "#contact" &&
                pathname.startsWith("/contact");
              const isActive =
                isSectionActive ||
                isServiceActive ||
                isPortfolioActive ||
                isContactActive;

              return (
                <Link
                  key={link.name}
                  href={resolveHref(link.href)}
                  className={`px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 select-none ${
                    isActive
                      ? "bg-[#004275] text-white shadow-2xs border border-white/20"
                      : "text-[#E2E8F0] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* 3. Primary CTA Button (Let's Talk)                       */}
          {/* ========================================================= */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={isHomePage ? "#contact" : "/contact"}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#004275] hover:bg-[#003157] border border-white/15 shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* ========================================================= */}
          {/* 4. Mobile Menu Hamburger Toggle                          */}
          {/* ========================================================= */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. Accessible Mobile Navigation Drawer                    */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
        >
          <div className="bg-[#101820] border-b border-white/15 px-6 py-6 shadow-2xl flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isSectionActive =
                  isHomePage && activeSection === link.href.substring(1);
                const isServiceActive =
                  !isHomePage &&
                  link.href === "#services" &&
                  pathname.startsWith("/services");
                const isPortfolioActive =
                  !isHomePage &&
                  link.href === "#portfolio" &&
                  pathname.startsWith("/portfolio");
                const isContactActive =
                  !isHomePage &&
                  link.href === "#contact" &&
                  pathname.startsWith("/contact");
                const isActive =
                  isSectionActive ||
                  isServiceActive ||
                  isPortfolioActive ||
                  isContactActive;

                return (
                  <Link
                    key={link.name}
                    href={resolveHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#004275] text-white border border-white/20"
                        : "text-[#E2E8F0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/15">
              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#004275] hover:bg-[#003157] border border-white/15 shadow-xs"
              >
                <span>Let&apos;s Talk</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

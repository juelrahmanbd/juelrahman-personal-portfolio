"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/portfolioData";
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
  }, [isHomePage]);

  // Helper for resolving hrefs based on page
  const resolveHref = (href: string) => {
    if (href === "#services" && pathname.startsWith("/services")) {
      return "/services";
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F8FB]/95 backdrop-blur-md border-b border-[rgba(16,24,32,0.1)] py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Text */}
          <Link
            href={isHomePage ? "#home" : "/"}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] rounded-lg"
            aria-label="Md. Juel Rahman - Return to top"
          >
            <span className="font-bold text-[#101820] text-xl tracking-tight group-hover:text-[#004275] transition-colors">
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Center Navigation Pill (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-white/90 border border-[rgba(16,24,32,0.12)] backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs"
          >
            {navLinks.map((link) => {
              const isSectionActive = isHomePage && activeSection === link.href.substring(1);
              const isServiceActive = !isHomePage && link.href === "#services" && pathname.startsWith("/services");
              const isContactActive = !isHomePage && link.href === "#contact" && pathname.startsWith("/contact");
              const isActive = isSectionActive || isServiceActive || isContactActive;
              return (
                <Link
                  key={link.name}
                  href={resolveHref(link.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? "bg-[#004275]/10 text-[#004275] font-semibold"
                      : "text-[#101820]/75 hover:text-[#101820] hover:bg-[rgba(16,24,32,0.05)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={isHomePage ? "#contact" : "/contact"}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#101820] hover:bg-[rgba(16,24,32,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#101820]/40 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="bg-[#F5F8FB] border-b border-[rgba(16,24,32,0.12)] px-6 py-6 shadow-xl flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isSectionActive = isHomePage && activeSection === link.href.substring(1);
                const isServiceActive = !isHomePage && link.href === "#services" && pathname.startsWith("/services");
                const isContactActive = !isHomePage && link.href === "#contact" && pathname.startsWith("/contact");
                const isActive = isSectionActive || isServiceActive || isContactActive;
                return (
                  <Link
                    key={link.name}
                    href={resolveHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-[#004275]/10 text-[#004275] font-semibold"
                        : "text-[#101820] hover:bg-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[rgba(16,24,32,0.1)]">
              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs"
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

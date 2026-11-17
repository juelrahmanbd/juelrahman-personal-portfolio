"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  // Track scroll state for enhanced backdrop styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  React.useEffect(() => {
    const sectionIds = siteConfig.navigation.map((item) =>
      item.href.replace("#", "")
    );

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock background scroll when mobile menu is open & listen for Escape key
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        setMobileMenuOpen(false);
        const yOffset = -80; // Account for fixed navbar height
        const yPosition =
          targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
        setActiveSection(targetId);
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out",
          isScrolled
            ? "bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle shadow-card py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* 1. Brand Wordmark & Geometric Identity Mark */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              aria-label="Md Juel Rahman — Return to top"
            >
              <div className="relative h-8 w-8 rounded-lg bg-surface border border-border-strong flex items-center justify-center transition-all duration-200 group-hover:border-accent-primary/60 group-hover:bg-surface-elevated">
                {/* Minimal geometric monogram / diamond accent */}
                <div className="w-3.5 h-3.5 rotate-45 border border-accent-primary/80 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
                </div>
              </div>
              <span className="font-bold tracking-tight text-palette-text-primary text-base sm:text-lg">
                {siteConfig.personal.wordmark.replace(".", "")}
                <span className="text-accent-primary">.</span>
              </span>
            </Link>

            {/* 2. Desktop Navigation Center */}
            <ul className="hidden md:flex items-center gap-1 bg-surface/70 border border-border-subtle backdrop-blur-md px-3 py-1.5 rounded-full shadow-subtle">
              {siteConfig.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 block select-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                        isActive
                          ? "text-palette-text-primary bg-surface-elevated border border-border-strong shadow-subtle"
                          : "text-palette-text-muted hover:text-palette-text-primary hover:bg-white/[0.04]"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* 3. Right: Availability & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div
                className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-border-subtle text-xs text-palette-text-muted"
                title="Current Work Availability"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium tracking-wide">
                  {siteConfig.personal.availability.text}
                </span>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className={cn(
                  "group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold select-none",
                  "bg-accent-primary text-palette-text-dark transition-all duration-200 ease-out",
                  "hover:bg-accent-hover hover:shadow-glow-accent active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                )}
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* 4. Mobile Menu Trigger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent-primary text-palette-text-dark transition-all duration-200 hover:bg-accent-hover"
              >
                <span>Talk</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className={cn(
                  "p-2.5 rounded-xl bg-surface border border-border-strong text-palette-text-primary transition-all duration-200",
                  "hover:bg-surface-elevated hover:border-accent-primary/40",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                )}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 5. Mobile Navigation Drawer Overlay */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        )}
      >
        {/* Backdrop tint */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-[#0E061A]/80 backdrop-blur-xl"
        />

        {/* Drawer container */}
        <div
          className={cn(
            "relative w-full h-full max-h-screen flex flex-col justify-between pt-24 pb-8 px-6 transition-transform duration-300 ease-out",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          {/* Mobile Links List */}
          <div className="flex flex-col space-y-2">
            <p className="text-xs uppercase font-mono tracking-wider text-palette-text-subtle mb-2">
              Navigation
            </p>
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-surface-elevated text-palette-text-primary border border-border-strong"
                      : "text-palette-text-muted hover:text-white hover:bg-surface/50"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent-primary" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Drawer Footer info and CTA */}
          <div className="mt-8 pt-6 border-t border-border-subtle space-y-4">
            <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-surface border border-border-subtle">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-palette-text-muted">
                {siteConfig.personal.availability.text}
              </span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3.5 px-5 rounded-xl font-semibold text-sm bg-accent-primary text-palette-text-dark flex items-center justify-center gap-2 shadow-glow-accent"
            >
              <span>Let&apos;s Discuss Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="text-center pt-2">
              <p className="text-xs font-mono text-palette-text-subtle">
                {siteConfig.personal.fullName} • {siteConfig.personal.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

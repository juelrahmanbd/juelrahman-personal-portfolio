"use client";

import React, { useEffect, useState } from "react";

export default function FluxoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let appInstance: { dispose?: () => void } | null = null;

    async function loadTubes() {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
      if (!canvas) return;

      try {
        // Dynamically import the ES module from CDN at runtime
        const importDynamic = new Function("url", "return import(url)");
        const tubesModule = await importDynamic(
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursor = tubesModule.default || tubesModule.TubesCursor;

        if (typeof TubesCursor === "function") {
          appInstance = TubesCursor(canvas, {
            tubes: {
              count: 16,
              colors: ["#ff008a", "#8b5cf6", "#3b82f6", "#ffffff"],
              minRadius: 0.005,
              maxRadius: 0.045,
              minTubularSegments: 32,
              maxTubularSegments: 128,
              material: {
                metalness: 0.95,
                roughness: 0.25,
              },
              lights: {
                intensity: 50,
                colors: ["#ff008a", "#8b5cf6", "#3b82f6", "#ffffff"],
              },
              lerp: 0.45,
              noise: 0.04,
            },
            bloom: {
              threshold: 0.05,
              strength: 1.2,
              radius: 0.4,
            },
          });
        }
      } catch (err) {
        console.warn("TubesCursor WebGL initialisation note:", err);
      }
    }

    loadTubes();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (appInstance && typeof appInstance.dispose === "function") {
        appInstance.dispose();
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 3D TubesCursor Canvas Background */}
      <canvas id="canvas" />

      <div className="page-wrapper">
        {/* 1. Liquid Glass Navbar (Sticky Floating Pill) */}
        <header className="navbar-container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Left: Logo */}
            <a href="#" className="brand-link" aria-label="Fluxo Home">
              <div className="brand-logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="14" height="14" rx="4" fill="url(#fluxoGrad1)" fillOpacity="0.95" />
                  <rect x="13" y="13" width="14" height="14" rx="4" fill="url(#fluxoGrad2)" fillOpacity="0.85" />
                  <defs>
                    <linearGradient id="fluxoGrad1" x1="5" y1="5" x2="19" y2="19" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="fluxoGrad2" x1="13" y1="13" x2="27" y2="27" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#c084fc" />
                      <stop offset="1" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span>Fluxo</span>
            </a>

            {/* Center: Desktop Links */}
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#features" className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a href="#solutions" className="nav-link">
                  <span>Solutions</span>
                  <svg className="chevron-icon" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#resources" className="nav-link">
                  <span>Resources</span>
                  <svg className="chevron-icon" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#changelog" className="nav-link">Changelog</a>
              </li>
            </ul>

            {/* Right: Actions */}
            <div className="nav-actions">
              <a href="#login" className="login-link">Log in</a>
              <a href="#signup" className="btn-primary-gradient">Start for free</a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="hamburger-btn"
              id="hamburger-btn"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </nav>

          {/* 2. Mobile Menu Drawer */}
          <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} id="mobile-drawer">
            <ul className="mobile-nav-links">
              <li><a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
              <li><a href="#solutions" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
              <li><a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
              <li><a href="#resources" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Resources</a></li>
              <li><a href="#changelog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Changelog</a></li>
            </ul>
            <div className="mobile-drawer-actions">
              <a href="#login" className="login-link" onClick={() => setMobileMenuOpen(false)}>Log in</a>
              <a href="#signup" className="btn-primary-gradient" onClick={() => setMobileMenuOpen(false)}>Start for free</a>
            </div>
          </div>
        </header>

        {/* 3. Hero Section */}
        <main className="hero-section">
          {/* Pill Badge */}
          <a href="#features" className="hero-badge">
            <span className="badge-tag">New</span>
            <span className="badge-text">
              AI Assistant is now live
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ verticalAlign: "middle", marginLeft: "2px" }}>
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Headline H1 */}
          <h1 className="hero-title">
            The all-in-one platform<br />
            to scale your <span className="gradient-text">SaaS</span>
          </h1>

          {/* Subheadline P */}
          <p className="hero-subtitle">
            Build, launch, and grow your SaaS faster with powerful tools,<br />
            beautiful analytics, and AI that works for you.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#signup" className="btn-primary-gradient">
              <span>Start for free</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#demo" className="btn-glass">
              <span>Book a demo</span>
            </a>
          </div>
        </main>

        {/* 4. Social Proof Section */}
        <section className="social-proof-section">
          <h2 className="social-proof-heading">Trusted by 10,000+ teams worldwide</h2>

          {/* Logos Row */}
          <div className="logos-row">
            {/* Linear */}
            <a href="#" className="company-logo" aria-label="Linear">
              <svg viewBox="0 0 100 24" fill="currentColor">
                <path d="M2 17.5L8.5 4H12L5.5 17.5H2Z" fill="#a1a1aa" />
                <path d="M9 17.5L15.5 4H19L12.5 17.5H9Z" fill="#a1a1aa" />
                <text x="26" y="17" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.02em">Linear</text>
              </svg>
            </a>

            {/* Loom */}
            <a href="#" className="company-logo" aria-label="Loom">
              <svg viewBox="0 0 90 24" fill="currentColor">
                <circle cx="8" cy="12" r="6" stroke="#a1a1aa" strokeWidth="2.5" fill="none" />
                <circle cx="8" cy="12" r="2.5" fill="#a1a1aa" />
                <text x="20" y="17" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.02em">loom</text>
              </svg>
            </a>

            {/* Remix */}
            <a href="#" className="company-logo" aria-label="Remix">
              <svg viewBox="0 0 100 24" fill="currentColor">
                <path d="M3 4H11C13.2 4 14.5 5.2 14.5 7C14.5 8.5 13.5 9.5 12 9.8L15 17.5H11.5L9 10.5H6.5V17.5H3V4ZM6.5 8.5H10.5C11.5 8.5 12 8 12 7.2C12 6.5 11.5 6 10.5 6H6.5V8.5Z" fill="#a1a1aa" />
                <text x="22" y="17" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.02em">Remix</text>
              </svg>
            </a>

            {/* Raycast */}
            <a href="#" className="company-logo" aria-label="Raycast">
              <svg viewBox="0 0 110 24" fill="currentColor">
                <rect x="2" y="4" width="14" height="14" rx="3.5" fill="#FF6363" />
                <path d="M5 11L9 7L13 11L9 15L5 11Z" fill="#ffffff" />
                <text x="24" y="17" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.02em">raycast</text>
              </svg>
            </a>

            {/* Tailwind CSS */}
            <a href="#" className="company-logo" aria-label="Tailwind CSS">
              <svg viewBox="0 0 130 24" fill="currentColor">
                <path d="M9 7C7.2 7 6.1 7.9 5.6 9.7C6.3 8.8 7.2 8.3 8.3 8.3C9.7 8.3 10.6 9.3 11.2 10.4C11.9 11.5 12.8 12.5 14.4 12.5C16.2 12.5 17.3 11.6 17.8 9.8C17.1 10.7 16.2 11.2 15.1 11.2C13.7 11.2 12.8 10.2 12.2 9.1C11.5 8 10.6 7 9 7ZM3.6 12C1.8 12 0.7 12.9 0.2 14.7C0.9 13.8 1.8 13.3 2.9 13.3C4.3 13.3 5.2 14.3 5.8 15.4C6.5 16.5 7.4 17.5 9 17.5C10.8 17.5 11.9 16.6 12.4 14.8C11.7 15.7 10.8 16.2 9.7 16.2C8.3 16.2 7.4 15.2 6.8 14.1C6.1 13 5.2 12 3.6 12Z" fill="#38BDF8" />
                <text x="24" y="17" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.02em">tailwindcss</text>
              </svg>
            </a>
          </div>

          {/* Reviews Block */}
          <div className="reviews-block">
            <div className="star-rating" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="star-icon" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="reviews-text">5.0/5 from 1,200+ reviews</span>
          </div>
        </section>
      </div>
    </>
  );
}

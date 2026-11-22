"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechSlider from "@/components/sections/TechSlider";
import About from "@/components/sections/About";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AiFullStack from "@/components/sections/AiFullStack";
import WordPressSection from "@/components/sections/WordPressDivi";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-blue-600/15 selection:text-slate-900">
      {/* Background Architectural Grid & Subtle Luminous Lights */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" aria-hidden="true" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/5 via-cyan-400/5 to-transparent blur-3xl pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

      {/* Floating Architectural Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Hero with Real Photo (Photo 1) */}
        <Hero />

        {/* Seamless Horizontal Tech Marquee */}
        <TechSlider />

        {/* 2. About Me with Real Photo (Photo 2) */}
        <About />

        {/* 3. Technical Expertise Bento Grid */}
        <TechnicalExpertise />

        {/* 4. Featured Projects Case Studies */}
        <FeaturedProjects />

        {/* 5. AI & Full-Stack Development Deep Dive */}
        <AiFullStack />

        {/* 6. WordPress Development, Architecture & Performance Showcase */}
        <WordPressSection />

        {/* 7. Experience & Milestones Timeline */}
        <ExperienceTimeline />

        {/* 8. Development Process / How I Work */}
        <Process />

        {/* Client Testimonials Proof */}
        <Testimonials />

        {/* 9. Contact & Consultation with Real Photo (Photo 3) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

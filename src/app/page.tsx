"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechSlider from "@/components/sections/TechSlider";
import About from "@/components/sections/About";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AiFullStack from "@/components/sections/AiFullStack";
import WordPressDivi from "@/components/sections/WordPressDivi";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F8FB] text-[#101820] flex flex-col selection:bg-[#004275]/15 selection:text-[#101820]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
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
        <WordPressDivi />

        {/* 7. Experience & Milestones Timeline */}
        <ExperienceTimeline />

        {/* 8. Development Process / How I Work */}
        <Process />

        {/* Client Testimonials Proof */}
        <Testimonials />

        {/* 8. Contact & Consultation with Real Photo (Photo 3) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

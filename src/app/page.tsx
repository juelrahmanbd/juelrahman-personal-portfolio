"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechSlider from "@/components/sections/TechSlider";
import EngineeringShowcase from "@/components/sections/EngineeringShowcase";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F8FB] text-[#101820] flex flex-col selection:bg-[#004275]/15 selection:text-[#101820]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* 1. Header & Single-Column Hero Section */}
        <Hero />

        {/* 2. Seamless Infinite Horizontal Tech Slider */}
        <TechSlider />

        {/* 3. Two-Column Engineering Showcase Section */}
        <EngineeringShowcase />

        {/* 4. Complete Supporting Portfolio Sections */}
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

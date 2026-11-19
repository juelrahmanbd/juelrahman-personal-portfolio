"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFF] text-[#11152F] flex flex-col selection:bg-[#E0D8FF] selection:text-[#11152F]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Skills />
        <WhyChooseMe />
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

import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Md. Juel Rahman",
  description:
    "Get in touch with Md. Juel Rahman for custom full-stack web applications, WordPress & Divi 5 development, API integrations, and intelligent AI automation workflows.",
  alternates: {
    canonical: "https://juelrahman.me/contact",
  },
  openGraph: {
    title: "Contact & Project Inquiries | Md. Juel Rahman",
    description:
      "Get in touch with Md. Juel Rahman for custom full-stack web applications, WordPress & Divi 5 development, API integrations, and intelligent AI automation workflows.",
    url: "https://juelrahman.me/contact",
    siteName: "Md. Juel Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F8FB] text-[#101820] flex flex-col selection:bg-[#004275]/15 selection:text-[#101820]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Workspace */}
      <main className="flex-1 w-full pt-28 pb-20">
        <ContactPageContent />
      </main>

      {/* Global Tech Authority Footer */}
      <Footer />
    </div>
  );
}

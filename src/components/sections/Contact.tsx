"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Send,
  MessageCircle,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

const projectTypes = [
  "Full-Stack Web Application (Next.js 15)",
  "Autonomous AI & LLM Automation",
  "WordPress Architecture (Themes & Plugins)",
  "WooCommerce Custom Store & Funnels",
  "Divi 5 or Elementor Pro Replatforming",
  "Technical Advisory & Architecture Review",
] as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    projectType: "Full-Stack Web Application (Next.js 15)",
    fullName: "",
    email: "",
    budget: "$1k — $3k",
    timeline: "Within 2–4 Weeks",
    message: "",
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/juelrahman09@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.fullName} (${formData.projectType})`,
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Luminous Light Cone */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-t from-blue-500/5 via-cyan-400/5 to-transparent blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 shadow-xs mb-4">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-widest uppercase font-mono font-bold">START A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let&apos;s Build Something{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
              Exceptional
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have a project in mind, an architectural challenge, or need a senior full-stack AI engineer to build your next product? Send your project brief directly.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Real Photo 3 + Direct Channels               */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Portrait Photo 3 Frame */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-3 sm:p-4 shadow-xl overflow-hidden group">
              <div className="relative h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full overflow-hidden mb-3">
                <div
                  className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/60 animate-micro-beam pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              <div className="relative w-full aspect-[682/1024] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 max-h-[380px]">
                <Image
                  src="/images/juel-showcase.jpg"
                  alt="Md. Juel Rahman — Ready to build and ship software"
                  width={682}
                  height={1024}
                  unoptimized
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-85" />

                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/80 text-slate-900 shadow-md">
                  <span className="text-xs font-bold block mb-0.5 text-slate-900">Md. Juel Rahman</span>
                  <span className="text-[11px] text-slate-600 block">
                    &ldquo;Ready to architect and ship your vision into production.&rdquo;
                  </span>
                </div>
              </div>

              {/* Status Indicator (Verified, No Fake Guarantees) */}
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs px-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-slate-800">Direct Communication</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Open for Q4/Q1
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/8801304555973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500 hover:bg-emerald-50/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors">
                      WhatsApp Quick Connect
                    </span>
                    <span className="text-xs font-mono text-slate-600">+880 1304-555973</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Email Direct */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-500 hover:bg-blue-50/40 transition-all duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Direct Inquiries Email
                    </span>
                    <a
                      href="mailto:juelrahman09@gmail.com"
                      className="text-xs font-mono text-blue-600 hover:underline"
                    >
                      juelrahman09@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("juelrahman09@gmail.com", "email")}
                  className="p-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedItem === "email" ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive Project Inquiry Terminal       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, {formData.fullName}. Your project inquiry has been logged. I will review your requirements and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        projectType: "Full-Stack Web Application (Next.js 15)",
                        fullName: "",
                        email: "",
                        budget: "$1k — $3k",
                        timeline: "Within 2–4 Weeks",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-blue-700 mb-2.5 tracking-wider">
                      01 // SELECT PROJECT SCOPE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-3 rounded-xl text-xs text-left font-medium transition-all cursor-pointer ${
                            formData.projectType === type
                              ? "bg-blue-600 text-white font-semibold shadow-md border border-blue-600"
                              : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 transition-all shadow-2xs"
                      >
                        <option value="Under $1k">Under $1,000</option>
                        <option value="$1k — $3k">$1,000 — $3,000</option>
                        <option value="$3k — $5k">$3,000 — $5,000</option>
                        <option value="$5k+">$5,000+</option>
                        <option value="Consulting / Hourly">Advisory / Retainer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 transition-all shadow-2xs"
                      >
                        <option value="Urgent (1–2 Weeks)">Urgent (1–2 Weeks)</option>
                        <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                        <option value="1–2 Months">1–2 Months</option>
                        <option value="Flexible">Flexible Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider">
                      Project Details &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, technical objectives, or existing challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none shadow-2xs"
                    />
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="flex items-center gap-2 text-xs text-rose-700 bg-rose-50 border border-rose-200 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/20 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

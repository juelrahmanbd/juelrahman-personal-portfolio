"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/portfolioData";
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "Custom Web Application",
    budgetRange: "$1,500 - $3,000",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");

    // Local client-side validation simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      setStatusMessage(
        "Thank you! Your inquiry was validated. (Note: Email service will be connected in next integration phase)."
      );
      setFormData({
        fullName: "",
        email: "",
        projectType: "Custom Web Application",
        budgetRange: "$1,500 - $3,000",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F8FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-xs font-semibold text-[#004275] shadow-xs mb-4">
            <Mail className="w-3.5 h-3.5 text-[#004275]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Have a project, idea, or requirement? Feel free to reach out — I&apos;d be happy to discuss how I can help.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F1EDFF] flex items-center justify-center text-[#6847E8] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#8E93AB] uppercase tracking-wider mb-1">
                Email
              </h3>
              <div className="text-base font-bold text-[#11152F] mb-1 break-all">
                {siteConfig.contact.email}
              </div>
              <p className="text-xs text-[#626780] mb-4">
                Send an email with your project details.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#E9E7F5]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs font-semibold text-[#6847E8] hover:underline"
              >
                Send Email &rarr;
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto p-1.5 text-[#8E93AB] hover:text-[#11152F] transition-colors rounded-lg hover:bg-[#FAFAFF]"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#8E93AB] uppercase tracking-wider mb-1">
                WhatsApp
              </h3>
              <div className="text-base font-bold text-[#11152F] mb-1">
                {siteConfig.contact.whatsapp}
              </div>
              <p className="text-xs text-[#626780] mb-4">
                Chat on WhatsApp for a quick discussion.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E9E7F5]">
              <span className="text-xs font-semibold text-emerald-600">
                Available for consultations &rarr;
              </span>
            </div>
          </div>

          {/* Project Inquiry Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E9E7F5] shadow-xs hover:shadow-card hover:border-[#D4CFF2] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F1EDFF] flex items-center justify-center text-[#6847E8] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#8E93AB] uppercase tracking-wider mb-1">
                Project Inquiry
              </h3>
              <div className="text-base font-bold text-[#11152F] mb-1">
                Direct Project Form
              </div>
              <p className="text-xs text-[#626780] mb-4">
                Fill out a short message about your project and I&apos;ll get back to you soon.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E9E7F5]">
              <span className="text-xs font-semibold text-[#6847E8]">
                24–48h response time &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E9E7F5] shadow-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-[#11152F] uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFF] border border-[#E9E7F5] text-sm text-[#11152F] focus:outline-none focus:border-[#6847E8] focus:ring-2 focus:ring-[#6847E8]/20 transition-all placeholder:text-[#8E93AB]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#11152F] uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFF] border border-[#E9E7F5] text-sm text-[#11152F] focus:outline-none focus:border-[#6847E8] focus:ring-2 focus:ring-[#6847E8]/20 transition-all placeholder:text-[#8E93AB]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-bold text-[#11152F] uppercase tracking-wider mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFF] border border-[#E9E7F5] text-sm text-[#11152F] focus:outline-none focus:border-[#6847E8] focus:ring-2 focus:ring-[#6847E8]/20 transition-all"
                >
                  <option value="WordPress Website">WordPress Website Development</option>
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="AI-Powered Solution">AI-Powered Solution</option>
                  <option value="SaaS Platform">Custom SaaS Platform</option>
                  <option value="eCommerce Store">eCommerce Store</option>
                  <option value="API & Automation">API Integration &amp; Automation</option>
                  <option value="Other">Other Project</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className="block text-xs font-bold text-[#11152F] uppercase tracking-wider mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFF] border border-[#E9E7F5] text-sm text-[#11152F] focus:outline-none focus:border-[#6847E8] focus:ring-2 focus:ring-[#6847E8]/20 transition-all"
                >
                  <option value="< $500">&lt; $500</option>
                  <option value="$500 - $1,500">$500 - $1,500</option>
                  <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-[#11152F] uppercase tracking-wider mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project, goals, key requirements, and timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFF] border border-[#E9E7F5] text-sm text-[#11152F] focus:outline-none focus:border-[#6847E8] focus:ring-2 focus:ring-[#6847E8]/20 transition-all placeholder:text-[#8E93AB] resize-none"
              />
            </div>

            {/* Validation Feedback */}
            {formStatus === "error" && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {formStatus === "success" && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#004275] hover:bg-[#003157] shadow-xs hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275] focus-visible:ring-offset-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Validating..." : "Submit Inquiry"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

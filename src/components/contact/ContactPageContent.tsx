"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  MessageCircle,
  Phone,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  ChevronRight,
  Sparkles,
  Layers,
  ShieldCheck,
  FileText,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/portfolioData";

const projectTypes = [
  "WordPress & Divi 5",
  "Custom Website",
  "Full-Stack Web App",
  "AI & Automation",
  "eCommerce / SaaS",
  "SEO, Speed & Security",
] as const;

type ProjectType = (typeof projectTypes)[number];

const stepTitles = [
  "Project Category",
  "Your Name",
  "Contact Email",
  "Project Scope & Timeline",
];

export default function ContactPageContent() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    projectType: "WordPress & Divi 5" as ProjectType,
    fullName: "",
    email: "",
    message: "",
    _honey: "",
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus active input when step changes
  useEffect(() => {
    setStepError("");
    if (currentStep === 2) {
      setTimeout(() => nameInputRef.current?.focus(), 80);
    } else if (currentStep === 3) {
      setTimeout(() => emailInputRef.current?.focus(), 80);
    } else if (currentStep === 4) {
      setTimeout(() => messageInputRef.current?.focus(), 80);
    }
  }, [currentStep]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  const validateCurrentStep = (): boolean => {
    setStepError("");
    if (currentStep === 1) {
      if (!formData.projectType) {
        setStepError("Please select a project category to continue.");
        return false;
      }
      return true;
    }
    if (currentStep === 2) {
      if (!formData.fullName.trim()) {
        setStepError("Please enter your name.");
        return false;
      }
      if (formData.fullName.trim().length < 2) {
        setStepError("Please enter a valid name (at least 2 characters).");
        return false;
      }
      return true;
    }
    if (currentStep === 3) {
      if (!formData.email.trim()) {
        setStepError("Please enter your email address.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        setStepError("Please enter a valid email address (e.g. name@domain.com).");
        return false;
      }
      return true;
    }
    if (currentStep === 4) {
      if (!formData.message.trim()) {
        setStepError("Please share a brief summary of your project or requirements.");
        return false;
      }
      if (formData.message.trim().length < 10) {
        setStepError("Please provide a little more detail (at least 10 characters).");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setStepError("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && currentStep < 4) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    // Check honeypot for bot suppression
    if (formData._honey) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/juelrahman09@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Project Category": formData.projectType,
          "Client Name": formData.fullName.trim(),
          "Client Email": formData.email.trim(),
          "Project Scope & Details": formData.message.trim(),
          _subject: `New Project Inquiry: ${formData.projectType} — ${formData.fullName.trim()}`,
          _captcha: "false",
          _honey: formData._honey,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Submission failed. Please email directly.");
      }
    } catch {
      // Fallback: If network or FormSubmit blocked, show helpful fallback
      setSubmitError(
        "Could not deliver automatically via web form. Please click the direct email link below or message me on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setCurrentStep(1);
    setFormData({
      projectType: "WordPress & Divi 5",
      fullName: "",
      email: "",
      message: "",
      _honey: "",
    });
  };

  const mailtoFallbackUrl = `mailto:juelrahman09@gmail.com?subject=Project Inquiry: ${encodeURIComponent(
    formData.projectType
  )}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0AEmail: ${encodeURIComponent(
    formData.email
  )}%0D%0A%0D%0AProject Scope:%0D%0A${encodeURIComponent(formData.message)}`;

  const faqItems = [
    {
      icon: Layers,
      title: "Transparent Scoping & Phased Milestones",
      desc: "Every project starts with thorough discovery to map business requirements, database structures, and UX flows into clear, milestone-based deliverables with defined timelines and no hidden surprises.",
    },
    {
      icon: ShieldCheck,
      title: "Existing Codebase & Modernization",
      desc: "Whether you have a live WordPress site needing Divi 5 refactoring, a custom Next.js/React frontend requiring backend API integration, or an AI workflow pipeline to automate, I integrate cleanly with your existing repos.",
    },
    {
      icon: FileText,
      title: "Clean Handover & Post-Launch Support",
      desc: "Every completed engagement includes 100% source code ownership, clean Git repository setup, deployment verification, admin training documentation, and available ongoing maintenance for security and performance.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* 1. Page Header & Breadcrumb Strip */}
      <header className="mb-10 text-left">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-[#101820]/60">
            <li>
              <Link href="/" className="hover:text-[#004275] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#004275]" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[rgba(0,66,117,0.18)] text-[11px] font-bold tracking-wider text-[#004275] uppercase mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" />
          <span>CONTACT &amp; PROJECT INQUIRIES</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101820] tracking-tight leading-tight">
          Let&apos;s Build Something Reliable Together
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[#101820]/75 max-w-3xl leading-relaxed">
          Direct communication channels and project scoping for modern full-stack web applications,
          custom WordPress &amp; Divi 5 platforms, API integrations, intelligent AI automations, and
          technical architecture consulting.
        </p>
      </header>

      {/* 2. Main 2-Column Split Contact Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full min-w-0">
        {/* ========================================================= */}
        {/* LEFT COLUMN — Direct Channels & Scoping Guide (lg:col-span-5) */}
        {/* ========================================================= */}
        <section
          aria-labelledby="direct-channels-heading"
          className="lg:col-span-5 w-full min-w-0"
        >
          <div className="bg-[#101820] rounded-2xl border border-[rgba(255,255,255,0.12)] p-6 sm:p-7 text-white shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004275] via-sky-500 to-[#004275]"
              aria-hidden="true"
            />

            <div>
              {/* Heading & Status */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h2
                    id="direct-channels-heading"
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                  >
                    Direct Channels
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E2E8F0]/75 mt-1 leading-relaxed">
                    Reach out directly for time-sensitive inquiries, technical architecture discussions, or consulting.
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-medium text-emerald-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Projects &amp; Scoping</span>
              </div>

              {/* Direct Channel Rows */}
              <div className="flex flex-col gap-3">
                {/* 1. hellow@juelrahman.com */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Primary Work Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.primaryEmail}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                      >
                        {siteConfig.contact.primaryEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.contact.primaryEmail, "primaryEmail")}
                    aria-label="Copy primary work email"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    title="Copy Email"
                  >
                    {copiedItem === "primaryEmail" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                </div>

                {/* 2. juelrahman09@gmail.com */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Direct / Backup Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.inquiryEmail}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                      >
                        {siteConfig.contact.inquiryEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.contact.inquiryEmail, "inquiryEmail")}
                    aria-label="Copy backup email"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    title="Copy Email"
                  >
                    {copiedItem === "inquiryEmail" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                </div>

                {/* 3. Phone & WhatsApp: 01304555973 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#004275] border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phone &amp; WhatsApp
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`https://wa.me/8801304555973`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      title="Open in WhatsApp"
                      aria-label="Message on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:+8801304555973`}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      title="Direct Phone Call"
                      aria-label="Make a phone call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(siteConfig.contact.phone, "phone")}
                      aria-label="Copy phone number"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      title="Copy Number"
                    >
                      {copiedItem === "phone" ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-300" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* What to Include for Faster Scoping Checklist */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                  What to Include for Faster Scoping
                </span>
                <ul className="space-y-2 text-xs text-[#E2E8F0]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#004275] bg-sky-200/90 rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong className="text-white">Core Objective:</strong> The specific problem, business workflow, or web app you want to build.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#004275] bg-sky-200/90 rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong className="text-white">Target Timeline:</strong> Your planned launch window or project milestone deadlines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#004275] bg-sky-200/90 rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong className="text-white">Key Features:</strong> APIs, payments, database, CMS, or AI capabilities required.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#004275] bg-sky-200/90 rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong className="text-white">Existing Assets:</strong> Current website URL, Figma files, or GitHub repo (if any).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom SLA / Response Guarantee */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#E2E8F0]/75 font-medium">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Typically responds within 24 hours (or same business day).</span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RIGHT COLUMN — 1-Field-at-a-Time Multi-Step Form (lg:col-span-7) */}
        {/* ========================================================= */}
        <section
          aria-labelledby="inquiry-form-heading"
          className="lg:col-span-7 w-full min-w-0"
        >
          <div className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-7 shadow-xs relative flex flex-col justify-between h-full min-h-[460px]">
            {isSubmitted ? (
              /* Success Confirmation Card */
              <div className="flex flex-col items-center justify-center text-center py-10 px-4 my-auto animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-2">
                  Inquiry Received Successfully!
                </h2>
                <p className="text-sm sm:text-base text-[#101820]/75 max-w-md leading-relaxed mb-6">
                  Thank you, <strong className="text-[#101820]">{formData.fullName}</strong>.
                  Your project details have been delivered directly to{" "}
                  <span className="font-semibold text-[#004275]">juelrahman09@gmail.com</span>.
                  I will review your requirements and respond within 24 hours.
                </p>

                <div className="bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] rounded-xl p-4 max-w-sm w-full text-left text-xs mb-8">
                  <div className="font-bold text-[#101820] mb-2 uppercase tracking-wider text-[11px]">
                    Summary of Submitted Scope
                  </div>
                  <div className="space-y-1 text-[#101820]/80">
                    <div>
                      <span className="font-semibold text-[#101820]">Category:</span> {formData.projectType}
                    </div>
                    <div>
                      <span className="font-semibold text-[#101820]">Email:</span> {formData.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                {/* Honeypot field for bot prevention */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Form Header & Smooth Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#004275]">
                      Step {currentStep} of 4: {stepTitles[currentStep - 1]}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#101820]/60">
                      {currentStep * 25}%
                    </span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="h-1.5 w-full bg-[#F5F8FB] rounded-full overflow-hidden border border-[rgba(16,24,32,0.06)] mb-6">
                    <div
                      className="h-full bg-[#004275] transition-all duration-300 ease-out"
                      style={{ width: `${currentStep * 25}%` }}
                    />
                  </div>

                  {/* Step Form Content */}
                  <div className="min-h-[220px]">
                    {/* ========================================================= */}
                    {/* STEP 1: What would you like to build?                      */}
                    {/* ========================================================= */}
                    {currentStep === 1 && (
                      <div className="animate-in fade-in duration-200">
                        <label
                          id="inquiry-form-heading"
                          className="block text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight mb-1"
                        >
                          What would you like to build?
                        </label>
                        <p className="text-xs sm:text-sm text-[#101820]/70 mb-5 leading-relaxed">
                          Select the primary category that best matches your project scope.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {projectTypes.map((type) => {
                            const isSelected = formData.projectType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, projectType: type });
                                  setStepError("");
                                }}
                                className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-2 cursor-pointer ${
                                  isSelected
                                    ? "bg-[#004275]/5 border-[#004275] text-[#004275] shadow-2xs"
                                    : "bg-white border-[rgba(16,24,32,0.14)] text-[#101820] hover:bg-[#F5F8FB] hover:border-[rgba(16,24,32,0.25)]"
                                }`}
                              >
                                <span>{type}</span>
                                {isSelected && (
                                  <span className="w-5 h-5 rounded-full bg-[#004275] text-white flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 stroke-[2.5]" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* STEP 2: What's your name?                                 */}
                    {/* ========================================================= */}
                    {currentStep === 2 && (
                      <div className="animate-in fade-in duration-200">
                        <label
                          htmlFor="fullName"
                          className="block text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight mb-1"
                        >
                          What&apos;s your name?
                        </label>
                        <p className="text-xs sm:text-sm text-[#101820]/70 mb-5 leading-relaxed">
                          Let me know how to address you during our communication.
                        </p>

                        <input
                          ref={nameInputRef}
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (stepError) setStepError("");
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] focus:bg-white text-[#101820] text-sm sm:text-base font-medium placeholder:text-slate-400 focus:border-[#004275] focus:ring-2 focus:ring-[#004275]/20 focus:outline-none transition-all"
                        />
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* STEP 3: What's your email address?                        */}
                    {/* ========================================================= */}
                    {currentStep === 3 && (
                      <div className="animate-in fade-in duration-200">
                        <label
                          htmlFor="email"
                          className="block text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight mb-1"
                        >
                          What&apos;s your email address?
                        </label>
                        <p className="text-xs sm:text-sm text-[#101820]/70 mb-5 leading-relaxed">
                          I will send my scoping thoughts and availability to this address.
                        </p>

                        <input
                          ref={emailInputRef}
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (stepError) setStepError("");
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] focus:bg-white text-[#101820] text-sm sm:text-base font-medium placeholder:text-slate-400 focus:border-[#004275] focus:ring-2 focus:ring-[#004275]/20 focus:outline-none transition-all"
                        />
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* STEP 4: Project Scope & Timeline Overview                 */}
                    {/* ========================================================= */}
                    {currentStep === 4 && (
                      <div className="animate-in fade-in duration-200">
                        <label
                          htmlFor="message"
                          className="block text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight mb-1"
                        >
                          Share a brief overview of your project
                        </label>
                        <p className="text-xs sm:text-sm text-[#101820]/70 mb-3 leading-relaxed">
                          Tell me about your goals, key requirements, or target timeline.
                        </p>

                        {/* Summary Pills */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-[11px] font-semibold text-[#101820]">
                            <span className="text-slate-400">Type:</span> {formData.projectType}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-[11px] font-semibold text-[#101820]">
                            <span className="text-slate-400">From:</span> {formData.fullName}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F5F8FB] border border-[rgba(16,24,32,0.1)] text-[11px] font-semibold text-[#101820]">
                            <span className="text-slate-400">Email:</span> {formData.email}
                          </span>
                        </div>

                        <textarea
                          ref={messageInputRef}
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (stepError) setStepError("");
                          }}
                          placeholder="e.g. We are building a custom web application with Next.js and Supabase. Looking to launch by next month and need assistance with API integration and auth..."
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] focus:bg-white text-[#101820] text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:border-[#004275] focus:ring-2 focus:ring-[#004275]/20 focus:outline-none transition-all resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Step Error Notice */}
                  {stepError && (
                    <div className="mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{stepError}</span>
                    </div>
                  )}

                  {/* Submit Error with Direct Email Fallback */}
                  {submitError && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs animate-in fade-in">
                      <div className="flex items-start gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                      <div className="flex items-center gap-3 pl-6">
                        <a
                          href={mailtoFallbackUrl}
                          className="font-bold text-[#004275] underline hover:text-[#003157] inline-flex items-center gap-1"
                        >
                          <span>Send via Default Email App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Controls / Buttons */}
                <div className="mt-6 pt-4 border-t border-[rgba(16,24,32,0.08)] flex items-center justify-between gap-3">
                  <div>
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[rgba(16,24,32,0.14)] bg-white hover:bg-[#F5F8FB] text-[#101820] text-xs font-semibold shadow-2xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#101820]/50 font-medium">
                        Press Enter ↵ to advance
                      </span>
                    )}
                  </div>

                  <div>
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#004275] hover:bg-[#003157] disabled:opacity-60 shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Inquiry</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>

      {/* 3. Compact FAQ / Engagement Notes Row (Below Split Workspace) */}
      <section
        aria-labelledby="faq-section-heading"
        className="mt-14 pt-12 border-t border-[rgba(16,24,32,0.1)]"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[rgba(0,66,117,0.16)] text-[11px] font-bold tracking-wider text-[#004275] uppercase mb-2.5 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#004275]" />
            <span>HOW WE WORK</span>
          </div>
          <h2
            id="faq-section-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight"
          >
            Engagement Guidelines &amp; Pre-Project FAQ
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#101820]/70 leading-relaxed">
            Straightforward answers on discovery, collaboration workflows, and post-launch handovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {faqItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 sm:p-6 shadow-2xs hover:border-[#004275]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)] flex items-center justify-center text-[#004275] mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#101820] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#101820]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

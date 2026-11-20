"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Send,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Phone,
} from "lucide-react";

const projectTypes = [
  "WordPress & Divi 5",
  "Custom Website",
  "Full-Stack Web App",
  "AI & Automation",
  "eCommerce / SaaS",
  "SEO, Speed & Security",
] as const;

type ProjectType = (typeof projectTypes)[number];

const stepLabels = [
  "Project Type",
  "Your Name",
  "Contact Email",
  "Project Scope",
];

export default function Contact() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    projectType: "WordPress & Divi 5" as ProjectType,
    fullName: "",
    email: "",
    message: "",
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
      setTimeout(() => nameInputRef.current?.focus(), 100);
    } else if (currentStep === 3) {
      setTimeout(() => emailInputRef.current?.focus(), 100);
    } else if (currentStep === 4) {
      setTimeout(() => messageInputRef.current?.focus(), 100);
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
        setStepError("Please select a project type.");
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
        setStepError("Please enter a valid name.");
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
        setStepError("Please share a brief note about your project goals or timeline.");
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
    if (e.key === "Enter") {
      if (currentStep < 4) {
        e.preventDefault();
        handleNext();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Direct FormSubmit AJAX submission to juelrahman09@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/juelrahman09@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          projectType: formData.projectType,
          message: formData.message.trim(),
          _subject: `New Portfolio Inquiry from juelrahman.me: ${formData.projectType} (${formData.fullName.trim()})`,
          _captcha: "false",
          _template: "table",
          _honey: "", // Honeypot field
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // If network fails (e.g. adblocker), still provide graceful confirmation with fallback
      setSubmitError(
        "Could not deliver via automated pipeline. Please send your inquiry directly to juelrahman09@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setStepError("");
    setCurrentStep(1);
    setFormData({
      projectType: "WordPress & Divi 5",
      fullName: "",
      email: "",
      message: "",
    });
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <section id="contact" className="py-14 lg:py-16 bg-[#F5F8FB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified 2-Column Split Architectural Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl border border-[rgba(16,24,32,0.14)] overflow-hidden shadow-sm bg-white">
          {/* ========================================================= */}
          {/* 1. LEFT COLUMN — Compact Contact Hub (lg:col-span-5)      */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-[#101820] text-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
            <div>
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-[#F5F8FB] tracking-wider uppercase mb-4">
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5">
                Let&apos;s Work Together
              </h2>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed mb-6">
                Have a project, idea, or requirement? Start a quick step-by-step inquiry or reach out directly.
              </p>

              {/* 3 Compact Interactive Contact Rows */}
              <div className="space-y-3">
                {/* Row 1 — Primary Email */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-md bg-[#004275] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                        Primary Email
                      </span>
                      <a
                        href="mailto:hellow@juelrahman.com"
                        className="text-xs font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                      >
                        hellow@juelrahman.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("hellow@juelrahman.com", "primary")}
                    className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy primary email"
                    aria-label="Copy primary email"
                  >
                    {copiedItem === "primary" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Row 2 — Direct / Inquiry Email */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-md bg-[#004275] text-white flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                        Direct Inquiry
                      </span>
                      <a
                        href="mailto:juelrahman09@gmail.com"
                        className="text-xs font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                      >
                        juelrahman09@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("juelrahman09@gmail.com", "inquiry")}
                    className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy inquiry email"
                    aria-label="Copy inquiry email"
                  >
                    {copiedItem === "inquiry" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Row 3 — WhatsApp / Phone */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-md bg-[#059669] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                        WhatsApp &amp; Phone
                      </span>
                      <a
                        href="https://wa.me/8801304555973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                      >
                        01304555973
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <a
                      href="tel:+8801304555973"
                      className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Call direct"
                      aria-label="Call direct"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy("01304555973", "phone")}
                      className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedItem === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Line */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Typically responds within 24 hours</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. RIGHT COLUMN — 1-Field-at-a-Time Multi-Step Form       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative">
            {isSubmitted ? (
              /* Success Confirmation State */
              <div className="py-8 flex flex-col items-center text-center justify-center h-full my-auto animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight mb-2">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] max-w-md leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#101820]">{formData.fullName}</span>! Your inquiry has been delivered directly to <span className="font-semibold text-[#004275]">juelrahman09@gmail.com</span>. I typically review details and follow up within 24 hours.
                </p>

                {/* Compact Submission Summary */}
                <div className="w-full max-w-sm bg-[#F5F8FB] border border-[rgba(16,24,32,0.12)] rounded-lg p-3.5 text-left text-xs mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Project:</span>
                    <span className="font-semibold text-[#101820]">{formData.projectType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-semibold text-[#101820]">{formData.email}</span>
                  </div>
                  <div className="pt-1.5 text-slate-600 italic line-clamp-2">
                    &ldquo;{formData.message}&rdquo;
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[rgba(16,24,32,0.18)] text-xs sm:text-sm font-semibold text-[#101820] hover:bg-slate-50 transition-colors"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              /* Active Multi-Step Form */
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Top Progress Indicator */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#004275] tracking-wider uppercase">
                        Step {currentStep} of 4
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="font-medium text-slate-600">
                        {stepLabels[currentStep - 1]}
                      </span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>

                  {/* Thin Animated Progress Bar */}
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
                    <div
                      className="h-full bg-[#004275] transition-all duration-300 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Step Content Area */}
                <div className="min-h-[200px] flex flex-col justify-center py-2">
                  {/* =================================================== */}
                  {/* STEP 1: Project Type Selection                      */}
                  {/* =================================================== */}
                  {currentStep === 1 && (
                    <div className="animate-in fade-in duration-200">
                      <label className="block text-base sm:text-lg font-bold text-[#101820] tracking-tight mb-1">
                        What would you like to build?
                      </label>
                      <p className="text-xs text-[#475569] mb-4">
                        Select the primary scope for your upcoming project.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {projectTypes.map((type) => {
                          const isSelected = formData.projectType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, projectType: type }));
                                setStepError("");
                              }}
                              className={`p-3 text-left rounded-lg text-xs font-semibold transition-all border ${
                                isSelected
                                  ? "bg-[#004275] text-white border-[#004275] shadow-xs scale-[1.01]"
                                  : "bg-[#F5F8FB] text-[#101820] border-[rgba(16,24,32,0.12)] hover:border-[#004275]/40 hover:bg-slate-100"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="leading-snug">{type}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-1" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* =================================================== */}
                  {/* STEP 2: Full Name Input                             */}
                  {/* =================================================== */}
                  {currentStep === 2 && (
                    <div className="animate-in fade-in duration-200">
                      <label
                        htmlFor="fullName"
                        className="block text-base sm:text-lg font-bold text-[#101820] tracking-tight mb-1"
                      >
                        What&apos;s your name?
                      </label>
                      <p className="text-xs text-[#475569] mb-4">
                        Please enter your personal or company name.
                      </p>

                      <input
                        ref={nameInputRef}
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                          if (stepError) setStepError("");
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] text-[#101820] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004275] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>
                  )}

                  {/* =================================================== */}
                  {/* STEP 3: Email Input                                 */}
                  {/* =================================================== */}
                  {currentStep === 3 && (
                    <div className="animate-in fade-in duration-200">
                      <label
                        htmlFor="email"
                        className="block text-base sm:text-lg font-bold text-[#101820] tracking-tight mb-1"
                      >
                        Where can I reach you?
                      </label>
                      <p className="text-xs text-[#475569] mb-4">
                        I will send the technical proposal and reply to this email address.
                      </p>

                      <input
                        ref={emailInputRef}
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (stepError) setStepError("");
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] text-[#101820] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004275] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>
                  )}

                  {/* =================================================== */}
                  {/* STEP 4: Project Scope & Review                      */}
                  {/* =================================================== */}
                  {currentStep === 4 && (
                    <div className="animate-in fade-in duration-200">
                      {/* Compact Summary Review Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#004275]/10 text-[#004275] hover:bg-[#004275]/20 text-[11px] font-semibold transition-colors"
                          title="Click to change project type"
                        >
                          <span>{formData.projectType}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] font-semibold transition-colors truncate max-w-[140px]"
                          title="Click to edit name"
                        >
                          <span>{formData.fullName || "Name"}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] font-semibold transition-colors truncate max-w-[160px]"
                          title="Click to edit email"
                        >
                          <span>{formData.email || "Email"}</span>
                        </button>
                      </div>

                      <label
                        htmlFor="message"
                        className="block text-base sm:text-lg font-bold text-[#101820] tracking-tight mb-1"
                      >
                        Briefly describe your project, goals, or timeline
                      </label>
                      <p className="text-xs text-[#475569] mb-3">
                        Share any technical requirements, design links, or deadlines.
                      </p>

                      <textarea
                        ref={messageInputRef}
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, message: e.target.value }));
                          if (stepError) setStepError("");
                        }}
                        placeholder="Tell me about your project scope, target timeline, or existing website URL..."
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(16,24,32,0.18)] bg-[#F5F8FB] text-[#101820] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004275] focus:border-transparent transition-all shadow-2xs resize-none"
                      />
                    </div>
                  )}

                  {/* Inline Step Validation Error */}
                  {stepError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 font-medium mt-2 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{stepError}</span>
                    </div>
                  )}

                  {/* Fallback Submission Error Banner */}
                  {submitError && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 mt-2">
                      <p className="font-semibold mb-1">{submitError}</p>
                      <a
                        href={`mailto:juelrahman09@gmail.com?subject=Project%20Inquiry%20from%20juelrahman.me&body=Name:%20${encodeURIComponent(
                          formData.fullName
                        )}%0AEmail:%20${encodeURIComponent(formData.email)}%0AProject:%20${encodeURIComponent(
                          formData.projectType
                        )}%0A%0A${encodeURIComponent(formData.message)}`}
                        className="underline font-bold text-rose-800 hover:text-rose-900 inline-flex items-center gap-1"
                      >
                        <span>Click to send via default email client &rarr;</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Bottom Navigation Controls */}
                <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#101820] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#004275] text-white text-xs sm:text-sm font-semibold hover:bg-[#003157] transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#004275] text-white text-xs sm:text-sm font-semibold hover:bg-[#003157] disabled:opacity-60 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

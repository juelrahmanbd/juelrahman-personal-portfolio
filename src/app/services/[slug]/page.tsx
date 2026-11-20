import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
  Workflow,
  Lock,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import ServiceFaqAccordion from "@/components/services/ServiceFaqAccordion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Md. Juel Rahman",
    };
  }

  return {
    title: `${service.title} | Md. Juel Rahman`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://juelrahman.me/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Md. Juel Rahman`,
      description: service.shortDescription,
      url: `https://juelrahman.me/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related services based on relatedSlugs
  const relatedServices = servicesData.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <div className="min-h-screen bg-[#F5F8FB] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-[#101820]/60">
            <li>
              <Link href="/" className="hover:text-[#004275] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link href="/services" className="hover:text-[#004275] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#004275] truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* 1. Hero & Value Proposition */}
        <section className="mb-12 bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-10 md:p-12 shadow-xs relative overflow-hidden">
          {/* Top Continuous Micro-Beam Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <ServiceIcon type={service.iconType} className="h-10" />
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#004275]/10 text-[#004275] uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
              <span>SERVICE ARCHITECTURE</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[#004275] font-bold">
                {service.index} / 12
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101820] tracking-tight mb-4 leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#004275] mb-4">
            {service.heroTagline}
          </p>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-4xl mb-8">
            {service.valueProposition}
          </p>

          {/* 4-Cell Quick-Spec Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Ideal For
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#101820] leading-snug">
                {service.quickSpecs.idealFor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Core Stack
              </span>
              <p className="text-xs sm:text-sm font-mono text-[#004275] font-semibold leading-snug">
                {service.quickSpecs.coreStack}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Delivery Approach
              </span>
              <p className="text-xs sm:text-sm text-[#101820] leading-snug">
                {service.quickSpecs.deliveryApproach}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Key Focus
              </span>
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 leading-snug">
                {service.quickSpecs.keyFocus}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Problem vs. Solution 2-Column Grid */}
        <section className="mb-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-[#004275]" />
              <span>CHALLENGES &amp; ARCHITECTURAL SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight">
              Solving Critical Technical Bottlenecks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Common Industry Challenges */}
            <div className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-rose-700 flex items-center gap-2 mb-4 pb-3 border-b border-rose-100">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Common Industry Challenges</span>
              </h3>
              <div className="space-y-4">
                {service.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820] mb-1">
                        {c.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: How I Engineer The Solution */}
            <div className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-[#004275] flex items-center gap-2 mb-4 pb-3 border-b border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-[#004275] shrink-0" />
                <span>How I Engineer the Solution</span>
              </h3>
              <div className="space-y-4">
                {service.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#004275] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820] mb-1">
                        {s.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope of Work & Concrete Deliverables */}
        <section className="mb-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <Layers className="w-3.5 h-3.5 text-[#004275]" />
              <span>PRODUCTION DELIVERABLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-2">
              Concrete Scope of Work
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Every deliverable is modular, thoroughly documented, and verified in staging prior to production handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.deliverables.map((del, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#004275]/10 text-[#004275] flex items-center justify-center text-xs font-bold font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-[#101820] mb-2 leading-snug">
                    {del.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {del.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Technical Stack & Architecture Breakdown */}
        <section className="mb-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <Cpu className="w-3.5 h-3.5 text-[#004275]" />
              <span>TECHNICAL STACK &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-2">
              Engineered Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Selected strictly for long-term maintainability, developer ergonomics, and rock-solid scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.stack.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 sm:p-6 shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#004275]">
                    {item.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#004275]" />
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Step-by-Step Execution Workflow */}
        <section className="mb-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <Workflow className="w-3.5 h-3.5 text-[#004275]" />
              <span>DELIVERY LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-2">
              Execution &amp; Delivery Workflow
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              A disciplined, milestone-driven process ensuring predictable progress with zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.workflow.map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#004275] block mb-2">
                    STEP {w.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#101820] mb-2 leading-snug">
                    {w.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Quality, Security & Performance Standards */}
        <section className="mb-14 bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#004275]" />
              <span>STANDARDS &amp; GOVERNANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight">
              Quality, Security &amp; Performance Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-[#101820]">
                  Performance Standard
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {service.standards.performance}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-[#004275]" />
                <h3 className="text-sm font-bold text-[#101820]">
                  Security Standard
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {service.standards.security}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[rgba(16,24,32,0.08)]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-[#101820]">
                  Maintainability Standard
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {service.standards.maintainability}
              </p>
            </div>
          </div>
        </section>

        {/* 7. Service-Specific FAQ Accordion */}
        <section className="mb-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004275] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#004275]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101820] tracking-tight mb-2">
              Technical &amp; Engagement FAQs
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Clear answers regarding timelines, requirements, code ownership, and warranties.
            </p>
          </div>

          <ServiceFaqAccordion faqs={service.faqs} />
        </section>

        {/* 8. Related Services & Bottom CTA */}
        {relatedServices.length > 0 && (
          <section className="mb-14 pt-8 border-t border-[rgba(16,24,32,0.1)]">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101820] tracking-tight">
                Complementary &amp; Related Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group bg-white rounded-xl border border-[rgba(16,24,32,0.14)] p-5 shadow-xs hover:border-[#004275] transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <ServiceIcon type={rel.iconType} className="h-7" />
                      <span className="text-xs font-bold text-[#004275] font-mono">
                        {rel.index}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#101820] group-hover:text-[#004275] transition-colors mb-1.5">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs font-semibold text-[#004275]">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* High-Converting Bottom Conversion Callout */}
        <section className="bg-white rounded-2xl border border-[rgba(16,24,32,0.14)] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          {/* Top Micro-Beam Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004275] overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-micro-beam pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101820] tracking-tight mb-4">
            Ready to Architect Your {service.title} Project?
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
            Let&apos;s review your specifications, architecture requirements, and timeline. Get in touch directly to begin with a clear technical roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#004275] text-white text-sm font-semibold hover:bg-[#003157] transition-all shadow-xs hover:shadow-md"
            >
              <span>Discuss This Project With Juel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[rgba(16,24,32,0.14)] text-sm font-semibold text-[#101820] hover:bg-slate-50 transition-colors"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

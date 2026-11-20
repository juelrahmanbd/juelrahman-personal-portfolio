"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/data/servicesData";

interface ServiceFaqAccordionProps {
  faqs: ServiceFAQ[];
}

export default function ServiceFaqAccordion({ faqs }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-btn-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[rgba(16,24,32,0.14)] overflow-hidden transition-colors"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#101820] hover:text-[#004275] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004275]"
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-[#004275] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

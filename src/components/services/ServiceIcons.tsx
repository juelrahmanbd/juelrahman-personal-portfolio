import React from "react";

interface ServiceIconProps {
  type: string;
  className?: string;
}

export function ServiceIcon({ type, className = "w-10 h-10" }: ServiceIconProps) {
  switch (type) {
    case "wordpress-divi":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          {/* WordPress Official Circle Logo */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#21759B] fill-current shrink-0" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385L3.633 10.28c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C3.12 12.3 4.2 15.6 6.3 18.2L11.5 3.5c-.65.03-1.23.1-1.23.1-.58.075-.51.93.07.9 0 0 1.76-.14 2.88-.14 1.06 0 2.85.15 2.85.15.58.03.66-.86.07-.89 0 0-.54-.06-1.12-.09l1.68-4.6 2.37-7.1L18.6 17.1c2.1-2.6 3.2-5.9 3.2-8.7 0-6.627-5.373-12-12-12m0 22.8c-1.06 0-2.08-.15-3.05-.44l3.24-9.41 3.31 9.09c-.02.05-.05.1-.08.15-1.12.39-2.32.61-3.42.61" />
          </svg>
          {/* Divi 5 Stylized D Badge */}
          <div className="w-5 h-5 rounded-md bg-[#7E3BD0] text-white flex items-center justify-center font-black text-[10px] tracking-tighter shadow-xs">
            D
          </div>
        </div>
      );

    case "nodejs-code":
    case "custom-website":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          {/* Node.js Hexagon Logo */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#339933] fill-current shrink-0" aria-hidden="true">
            <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2zm0 2.3L5.07 8.3v7.4L12 19.7l6.93-4V8.3L12 4.3zm-.8 3.5h1.6v6.2h-1.6V7.8zm.8 8.8a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          {/* JS Yellow Badge */}
          <div className="w-5 h-5 rounded bg-[#F7DF1E] text-black flex items-center justify-center font-bold text-[9px] tracking-tight shadow-xs">
            JS
          </div>
        </div>
      );

    case "layers-cog":
    case "full-stack":
      return (
        <div className={`relative flex items-center justify-center text-[#004275] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
            <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white border border-[#004275] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004275]" />
          </div>
        </div>
      );

    case "ai-sparkles":
    case "ai-powered":
      return (
        <div className={`relative flex items-center justify-center text-[#0EA5E9] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M12 3a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V11a2 2 0 0 0 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2v2" strokeLinecap="round" />
            <path d="M12 3a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11a2 2 0 0 1-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2" strokeLinecap="round" />
            <circle cx="12" cy="7" r="1.5" fill="currentColor" />
            <circle cx="5" cy="19" r="1.5" fill="currentColor" />
            <circle cx="19" cy="19" r="1.5" fill="currentColor" />
            <path d="M18 4l.8 1.6 1.6.8-1.6.8-.8 1.6-.8-1.6-1.6-.8 1.6-.8z" fill="#0EA5E9" stroke="none" />
          </svg>
        </div>
      );

    case "cloud-saas":
    case "custom-saas":
      return (
        <div className={`relative flex items-center justify-center text-[#004275] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#004275]">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
            </svg>
          </div>
        </div>
      );

    case "ecommerce-cart":
    case "ecommerce-woo":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Green Shield */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#059669] fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Purple Lock & Shopping Cart Center */}
          <div className="absolute inset-0 flex items-center justify-center text-[#7F54B3]">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zm0 2h12l2 2.7H4L6 4zm-1 5h14v11H5V9zm4 2v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
            </svg>
          </div>
        </div>
      );

    case "api-automation":
      return (
        <div className={`relative flex items-center justify-center text-[#0284C7] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <rect width="6" height="6" x="2" y="9" rx="1.5" />
            <rect width="6" height="6" x="16" y="3" rx="1.5" />
            <rect width="6" height="6" x="16" y="15" rx="1.5" />
            <path d="M8 12h4m0 0v-6h4m-4 6v6h4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );

    case "speedometer-shield":
    case "technical-seo":
      return (
        <div className={`relative flex items-center justify-center text-[#059669] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="m12 14 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" strokeLinecap="round" />
            <circle cx="12" cy="14" r="2" fill="currentColor" />
          </svg>
          <div className="absolute bottom-0 right-0 w-3 h-3 text-[#004275]">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
        </div>
      );

    case "server-migration":
    case "migration-staging":
      return (
        <div className={`relative flex items-center justify-center text-[#D97706] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" strokeLinecap="round" />
            <path d="M12 12v9m0 0-3-3m3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "database-schema":
    case "database-arch":
      return (
        <div className={`relative flex items-center justify-center text-[#4F46E5] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
      );

    case "admin-dashboard":
    case "admin-portals":
      return (
        <div className={`relative flex items-center justify-center text-[#004275] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18M9 21V9" strokeLinecap="round" />
            <circle cx="6" cy="6" r="1" fill="currentColor" />
          </svg>
        </div>
      );

    case "shield-maintenance":
    case "maintenance-hardening":
      return (
        <div className={`relative flex items-center justify-center text-[#059669] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center text-[#004275] ${className}`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m12 8 4 4-4 4M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
  }
}

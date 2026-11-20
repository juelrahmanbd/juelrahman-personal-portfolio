import React from "react";

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-4 h-4", size = 16 }: TechIconProps) {
  switch (name) {
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="HTML5">
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.8l4.8-1.2L18.4 4.5H12z" fill="#EF652A" />
          <path d="M12 8.3H8.3l.3 3.4H12v-3.4zm0 6.6l-.1.1-2.4-.6-.2-1.8H7.3l.3 3.3 4.4 1.2v-2.2z" fill="#FFFFFF" />
          <path d="M12 8.3h3.7l-.3 3.4H12v-3.4zm0 6.6v2.2l4.4-1.2.4-5.2H12v2.2h1.9l-.2 2z" fill="#EBEBEB" />
        </svg>
      );

    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="CSS3">
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.8l4.8-1.2L18.4 4.5H12z" fill="#33A9DC" />
          <path d="M12 8.3H8.3l.3 3.4H12v-3.4zm0 6.6l-.1.1-2.4-.6-.2-1.8H7.3l.3 3.3 4.4 1.2v-2.2z" fill="#FFFFFF" />
          <path d="M12 8.3h3.7l-.3 3.4H12v-3.4zm0 6.6v2.2l4.4-1.2.4-5.2H12v2.2h1.9l-.2 2z" fill="#EBEBEB" />
        </svg>
      );

    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} aria-label="JavaScript">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 2-.6 2-2.1v-6.2H9.5v6.2c0 .7-.3 1-.8 1-.4 0-.7-.3-.9-.7L7 17.5zm7.3-.2c.6 1 1.6 1.5 2.8 1.5 1.7 0 2.8-.9 2.8-2.3 0-1.4-.9-2-2.3-2.6l-.7-.3c-.8-.3-1.2-.6-1.2-1.2 0-.6.5-1 1.3-1 .7 0 1.3.3 1.7.9l1.4-.9c-.7-1.1-1.8-1.5-3.1-1.5-1.7 0-2.8 1-2.8 2.3 0 1.3.8 2 2.2 2.6l.7.3c.9.4 1.3.7 1.3 1.3 0 .7-.6 1.1-1.5 1.1-.9 0-1.6-.4-2.1-1.2l-1.6 1.1z" fill="#000000" />
        </svg>
      );

    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} aria-label="TypeScript">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M12.5 10.5H7.5V12h1.6v6.5h1.7V12h1.7v-1.5zm3.7 3.6c.5.3.9.7.9 1.3 0 .8-.7 1.4-1.7 1.4-1 0-1.6-.5-1.9-1.2l-1.3.8c.5 1.1 1.6 1.8 3.2 1.8 2 0 3.3-1.1 3.3-2.7 0-1.3-.8-2-2.2-2.6l-.7-.3c-.8-.3-1.1-.6-1.1-1 0-.5.4-.8 1.1-.8.7 0 1.2.3 1.5.8l1.2-.8c-.5-.9-1.4-1.4-2.7-1.4-1.7 0-2.8 1-2.8 2.3 0 1.2.7 1.9 2.1 2.5l.7.3z" fill="#FFFFFF" />
        </svg>
      );

    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Next.js">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M16.5 18.2L9.2 8.7H7.8v6.6h1.4v-4.9l6.5 8.5c.3-.2.6-.4.8-.7zM15 8.7h1.4v4.5L15 11.3V8.7z" fill="#FFFFFF" />
        </svg>
      );

    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Node.js">
          <path d="M12 2l8.7 5v10L12 22 3.3 17V7L12 2z" fill="#339933" />
          <path d="M12 4.2L5.2 8.1v7.8L12 19.8l6.8-3.9V8.1L12 4.2z" fill="#5FA04E" />
          <path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#FFFFFF" />
        </svg>
      );

    case "Express.js":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Express.js">
          <rect width="24" height="24" rx="4" fill="#101820" />
          <text x="4.5" y="16.5" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="-0.5">ex</text>
        </svg>
      );

    case "PHP":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="PHP">
          <ellipse cx="12" cy="12" rx="10.5" ry="6.5" fill="#777BB4" />
          <path d="M7 14.5h1.2l.5-1.5h1.2c1.2 0 1.9-.6 2.1-1.6.2-.9-.3-1.6-1.5-1.6H7.8L7 14.5zm1.9-2.3l.3-1.1h.7c.5 0 .8.2.7.6-.1.4-.4.5-.8.5h-.9zm4.2 2.3h1.2l.5-1.5h1.2c1.2 0 1.9-.6 2.1-1.6.2-.9-.3-1.6-1.5-1.6H13.8L13 14.5zm1.9-2.3l.3-1.1h.7c.5 0 .8.2.7.6-.1.4-.4.5-.8.5h-.9z" fill="#FFFFFF" />
        </svg>
      );

    case "WordPress":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="WordPress">
          <circle cx="12" cy="12" r="11" fill="#21759B" />
          <path d="M3.2 12c0 3.8 2.4 7 5.8 8.2L5.2 9.7A8.8 8.8 0 003.2 12zm13.1-.3c0-1.4-.5-2.3-.9-3-.6-.9-1.1-1.6-1.1-2.5 0-1 .8-1.9 1.9-1.9.1 0 .2 0 .3.1A8.7 8.7 0 0012 3.3c-3.6 0-6.7 2.2-8 5.4l5.3 14.5c.2 0 .4.1.7.1.4 0 .8 0 1.2-.1L7.5 13l2.8-7.7c-.2 0-.5-.1-.7-.1V5h3.9v.2c-.3 0-.6 0-.8.1l2.5 6.9 1.4-4c-.2 0-.5-.1-.7-.1V8h3.7v.2c-.3 0-.7.1-.9.1l.4 1.4zm-4.7 3.5l-2.4 7c.9.2 1.9.3 2.8.3.9 0 1.7-.1 2.5-.3l-2.9-7zm7.2-5.5c.1.6.1 1.2.1 1.8 0 2.2-.4 4.7-1.7 8l2.9-8.4a8.7 8.7 0 00-1.3-1.4z" fill="#FFFFFF" />
        </svg>
      );

    case "Divi 5":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Divi 5">
          <rect width="24" height="24" rx="4" fill="#7E3BD0" />
          <path d="M12 4.5l5.5 3.2v6.6L12 17.5l-5.5-3.2V7.7L12 4.5z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
          <path d="M10 8.5h3c1.7 0 2.5.8 2.5 2.2s-.8 2.3-2.5 2.3h-1.5V15H10V8.5zm1.5 3.2h1.2c.8 0 1.2-.3 1.2-1s-.4-1-1.2-1h-1.2v2z" fill="#FFFFFF" />
        </svg>
      );

    case "WooCommerce":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="WooCommerce">
          <rect width="24" height="24" rx="4" fill="#96588A" />
          <path d="M5.5 7h13c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-8l-3 2.5V16h-2c-.8 0-1.5-.7-1.5-1.5v-6c0-.8.7-1.5 1.5-1.5z" fill="#7F54B3" />
          <text x="6.5" y="13.5" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="7.5" letterSpacing="-0.5">WOO</text>
        </svg>
      );

    case "Supabase":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Supabase">
          <rect width="24" height="24" rx="4" fill="#1C1C1C" />
          <path d="M13.2 3.5L5.5 14h6.3l-1 6.5 7.7-10.5h-6.3l1-6.5z" fill="#3ECF8E" />
        </svg>
      );

    case "Firebase":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Firebase">
          <path d="M4.5 18.5l1.6-10.2a.8.8 0 011.5-.2l2.3 4.3-5.4 6.1z" fill="#FFC400" />
          <path d="M12.5 4.3a.8.8 0 00-1.5.1L4.5 18.5l5.4-6.1 2.6-8.1z" fill="#FF9100" />
          <path d="M12.5 4.3a.8.8 0 00-1.5.1L4.5 18.5l14-7.8L12.5 4.3z" fill="#FFA000" />
          <path d="M19.5 18.5L4.5 18.5l14.3-8a.8.8 0 011.1.9l-.9 7.1z" fill="#F57C00" />
        </svg>
      );

    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="MongoDB">
          <path d="M12 2C11.5 3.5 7 9.8 7 14c0 3.2 2.2 5.8 5 6 2.8-.2 5-2.8 5-6 0-4.2-4.5-10.5-5-12z" fill="#47A248" />
          <path d="M12 2v18c2.8-.2 5-2.8 5-6 0-4.2-4.5-10.5-5-12z" fill="#499D4A" />
          <path d="M12 17.5v2.8c-.2 0-.4-.1-.5-.2-.7-.6-.8-1.5-.8-2.6h1.3z" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Tailwind CSS">
          <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2 4.5-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.8 2.8 6.3 2.8 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2-4.5 1.5-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.8-2.8-6.3-2.8zM6.6 12C3.6 12 1.8 13.5 1.2 16.5c1.2-1.5 2.7-2 4.5-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.8 2.8 6.3 2.8 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2-4.5 1.5-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.8-2.8-6.3-2.8z" fill="#06B6D4" />
        </svg>
      );

    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="currentColor" aria-label="GitHub">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Figma">
          <path d="M8.5 12a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE" />
          <path d="M5 15.5A3.5 3.5 0 018.5 12H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83" />
          <path d="M12 5H8.5a3.5 3.5 0 100 7H12V5z" fill="#F24E1E" />
          <path d="M12 5h3.5a3.5 3.5 0 110 7H12V5z" fill="#FF7262" />
          <path d="M12 12h3.5a3.5 3.5 0 110 7H12v-7z" fill="#A259FF" />
        </svg>
      );

    case "ChatGPT":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="ChatGPT">
          <circle cx="12" cy="12" r="11" fill="#10A37F" />
          <path d="M17.5 11.2a2.8 2.8 0 00-.3-1.6 2.8 2.8 0 00-2-1.4 2.8 2.8 0 00-2.3.2 2.8 2.8 0 00-2.2-.9 2.8 2.8 0 00-2.7 2 2.8 2.8 0 00-1.8 1.3 2.8 2.8 0 00.3 3.1 2.8 2.8 0 00.3 1.6 2.8 2.8 0 002 1.4 2.8 2.8 0 002.3-.2 2.8 2.8 0 002.2.9 2.8 2.8 0 002.7-2 2.8 2.8 0 001.8-1.3 2.8 2.8 0 00-.3-3.1zm-5.5 5.5v-2.3l2 1.2a1.4 1.4 0 01-.7.9c-.4.2-.9.3-1.3.2zm-3.6-1.9l2-1.2v2.3a1.4 1.4 0 01-1.1-.5 1.4 1.4 0 01-.9-.6zm-1-3.6l2 1.2-2 1.2a1.4 1.4 0 01-.4-1.2 1.4 1.4 0 01.4-1.2zm6.6-.7l-2 1.2-2-1.2 2-1.2 2 1.2zm-4.6-1.3v-2.3c.4 0 .9.1 1.3.2.4.2.7.5.9.9l-2.2 1.2zm3.6 1.9l-2 1.2v-2.3a1.4 1.4 0 011.1.5c.4.2.7.5.9.6zm2 3.6l-2-1.2 2-1.2a1.4 1.4 0 01.4 1.2c0 .4-.1.9-.4 1.2z" fill="#FFFFFF" />
        </svg>
      );

    case "Cursor":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Cursor">
          <rect width="24" height="24" rx="4" fill="#000000" />
          <path d="M7 6l10 5.5-4.5 1.5-2 4.5L7 6z" fill="#FFFFFF" />
        </svg>
      );

    case "Claude":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Claude">
          <rect width="24" height="24" rx="4" fill="#D97706" />
          <path d="M12 6v12M6 12h12M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "OpenAI Codex":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="OpenAI Codex">
          <rect width="24" height="24" rx="4" fill="#004275" />
          <path d="M8 8l-3 4 3 4M16 8l3 4-3 4M13.5 7l-3 10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Google Antigravity":
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" aria-label="Google Antigravity">
          <rect width="24" height="24" rx="4" fill="#004275" />
          <circle cx="12" cy="12" r="7" stroke="#4285F4" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="3" fill="#EA4335" />
          <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}

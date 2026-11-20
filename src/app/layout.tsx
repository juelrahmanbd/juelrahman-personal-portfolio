import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#6847E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
  description:
    "Explore the portfolio of Md. Juel Rahman, an AI-focused Full-Stack Developer specializing in modern websites, custom web applications, WordPress, SaaS, and AI-powered digital solutions.",
  authors: [{ name: "Md. Juel Rahman", url: "https://github.com/juelrahmanbd" }],
  creator: "Md. Juel Rahman",
  keywords: [
    "Md. Juel Rahman",
    "AI Engineer",
    "Full-Stack Developer",
    "WordPress Expert",
    "Custom Web Applications",
    "SaaS Development",
    "Next.js Developer",
    "AI Integration",
    "Bangladesh",
  ],
  openGraph: {
    title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
    description:
      "Explore the portfolio of Md. Juel Rahman, specializing in modern websites, custom web applications, WordPress, SaaS, and AI-powered solutions.",
    url: "https://juelrahman.me",
    siteName: "Md. Juel Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#FAFAFF] text-[#11152F] antialiased min-h-screen selection:bg-[#E0D8FF] selection:text-[#11152F]">
        {children}
      </body>
    </html>
  );
}

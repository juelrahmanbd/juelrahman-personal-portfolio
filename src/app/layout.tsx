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
  themeColor: "#004275",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
  description:
    "Explore the portfolio of Md. Juel Rahman, an AI Engineer & Full-Stack Developer specializing in AI-powered applications, high-performance web systems, custom software, WordPress & Divi 5, and scalable web architecture.",
  authors: [{ name: "Md. Juel Rahman", url: "https://github.com/juelrahmanbd" }],
  creator: "Md. Juel Rahman",
  keywords: [
    "Md. Juel Rahman",
    "AI Engineer",
    "Full-Stack Developer",
    "Custom Software Development",
    "Next.js Developer",
    "React Developer",
    "WordPress Expert",
    "Divi 5",
    "AI Automation",
    "SaaS Applications",
    "API Integration",
  ],
  openGraph: {
    title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
    description:
      "Explore the portfolio of Md. Juel Rahman, specializing in AI-powered applications, high-performance web systems, custom software, WordPress, and scalable web architecture.",
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
      <body className="bg-[#F5F8FB] text-[#101820] antialiased min-h-screen selection:bg-[#004275]/15 selection:text-[#101820]">
        {children}
      </body>
    </html>
  );
}

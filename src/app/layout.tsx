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
  title: "Md. Juel Rahman | Full-Stack Web Developer | AI Engineer",
  description:
    "Explore the portfolio of Md. Juel Rahman, a Full-Stack Web Developer & AI Engineer specializing in high-performance websites, custom web applications, WordPress, Divi 5, SaaS, and AI automation.",
  authors: [{ name: "Md. Juel Rahman", url: "https://github.com/juelrahmanbd" }],
  creator: "Md. Juel Rahman",
  keywords: [
    "Md. Juel Rahman",
    "Full-Stack Web Developer",
    "AI Engineer",
    "WordPress Expert",
    "Divi 5",
    "Custom Web Applications",
    "SaaS Development",
    "Next.js Developer",
    "AI Automation",
    "Bangladesh",
  ],
  openGraph: {
    title: "Md. Juel Rahman | Full-Stack Web Developer | AI Engineer",
    description:
      "Explore the portfolio of Md. Juel Rahman, specializing in high-performance websites, custom web applications, WordPress, SaaS, and AI-powered solutions.",
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

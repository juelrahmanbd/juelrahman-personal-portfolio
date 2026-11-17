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
  themeColor: "#190C2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Md Juel Rahman — AI-Focused Full-Stack Web Developer",
  description:
    "Personal portfolio and design system foundation for Md Juel Rahman. Full-Stack Web Development, WordPress & Custom Engineering, AI-Powered Solutions, and Scalable Digital Architectures.",
  authors: [{ name: "Md Juel Rahman", url: "https://github.com/juelrahmanbd" }],
  creator: "Md Juel Rahman",
  keywords: [
    "Md Juel Rahman",
    "Full-Stack Web Developer",
    "AI Solutions",
    "Next.js",
    "React",
    "WordPress Custom Development",
    "SaaS Architecture",
    "Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-primary text-palette-text-primary antialiased selection:bg-accent-primary selection:text-palette-text-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}

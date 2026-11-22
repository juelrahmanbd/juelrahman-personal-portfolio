import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#07090E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
  description:
    "Explore the portfolio of Md. Juel Rahman, an AI Engineer & Full-Stack Developer specializing in autonomous AI applications, high-performance web systems, custom software, full-spectrum WordPress, and scalable cloud architectures.",
  authors: [{ name: "Md. Juel Rahman", url: "https://github.com/juelrahmanbd" }],
  creator: "Md. Juel Rahman",
  keywords: [
    "Md. Juel Rahman",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Autonomous AI Agents",
    "TypeScript",
    "WordPress Architect",
    "WooCommerce",
    "Divi 5",
    "Elementor Pro",
    "Custom Software Architect",
  ],
  openGraph: {
    title: "Md. Juel Rahman | AI Engineer & Full-Stack Developer",
    description:
      "Explore the portfolio of Md. Juel Rahman, specializing in autonomous AI applications, high-performance web systems, custom software, and full-spectrum WordPress architecture.",
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
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#07090E] text-slate-100 antialiased min-h-screen selection:bg-blue-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}

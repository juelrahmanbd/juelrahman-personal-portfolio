import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fluxo — The all-in-one platform to scale your SaaS",
  description:
    "Build, launch, and grow your SaaS faster with powerful tools, beautiful analytics, and AI that works for you.",
  authors: [{ name: "Fluxo" }],
  openGraph: {
    title: "Fluxo — The all-in-one platform to scale your SaaS",
    description:
      "Build, launch, and grow your SaaS faster with powerful tools, beautiful analytics, and AI that works for you.",
    url: "https://juelrahman.me",
    siteName: "Fluxo",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-[#030303] text-white antialiased min-h-screen selection:bg-[#7c3aed]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

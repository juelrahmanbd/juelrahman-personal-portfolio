import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F8FB] text-[#101820] flex flex-col selection:bg-[#004275]/15 selection:text-[#101820]">
      <Navbar />
      <div className="flex-1 w-full">{children}</div>
      <Footer />
    </div>
  );
}

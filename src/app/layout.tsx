import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impulsifier Racing | High Performance Racing Team",
  description: "Experience the thrill of high-performance racing with Impulsifier Racing. Join us on the track and witness speed, precision, and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Solid Navigation Background Bar */}
        <div className="fixed top-0 left-0 right-0 h-20 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 z-[9998]" />

        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}



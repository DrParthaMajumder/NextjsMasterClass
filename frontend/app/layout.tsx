import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// 🧠 Geist for headings
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// 💬 Inter for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ⚙️ Geist Mono (optional for code / console-like UI)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GenAI App",
  description: "Built with Geist + Inter for a modern AI aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        {/* 🧭 Header */}
        <Header />

        {/* 🧠 Main Content */}
        <main className="px-6 py-10">{children}</main>

        {/* 🦶 Footer */}
        <Footer />
      </body>
    </html>
  );
}

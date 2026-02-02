import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Addis Furniture",
  description: "Modern furniture store – Addis Furniture landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
            <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
              <span className="text-lg font-semibold tracking-tight">
                Addis-Furniture
              </span>
              <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
                <a href="#collections" className="hover:text-slate-900">
                  Collections
                </a>
                <a href="#about" className="hover:text-slate-900">
                  About
                </a>
                <a href="#contact" className="hover:text-slate-900">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-slate-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} Addis Furniture. All rights reserved.</span>
              <span className="hidden sm:inline">
                Crafted with Next.js & Tailwind CSS
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

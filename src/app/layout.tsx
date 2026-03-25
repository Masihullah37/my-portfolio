

// src/app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: The ROOT LAYOUT — wraps every single page in the application.
//
// In Next.js App Router, layout.tsx:
//   - Renders ONCE and stays mounted between page navigations (no re-render)
//   - Provides the <html> and <body> tags for the whole app
//   - Is the perfect place for global providers like ClerkProvider
//
// SEO METADATA:
//   The `metadata` export controls what Google shows in search results and
//   what social platforms (LinkedIn, Twitter) show when your URL is shared.
//   UPDATE everything marked "Your Name", "yourusername", etc.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// UPDATE: Replace all "Your Name" / "yourusername" with your real information
export const metadata: Metadata = {
  title: {
    default:  "Masihullah | Full Stack Developer",
    template: "%s | Masihullah",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Laravel, and Node.js. " +
    "Building fast, scalable, AI-powered web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Laravel Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "AI Developer",
  ],
  authors:  [{ name: "Masihullah", url: "https://github.com/Masihullah37" }],
  creator:  "Masihullah",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    title:       "Your Name | Full Stack Developer",
    description: "Building fast, scalable web applications with AI integration.",
    siteName:    "Masihullah — Portfolio",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Your Name | Full Stack Developer",
    description: "Building modern web applications with AI.",
    creator:     "@Masihullah37",
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ClerkProvider wraps EVERYTHING — required for all Clerk hooks (useUser, etc.)
    // to work in any component anywhere in the app
    <ClerkProvider>
      <html lang="en">
      
        <body className="gradient-bg min-h-screen antialiased overflow-x-hidden">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
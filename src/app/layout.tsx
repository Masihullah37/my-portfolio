

// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
    title:       "Masihullah | Full Stack Developer",
    description: "Building fast, scalable web applications with AI integration.",
    siteName:    "Masihullah — Portfolio",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Masihullah | Full Stack Developer",
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
    <html lang="en">
      <body className="gradient-bg min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
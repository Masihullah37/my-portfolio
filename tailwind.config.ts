// tailwind.config.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Extends Tailwind's default configuration with our custom theme.

// FONTS REGISTERED HERE:
//   font-syne    → Syne (headings, logo, section titles)
//   font-sans    → DM Sans (overrides Tailwind's default sans — used for body text)
// ─────────────────────────────────────────────────────────────────────────────

import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  // darkMode: ["class"] — shadcn/ui uses this to toggle dark mode via className
  darkMode: "class",

  // content: tells Tailwind which files to scan for class names
  // Any class you use must appear in one of these files or Tailwind won't include it
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      // ── Custom Font Families ───────────────────────────────────────────────
      // After registering here, use as Tailwind classes: font-syne, font-sans
      // The fonts are loaded via @import in globals.css
      fontFamily: {
        syne:     ["Syne", "sans-serif"],            // className="font-syne"
        "dm-sans": ["DM Sans", "sans-serif"],        // className="font-dm-sans"
        sans:     ["DM Sans", "system-ui", "sans-serif"], // overrides default font-sans
      },

      // ── shadcn/ui required color variables ────────────────────────────────
      // These map to the CSS variables defined in globals.css :root {}
      colors: {
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // ── Border radius ────────────────────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ── Custom keyframe animations ────────────────────────────────────────
      keyframes: {
        // shadcn/ui accordion animations
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
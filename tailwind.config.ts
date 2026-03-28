// tailwind.config.ts
// ══════════════════════════════════════════════════════════════════════════════
// COPY THIS ENTIRE FILE — paste it into tailwind.config.ts replacing ALL content
// ══════════════════════════════════════════════════════════════════════════════
//
// KEY FIXES vs the broken version:
//  1. `import animate from "tailwindcss-animate"` (ESM import, not require())
//     require() fails in some setups and causes silent plugin errors
//  2. content[] paths updated — must cover src/**/*.{ts,tsx} exactly
//  3. darkMode: "class" (string, not array) — works with both shadcn approaches
//  4. fontFamily.sans overrides Tailwind default — DM Sans becomes the base font
//  5. fontFamily.syne registered — enables className="font-syne" anywhere

import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",

  // CRITICAL: These paths tell Tailwind which files to scan for class names.
  // If a file isn't covered here, ANY class used only in that file is STRIPPED
  // from the output CSS — causing "class exists in code but doesn't apply" bugs.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ── Custom fonts ────────────────────────────────────────────────────────
      // Loaded via @import in globals.css
      // Usage: className="font-syne" or className="font-sans"
      fontFamily: {
        syne:     ["Syne", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        // Overrides Tailwind's default sans — body text uses DM Sans automatically
        sans:     ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },

      // ── shadcn/ui color tokens ───────────────────────────────────────────────
      // These map to CSS variables defined in globals.css :root {}
      colors: {
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        // Extra semantic colors for convenience
        violet: {
          950: "#1a0533",
          900: "#2e0d52",
          800: "#4a1c85",
          700: "#5b21b6",
          600: "#7c3aed",
          500: "#8b5cf6",
          400: "#a78bfa",
          300: "#c4b5fd",
        },
      },

      // ── Border radius ────────────────────────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ── Custom keyframe animations ───────────────────────────────────────────
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "shimmer":        "shimmer 2s linear infinite",
        "fade-up":        "fade-up 0.5s ease-out",
      },

      // ── Backdrop blur ────────────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [animate],
};

export default config;
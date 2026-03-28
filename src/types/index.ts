

// src/types/index.ts
// Central hub for all TypeScript interfaces in this project.
// Single import path — change a type once, everywhere updates.

// ── Project ────────────────────────────────────────────────────────────────────
// Original interface — keeping this intact so existing code doesn't break.
export interface Project {
  id:              string;
  title:           string;
  description:     string;   // Short summary shown on the card
  longDescription: string;   // Full detail for expanded view
  techStack:       string[]; // e.g. ["Next.js", "TypeScript", "PostgreSQL"]
  githubUrl:       string;   // Required — always link to the repo
  liveUrl?:        string;   // Optional — add once the project is live
  imageUrl?:       string;   // Optional — screenshot path under /public
  featured:        boolean;  // Toggles the "Featured" badge on the card
  category: "frontend" | "fullstack" | "backend" | "api";
}

// ── PortfolioProject ───────────────────────────────────────────────────────────
// Richer type for the Spotify-style project cards in the new Projects section.
// Carries everything needed for both the card UI and the 3D art panel metadata.
export interface PortfolioProject {
  id:          string;
  title:       string;    // Short name shown large — e.g. "EduFlow"
  short:       string;    // One-line subtitle under the title
  pillar:      string;    // e.g. "The Complexity Pillar"
  description: string;    // 2–3 sentence body text
  tags:        string[];  // Tech tags shown as small pill badges
  type:        string;    // e.g. "Full Stack · SaaS" — shown in top-right badge
  // Visual card config — avoids duplicating colour logic inside the component
  cardColor:   string;    // Hex bg — alternates SAND / GREEN per card
  textLight:   boolean;   // true = white text (on green), false = dark text (on sand)
  accentColor: string;    // Badge text, pillar label, link colour
  // Links
  codeHref:  string;
  demoHref?: string;      // Optional — omit if not deployed yet
}

// ── Skill ──────────────────────────────────────────────────────────────────────
// One skill bar entry in the Skills section.
export interface Skill {
  name:  string; // "React.js", "Laravel", etc.
  level: number; // 0–100
  category: "frontend" | "backend" | "database" | "devops" | "tools";
}

// ── ChatMessage ────────────────────────────────────────────────────────────────
// One turn in the AI chatbot conversation.
export interface ChatMessage {
  role:    "user" | "assistant";
  content: string;
}

// ── ContactFormData ────────────────────────────────────────────────────────────
// Shape of a contact form submission used in API route types.
// Note: Contact.tsx uses local state directly to avoid shadowing the
// browser's native FormData global — this type is for the API layer only.
export interface ContactFormData {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}
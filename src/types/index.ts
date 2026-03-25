// src/types/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Central hub for all custom TypeScript interfaces in this project.

//   - Single import path across the whole project
//   - Change a type once → everywhere using it gets updated automatically


// ── Project ────────────────────────────────────────────────────────────────────
// Used in: Projects.tsx, types are auto-enforced
export interface Project {
  id:              string;
  title:           string;
  description:     string;   // Short summary shown on the card
  longDescription: string;   // Detailed description for expanded view
  techStack:       string[]; // ["Next.js", "TypeScript", "PostgreSQL"]
  githubUrl:       string;   // Required — link to  code
  liveUrl?:        string;   // Optional — add after deploying the project
  imageUrl?:       string;   // Optional — path to screenshot in /public
  featured:        boolean;  // Shows "Featured" badge on card
  // Only these exact values are valid:
  category: "frontend" | "fullstack" | "backend" | "api";
}

// ── Skill ──────────────────────────────────────────────────────────────────────
// Shape of one skill bar in the Skills section.
export interface Skill {
  name:  string; // "React.js", "Laravel", etc.
  level: number; // 0–100 .
  category: "frontend" | "backend" | "database" | "devops" | "tools";
}

// ── ChatMessage ────────────────────────────────────────────────────────────────
// One message in the AI chatbot conversation.
// "user" = the person visiting, "assistant" = Gemini AI response
export interface ChatMessage {
  role:    "user" | "assistant";
  content: string;
}

// ── ContactFormData ────────────────────────────────────────────────────────────
// Shape of a contact form submission (used in API types).
// Note: ContactFormData is NOT used in Contact.tsx directly — the form uses
// ContactFormValues (Zod inferred type) to avoid shadowing the browser global FormData.
export interface ContactFormData {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}


// src/types/index.ts
// Central hub for all TypeScript interfaces in this project.
// Single import path — change a type once, everywhere updates.

// ── Project ────────────────────────────────────────────────────────────────────

export interface Project {
  id:              string;
  title:           string;
  description:     string;   
  longDescription: string;   
  techStack:       string[]; 
  githubUrl:       string;   
  liveUrl?:        string;   
  imageUrl?:       string;   
  featured:        boolean;  
  category: "frontend" | "fullstack" | "backend" | "api";
}

// ── PortfolioProject ───────────────────────────────────────────────────────────

export interface PortfolioProject {
  id:          string;
  title:       string;    
  short:       string;    
  pillar:      string;    
  description: string;    
  tags:        string[];  
  type:        string;    
  // Visual card config — avoids duplicating colour logic inside the component
  cardColor:   string;    
  textLight:   boolean;   
  accentColor: string;    
  // Links
  codeHref:  string;
  demoHref?: string;      // Optional — omit if not deployed yet
}

// ── Skill ──────────────────────────────────────────────────────────────────────

export interface Skill {
  name:  string; // "React.js", "Laravel", etc.
  level: number; // 0–100
  category: "frontend" | "backend" | "database" | "devops" | "tools";
}

// ── ChatMessage ────────────────────────────────────────────────────────────────

export interface ChatMessage {
  role:    "user" | "assistant";
  content: string;
}

// ── ContactFormData ────────────────────────────────────────────────────────────

export interface ContactFormData {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}


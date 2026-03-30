



"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/types";

// Single source of truth for the two card colours.
const SAND = "#D4CAB2";
const GREEN = "#55816A";


const PROJECTS: PortfolioProject[] = [
  {
    id: "1",
    title: "EduFlow",
    short: "Système de gestion scolaire d’entreprise",
    pillar: "Pilier de la complexité",
    description:
      "Plateforme SaaS complète pour établissements éducatifs — RBAC pour Administrateurs / Enseignants / Étudiants, gestion automatisée des présences, analyse des notes, rapports PDF et CI/CD via GitHub Actions.",
    tags: ["Laravel", "React", "MySQL", "Shadcn UI", "GitHub Actions"],
    type: "Full Stack · SaaS",
    cardColor: GREEN,
    textLight: true,
    accentColor: SAND,
    codeHref: "https://github.com/masihullah37",
    demoHref: "#",
  },
  {
    id: "2",
    title: "Velocity",
    short: "Moteur e-commerce multi-vendeurs",
    pillar: "Pilier transactionnel",
    description:
      "Marketplace haute performance avec synchronisation d’inventaire en temps réel, recherche avancée, listes de souhaits, paiement Stripe / PayPal et portail dédié aux vendeurs. Frontend sur Vercel, base de données sur Neon PostgreSQL.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "Stripe", "Vercel"],
    type: "Full Stack · Marketplace",
    cardColor: SAND,
    textLight: false,
    accentColor: GREEN,
    codeHref: "https://github.com/masihullah37",
    demoHref: "#",
  },
  {
    id: "3",
    title: "Pulse",
    short: "Gestionnaire de tâches collaboratif en temps réel",
    pillar: "Pilier du temps réel",
    description:
      "Outil de type Trello/Jira avec tableaux Kanban en glisser-déposer, WebSockets Laravel Reverb pour mises à jour en direct, notifications en temps réel, journaux d’activité et espaces d’équipe via Supabase.",
    tags: ["React", "Laravel Reverb", "WebSockets", "Supabase", "Framer Motion"],
    type: "Full Stack · SaaS",
    cardColor: GREEN,
    textLight: true,
    accentColor: SAND,
    codeHref: "https://github.com/masihullah37",
    demoHref: "#",
  },
  {
    id: "4",
    title: "CareSync",
    short: "Portail médical de rendez-vous & dossiers patients",
    pillar: "Pilier de la sécurité",
    description:
      "Portail sécurisé patient-médecin avec dossiers médicaux chiffrés, rappels automatiques par email/SMS, gestion des disponibilités des médecins et conception conforme aux exigences HIPAA avec Shadcn UI.",
    tags: ["React", "Symfony", "MySQL", "Tailwind CSS", "Shadcn UI"],
    type: "Full Stack · Healthcare",
    cardColor: SAND,
    textLight: false,
    accentColor: GREEN,
    codeHref: "https://github.com/masihullah37",
    demoHref: "#",
  },
  {
    id: "5",
    title: "QuickBite",
    short: "Livraison de nourriture & gestion des commandes",
    pillar: "Pilier des services en temps réel",
    description:
      "Tableau de bord restaurant en direct avec notifications Socket.io « Nouvelle commande », statuts en temps réel (En attente → En préparation → En livraison) et gestion dynamique du menu avec stockage d’images Firebase.",
    tags: ["React", "Node.js", "Socket.io", "MySQL", "Firebase"],
    type: "Full Stack · Food Tech",
    cardColor: GREEN,
    textLight: true,
    accentColor: SAND,
    codeHref: "https://github.com/masihullah37",
    demoHref: "#",
  },
];

// Art Components
function ArtEduFlow() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg,#3a6350,#2d5040)", perspective: "600px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,202,178,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(212,202,178,0.07) 1px,transparent 1px)", backgroundSize: "28px 28px" }}/>
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d", width: 86, height: 86, position: "relative" }}
      >
        <div style={{ position: "absolute", width: 86, height: 86, background: "rgba(212,202,178,0.2)", border: "1.5px solid rgba(212,202,178,0.45)", transform: "rotateX(90deg) translateZ(43px)" }}>
          {[22,44,66].map(x => <div key={x} style={{ position: "absolute", left: x, top: 0, bottom: 0, width: 1, background: "rgba(212,202,178,0.35)" }}/>)}
          {[22,44,66].map(y => <div key={y} style={{ position: "absolute", top: y, left: 0, right: 0, height: 1, background: "rgba(212,202,178,0.35)" }}/>)}
        </div>
        <div style={{ position: "absolute", width: 86, height: 86, background: "rgba(212,202,178,0.16)", border: "1.5px solid rgba(212,202,178,0.42)", transform: "translateZ(43px)" }}>
          <div style={{ margin: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[1,2,3,4].map(i => <div key={i} style={{ height: 22, background: "rgba(212,202,178,0.22)", borderRadius: 3 }}/>)}
          </div>
        </div>
        <div style={{ position: "absolute", width: 86, height: 86, background: "rgba(212,202,178,0.09)", border: "1.5px solid rgba(212,202,178,0.32)", transform: "rotateY(90deg) translateZ(43px)" }}>
          {[14,32,50,68].map(y => <div key={y} style={{ position: "absolute", left: 8, right: 8, top: y, height: 5, background: "rgba(212,202,178,0.28)", borderRadius: 2 }}/>)}
        </div>
      </motion.div>
      {["Admin", "Teacher", "Student"].map((role, i) => (
        <motion.div
          key={role}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", padding: "3px 10px", borderRadius: 999, background: "rgba(212,202,178,0.16)", border: "1px solid rgba(212,202,178,0.38)", fontSize: 9, color: SAND, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, top: `${22 + i * 22}%`, left: "7%" }}
        >
          {role}
        </motion.div>
      ))}
      <motion.svg viewBox="0 0 60 36" width={68} style={{ position: "absolute", right: "6%", bottom: "20%" }}>
        <motion.polyline
          points="0,32 12,20 24,26 36,8 48,16 60,4"
          fill="none" stroke={SAND} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <circle cx="60" cy="4" r="3" fill={SAND} opacity={0.9}/>
      </motion.svg>
    </div>
  );
}

function ArtVelocity() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg,#bfb59c,#b0a68c)", perspective: "700px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "-30%", right: "-20%", width: "70%", aspectRatio: "1", borderRadius: "50%", background: "rgba(85,129,106,0.15)" }}/>
      <div aria-hidden style={{ position: "absolute", bottom: "-20%", left: "-15%", width: "55%", aspectRatio: "1", borderRadius: "50%", background: "rgba(85,129,106,0.1)" }}/>
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d", position: "relative", width: 70, height: 90 }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: "absolute", inset: 0, borderRadius: 8,
            background: i === 0 ? "rgba(85,129,106,0.38)" : i === 1 ? "rgba(85,129,106,0.22)" : "rgba(85,129,106,0.12)",
            border: "1.5px solid rgba(85,129,106,0.5)",
            transform: `rotateY(${i * 120}deg) translateZ(50px)`,
          }}>
            <div style={{ margin: "8px 8px 4px", height: 36, background: "rgba(85,129,106,0.32)", borderRadius: 4 }}/>
            <div style={{ margin: "4px 8px", height: 5, background: "rgba(85,129,106,0.48)", borderRadius: 2 }}/>
            <div style={{ margin: "4px 8px 0", height: 5, width: "60%", background: "rgba(85,129,106,0.32)", borderRadius: 2 }}/>
            <div style={{ margin: "6px 8px 0", height: 12, background: "rgba(85,129,106,0.38)", borderRadius: 3 }}/>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={{ y: [6, -4, 6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "11%", left: "8%", right: "8%", padding: "8px 12px", background: "rgba(85,129,106,0.2)", border: "1px solid rgba(85,129,106,0.44)", borderRadius: 8 }}
      >
        <div style={{ height: 5, background: "rgba(85,129,106,0.44)", borderRadius: 2, marginBottom: 5 }}/>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 22, height: 13, background: "rgba(85,129,106,0.5)", borderRadius: 3 }}/>
          <div style={{ flex: 1, height: 13, background: "rgba(85,129,106,0.24)", borderRadius: 3 }}/>
        </div>
      </motion.div>
    </div>
  );
}

function ArtPulse() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg,#3a6350,#2e5244)", perspective: "700px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,202,178,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(212,202,178,0.05) 1px,transparent 1px)", backgroundSize: "24px 24px" }}/>
      <motion.div
        animate={{ rotateX: [8, 14, 8], rotateY: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", display: "flex", gap: 10 }}
      >
        {["TODO", "DOING", "DONE"].map((label, ci) => (
          <div key={label} style={{ width: 56, transformStyle: "preserve-3d" }}>
            <div style={{ background: "rgba(212,202,178,0.07)", border: "1px solid rgba(212,202,178,0.2)", borderRadius: 8, padding: "6px 5px", transform: `translateZ(${ci * 4}px)` }}>
              <p style={{ fontSize: 6, color: SAND, fontFamily: "monospace", textAlign: "center", marginBottom: 6, opacity: 0.65 }}>{label}</p>
              {[1, 2, ci < 2 ? 3 : 0].filter(Boolean).map(ri => (
                <motion.div
                  key={ri}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, delay: ci * 0.4 + ri * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ marginBottom: 5, height: 18, background: ci === 1 && ri === 1 ? "rgba(212,202,178,0.3)" : "rgba(212,202,178,0.1)", border: ci === 1 && ri === 1 ? "1px solid rgba(212,202,178,0.55)" : "1px solid rgba(212,202,178,0.14)", borderRadius: 4 }}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      <div style={{ position: "absolute", top: "14%", right: "12%" }}>
        <motion.div
          animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0.15, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          style={{ width: 20, height: 20, borderRadius: "50%", background: "#4ade80", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", position: "relative", zIndex: 2 }}/>
      </div>
    </div>
  );
}

function ArtCareSync() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg,#c8bea6,#bdb39a)", perspective: "700px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "-25%", right: "-20%", width: "65%", aspectRatio: "1", borderRadius: "50%", background: "rgba(85,129,106,0.12)" }}/>
      <motion.div
        animate={{ rotateY: [-15, 15, -15], rotateX: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg viewBox="0 0 80 96" width={96} style={{ filter: "drop-shadow(0 10px 28px rgba(85,129,106,0.4))" }}>
          <defs>
            <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(85,129,106,0.48)"/>
              <stop offset="100%" stopColor="rgba(85,129,106,0.22)"/>
            </linearGradient>
          </defs>
          <path d="M40 4 L74 18 L74 54 C74 74 40 92 40 92 C40 92 6 74 6 54 L6 18 Z" fill="url(#sg)" stroke="rgba(85,129,106,0.75)" strokeWidth="2"/>
          <rect x="33" y="28" width="14" height="40" rx="3" fill="rgba(85,129,106,0.7)"/>
          <rect x="21" y="40" width="38" height="14" rx="3" fill="rgba(85,129,106,0.7)"/>
        </svg>
      </motion.div>
      {["Encrypted", "HIPAA", "Secure"].map((label, i) => (
        <motion.div
          key={label}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", padding: "3px 10px", borderRadius: 999, background: "rgba(85,129,106,0.18)", border: "1px solid rgba(85,129,106,0.42)", fontSize: 9, color: "#0d2015", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, top: `${20 + i * 22}%`, right: "8%" }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function ArtQuickBite() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg,#466b57,#385748)", perspective: "600px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(212,202,178,0.06) 1px,transparent 1px)", backgroundSize: "20px 20px" }}/>
      <motion.div
        animate={{ y: [-6, 6, -6], rotateX: [10, 18, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg viewBox="0 0 120 80" width={130} style={{ filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.3))" }}>
          <ellipse cx="60" cy="32" rx="52" ry="14" fill="rgba(212,202,178,0.16)" stroke="rgba(212,202,178,0.5)" strokeWidth="2"/>
          <path d="M8 32 q0 38 52 38 q52 0 52-38" fill="rgba(212,202,178,0.1)" stroke="rgba(212,202,178,0.45)" strokeWidth="2"/>
          {[38, 60, 82].map((x, i) => (
            <motion.path
              key={i}
              d={`M${x} 22 q5-10 0-19 q-5-10 0-19`}
              fill="none" stroke="rgba(212,202,178,0.4)" strokeWidth="1.5" strokeLinecap="round"
              animate={{ opacity: [0.35, 0.85, 0.35], y: [0, -3, 0] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.div>
      <motion.div
        animate={{ x: [24, 0, 0, 24], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
        style={{ position: "absolute", top: "13%", right: "5%", padding: "7px 12px", background: "rgba(212,202,178,0.14)", border: "1px solid rgba(212,202,178,0.34)", borderRadius: 8, minWidth: 105 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80" }}/>
          <span style={{ fontSize: 8, color: SAND, fontFamily: "monospace", fontWeight: 700 }}>NEW ORDER</span>
        </div>
        <div style={{ height: 4, background: "rgba(212,202,178,0.2)", borderRadius: 2, marginBottom: 3 }}/>
        <div style={{ height: 4, width: "65%", background: "rgba(212,202,178,0.14)", borderRadius: 2 }}/>
      </motion.div>
      {["PENDING", "COOKING", "DELIVERY"].map((s, i) => (
        <motion.div
          key={s}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
          style={{ position: "absolute", bottom: `${13 + i * 16}%`, left: "7%", padding: "3px 9px", borderRadius: 999, fontSize: 7.5, fontFamily: "monospace", fontWeight: 700, color: i === 0 ? SAND : "rgba(212,202,178,0.45)", background: i === 0 ? "rgba(212,202,178,0.2)" : "transparent", border: `1px solid ${i === 0 ? "rgba(212,202,178,0.4)" : "rgba(212,202,178,0.15)"}` }}
        >
          {s}
        </motion.div>
      ))}
    </div>
  );
}

const ART_MAP: Record<string, React.ReactNode> = {
  "1": <ArtEduFlow />,
  "2": <ArtVelocity />,
  "3": <ArtPulse />,
  "4": <ArtCareSync />,
  "5": <ArtQuickBite />,
};

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const titleColor = project.textLight ? "#f0fdf4" : "#1a1209";
  const bodyColor  = project.textLight ? "rgba(240,253,244,0.7)" : "rgba(40,28,12,0.78)";
  const tagBg      = project.textLight ? "rgba(212,202,178,0.14)" : "rgba(85,129,106,0.14)";
  const tagText    = project.accentColor;
  const btnBorder  = project.textLight ? "rgba(212,202,178,0.35)" : "rgba(85,129,106,0.4)";
  const btnText    = project.textLight ? SAND : "#1a3d2a";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        background: project.cardColor,
        border: `1px solid ${project.textLight ? "rgba(212,202,178,0.18)" : "rgba(85,129,106,0.22)"}`,
        display: "flex",
        flexDirection: "column",
        boxShadow: project.textLight
          ? "0 4px 32px rgba(55,90,70,0.25)"
          : "0 4px 32px rgba(180,165,135,0.2)",
        cursor: "default",
      }}
    >
      <div style={{ position: "relative", height: 185, overflow: "hidden", flexShrink: 0 }}>
        {ART_MAP[project.id]}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 55%, ${project.cardColor} 100%)` }}/>
        <div style={{ position: "absolute", top: "0.85rem", right: "0.85rem", padding: "0.25rem 0.75rem", borderRadius: 999, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", fontSize: "clamp(0.6rem, 2vw, 0.64rem)", fontWeight: 600, letterSpacing: "0.05em", color: project.accentColor, fontFamily: "'DM Sans',sans-serif", border: `1px solid ${project.accentColor}44` }}>
          {project.type}
        </div>
        <div style={{ position: "absolute", top: "0.85rem", left: "0.85rem", width: "clamp(1.6rem, 5vw, 1.85rem)", height: "clamp(1.6rem, 5vw, 1.85rem)", borderRadius: "50%", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(0.6rem, 2vw, 0.67rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: project.accentColor, border: `1px solid ${project.accentColor}44` }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div style={{ padding: "clamp(1rem, 4vw, 1.2rem) clamp(1rem, 4vw, 1.5rem) clamp(1.2rem, 5vw, 1.5rem)", display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1 }}>
        <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.66rem)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: tagText, fontFamily: "'DM Sans',sans-serif", opacity: 0.8 }}>
          {project.pillar}
        </p>
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 4vw, 1.18rem)", color: titleColor, lineHeight: 1.15, marginBottom: "0.18rem" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.77rem)", color: bodyColor, fontFamily: "'DM Sans',sans-serif" }}>
            {project.short}
          </p>
        </div>
        <p style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.82rem)", color: bodyColor, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.65, flex: 1 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: "clamp(0.6rem, 2vw, 0.66rem)", padding: "0.22rem 0.62rem", borderRadius: 999, background: tagBg, border: `1px solid ${tagText}33`, color: tagText, fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.7rem", marginTop: "0.15rem", flexWrap: "wrap" }}>
          <a
            href={project.codeHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.58rem 1rem", borderRadius: "0.65rem", border: `1px solid ${btnBorder}`, color: btnText, fontSize: "clamp(0.7rem, 2.5vw, 0.77rem)", fontWeight: 600, fontFamily: "'DM Sans',sans-serif", textDecoration: "none", background: "rgba(0,0,0,0.1)", transition: "background 0.18s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.1)"; }}
          >
            <Github size={13}/> Code
          </a>
          {project.demoHref ? (
            <a
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.58rem 1rem", borderRadius: "0.65rem", background: project.textLight ? "rgba(212,202,178,0.22)" : "rgba(85,129,106,0.22)", border: `1px solid ${btnBorder}`, color: titleColor, fontSize: "clamp(0.7rem, 2.5vw, 0.77rem)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif", textDecoration: "none", transition: "background 0.18s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = project.textLight ? "rgba(212,202,178,0.36)" : "rgba(85,129,106,0.36)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = project.textLight ? "rgba(212,202,178,0.22)" : "rgba(85,129,106,0.22)"; }}
            >
              <ExternalLink size={13}/> Live Demo
            </a>
          ) : (
            <span style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.58rem 1rem", borderRadius: "0.65rem", background: "rgba(0,0,0,0.08)", color: bodyColor, fontSize: "clamp(0.7rem, 2.5vw, 0.77rem)", fontFamily: "'DM Sans',sans-serif" }}>
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ 
        position: "relative", 
        padding: "clamp(3rem, 10vh, 6rem) 1rem", 
        overflow: "hidden", 
        background: "linear-gradient(170deg,#071209 0%,#0a1a0c 50%,#071209 100%)" 
      }}
    >
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 50% 20%,rgba(85,129,106,0.07) 0%,transparent 60%)" }}/>

      <div style={{ position: "relative", maxWidth: "80rem", margin: "0 auto", padding: "0 0.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vh, 3.5rem)" }}
        >
          <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.7rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4ade80", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, marginBottom: "0.75rem" }}>
            Ce que j&apos;ai réalisé
          </p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 6vw, 3.25rem)", lineHeight: 1.1, color: "#f0fdf4" }}>
            Projets{" "}
            <span style={{ background: `linear-gradient(135deg,${SAND} 0%,${GREEN} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            mis en avant
            </span>
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#4d7a54", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", padding: "0 0.5rem" }}>
            5 projets à fort impact d&apos;émontrant des systèmes complexes, du temps réel et l’automatisation du déploiement
          </p>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "1.25rem", 
          marginBottom: "1.25rem" 
        }}>
          {PROJECTS.slice(0, 3).map((p, i) => <ProjectCard key={p.id} project={p} index={i}/>)}
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "1.25rem"
        }}>
          {PROJECTS.slice(3).map((p, i) => <ProjectCard key={p.id} project={p} index={i + 3}/>)}
        </div>
      </div>
    </section>
  );
}

//fini//
// // // src/components/sections/Skills.tsx

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const CATEGORIES = [
  {
    num: "01",
    label: "FRONTEND",
    accent: "#2dd4bf",
    bg: "linear-gradient(160deg, #0d3d35 0%, #0a2e28 100%)",
    imgBg: "linear-gradient(135deg, #134e45 0%, #0f3d35 100%)",
    symbol: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#2dd4bf" strokeWidth="2" fill="rgba(45,212,191,0.07)" />
        <polyline points="14,20 8,24 14,28" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="34,20 40,24 34,28" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="16" x2="27" y2="32" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "React.js / Next.js 16" },
      { name: "TypeScript / JS" },
      { name: "Shadcn UI " },
      { name: "Tailwind " },
      
    ],
  },
  {
    num: "02",
    label: "BACKEND",
    accent: "#34d399",
    bg: "linear-gradient(160deg, #0c3a2e 0%, #092b22 100%)",
    imgBg: "linear-gradient(135deg, #115e47 0%, #0c4535 100%)",
    symbol: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="10" rx="2" stroke="#34d399" strokeWidth="2" fill="rgba(52,211,153,0.07)" />
        <rect x="8" y="22" width="32" height="10" rx="2" stroke="#34d399" strokeWidth="2" fill="rgba(52,211,153,0.07)" />
        <circle cx="36" cy="13" r="2.5" fill="#34d399" />
        <circle cx="36" cy="27" r="2.5" fill="#34d399" />
        <line x1="14" y1="13" x2="28" y2="13" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="27" x2="28" y2="27" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "Laravel / Symfony" },
      { name: "Node.js / Express" },
      
      { name: "REST APIs" },
      { name: "JWT Auth / OAuth" },
    ],
  },
  {
    num: "03",
    label: "DATABASE",
    accent: "#4ade80",
    bg: "linear-gradient(160deg, #0a3828 0%, #072a1d 100%)",
    imgBg: "linear-gradient(135deg, #0f5738 0%, #0a4029 100%)",
    symbol: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="14" rx="16" ry="6" stroke="#4ade80" strokeWidth="2" fill="rgba(74,222,128,0.07)" />
        <path d="M8 14 v10 c0 3.3 7.2 6 16 6s16-2.7 16-6 V14" stroke="#4ade80" strokeWidth="2" fill="none" />
        <path d="M8 24 v10 c0 3.3 7.2 6 16 6s16-2.7 16-6 V24" stroke="#4ade80" strokeWidth="2" fill="none" />
      </svg>
    ),
    skills: [
      { name: "Neon / PostgreSQL" },
      { name: "Supabase / Firebase" },
      { name: "MongoDB / MySQL" },
      { name: "Prisma / Drizzle" },
    ],
  },
  {
    num: "04",
    label: "DEVOPS & TOOLS",
    accent: "#86efac",
    bg: "linear-gradient(160deg, #093328 0%, #062419 100%)",
    imgBg: "linear-gradient(135deg, #0d4d38 0%, #093829 100%)",
    symbol: (
      <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="7" stroke="#86efac" strokeWidth="2" fill="rgba(134,239,172,0.07)" />
        <path d="M24 8 v5M24 35 v5M8 24 h5M35 24 h5" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.4 13.4 l3.5 3.5M31.1 31.1 l3.5 3.5M13.4 34.6 l3.5-3.5M31.1 16.9 l3.5-3.5" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "GitLab / GitHub" },
      { name: "Hostinger / Vercel" },
      { name: "CI / CD Pipelines" },
      { name: "Docker " },
      { name: "Postman / Figma" },
    ],
  },
];

const HIGHLIGHT_SKILLS = [
  { name: "React / Next.js", level: 90 },
  { name: "PHP / Laravel / symfony", level: 85 },
  { name: "SQL / NoSQL", level: 82 },
  { name: "Node.js / APIs", level: 78 },
  { name: "DevOps ", level: 75 },
];

function SkillBarRow({
  name, level, index, accent = "#2dd4bf",
}: { name: string; level: number; index: number; accent?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
        <span style={{ fontSize: "0.82rem", color: "#a7d9b8", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "0.75rem", color: accent, fontFamily: "monospace", fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ position: "relative", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "visible" }}>
        <motion.div
          style={{ position: "absolute", left: 0, top: 0, height: "100%", borderRadius: "999px", background: `linear-gradient(90deg, ${accent}66 0%, ${accent} 100%)` }}
          initial={{ width: "0%" }}
          animate={{ width: inView ? `${level}%` : "0%" }}
          transition={{ duration: 1.3, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          style={{ position: "absolute", top: "50%", width: "14px", height: "14px", borderRadius: "50%", background: accent, border: "2px solid #071209", boxShadow: `0 0 8px ${accent}`, transform: "translateY(-50%)", zIndex: 2 }}
          initial={{ left: "0%" }}
          animate={{ left: inView ? `calc(${level}% - 7px)` : "0%" }}
          transition={{ duration: 1.3, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        overflow: "hidden",
        background: "linear-gradient(175deg, #071209 0%, #061a10 50%, #050e08 100%)",
      }}
    >
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 50% 30%, rgba(34,197,94,0.05) 0%, transparent 60%)" }} />

      <div style={{ position: "relative", maxWidth: "76rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p style={{
            fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#4ade80", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: "0.75rem",
          }}>
            Expertise & Stack Technologique
          </p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1,
            color: "#f0fdf4",
          }}>
            Expertise{" "}
            <span style={{
              background: "linear-gradient(135deg, #4ade80 0%, #34d399 60%, #2dd4bf 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Technique</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          marginBottom: "1.25rem",
        }}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                background: cat.bg,
                border: `1px solid ${cat.accent}22`,
                display: "flex",
                flexDirection: "column",
                cursor: "default",
                transition: "transform 0.25s",
              }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px ${cat.accent}18` }}
            >
              <div style={{
                padding: "1.5rem 1.5rem 1rem",
                background: cat.imgBg,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                borderBottom: `1px solid ${cat.accent}18`,
              }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#f0fdf4", lineHeight: 1 }}>
                  {cat.num}
                </span>
                <div style={{ opacity: 0.9 }}>{cat.symbol}</div>
              </div>

              <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", color: cat.accent }}>
                  {cat.label}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.45rem", listStyle: "none", margin: 0, padding: 0 }}>
                  {cat.skills.map((s) => (
                    <li key={s.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#a7d9b8", fontFamily: "'DM Sans', sans-serif" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: cat.accent }} />
                      {s.name}
                    </li>
                  ))}
                </ul>
                {/* REMOVED: Read more link / +skills count */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            padding: "2.5rem",
            borderRadius: "1rem",
            background: "linear-gradient(135deg, rgba(10,40,20,0.7) 0%, rgba(6,22,12,0.85) 100%)",
            border: "1px solid rgba(45,212,191,0.12)",
          }}
        >
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4ade80", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: "0.75rem" }}>
              La Méthodologie
            </p>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.2, color: "#f0fdf4", marginBottom: "1.25rem" }}>
              {/* Skills &amp; Passion<br />Driving Results */}
              Compétences &amp; Passion<br />au service des résultats
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#a7d9b8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75, maxWidth: "28rem", opacity: 0.8 }}>
              {/* I combine modern frameworks with cloud-native architectures to build high-performance 
              applications. My process focuses on scalability, clean UI/UX, and robust data management. */}

              J&apos;associe des frameworks modernes à des architectures cloud-native pour créer des applications hautement performantes. Mon approche se concentre sur la scalabilité, une UI/UX propre et une gestion robuste des données.
            </p>
          </div>

          <div>
            {HIGHLIGHT_SKILLS.map((s, i) => (
              <SkillBarRow
                key={s.name}
                name={s.name}
                level={s.level}
                index={i}
                accent={i % 2 === 0 ? "#2dd4bf" : "#4ade80"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




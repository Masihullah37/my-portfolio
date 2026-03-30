
"use client";

// src/components/sections/About.tsx
// Section "À propos" — on veut que le recruteur comprenne en 10 secondes
// qui je suis, ce que j'ai fait, et pourquoi il devrait m'appeler.

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin, Code2, Briefcase, GraduationCap, Coffee,
  Github, Linkedin, Mail, Sparkles, ChevronRight, Calendar, Building2,
} from "lucide-react";

const STATS = [
  { icon: Code2,         value: "15+", label: "Technologies" },
  { icon: Briefcase,     value: "10+", label: "Projets"      },
  { icon: GraduationCap, value: "Bac+2", label: "Formation"  },
  { icon: Coffee,        value: "∞",   label: "Café"         },
];

// Ce que je cherche — formulé pour résonner avec les RH
const LOOKING_FOR = [
  "Poste Développeur Full Stack / Front-end",
  "Équipes qui valorisent la progression et la transmission",
  "Opportunités à distance, hybride ou sur site",
  "Projets à fort impact avec de vrais utilisateurs",
];

const SOCIALS = [
  { icon: Github,   href: "https://github.com/Masihullah37",    label: "GitHub"   },
  { icon: Linkedin, href: "https://linkedin.com/in/masihullah", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:masihullah37@gmail.com",      label: "Email"    },
];

// Expérience professionnelle — je formate ça comme un mini-CV visuel
const EXPERIENCES = [
  {
    role: "Développeur Web — Stagiaire",
    company: "ICV Informatique, Joué-lès-Tours",
    period: "2024 – 2025",
    color: "#4ade80",
    items: [
      "Développement d'un site e-commerce complet (catalogue, panier, paiement)",
      "Création d'un site vitrine pour une entreprise de services IA",
      "Développement et intégration d'un chatbot IA conversationnel",
      "Réalisation de portfolios professionnels sur mesure",
      "Stack : React, Laravel, MySQL, Tailwind CSS, API REST",
    ],
  },
];

// Formation — diplôme Bac+2 reconnu par l'État
const EDUCATION = [
  {
    degree: "Développeur Web & Web Mobile (Bac+2)",
    school: "AFPA Paris",
    period: "Mai 2024 – Avril 2025",
    color: "#d4a96a",
    items: [
  "Développement front-end : HTML5, CSS3, JavaScript, React,Typecript,Next",
  "Développement back-end : PHP (Laravel),Symfony, Node.js (Express)",
  "Bases de données : SQL (MySQL, PostgreSQL) et NoSQL (MongoDB)",
  "Conception et intégration d’API REST",
  "CI/CD & DevOps : GitHub Actions, GitLab CI/CD",
  "Méthodologies Agile et bonnes pratiques de développement",
    ],
  },
];

function LeafDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M60 190 C20 150, 5 100, 10 50 C15 10, 50 0, 60 0 C70 0, 105 10, 110 50 C115 100, 100 150, 60 190Z" fill="currentColor" opacity="0.18" />
      <line x1="60" y1="190" x2="60" y2="10"  stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="60" y1="80"  x2="30" y2="55"  stroke="currentColor" strokeWidth="1"   opacity="0.2" />
      <line x1="60" y1="100" x2="90" y2="75"  stroke="currentColor" strokeWidth="1"   opacity="0.2" />
      <line x1="60" y1="120" x2="28" y2="100" stroke="currentColor" strokeWidth="1"   opacity="0.2" />
      <line x1="60" y1="140" x2="92" y2="118" stroke="currentColor" strokeWidth="1"   opacity="0.2" />
    </svg>
  );
}

function FloatingLaptop() {
  return (
    <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 0" }}>
      <div style={{ position: "absolute", width: "clamp(10rem, 30vw, 14rem)", height: "clamp(10rem, 30vw, 14rem)", borderRadius: "50%", background: "rgba(74,222,128,0.12)", filter: "blur(40px)" }} />
      <div style={{ animation: "laptopFloat 4s ease-in-out infinite", position: "relative" }}>
        <svg viewBox="0 0 300 200" width="clamp(180px, 40vw, 260px)" height="clamp(120px, 27vw, 173px)" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sgG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1a0c" />
              <stop offset="100%" stopColor="#0b1f10" />
            </linearGradient>
          </defs>
          <rect x="25" y="6"   width="250" height="148" rx="9"  fill="#1a2e1a" stroke="#2d5a2d" strokeWidth="1.2" />
          <rect x="34" y="15"  width="232" height="128" rx="5"  fill="url(#sgG)" stroke="#1e3d1e" strokeWidth="0.8" />
          <rect x="39" y="20"  width="222" height="116" rx="3"  fill="#071209" />
          <text x="44" y="38" fontFamily="monospace" fontSize="7" fill="#6ee7b7">const développeur = &#123;</text>
          <text x="48" y="48" fontFamily="monospace" fontSize="7" fill="#a7f3d0">  nom: &quot;Masihullah&quot;,</text>
          <text x="48" y="58" fontFamily="monospace" fontSize="7" fill="#86efac">  rôle: &quot;Full Stack&quot;,</text>
          <text x="48" y="68" fontFamily="monospace" fontSize="7" fill="#bbf7d0">  passion: true,</text>
          <text x="44" y="78" fontFamily="monospace" fontSize="7" fill="#6ee7b7">&#125;;</text>
          <rect x="44" y="86" width="4" height="8" rx="1" fill="#34d399">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
          <rect x="16"  y="156" width="268" height="26" rx="5"   fill="#111f11" stroke="#2d4a2d" strokeWidth="1" />
          <rect x="100" y="160" width="100" height="18" rx="2.5" fill="#172017" stroke="#2d4a2d" strokeWidth="0.6" />
          <ellipse cx="150" cy="188" rx="110" ry="8" fill="#16a34a" opacity="0.15" />
        </svg>
      </div>
    </div>
  );
}

// Composant réutilisable pour une carte d'expérience ou de formation
function TimelineCard({
  color, title, sub, period, items, delay, icon: Icon,
}: {
  color: string; title: string; sub: string; period: string;
  items: string[]; delay: number; icon: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{
        padding: "1.5rem", borderRadius: "1rem",
        background: "linear-gradient(135deg, rgba(14,35,18,0.85), rgba(8,22,10,0.9))",
        border: `1px solid ${color}22`,
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Accent coloré sur la gauche — comme un ruban de CV */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: `linear-gradient(to bottom, ${color}, ${color}44)`, borderRadius: "3px 0 0 3px" }} />

      <div style={{ paddingLeft: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <Icon style={{ width: "0.875rem", height: "0.875rem", color, flexShrink: 0 }} />
              <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#f0fdf4" }}>
                {title}
              </h4>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#6b9e6b", fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", padding: "0.25rem 0.75rem", borderRadius: "999px", background: `${color}15`, border: `1px solid ${color}33`, flexShrink: 0 }}>
            <Calendar style={{ width: "0.7rem", height: "0.7rem", color }} />
            <span style={{ fontSize: "0.7rem", color, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{period}</span>
          </div>
        </div>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#a7c4a7", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.55 }}>
              <ChevronRight style={{ width: "0.75rem", height: "0.75rem", color, flexShrink: 0, marginTop: "0.2rem" }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ position: "relative", padding: "clamp(3rem, 10vh, 6rem) 1rem", overflow: "hidden", background: "linear-gradient(160deg, #071009 0%, #0a1a0c 40%, #0d1f10 70%, #071209 100%)" }}
    >
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 15% 20%, rgba(34,197,94,0.07) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(120,113,80,0.06) 0%, transparent 45%)" }} />

      {/* Feuilles décoratives */}
      <div aria-hidden style={{ position: "absolute", top: "-2rem", right: "-1rem", width: "clamp(7rem, 15vw, 11rem)", height: "clamp(11rem, 20vw, 17rem)", color: "#16a34a", transform: "rotate(25deg)", opacity: 0.5, pointerEvents: "none" }}>
        <LeafDecor className="w-full h-full" />
      </div>
      <div aria-hidden style={{ position: "absolute", bottom: "-1rem", left: "-1.5rem", width: "10rem", height: "16rem", color: "#92400e", transform: "rotate(-20deg)", opacity: 0.35, pointerEvents: "none" }}>
        <LeafDecor className="w-full h-full" />
      </div>

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 0.5rem" }}>

        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vh, 3.5rem)" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.8rem", borderRadius: "999px", marginBottom: "1rem", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <Sparkles style={{ width: "0.75rem", height: "0.75rem", color: "#4ade80" }} />
            <span style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)", fontWeight: 500, color: "#4ade80", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>
              À Propos
            </span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 6vw, 3.75rem)", lineHeight: 1.1, marginBottom: "0.5rem", background: "linear-gradient(135deg, #f0fdf4 0%, #86efac 50%, #d9f99d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Qui Suis-Je
          </h2>
          <p style={{ color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}>
            Développeur passionné par la création d&apos;expériences digitales remarquables
          </p>
        </motion.div>

        {/* Carte principale : bio + laptop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", padding: "clamp(1.5rem, 4vw, 2.5rem)", borderRadius: "1.5rem", marginBottom: "1.25rem", background: "linear-gradient(135deg, rgba(20,40,20,0.85) 0%, rgba(28,48,20,0.75) 100%)", border: "1px solid rgba(34,197,94,0.15)", backdropFilter: "blur(12px)", position: "relative", overflow: "hidden" }}
        >
          <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "clamp(10rem, 30vw, 16rem)", height: "clamp(10rem, 30vw, 16rem)", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <MapPin style={{ width: "0.875rem", height: "0.875rem", color: "#4ade80", flexShrink: 0 }} />
              <span style={{ color: "#6b9e6b", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}>Tours, France</span>
            </div>
            <p style={{ color: "#d1fae5", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", marginBottom: "1rem" }}>
              Je suis{" "}
              <span style={{ color: "#4ade80", fontWeight: 600 }}>Développeur Full Stack</span>
              {" "}— je transforme des idées en applications web fonctionnelles et esthétiques. Ma passion pour le code est née de la curiosité et s&apos;est transformée en véritable métier.
            </p>
            <p style={{ color: "#6b9e6b", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", marginBottom: "1rem" }}>
              Au cours des 20 derniers mois, j&apos;ai conçu 10+ projets avec React, Next.js, TypeScript et Laravel.
              J&apos;apprécie tout le processus : de la conception à la mise en production.
            </p>
            <blockquote style={{ borderLeft: "3px solid rgba(74,222,128,0.45)", paddingLeft: "1rem", paddingTop: "0.25rem", paddingBottom: "0.25rem", color: "#6b9e6b", fontStyle: "italic", fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
              &ldquo;Un bon code se lit comme une bonne prose — clair, maintenable, et source de fierté.&rdquo;
            </blockquote>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: "clamp(2rem, 8vw, 2.5rem)", height: "clamp(2rem, 8vw, 2.5rem)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.625rem", background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", color: "#6b9e6b", transition: "all 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(74,222,128,0.5)"; el.style.color = "#4ade80"; el.style.background = "rgba(34,197,94,0.12)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,197,94,0.2)"; el.style.color = "#6b9e6b"; el.style.background = "rgba(34,197,94,0.07)"; }}
                >
                  <s.icon style={{ width: "0.875rem", height: "0.875rem" }} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: "1rem", overflow: "hidden", background: "rgba(7,18,9,0.6)", border: "1px solid rgba(34,197,94,0.1)", width: "100%", maxWidth: "300px", margin: "0 auto" }}>
            <FloatingLaptop />
          </div>
        </motion.div>

        {/* Statistiques */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem 0.5rem", borderRadius: "1rem", textAlign: "center", background: i % 2 === 0 ? "linear-gradient(135deg, rgba(20,50,25,0.8), rgba(15,35,18,0.9))" : "linear-gradient(135deg, rgba(42,32,14,0.85), rgba(28,22,10,0.9))", border: `1px solid ${i % 2 === 0 ? "rgba(34,197,94,0.18)" : "rgba(120,100,50,0.22)"}` }}
            >
              <stat.icon style={{ width: "1rem", height: "1rem", color: i % 2 === 0 ? "#4ade80" : "#d4a96a" }} />
              <p style={{ fontSize: "clamp(1.1rem, 5vw, 1.5rem)", fontWeight: 800, lineHeight: 1, color: i % 2 === 0 ? "#d1fae5" : "#fde68a", fontFamily: "'Syne', sans-serif" }}>{stat.value}</p>
              <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.7rem)", letterSpacing: "0.06em", color: i % 2 === 0 ? "#4d7a54" : "#a08050", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Expérience professionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: "1.25rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Briefcase style={{ width: "1rem", height: "1rem", color: "#4ade80" }} />
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0fdf4" }}>
              Expérience Professionnelle
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EXPERIENCES.map((exp, i) => (
              <TimelineCard
                key={i}
                icon={Building2}
                color={exp.color}
                title={exp.role}
                sub={exp.company}
                period={exp.period}
                items={exp.items}
                delay={0.35 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginBottom: "1.25rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <GraduationCap style={{ width: "1rem", height: "1rem", color: "#d4a96a" }} />
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0fdf4" }}>
              Formation
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EDUCATION.map((edu, i) => (
              <TimelineCard
                key={i}
                icon={GraduationCap}
                color={edu.color}
                title={edu.degree}
                sub={edu.school}
                period={edu.period}
                items={edu.items}
                delay={0.5 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Carte du bas : recherche + disponibilité */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ padding: "clamp(1rem, 4vw, 1.75rem)", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(36,28,10,0.85), rgba(46,36,12,0.75))", border: "1px solid rgba(120,100,50,0.2)" }}
          >
            <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#d4a96a", marginBottom: "1rem", fontFamily: "'DM Sans', sans-serif" }}>
              Je Recherche
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {LOOKING_FOR.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", color: "#c4a96a", fontFamily: "'DM Sans', sans-serif" }}>
                  <ChevronRight style={{ width: "0.75rem", height: "0.75rem", color: "#d4a96a", flexShrink: 0, marginTop: "0.15rem" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.62 }}
            style={{ padding: "clamp(1rem, 4vw, 1.75rem)", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(20,50,22,0.7), rgba(14,35,16,0.8))", border: "1px solid rgba(34,197,94,0.2)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ position: "relative", display: "inline-flex", width: "0.65rem", height: "0.65rem", flexShrink: 0 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", opacity: 0.7, animation: "pulse-ring 1.5s ease-out infinite" }} />
                <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", width: "0.65rem", height: "0.65rem", background: "#4ade80" }} />
              </span>
              <div>
                <p style={{ fontSize: "clamp(0.9rem, 3vw, 1rem)", fontWeight: 600, color: "#4ade80", fontFamily: "'Syne', sans-serif" }}>Ouvert aux Opportunités</p>
                <p style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)", color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", marginTop: "0.15rem" }}>CDI · Freelance · Télétravail</p>
              </div>
            </div>
            <p style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.875rem)", color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
              Prêt à donner vie à vos idées avec un code propre, des technologies modernes et un état d&apos;esprit orienté croissance.
              Construisons quelque chose d&apos;exceptionnel ensemble.
            </p>
          </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes laptopFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.33); opacity: 1; }
          80%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
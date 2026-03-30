

"use client"; // src/components/sections/Hero.tsx
// Section d'accueil — première impression, chaque mot compte.
// L'animation FlipWord alterne entre mon prénom et mon titre professionnel.

import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Github, Mail, Sparkles } from "lucide-react";

const TECH_BADGES = [
  "TypeScript",
  "React.js",
  "Next.js 14",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "MySQL",
  "MongoDB",
  "Drizzle ORM",
  "Tailwind CSS",
  "Clerk Auth",
  "Gemini AI",
  "REST APIs",
  "GitHub Actions",
  "Vercel",
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/masihullah37", label: "GitHub", isExternal: true },
  { icon: Mail, href: "mailto:digitalmail372@gmail.com", label: "Email", isExternal: false },
];

const FLIP_WORDS = ["Masihullah", "Développeur Full Stack"];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.2
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FlipWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(p => (p + 1) % FLIP_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ 
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      maxWidth: "100%"
    }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={FLIP_WORDS[index]}
          initial={{ rotateX: -90, opacity: 0, y: 12 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: "easeInOut" }}
          style={{
            display: "inline-block",
            transformOrigin: "center bottom",
            background: "linear-gradient(135deg, #86efac 0%, #4ade80 40%, #34d399 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: FLIP_WORDS[index] === "Développeur Full Stack" 
              ? "clamp(1rem, 4.5vw, 2rem)" 
              : "clamp(1.5rem, 6vw, 3rem)",
            whiteSpace: "nowrap",
            letterSpacing: FLIP_WORDS[index] === "Développeur Full Stack" ? "-0.03em" : "normal",
            // Forcer le texte à rester dans le conteneur
            maxWidth: "100%",
            overflow: "visible"
          }}
        >
          {FLIP_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "clamp(60px, 15vh, 80px)",
        paddingBottom: "clamp(2rem, 8vh, 4rem)"
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden>
        <div style={{
          position: "absolute",
          top: "-8rem",
          left: "-6rem",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,101,52,0.18) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-8rem",
          right: "-6rem",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,83,45,0.14) 0%, transparent 70%)",
          animation: "float 14s ease-in-out infinite reverse"
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }} />
      </div>
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "0 1rem",
        textAlign: "center"
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "clamp(1rem, 5vw, 2rem)"
            }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              background: "rgba(7,18,9,0.8)",
              border: "1px solid rgba(34,197,94,0.3)",
              backdropFilter: "blur(20px)",
              color: "#86efac",
              fontSize: "clamp(0.7rem, 3vw, 0.875rem)",
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif"
            }}>
              <span style={{ position: "relative", display: "flex", width: "8px", height: "8px", flexShrink: 0 }}>
                <span style={{
                  position: "absolute",
                  display: "inline-flex",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#4ade80",
                  opacity: 0.75,
                  animation: "pulse-ring 1.5s ease-out infinite"
                }} />
                <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", width: "8px", height: "8px", background: "#4ade80" }} />
              </span>
              <Sparkles size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
              <span>Disponible pour de nouvelles opportunités</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              color: "#f0fdf4",
              perspective: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              maxWidth: "100%",
              width: "100%"
            }}
          >
            <span style={{ 
              fontSize: "clamp(1.2rem, 5vw, 2rem)",
              whiteSpace: "nowrap"
            }}>
              Bonjour, je suis
            </span>
            <div style={{
              fontSize: "clamp(1.5rem, 6vw, 3rem)",
              maxWidth: "100%",
              overflow: "visible",
              padding: "0 0.5rem"
            }}>
              <FlipWord />
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.85rem, 3vw, 1.4rem)",
              color: "#4d7a54",
              marginBottom: "1rem",
              fontWeight: 300,
              fontFamily: "'DM Sans', sans-serif",
              padding: "0 0.5rem"
            }}
          >
            Développeur Full Stack &nbsp;·&nbsp;{" "}
            <span style={{ color: "#4ade80", display: "inline-block" }}>Créateur d&apos;expériences web modernes</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{
              maxWidth: "38rem",
              margin: "0 auto 2rem",
              color: "#374c38",
              lineHeight: 1.6,
              fontSize: "clamp(0.8rem, 2.5vw, 1.05rem)",
              fontFamily: "'DM Sans', sans-serif",
              padding: "0 0.75rem"
            }}
          >
            Je conçois des applications web rapides et évolutives avec React, Next.js, Laravel et Node.js. Passionné par le code propre et la résolution de problèmes concrets grâce à des expériences utilisateur soignées.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
              padding: "0 0.5rem"
            }}
          >
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #16a34a, #15803d)",
                color: "white",
                fontWeight: 600,
                fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
                textDecoration: "none",
                boxShadow: "0 0 0 1px rgba(22,163,74,0.5), 0 8px 32px rgba(22,163,74,0.3)",
                transition: "all 0.2s",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(74,222,128,0.6), 0 8px 40px rgba(22,163,74,0.45)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(22,163,74,0.5), 0 8px 32px rgba(22,163,74,0.3)";
              }}
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(7,18,9,0.6)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#86efac",
                fontWeight: 600,
                fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
                textDecoration: "none",
                backdropFilter: "blur(12px)",
                transition: "all 0.2s",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#d1fae5";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#86efac";
              }}
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "3rem"
            }}
          >
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, isExternal }) => (
              <motion.a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "clamp(38px, 10vw, 44px)",
                  height: "clamp(38px, 10vw, 44px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  background: "rgba(7, 18, 9, 0.6)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  color: "#374c38",
                  backdropFilter: "blur(12px)",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#4ade80"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#374c38"}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem",
              maxWidth: "48rem",
              margin: "0 auto",
              padding: "0 0.5rem"
            }}
          >
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.03 }}
                style={{
                  fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "999px",
                  background: "rgba(22,101,52,0.15)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "#4ade80",
                  cursor: "default",
                  userSelect: "none",
                  transition: "all 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(22,101,52,0.3)";
                  el.style.color = "#86efac";
                  el.style.borderColor = "rgba(74,222,128,0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(22,101,52,0.15)";
                  el.style.color = "#4ade80";
                  el.style.borderColor = "rgba(34,197,94,0.2)";
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const SOCIAL = [
  { icon: Github,   href: "https://github.com/Masihullah37",    label: "GitHub",   isExternal: true  },
  { icon: Linkedin, href: "https://linkedin.com/in/masihullah", label: "LinkedIn", isExternal: true  },
  { icon: Mail,     href: "mailto:masihullah37@gmail.com",      label: "Email",    isExternal: false },
];

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        /* Green-tinted top border — matches hero/navbar palette */
        borderTop: "1px solid rgba(34, 197, 94, 0.12)",
        /* Dark green-tinted background — eliminates the purple bleed from above */
        background: "linear-gradient(to bottom, rgba(5,10,7,0.98) 0%, rgba(5,7,10,0.99) 100%)",
        paddingTop: "3rem",
        paddingBottom: "1.75rem",
        marginTop: 0,
      }}
    >
      {/* Subtle green glow at top — covers any purple bleed from the section above */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(22,163,74,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(22,163,74,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

        {/* ── Top row ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(34, 197, 94, 0.08)",
          }}
        >
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.875rem", minWidth: "200px" }}
          >
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
              {/* Spinning logo — same as Navbar */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "13px",
                overflow: "hidden",
                border: "1.5px solid rgba(34, 197, 94, 0.3)",
                boxShadow: "0 0 16px rgba(34, 197, 94, 0.18)",
                flexShrink: 0,
                animation: "footerLogoSpin 8s linear infinite",
              }}>
                <Image
                  src="/logo.png"
                  alt="Masihullah logo"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                />
              </div>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "#f0fdf4",
                letterSpacing: "-0.02em",
              }}>
                Masihullah<span style={{ color: "#4ade80" }}></span>
              </span>
            </a>
            <p style={{
              fontSize: "0.82rem",
              color: "#3d5c42",
              lineHeight: 1.65,
              maxWidth: "210px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Full Stack Developer building modern, scalable web experiences.
            </p>
          </motion.div>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <p style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4ade80",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "0.35rem",
            }}>
              Navigation
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  color: "#3d5c42",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#6ee7b7"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#3d5c42"}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <p style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4ade80",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "0.35rem",
            }}>
              Connect
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {SOCIAL.map(({ icon: Icon, href, label, isExternal }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  style={{
                    width: "40px", height: "40px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "0.625rem",
                    background: "rgba(7, 18, 9, 0.8)",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                    color: "#3d5c42",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#4ade80";
                    el.style.borderColor = "rgba(34, 197, 94, 0.4)";
                    el.style.background = "rgba(22, 163, 74, 0.08)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#3d5c42";
                    el.style.borderColor = "rgba(34, 197, 94, 0.15)";
                    el.style.background = "rgba(7, 18, 9, 0.8)";
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{
            color: "#2d4030",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.3rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © {year} 
            {/* <Heart size={12} style={{ color: "#ef4444", fill: "#ef4444", flexShrink: 0 }} /> */}
            {" "}by{" "}
            <span style={{ color: "#4ade80", fontWeight: 700 }}>Masihullah</span>
            {" "}using{" "}
            <span style={{ color: "#6ee7b7", fontWeight: 500 }}>Next.js + TypeScript</span>
          </p>

          <a
            href="https://github.com/Masihullah37"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "rgba(34, 197, 94, 0.4)",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#4ade80"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(34, 197, 94, 0.4)"}
          >
            View Source Code →
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes footerLogoSpin {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
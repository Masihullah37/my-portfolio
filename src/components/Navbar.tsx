

"use client";

// src/components/Navbar.tsx
// Navigation principale — fixe en haut, responsive desktop/mobile.
// ET fermer le menu. J'utilise scrollIntoView au lieu de href anchor pour éviter
// les problèmes de timing avec l'état isMobileOpen.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "À Propos",  href: "#about"    },
  { label: "Compétences", href: "#skills" },
  { label: "Projets",   href: "#projects" },
  { label: "Contact",   href: "#contact"  },
] as const;

const LOGO_SRC = "/logo.png";

// Smooth scroll helper — ferme d'abord le menu, puis attend que le DOM
// se stabilise avant de scroller. Sans ce délai, le scroll se déclenche
// pendant que le menu se ferme et atterrit au mauvais endroit.
function scrollToSection(href: string, onClose?: () => void) {
  const id = href.replace("#", "");
  if (onClose) onClose();

  // On attend la fin de l'animation de fermeture du menu (~300ms)
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 320);
}

export default function Navbar() {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu si on passe en mode desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "padding 0.3s ease, background 0.3s ease",
        padding: isScrolled ? "0.6rem 0" : "1rem 0",
        background: isScrolled ? "rgba(5, 7, 10, 0.9)" : "rgba(5, 7, 10, 0.3)",
        backdropFilter: isScrolled ? "blur(24px)" : "blur(8px)",
        WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(8px)",
        borderBottom: isScrolled ? "1px solid rgba(34, 197, 94, 0.12)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* ── Logo — statique, sans rotation ── */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}
        >
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1.5px solid rgba(34, 197, 94, 0.3)",
            boxShadow: "0 0 14px rgba(34, 197, 94, 0.15)",
            flexShrink: 0,
            // Logo stationnaire — pas de rotation
          }}>
            <Image
              src={LOGO_SRC}
              alt="Logo Masihullah"
              width={44}
              height={44}
              style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
            />
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#f0fdf4",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}>
            Masihullah
          </span>
        </a>

        {/* ── Navigation desktop ── */}
        <nav className="navbar-desktop" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.6rem",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#6ee7b7",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#f0fdf4";
                el.style.background = "rgba(34, 197, 94, 0.08)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#6ee7b7";
                el.style.background = "transparent";
              }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            download="Masihullah_CV.pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48, duration: 0.4 }}
            style={{
              marginLeft: "0.5rem",
              padding: "0.55rem 1.35rem",
              borderRadius: "0.6rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              background: "linear-gradient(135deg, #16a34a, #15803d)",
              boxShadow: "0 2px 14px rgba(22, 163, 74, 0.35)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 4px 20px rgba(22, 163, 74, 0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 2px 14px rgba(22, 163, 74, 0.35)";
            }}
          >
            CV ↓
          </motion.a>
        </nav>

        {/* ── Bouton hamburger mobile ── */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="navbar-hamburger"
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{
            width: "42px", height: "42px",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "0.6rem",
            background: "rgba(34, 197, 94, 0.06)",
            border: "1px solid rgba(34, 197, 94, 0.18)",
            color: "#6ee7b7",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMobileOpen ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex" }}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Menu mobile déroulant ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid rgba(34, 197, 94, 0.1)",
              background: "rgba(5, 7, 10, 0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <nav style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  // Le fix mobile : on preventDefault pour éviter le saut natif,
                  // puis on laisse scrollToSection gérer le délai + smooth scroll.
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(link.href, closeMenu);
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  style={{
                    padding: "0.85rem 0.875rem",
                    borderRadius: "0.75rem",
                    color: "#6ee7b7",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.2s",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#f0fdf4";
                    el.style.background = "rgba(34, 197, 94, 0.08)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#6ee7b7";
                    el.style.background = "transparent";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                download="Masihullah_CV.pdf"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.85rem",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #16a34a, #15803d)",
                  borderRadius: "0.75rem",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 4px 16px rgba(22, 163, 74, 0.35)",
                }}
              >
                Télécharger mon CV ↓
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-desktop   { display: flex !important; }
        .navbar-hamburger { display: none !important; }

        @media (max-width: 767px) {
          .navbar-desktop   { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
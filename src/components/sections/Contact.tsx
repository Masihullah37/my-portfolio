

"use client";

// src/components/sections/Contact.tsx
// Formulaire de contact — branché sur /api/contact pour l'envoi réel.

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Github, Send, Sparkles, AlertCircle, Loader2 } from "lucide-react";

const INFO = [
  { icon: Mail,   label: "E-MAIL",       value: "digitalmail372@gmail.com",  href: "mailto:digitalmail372@gmail.com" },
  { icon: MapPin, label: "LOCALISATION", value: "Tours, France",              href: null },
  { icon: Github, label: "GITHUB",       value: "github.com/masihullah37",    href: "https://github.com/masihullah37" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch (error) {
      console.error("Erreur formulaire de contact :", error);
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "clamp(0.6rem, 2vw, 0.75rem) clamp(0.75rem, 2.5vw, 1rem)",
    borderRadius: "0.75rem", background: "rgba(20,50,25,0.5)",
    border: "1px solid rgba(34,197,94,0.18)", color: "#d1fae5",
    fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "clamp(0.6rem, 2vw, 0.7rem)", fontWeight: 600,
    letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade80",
    fontFamily: "'DM Sans', sans-serif", marginBottom: "0.45rem",
  };

  return (
    <section id="contact" ref={sectionRef} style={{ position: "relative", padding: "clamp(3rem, 10vh, 6rem) 1rem", overflow: "hidden", background: "linear-gradient(160deg, #071209 0%, #0a1a0c 50%, #050e08 100%)" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(212,202,178,0.04) 0%, transparent 45%)" }}/>

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 0.5rem" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vh, 4rem)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.8rem", borderRadius: "999px", marginBottom: "1rem", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <Sparkles style={{ width: "0.75rem", height: "0.75rem", color: "#4ade80" }}/>
            <span style={{ fontSize: "clamp(0.65rem, 2vw, 0.75rem)", fontWeight: 600, color: "#4ade80", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              Travaillons Ensemble
            </span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 6vw, 3.75rem)", lineHeight: 1.1, marginBottom: "0.75rem", background: "linear-gradient(135deg, #f0fdf4 0%, #86efac 50%, #D4CAB2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Contactez-Moi
          </h2>
          <p style={{ color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.9rem, 2.5vw, 1rem)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6, padding: "0 0.5rem" }}>
            Je recherche activement des opportunités. Que vous ayez un poste, un projet, ou simplement envie d&apos;échanger — je serais ravi d&apos;en discuter.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(1rem, 4vw, 2rem)", alignItems: "start" }}>

          {/* Colonne gauche — infos de contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {INFO.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: "clamp(0.75rem, 3vw, 1.25rem)", padding: "clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(20,50,22,0.7), rgba(12,30,14,0.85))", border: "1px solid rgba(34,197,94,0.15)" }}
              >
                <div style={{ width: "clamp(2rem, 8vw, 2.75rem)", height: "clamp(2rem, 8vw, 2.75rem)", borderRadius: "0.75rem", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
                  <item.icon style={{ width: "clamp(0.9rem, 3vw, 1.1rem)", height: "clamp(0.9rem, 3vw, 1.1rem)", color: "#4ade80" }}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.65rem)", fontWeight: 600, letterSpacing: "0.12em", color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", color: "#d1fae5", fontFamily: "'DM Sans', sans-serif", textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}>{item.value}</a>
                    : <p style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", color: "#d1fae5", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{item.value}</p>
                  }
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.45 }}
              style={{ padding: "clamp(1rem, 4vw, 1.5rem)", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(20,55,25,0.7), rgba(12,32,15,0.85))", border: "1px solid rgba(74,222,128,0.25)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                <span style={{ position: "relative", display: "inline-flex", width: "0.65rem", height: "0.65rem", flexShrink: 0 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", opacity: 0.7, animation: "pulse-ring 1.5s ease-out infinite" }}/>
                  <span style={{ position: "relative", borderRadius: "50%", width: "0.65rem", height: "0.65rem", background: "#4ade80", display: "inline-flex" }}/>
                </span>
                <p style={{ fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", fontWeight: 700, color: "#4ade80", fontFamily: "'Syne', sans-serif" }}>
                  Ouvert aux Opportunités
                </p>
              </div>
              <p style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.82rem)", color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                CDI, freelance, télétravail et présentiel. Je réponds dans les 24 heures.
              </p>
            </motion.div>
          </div>

          {/* Colonne droite — formulaire */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ padding: "clamp(1.5rem, 5vw, 2.25rem)", borderRadius: "1.25rem", background: "linear-gradient(135deg, rgba(14,38,18,0.85), rgba(8,22,10,0.9))", border: "1px solid rgba(34,197,94,0.15)", backdropFilter: "blur(12px)" }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "clamp(2rem, 8vw, 3rem) 1rem" }}>
                <div style={{ fontSize: "clamp(2rem, 8vw, 3rem)", marginBottom: "1rem" }}>🌿</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#4ade80", fontSize: "clamp(1.2rem, 4vw, 1.4rem)", marginBottom: "0.5rem" }}>Message Envoyé !</h3>
                <p style={{ color: "#4d7a54", fontFamily: "'DM Sans', sans-serif", marginBottom: "1.5rem" }}>Je vous répondrai dans les 24 heures.</p>
                <button onClick={() => setStatus("idle")} style={{ background: "none", border: "none", color: "#4ade80", cursor: "pointer", textDecoration: "underline", fontSize: "0.875rem" }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Votre Nom *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Jean Dupont" style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(74,222,128,0.5)"}
                      onBlur={e  => (e.target as HTMLInputElement).style.borderColor = "rgba(34,197,94,0.18)"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jean@entreprise.fr" style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(74,222,128,0.5)"}
                      onBlur={e  => (e.target as HTMLInputElement).style.borderColor = "rgba(34,197,94,0.18)"}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Objet *</label>
                  <input name="subject" required value={form.subject} onChange={handleChange} placeholder="Offre d'emploi / Projet / Question" style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(74,222,128,0.5)"}
                    onBlur={e  => (e.target as HTMLInputElement).style.borderColor = "rgba(34,197,94,0.18)"}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Parlez-moi du poste ou du projet..." rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(74,222,128,0.5)"}
                    onBlur={e  => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(34,197,94,0.18)"}
                  />
                </div>
                {status === "error" && (
                  <div style={{ display: "flex", gap: "0.5rem", color: "#f87171", fontSize: "0.8rem", alignItems: "center" }}>
                    <AlertCircle size={14} /> Échec de l&apos;envoi. Veuillez réessayer ou m&apos;écrire directement.
                  </div>
                )}
                <button type="submit" disabled={status === "loading"}
                  style={{ width: "100%", padding: "clamp(0.75rem, 2.5vw, 0.9rem) clamp(1rem, 4vw, 1.5rem)", borderRadius: "0.875rem", background: status === "loading" ? "rgba(34,197,94,0.3)" : "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", border: "none", color: "#f0fdf4", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", cursor: status === "loading" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", boxShadow: status === "loading" ? "none" : "0 4px 24px rgba(22,163,74,0.35)", transition: "all 0.2s", letterSpacing: "0.03em" }}
                >
                  {status === "loading"
                    ? <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Envoi en cours...</>
                    : <><Send size={18} /> Envoyer le Message</>
                  }
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-ring { 0% { transform: scale(0.33); opacity: 1; } 80%, 100% { opacity: 0; } }
      `}</style>
    </section>
  );
}
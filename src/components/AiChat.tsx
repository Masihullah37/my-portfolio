

"use client";
// src/components/AiChat.tsx

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";
import type { ChatMessage } from "@/types";

const INITIAL_MESSAGE: ChatMessage = {
  role: "assistant",
  content: "Hi! 👋 I'm an AI trained on this developer's portfolio. Ask me about their skills, projects, experience, or availability!",
};

const SUGGESTED = [
  "What's your strongest skill?",
  "Tell me about your projects",
  "Are you available for hire?",
  "What tech stack do you use?",
] as const;

const MAX = 500;

export default function AiChat() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [messages,  setMessages]  = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input,     setInput]     = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  const endRef   = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile for responsive sizing
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => inputRef.current?.focus(), 350);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isOpen]);

  const send = useCallback(async (content: string) => {
    const text = content.trim().slice(0, MAX);
    if (!text || isLoading) return;
    const userMsg: ChatMessage = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json() as { content?: string };
      setMessages(p => [...p, { role: "assistant", content: data.content ?? "Sorry, try again!" }]);
    } catch {
      setMessages(p => [...p, { role: "assistant", content: "Connection issue — please use the contact form! 😊" }]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  if (!mounted) return null;

  // ── Responsive dimensions ──────────────────────────────────────────────────
  // Desktop: 360px wide, 580px tall (unchanged from before)
  // Mobile (<640px): fits within viewport with 1rem margin on each side
  const chatWidth    = isMobile ? "calc(100vw - 2rem)" : "360px";
  const chatRight    = isMobile ? "1rem"               : "1.5rem";
  const chatBottom   = isMobile ? "1.25rem"            : "1.5rem";
  const chatMaxH     = isMobile
    ? "min(520px, calc(100vh - 120px))"
    : "min(580px, calc(100vh - 100px))";

  return (
    <>
      {/* ── Floating trigger button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open AI chat"
            style={{
              position: "fixed",
              bottom: chatBottom,
              right: chatRight,
              zIndex: 50,
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              color: "white",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(109,40,217,0.5)",
            }}
          >
            <MessageCircle size={24} />
            {/* Online dot */}
            <span style={{
              position: "absolute", top: "-3px", right: "-3px",
              width: "14px", height: "14px", borderRadius: "50%",
              background: "#4ade80", border: "2px solid #05050a",
            }}>
              <span style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "#4ade80", opacity: 0.7,
                animation: "pulse-ring 1.5s ease-out infinite",
              }} />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            style={{
              position: "fixed",
              bottom: chatBottom,
              right: chatRight,
              zIndex: 50,
              // ── Key responsive sizing ──
              width: chatWidth,
              maxWidth: "360px",          // never wider than 360px even on desktop
              // ─────────────────────────
              display: "flex",
              flexDirection: "column",
              maxHeight: chatMaxH,
              borderRadius: "1.25rem",
              overflow: "hidden",
              background: "rgba(10,10,18,0.95)",
              border: "1px solid rgba(139,92,246,0.25)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header — colors unchanged */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.875rem 1rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, rgba(109,40,217,0.9), rgba(91,33,182,0.9))",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Sparkles size={15} color="white" />
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "0.875rem", fontWeight: 600, margin: 0 }}>
                    AI Portfolio Assistant
                  </p>
                  <p style={{ color: "rgba(196,181,253,0.8)", fontSize: "0.7rem", margin: 0 }}>
                    {isLoading ? "● Thinking..." : "● Online · Ask me anything"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  borderRadius: "0.5rem",
                  padding: "0.375rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              background: "rgba(5,5,12,0.75)",
              minHeight: 0,
            }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  }}
                >
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                    background: msg.role === "user" ? "rgba(124,58,237,0.8)" : "rgba(255,255,255,0.07)",
                    border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {msg.role === "user"
                      ? <User size={13} color="white" />
                      : <Bot  size={13} color="#a78bfa" />}
                  </div>
                  <div style={{
                    maxWidth: "82%",
                    padding: "0.625rem 0.875rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    borderRadius: msg.role === "user"
                      ? "1.25rem 0.375rem 1.25rem 1.25rem"
                      : "0.375rem 1.25rem 1.25rem 1.25rem",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                      : "rgba(255,255,255,0.07)",
                    border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.08)",
                    color: msg.role === "user" ? "white" : "#e2e8f0",
                  }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}
                >
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Bot size={13} color="#a78bfa" />
                  </div>
                  <div style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.375rem 1.25rem 1.25rem 1.25rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", height: "16px" }}>
                      {[0, 1, 2].map(j => (
                        <motion.div
                          key={j}
                          style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(167,139,250,0.7)" }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.55, repeat: Infinity, delay: j * 0.13 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Suggested questions */}
            {messages.length === 1 && !isLoading && (
              <div style={{
                padding: "0.625rem 0.75rem",
                flexShrink: 0,
                background: "rgba(5,5,12,0.85)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.375rem",
              }}>
                {SUGGESTED.map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "999px",
                      cursor: "pointer",
                      background: "rgba(109,40,217,0.15)",
                      border: "1px solid rgba(139,92,246,0.25)",
                      color: "rgba(196,181,253,0.85)",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(109,40,217,0.3)";
                      el.style.borderColor = "rgba(139,92,246,0.5)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(109,40,217,0.15)";
                      el.style.borderColor = "rgba(139,92,246,0.25)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input row */}
            <div style={{
              padding: "0.75rem",
              flexShrink: 0,
              background: "rgba(5,5,12,0.9)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              gap: "0.5rem",
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value.slice(0, MAX))}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
                }}
                placeholder="Ask about skills, projects, availability..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  borderRadius: "0.75rem",
                  padding: "0.625rem 0.875rem",
                  color: "#f1f5f9",
                  fontSize: "0.875rem",
                  outline: "none",
                  opacity: isLoading ? 0.5 : 1,
                  minWidth: 0,        // prevents input from overflowing flex container
                }}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || isLoading}
                style={{
                  width: "40px", height: "40px",
                  borderRadius: "0.75rem",
                  background: !input.trim() || isLoading
                    ? "rgba(255,255,255,0.08)"
                    : "linear-gradient(135deg,#7c3aed,#6d28d9)",
                  border: "none",
                  color: !input.trim() || isLoading ? "#64748b" : "white",
                  cursor: !input.trim() || isLoading ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
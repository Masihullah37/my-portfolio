"use client";
// src/components/ClientShell.tsx
// This is a Client Component — "use client" allows dynamic() with ssr:false.
// page.tsx (Server Component) imports this, and this renders AiChat client-side only.

import dynamic from "next/dynamic";

const AiChat = dynamic(() => import("@/components/AiChat"), {
  ssr: false,
});

export default function ClientShell() {
  return <AiChat />;
}
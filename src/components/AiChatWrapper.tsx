"use client";

import { useState, useEffect, useTransition } from "react";
import dynamic from "next/dynamic";

const AiChat = dynamic(() => import("./AiChat"), {
  ssr: false,
});

export default function AiChatWrapper() {
  const [mounted, setMounted] = useState(false);
  const [_, startTransition] = useTransition();

  useEffect(() => {
    // Wrapping the state update in startTransition tells React 
    // this isn't an "urgent" UI change, which stops the error.
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  // Return null on server and first client render
  if (!mounted) return null;

  return <AiChat />;
}
// src/lib/utils.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: The cn() helper function for safe Tailwind class name merging.

// SOLUTION WITH cn():
//   className={cn("bg-gray-500", isActive && "bg-blue-500")}
//   → tailwind-merge detects the conflict → correctly outputs: "bg-blue-500"
//   → The conditional class properly overrides the base class
//
// shadcn/ui uses this internally throughout the components.
// ─────────────────────────────────────────────────────────────────────────────

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ...inputs: accepts any number of class values (strings, objects, arrays, conditionals)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
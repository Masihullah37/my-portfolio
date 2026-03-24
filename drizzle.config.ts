// drizzle.config.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Configuration for the Drizzle Kit CLI.
//          Used when you run: npx drizzle-kit push
//          Tells Drizzle where your schema is and how to reach your database.
//
// WHY dotenv here?
//   This file runs as a plain Node.js script, NOT inside Next.js.
//   Next.js auto-loads .env.local, but plain Node.js scripts don't.
//   We must load it ourselves.
//
// WHY path.resolve()?
//   Relative paths like ".env.local" sometimes fail when Node.js scripts
//   are run from different working directories.
//   path.resolve() converts to an absolute path that always works.
// ─────────────────────────────────────────────────────────────────────────────

import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local using absolute path — more reliable than relative
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// Validate before attempting to connect — gives clear error if misconfigured
if (!process.env.DATABASE_URL) {
  throw new Error(
    "❌ DATABASE_URL is not set!\n" +
    "   Make sure .env.local exists in the project root and has DATABASE_URL.\n" +
    "   Copy it from neon.tech → your project → Connection Details."
  );
}

export default defineConfig({
  schema:   "./src/db/schema.ts",  // Where your table definitions are
  out:      "./drizzle",            // Where generated SQL migration files go
  dialect:  "postgresql",           // We use PostgreSQL (via Neon)
  dbCredentials: {
    url: process.env.DATABASE_URL,  // Guaranteed to exist (validated above)
  },
  verbose: true,   // Print SQL statements when running migrations
  strict:  true,   // Ask for confirmation before destructive changes
});
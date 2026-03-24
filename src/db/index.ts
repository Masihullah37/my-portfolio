// src/db/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Creates the database connection and exports it for use anywhere.


import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// neon(): Creates the serverless SQL executor using your DATABASE_URL
// The '!' tells TypeScript: "Trust me, this env var exists at runtime"
const sql = neon(process.env.DATABASE_URL!);

// drizzle(): Wraps the raw SQL executor with the Drizzle ORM interface.
// With Drizzle:    await db.insert(contactMessages).values({...})  ← TypeScript
// Without Drizzle: await sql`INSERT INTO contact_messages VALUES (...)` ← raw SQL
// { schema } gives Drizzle full knowledge of your tables for type safety
export const db = drizzle(sql, { schema });
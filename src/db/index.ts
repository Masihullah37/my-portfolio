// src/db/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Creates the database connection and exports it for use anywhere.


import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";


const sql = neon(process.env.DATABASE_URL!);

// drizzle(): Wraps the raw SQL executor with the Drizzle ORM interface.
export const db = drizzle(sql, { schema });
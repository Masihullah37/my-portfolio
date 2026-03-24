// src/db/schema.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Defines your database TABLE STRUCTURE in TypeScript.

// EXPORTS:
//   contactMessages — the table itself (used in API routes to insert/query)
//   ContactMessage  — TypeScript type for reading rows FROM the DB
//   NewContactMessage — TypeScript type for inserting rows INTO the DB
// ─────────────────────────────────────────────────────────────────────────────

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
// pgTable   → function to define a PostgreSQL table
// text      → text/string column type (variable length)
// timestamp → date + time column type
// uuid      → universally unique ID, looks like: "a1b2c3d4-e5f6-..."

export const contactMessages = pgTable("contact_messages", {
  // id: Auto-generated unique identifier for each message row
  // defaultRandom() = database generates it automatically
  // primaryKey()    = marks this as the unique row identifier
  id: uuid("id").defaultRandom().primaryKey(),

  // Form fields — .notNull() means these are required (can't be empty)
  name:    text("name").notNull(),
  email:   text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),

  // createdAt: Automatically set to current time when a row is inserted
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Auto-generated TypeScript types — update automatically when schema changes.
// Use ContactMessage when READING data from DB (SELECT queries)
export type ContactMessage = typeof contactMessages.$inferSelect;
// Use NewContactMessage when WRITING data to DB (INSERT queries)
export type NewContactMessage = typeof contactMessages.$inferInsert;
// src/db/schema.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Defines your database TABLE STRUCTURE in TypeScript.


// ─────────────────────────────────────────────────────────────────────────────

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const contactMessages = pgTable("contact_messages", {

  id: uuid("id").defaultRandom().primaryKey(),

  // Form fields — .notNull() means these are required (can't be empty)
  name:    text("name").notNull(),
  email:   text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),

 
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Use ContactMessage when READING data from DB (SELECT queries)
export type ContactMessage = typeof contactMessages.$inferSelect;
// Use NewContactMessage when WRITING data to DB (INSERT queries)
export type NewContactMessage = typeof contactMessages.$inferInsert;
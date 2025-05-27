import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

import { clinicsTable } from "./clinics";
import { usersTable } from "./users";

export const usersClinicsTable = pgTable("users_to_clincs", {
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
  clinicId: uuid("user_id")
    .notNull()
    .references(() => clinicsTable.id),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  createAt: timestamp("created_at").defaultNow().notNull(),
});

export const usersTableRelations = relations(usersClinicsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [usersClinicsTable.userId],
    references: [usersTable.id],
  }),
  clinic: one(clinicsTable, {
    fields: [usersClinicsTable.clinicId],
    references: [clinicsTable.id],
  }),
}));

import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

import { usersClinicsTable } from "./usersClinics";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
});

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  usersClinicsTable: many(usersClinicsTable),
}));

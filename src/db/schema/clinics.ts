import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { appointmentsTable } from "./appoinments";
import { doctorsTable } from "./doctors";
import { patientsTable } from "./patients";
import { usersClinicsTable } from "./usersClinics";

export const clinicsTable = pgTable("clinics", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const clinicsTableRelations = relations(clinicsTable, ({ many }) => ({
  doctors: many(doctorsTable),
  patients: many(patientsTable),
  appoinments: many(appointmentsTable),
  usersClinicsTable: many(usersClinicsTable),
}));

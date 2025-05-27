import { relations } from "drizzle-orm";
import { pgTable, time, uuid } from "drizzle-orm/pg-core";

import { clinicsTable } from "./clinics";
import { doctorsTable } from "./doctors";
import { patientsTable } from "./patients";

export const appointmentsTable = pgTable("appointments", {
  id: uuid("id").defaultRandom().primaryKey(),
  date: time("date").notNull(),
  patientId: uuid("patientId")
    .notNull()
    .references(() => patientsTable.id, { onDelete: "cascade" }),
  doctorId: uuid("doctorId")
    .notNull()
    .references(() => doctorsTable.id, { onDelete: "cascade" }),
  clinicId: uuid("clinicId")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
});

export const appoinmentsTableRelations = relations(
  appointmentsTable,
  ({ one }) => ({
    clinic: one(clinicsTable, {
      fields: [appointmentsTable.clinicId],
      references: [clinicsTable.id],
    }),

    doctor: one(doctorsTable, {
      fields: [appointmentsTable.clinicId],
      references: [doctorsTable.id],
    }),

    patient: one(patientsTable, {
      fields: [appointmentsTable.clinicId],
      references: [patientsTable.id],
    }),
  }),
);

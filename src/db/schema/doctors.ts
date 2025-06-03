import {
  integer,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { clinicsTable } from "./clinics";

export const doctorsTable = pgTable("doctors", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  specialty: text("specialty").notNull(),
  avatarImageUrl: text("avatar_image_url"),
  createAt: timestamp("created_at").defaultNow().notNull(),
  availableFromTime: time("available_from_time").notNull(),
  availableToTime: time("available_to_time").notNull(),
  availableToWeekDay: integer("available_to_week_day").notNull(),
  availableFromWeekDay: integer("available_from_week_day").notNull(),
  appointmentPrinceInCents: integer("appointment_prince_in_cents").notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  clinicId: uuid("clinicId")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  description: text("description"),
});

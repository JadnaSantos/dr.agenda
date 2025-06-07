import type { doctorsTable, patientsTable } from "@/db/schema";

export type AddAppointmentButtonProps = {
  patients: (typeof patientsTable.$inferSelect)[];
  doctors: (typeof doctorsTable.$inferSelect)[];
};

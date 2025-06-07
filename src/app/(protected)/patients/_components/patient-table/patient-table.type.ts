import type { patientsTable } from "@/db/schema";

export type PatientTableProps = {
  patient: typeof patientsTable.$inferSelect;
};

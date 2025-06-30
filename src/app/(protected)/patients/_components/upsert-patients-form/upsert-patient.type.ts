import type { patientsTable } from "@/db/schema/patients";

export type UpsertPatientType = {
  isOpen: boolean;
  patient?: typeof patientsTable.$inferSelect;
  onSuccess?: () => void;
};

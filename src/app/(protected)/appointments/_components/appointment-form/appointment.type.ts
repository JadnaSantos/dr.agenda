import type { doctorsTable, patientsTable } from "@/db/schema";

export type AddAppointmentFormType = {
  isOpen: boolean;
  patients: (typeof patientsTable.$inferSelect)[];
  doctors: (typeof doctorsTable.$inferSelect)[];
  onSuccess?: () => void;
};

export type Time = {
  value: string;
  available: boolean;
  label: string;
};

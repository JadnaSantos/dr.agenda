import type { doctorsTable } from "@/db/schema/doctors";

export type upsertDoctorType = {
  doctor?: typeof doctorsTable.$inferSelect;
  onSuccess?: () => void;
};

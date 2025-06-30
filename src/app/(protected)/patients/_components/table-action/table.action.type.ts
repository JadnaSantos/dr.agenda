import type { patientsTable } from "@/db/schema";

export type TableActionType = {
  patient: typeof patientsTable.$inferSelect;
};

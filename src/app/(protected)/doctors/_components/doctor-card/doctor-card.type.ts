import type { doctorsTable } from "@/db/schema";

export type doctorCardType = {
  doctor: typeof doctorsTable.$inferSelect;
};

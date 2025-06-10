import z from "zod";

export const getAvailableTimesSchema = z.object({
  doctorId: z.string(),
  date: z.string().date(),
});

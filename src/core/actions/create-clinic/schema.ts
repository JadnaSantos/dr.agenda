import z from "zod";

export const createClinicSchema = z.object({
  name: z.string(),
});

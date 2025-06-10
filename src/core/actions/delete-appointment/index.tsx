"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { appointmentsTable } from "@/db/schema";
import { clinicClientActionGuard } from "@/lib/next-safe-action";

import { deleteAppointmentSchema } from "./schema";

export const deleteAppointment = clinicClientActionGuard
  .schema(deleteAppointmentSchema)
  .action(async ({ parsedInput, ctx }) => {
    const appointment = await db.query.appointmentsTable.findFirst({
      where: eq(appointmentsTable.id, parsedInput.id),
    });
    if (!appointment) {
      throw new Error("Agendamento não encontrado");
    }
    if (appointment.clinicId !== ctx.user.clinic?.id) {
      throw new Error("Agendamento não encontrado");
    }
    await db
      .delete(appointmentsTable)
      .where(eq(appointmentsTable.id, parsedInput.id));
    revalidatePath("/appointments");
  });

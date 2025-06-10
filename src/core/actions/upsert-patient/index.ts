"use server";

import { revalidatePath } from "next/cache";

import { upsertPatientSchema } from "@/app/(protected)/patients/_components/upsert-patients-form/upsert-patient.schema";
import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { clinicClientActionGuard } from "@/lib/next-safe-action";

export const upsertPatient = clinicClientActionGuard
  .schema(upsertPatientSchema)
  .action(async ({ parsedInput, ctx }) => {
    await db
      .insert(patientsTable)
      .values({
        ...parsedInput,
        id: parsedInput.id,
        clinicId: ctx.user.clinic?.id,
      })
      .onConflictDoUpdate({
        target: [patientsTable.id],
        set: {
          ...parsedInput,
        },
      });
    revalidatePath("/patients");
  });

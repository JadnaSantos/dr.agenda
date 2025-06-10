"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { clinicsTable } from "@/db/schema/clinics";
import { usersToClinicsTable } from "@/db/schema/usersToClinics";
import { clientActionGuard } from "@/lib/next-safe-action";

export const createClinic = clientActionGuard.action(async ({ ctx }) => {
  const { name } = ctx;

  const [clinic] = await db.insert(clinicsTable).values({ name }).returning();

  if (!clinic) {
    throw new Error("Failed to create clinic");
  }

  await db.insert(usersToClinicsTable).values({
    userId: ctx.user.id,
    clinicId: clinic.id,
  });

  redirect("/dashboard");
});

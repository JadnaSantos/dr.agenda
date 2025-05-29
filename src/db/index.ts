import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import { accountsTable } from "@/db/schema/accouts";
import { appointmentsTable } from "@/db/schema/appoinments";
import { clinicsTable } from "@/db/schema/clinics";
import { doctorsTable } from "@/db/schema/doctors";
import { patientsTable } from "@/db/schema/patients";
import { sessionsTable } from "@/db/schema/sessions";
import { usersTable } from "@/db/schema/users";
import { usersToClinicsTable } from "@/db/schema/usersToClinics";
import { verificationsTable } from "@/db/schema/verifications";

export const schema = {
  usersTable,
  clinicsTable,
  doctorsTable,
  accountsTable,
  sessionsTable,
  verificationsTable,
  appointmentsTable,
  patientsTable,
  usersToClinicsTable,
};

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});

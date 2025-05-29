import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import { accountsTable } from "@/db/schema/accouts";
import { appointmentsTable } from "@/db/schema/appoinments";
import { clinicsTable } from "@/db/schema/clinics";
import { doctorsTable } from "@/db/schema/doctors";
import { patientsTable } from "@/db/schema/patients";
import { sessionsTable } from "@/db/schema/sessions";
import { usersTable } from "@/db/schema/users";
import { usersToClinicsTable } from "@/db/schema/usersToClinics";
import { verificationsTable } from "@/db/schema/verifications";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema: {
      usersTable,
      clinicsTable,
      doctorsTable,
      accountsTable,
      sessionsTable,
      verificationsTable,
      appointmentsTable,
      patientsTable,
      usersToClinicsTable,
    },
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    modelName: "usersTable",
  },
  session: {
    modelName: "sessionsTable",
  },
  account: {
    modelName: "accountsTable",
  },
  verification: {
    modelName: "verificationsTable",
  },
  emailAndPassword: {
    enabled: true,
  },
});

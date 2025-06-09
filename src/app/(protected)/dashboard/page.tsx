import dayjs from "dayjs";
import { eq } from "drizzle-orm";
import { Calendar } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { getDashboard } from "@/data/getDashboard";
import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema/usersToClinics";
import { auth } from "@/lib/auth";

import { appointmentsTableColumns } from "../appointments/_components/table-columns/table.colums";
import ChartComponent from "./_components/chart";
import DataPickerComponent from "./_components/data-picker";
import StatsCardsComponent from "./_components/stats-cards";
import TopDoctorsComponent from "./_components/top-doctors";
import { TopSpecialtiesComponent } from "./_components/top-specialties";
interface DashboardPageProps {
  searchParams: Promise<{
    from: string;
    to: string;
  }>;
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic");
  }

  const { from, to } = await searchParams;

  if (!from || !to) {
    redirect(
      `/dashboard?from=${dayjs().format("YYYY-MM-DD")}&to=${dayjs().add(1, "month").format("YYYY-MM-DD")}`,
    );
  }

  const {
    topDoctors,
    totalDoctors,
    totalRevenue,
    totalPatients,
    topSpecialties,
    totalAppointments,
    todayAppointments,
    dailyAppointmentsData,
  } = await getDashboard({
    from,
    to,
    session: {
      user: {
        clinic: {
          id: session.user.clinic.id,
        },
      },
    },
  });

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>
            Tenha uma visão geral da sua clínica.
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <DataPickerComponent />
        </PageActions>
      </PageHeader>
      <PageContent>
        <StatsCardsComponent
          totalRevenue={totalRevenue.total ? Number(totalRevenue.total) : null}
          totalAppointments={totalAppointments.total}
          totalPatients={totalPatients.total}
          totalDoctors={totalDoctors.total}
        />
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <ChartComponent dailyAppointmentsData={dailyAppointmentsData} />
          <TopDoctorsComponent doctors={topDoctors} />
        </div>
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="text-muted-foreground" />
                <CardTitle className="text-base">
                  Agendamentos de hoje
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={appointmentsTableColumns}
                data={todayAppointments}
              />
            </CardContent>
          </Card>
          <TopSpecialtiesComponent topSpecialties={topSpecialties} />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;

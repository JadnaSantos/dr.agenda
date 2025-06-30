type DailyAppointment = {
  date: string;
  appointments: number;
  revenue: number | null;
};

export type ChartProps = {
  dailyAppointmentsData: DailyAppointment[];
};

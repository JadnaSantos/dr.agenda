import dayjs from "dayjs";

import type { ChartConfig } from "@/components/ui/chart";

import type { ChartProps } from "./chart.types";

export const useChartModel = (props: ChartProps) => {
  const { dailyAppointmentsData } = props;

  const chartDays = Array.from({ length: 21 }).map((_, i) =>
    dayjs()
      .subtract(10 - i, "days")
      .format("YYYY-MM-DD"),
  );

  const chartData = chartDays.map((date) => {
    const dataForDay = dailyAppointmentsData.find((item) => item.date === date);
    return {
      date: dayjs(date).format("DD/MM"),
      fullDate: date,
      appointments: dataForDay?.appointments || 0,
      revenue: Number(dataForDay?.revenue || 0),
    };
  });

  const chartConfig = {
    appointments: {
      label: "Agendamentos",
      color: "#0B68F7",
    },
    revenue: {
      label: "Faturamento",
      color: "#10B981",
    },
  } satisfies ChartConfig;

  return {
    chartData,
    chartConfig,
  };
};

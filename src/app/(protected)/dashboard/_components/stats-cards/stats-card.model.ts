import {
  CalendarIcon,
  DollarSignIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { formatCurrencyInCents } from "@/helper/formatCurrencyInCents";

import type { StatsCardsProps } from "./stats-cards.types";

export const useStatsCardModel = (props: StatsCardsProps) => {
  const { totalRevenue, totalAppointments, totalPatients, totalDoctors } =
    props;

  const stats = [
    {
      title: "Faturamento",
      value: totalRevenue ? formatCurrencyInCents(totalRevenue) : "R$ 0,00",
      icon: DollarSignIcon,
    },
    {
      title: "Agendamentos",
      value: totalAppointments.toString(),
      icon: CalendarIcon,
    },
    {
      title: "Pacientes",
      value: totalPatients.toString(),
      icon: UserIcon,
    },
    {
      title: "Médicos",
      value: totalDoctors.toString(),
      icon: UsersIcon,
    },
  ];

  return {
    stats,
    totalDoctors,
    totalRevenue,
    totalPatients,
    totalAppointments,
  };
};

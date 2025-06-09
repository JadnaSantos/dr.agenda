import { medicalSpecialties } from "@/app/(protected)/doctors/_constants";

import type { TopSpecialtiesProps } from "./top-specialties.types";

export const useTopSpecialtiesModel = (props: TopSpecialtiesProps) => {
  const { topSpecialties } = props;

  const specialtyData = topSpecialties.map((specialty) => {
    const specialtyInfo = medicalSpecialties.find(
      (s) => s.value === specialty.specialty,
    );
    return {
      ...specialty,
      icon: specialtyInfo?.icon,
    };
  });

  const maxAppointments = Math.max(
    ...topSpecialties.map((i) => i.appointments),
  );

  return { maxAppointments, specialtyData };
};

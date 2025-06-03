import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { deleteDoctor } from "@/core/actions/delete-doctor";

import type { doctorCardType } from "./doctor-card.type";

export const useDoctorCardModel = (doctor: doctorCardType["doctor"]) => {
  const deleteDoctorAction = useAction(deleteDoctor, {
    onSuccess: () => {
      toast.success("Médico deletado com sucesso.");
    },
    onError: () => {
      toast.error("Erro ao deletar médico.");
    },
  });

  const handleDeleteDoctorClick = () => {
    if (!doctor) return;
    deleteDoctorAction.execute({ id: doctor.id });
  };

  const doctorInitials = doctor.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return {
    doctor,
    doctorInitials,
    handleDeleteDoctorClick,
  };
};

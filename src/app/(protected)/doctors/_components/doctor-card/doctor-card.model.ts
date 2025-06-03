import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

import { deleteDoctor } from "@/core/actions/delete-doctor";
import type { doctorsTable } from "@/db/schema";

import { getAvailability } from "../../_helpers";

interface DoctorCardProps {
  doctor: typeof doctorsTable.$inferSelect;
}

export const useDoctorCardModel = ({ doctor }: DoctorCardProps) => {
  const [isUpsertDoctorDialogOpen, setIsUpsertDoctorDialogOpen] =
    useState(false);

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
    deleteDoctorAction,
    handleDeleteDoctorClick,
    isUpsertDoctorDialogOpen,
    setIsUpsertDoctorDialogOpen,
  };
};

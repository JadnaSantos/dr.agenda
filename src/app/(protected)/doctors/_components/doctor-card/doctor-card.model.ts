import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { deleteDoctor } from "@/core/actions/delete-doctor";
import { getFirstLetterFromName } from "@/helper/getFirstLetterName";

import type { doctorCardType } from "./doctor-card.type";

export const useDoctorCardModel = (props: doctorCardType) => {
  const { doctor } = props;

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

  const doctorInitials = getFirstLetterFromName(doctor.name);

  return {
    doctor,
    doctorInitials,
    handleDeleteDoctorClick,
  };
};

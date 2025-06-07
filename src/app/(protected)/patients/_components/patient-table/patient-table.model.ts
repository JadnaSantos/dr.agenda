import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { deletePatient } from "@/core/actions/delete-patient";

import type { PatientTableProps } from "./patient-table.type";

export const usePatientTableModel = (props: PatientTableProps) => {
  const { patient } = props;

  const deletePatientAction = useAction(deletePatient, {
    onSuccess: () => {
      toast.success("Paciente deletado com sucesso.");
    },
    onError: () => {
      toast.error("Erro ao deletar paciente.");
    },
  });

  const handleDeletePatientClick = () => {
    if (!patient) return;
    deletePatientAction.execute({ id: patient.id });
  };

  return {
    patient,
    handleDeletePatientClick,
  };
};

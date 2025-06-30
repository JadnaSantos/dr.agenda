import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { deleteAppointment } from "@/core/actions/delete-appointment";

import type { AppointmentsTableActionsProps } from "./table-action.type";

export const useTableActionModel = (props: AppointmentsTableActionsProps) => {
  const { appointment } = props;

  const deleteAppointmentAction = useAction(deleteAppointment, {
    onSuccess: () => {
      toast.success("Agendamento deletado com sucesso.");
    },
    onError: () => {
      toast.error("Erro ao deletar agendamento.");
    },
  });

  const handleDeleteAppointmentClick = () => {
    if (!appointment) return;
    deleteAppointmentAction.execute({ id: appointment.id });
  };

  return { handleDeleteAppointmentClick, appointment };
};

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

import { upsertPatient } from "@/core/actions/upsert-patient";

import { upsertPatientSchema } from "./upsert-patient.schema";
import type { UpsertPatientType } from "./upsert-patient.type";

export const useUpsertPatientModel = (props: UpsertPatientType) => {
  const { patient, onSuccess } = props;

  const form = useForm<z.infer<typeof upsertPatientSchema>>({
    shouldUnregister: true,
    resolver: zodResolver(upsertPatientSchema),
    defaultValues: {
      name: patient?.name ?? "",
      email: patient?.email ?? "",
      phoneNumber: patient?.phoneNumber ?? "",
      sex: patient?.sex ?? undefined,
    },
  });

  const upsertPatientAction = useAction(upsertPatient, {
    onSuccess: () => {
      toast.success("Paciente salvo com sucesso.");
      onSuccess?.();
    },
    onError: () => {
      toast.error("Erro ao salvar paciente.");
    },
  });

  const onSubmit = (values: z.infer<typeof upsertPatientSchema>) => {
    upsertPatientAction.execute({
      ...values,
      id: patient?.id,
    });
  };

  return {
    form,
    patient,
    onSubmit,
    upsertPatientAction,
  };
};

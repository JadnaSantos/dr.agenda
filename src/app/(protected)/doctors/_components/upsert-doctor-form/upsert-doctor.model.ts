import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

import { upsertDoctor } from "@/core/actions/upsert-doctor";

import { doctorSchema } from "./upsert-doctor.schema";
import { upsertDoctorType } from "./upsert-doctor.type";

export const useUpsertDoctorModel = (props: upsertDoctorType) => {
  const { doctor, onSuccess } = props;

  const form = useForm<z.infer<typeof doctorSchema>>({
    shouldUnregister: true,
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: doctor?.name ?? "",
      specialty: doctor?.specialty ?? "",
      appointmentPrinceInCents: doctor?.appointmentPrinceInCents
        ? doctor.appointmentPrinceInCents / 100
        : 0,
      availableFromWeekDay: doctor?.availableFromWeekDay?.toString() ?? "1",
      availableToWeekDay: doctor?.availableToWeekDay?.toString() ?? "5",
      availableFromTime: doctor?.availableFromTime ?? "",
      availableToTime: doctor?.availableToTime ?? "",
    },
  });

  const upsertDoctorAction = useAction(upsertDoctor, {
    onSuccess: () => {
      toast.success("Médico adicionado com sucesso.");
      onSuccess?.();
    },
    onError: () => {
      toast.error("Erro ao adicionar médico.");
    },
  });

  const onSubmit = (values: z.infer<typeof doctorSchema>) => {
    upsertDoctorAction.execute({
      ...values,
      id: doctor?.id,
      availableFromWeekDay: parseInt(values.availableFromWeekDay),
      availableToWeekDay: parseInt(values.availableToWeekDay),
      appointmentPrinceInCents: values.appointmentPrinceInCents * 100,
    });
  };

  return {
    form,
    doctor,
    onSubmit,
    onSuccess,
    upsertDoctorAction,
  };
};

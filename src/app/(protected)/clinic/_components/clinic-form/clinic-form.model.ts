import { zodResolver } from "@hookform/resolvers/zod";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

import { createClinic } from "@/core/actions/create-clinic";

import { clinicSchema } from "./clinic-form.schema";

export const useClinicFormModel = () => {
  const form = useForm<z.infer<typeof clinicSchema>>({
    resolver: zodResolver(clinicSchema),

    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof clinicSchema>) => {
    try {
      await createClinic(data.name);
    } catch (error) {
      if (isRedirectError(error)) return;

      toast.error("Erro ao criar clínica.");
    }
  };

  return {
    form,
    onSubmit,
  };
};

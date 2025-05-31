import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

import { authClient } from "@/lib/auth-client";

import { SING_UP_ERROR_MESSAGES } from "./sign-up.messagens";
import { SignUpSchema } from "./sign-up.schema";

export const useSignUpModel = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    await authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          if (ctx.error.code === SING_UP_ERROR_MESSAGES.USER_ALREADY_EXISTS) {
            toast.error(SING_UP_ERROR_MESSAGES.USER_ALREADY_EXISTS);
            return;
          }
          toast.error(SING_UP_ERROR_MESSAGES.UNKNOWN_ERROR);
        },
      },
    );
  };

  return {
    form,
    handleSubmit,
  };
};

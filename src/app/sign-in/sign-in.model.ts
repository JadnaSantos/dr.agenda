"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

import { authClient } from "@/lib/auth-client";

import { SIGNIN_MESSAGES } from "./sign-in.messagens";
import { SignInSchema } from "./sign-in.schema";

export const SignModel = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof SignInSchema>) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: () => {
          toast.error(SIGNIN_MESSAGES.error.invalid);
        },
      },
    );
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      scopes: ["email", "profile"],
    });
  };

  const handleAppleLogin = async () => {
    await authClient.signIn.social({
      provider: "apple",
      callbackURL: "/dashboard",
      scopes: ["email", "profile"],
    });
  };

  return {
    form,
    handleSubmit,
    handleGoogleLogin,
    handleAppleLogin,
  };
};

"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AuthCardContainer,
  AuthCardContent,
  CoverImage,
} from "@/components/ui/auth-card-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import type { useSignModel } from "./sign-in.model";

type SignViewProps = ReturnType<typeof useSignModel>;

export const SignInView = (props: SignViewProps) => {
  const { form, handleSubmit, handleGoogleLogin } = props;

  return (
    <AuthCardContainer>
      <AuthCardContent>
        <Card>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Faça login para continuar.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite sua senha"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-2">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Entrar"
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    type="button"
                    onClick={handleGoogleLogin}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Entrar com Google
                  </Button>
                </div>
              </CardFooter>
              <div className="text-center text-sm">
                Voce não possui conta?{" "}
                <Link href="/sign-up" className="underline underline-offset-4">
                  Cadastrar
                </Link>
              </div>
            </form>
          </Form>
        </Card>
      </AuthCardContent>
      <CoverImage>
        <Image
          src="/doctors.svg"
          className="absolut inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          alt="foto dos medicos"
          width={100}
          height={100}
        />
      </CoverImage>
    </AuthCardContainer>
  );
};

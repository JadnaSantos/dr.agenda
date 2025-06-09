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

import type { useSignUpModel } from "./sign-up.model";

type SignUpViewProps = ReturnType<typeof useSignUpModel>;

export const SignUpView = (props: SignUpViewProps) => {
  const { form, handleSubmit } = props;

  return (
    <AuthCardContainer>
      <AuthCardContent>
        <Card className="w-full max-w-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <CardHeader>
                <CardTitle>Criar Conta</CardTitle>
                <CardDescription>
                  Crie uma conta para continuar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu nome completo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu e-mail"
                          type="email"
                          {...field}
                        />
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
                      "Criar Conta"
                    )}
                  </Button>
                </div>
              </CardFooter>
              <div className="text-center text-sm">
                Ja possui uma conta?
                <Link href="/sign-in" className="underline underline-offset-4">
                  Faça login!
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

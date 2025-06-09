"use client";
import { useSignModel } from "./sign-in.model";
import { SignInView } from "./sign-in.view";

const SignInPage = () => {
  const methods = useSignModel();
  return <SignInView {...methods} />;
};

export default SignInPage;

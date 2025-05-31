"use client";

import { useSignModel } from "./sign-in.model";
import { SignInView } from "./sign-in.view";

const SignIn = () => {
  const methods = useSignModel();
  return <SignInView {...methods} />;
};

export default SignIn;

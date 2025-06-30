"use client";

import { useSignUpModel } from "./sign-up.model";
import { SignUpView } from "./sign-up.view";

const SignUp = () => {
  const methods = useSignUpModel();
  return <SignUpView {...methods} />;
};

export default SignUp;

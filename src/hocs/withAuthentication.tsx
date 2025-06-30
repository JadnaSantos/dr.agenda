import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

const WithAuthentication = async ({
  children,
  mustHaveClinic = false,
}: {
  children: React.ReactNode;
  mustHaveClinic?: boolean;
}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  if (mustHaveClinic && !session.user.clinic) {
    redirect("/clinic");
  }

  return children;
};

export default WithAuthentication;

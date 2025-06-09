import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";

import { createStripeCheckout } from "@/core/actions/create-stripe-checkout/create-stripe-checkout";

import type { SubscriptionPlainProps } from "./subscription-plain.types";

const useSubscriptionPlainModel = (props: SubscriptionPlainProps) => {
  const router = useRouter();

  const { userEmail, active, className } = props;

  const features = [
    "Cadastro de até 3 médicos",
    "Agendamentos ilimitados",
    "Métricas básicas",
    "Cadastro de pacientes",
    "Confirmação manual",
    "Suporte via e-mail",
  ];

  const createStripeCheckoutAction = useAction(createStripeCheckout, {
    onSuccess: async ({ data }) => {
      if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
        throw new Error("Stripe publishable key not found");
      }
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      );
      if (!stripe) {
        throw new Error("Stripe not found");
      }
      if (!data?.sessionId) {
        throw new Error("Session ID not found");
      }
      await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
    },
  });

  const handleSubscribeClick = () => {
    createStripeCheckoutAction.execute();
  };

  const handleManagePlanClick = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL}?prefilled_email=${userEmail}`,
    );
  };

  return {
    active,
    features,
    className,
    handleSubscribeClick,
    handleManagePlanClick,
    createStripeCheckoutAction,
  };
};

export default useSubscriptionPlainModel;

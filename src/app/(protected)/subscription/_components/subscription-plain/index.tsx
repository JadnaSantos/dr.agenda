"use client";

import useSubscriptionPlainModel from "./subscription-plain.model";
import type { SubscriptionPlainProps } from "./subscription-plain.types";
import SubscriptionPlainView from "./subscription-plain.view";

const SubscriptionPlainComponent = (props: SubscriptionPlainProps) => {
  const methods = useSubscriptionPlainModel(props);

  return <SubscriptionPlainView {...props} {...methods} />;
};

export default SubscriptionPlainComponent;

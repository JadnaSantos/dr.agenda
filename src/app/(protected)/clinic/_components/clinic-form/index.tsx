"use client";

import { useClinicFormModel } from "./clinic-form.model";
import ClinicFormView from "./clinic-form.view";

const ClinicFormComponent = () => {
  const methods = useClinicFormModel();

  return <ClinicFormView {...methods} />;
};

export default ClinicFormComponent;

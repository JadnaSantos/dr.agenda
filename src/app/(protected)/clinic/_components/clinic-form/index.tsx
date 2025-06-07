"use client";

import { useClinicFormModel } from "./clinic-form.model";
import ClinicFormView from "./clinic-form.view";

const ClinicForm = () => {
  const methods = useClinicFormModel();

  return <ClinicFormView {...methods} />;
};

export default ClinicForm;

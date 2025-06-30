import { useUpsertPatientModel } from "./upsert-patient.model";
import type { UpsertPatientType } from "./upsert-patient.type";
import UpsertPatientView from "./upsert-patient.view";
const UpsertPatientForm = (props: UpsertPatientType) => {
  const methods = useUpsertPatientModel(props);

  return <UpsertPatientView {...methods} />;
};

export default UpsertPatientForm;

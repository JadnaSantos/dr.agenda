import { useUpsertDoctorModel } from "./upsert-doctor.model";
import type { upsertDoctorType } from "./upsert-doctor.type";
import UpserDoctorView from "./upsert-doctor-view";

const UpsertDoctorForm = (props: upsertDoctorType) => {
  const methods = useUpsertDoctorModel(props);

  return <UpserDoctorView {...methods} />;
};

export default UpsertDoctorForm;

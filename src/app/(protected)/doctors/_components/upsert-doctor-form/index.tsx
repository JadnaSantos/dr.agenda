import { useUpsertDoctorModel } from "./upsert-doctor.model";
import type { upsertDoctorType } from "./upsert-doctor.type";
import UpsertDoctorView from "./upsert-doctor-view";

const UpsertDoctorFormComponent = (props: upsertDoctorType) => {
  const methods = useUpsertDoctorModel(props);

  return <UpsertDoctorView {...methods} />;
};

export default UpsertDoctorFormComponent;

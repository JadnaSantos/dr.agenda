import useAppointmentModel from "./appointment.model";
import type { AddAppointmentFormType } from "./appointment.type";
import AppointmentView from "./appointment.view";

const AppointmentForm = (props: AddAppointmentFormType) => {
  const methods = useAppointmentModel(props);

  return <AppointmentView {...methods} />;
};

export default AppointmentForm;

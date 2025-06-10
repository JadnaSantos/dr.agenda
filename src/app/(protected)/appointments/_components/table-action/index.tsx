import { useTableActionModel } from "./table-action.model";
import type { AppointmentsTableActionsProps } from "./table-action.type";
import TableActionView from "./table-action.view";

const AppointmentsTableActionComponent = (
  props: AppointmentsTableActionsProps,
) => {
  const methods = useTableActionModel(props);

  return <TableActionView {...methods} />;
};

export default AppointmentsTableActionComponent;

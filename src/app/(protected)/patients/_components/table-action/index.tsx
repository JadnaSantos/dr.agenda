import type { TableActionType } from "./table.action.type";
import { useTableActionModel } from "./table-action.model";
import { TableActionView } from "./table-action.view";

const TableAction = (props: TableActionType) => {
  const methods = useTableActionModel(props);

  return <TableActionView {...methods} />;
};

export default TableAction;

"use client";

import { useDataPickerModel } from "./data-picker.model";
import DatePickerView from "./data-picker.view";

const DataPickerComponent = () => {
  const methods = useDataPickerModel();

  return <DatePickerView {...methods} />;
};

export default DataPickerComponent;

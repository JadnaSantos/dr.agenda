import { useChartModel } from "./chart.model";
import type { ChartProps } from "./chart.types";
import ChartView from "./chart.view";

const ChartComponent = (props: ChartProps) => {
  const methods = useChartModel(props);

  return <ChartView {...methods} />;
};

export default ChartComponent;

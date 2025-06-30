import type { DateRange } from "react-day-picker";

export type DataPickerProps = {
  className?: React.HTMLAttributes<HTMLDivElement>;
  date: { from: Date; to: Date };
  formatDate: (date: Date) => string;
  handleDateSelect: (dateRange: DateRange | undefined) => void;
};

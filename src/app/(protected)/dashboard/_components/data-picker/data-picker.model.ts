import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { parseAsIsoDate, useQueryState } from "nuqs";
import { DateRange } from "react-day-picker";

export const useDataPickerModel = () => {
  const [from, setFrom] = useQueryState(
    "from",
    parseAsIsoDate.withDefault(new Date()),
  );

  const [to, setTo] = useQueryState(
    "to",
    parseAsIsoDate.withDefault(addMonths(new Date(), 1)),
  );
  const handleDateSelect = (dateRange: DateRange | undefined) => {
    if (dateRange?.from) {
      setFrom(dateRange.from, {
        shallow: false,
      });
    }
    if (dateRange?.to) {
      setTo(dateRange.to, {
        shallow: false,
      });
    }
  };

  const date = {
    from,
    to,
  };

  const formatDate = (date: Date) => {
    return format(date, "LLL dd, y", { locale: ptBR });
  };

  return {
    date,
    formatDate,
    handleDateSelect,
  };
};

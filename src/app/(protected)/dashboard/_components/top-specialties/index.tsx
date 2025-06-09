import { useTopSpecialtiesModel } from "./top-specialties.model";
import type { TopSpecialtiesProps } from "./top-specialties.types";
import TopSpecialtiesView from "./top-specialties.view";

export const TopSpecialtiesComponent = (props: TopSpecialtiesProps) => {
  const methods = useTopSpecialtiesModel(props);

  return (
    <TopSpecialtiesView topSpecialties={props.topSpecialties} {...methods} />
  );
};

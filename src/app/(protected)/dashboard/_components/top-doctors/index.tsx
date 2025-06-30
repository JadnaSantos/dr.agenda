import type { TopDoctorsProps } from "./top-doctors.types";
import TopDoctorsView from "./top-doctors.view";

const TopDoctorsComponent = (props: TopDoctorsProps) => {
  return <TopDoctorsView {...props} />;
};

export default TopDoctorsComponent;

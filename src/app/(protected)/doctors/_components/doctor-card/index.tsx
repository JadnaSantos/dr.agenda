"use client";
import { useDoctorCardModel } from "./doctor-card.model";
import type { doctorCardType } from "./doctor-card.type";
import DoctorCardView from "./doctor-card.view";

const DoctorCardComponent = (props: doctorCardType) => {
  const methods = useDoctorCardModel(props);

  return <DoctorCardView {...methods} />;
};

export default DoctorCardComponent;

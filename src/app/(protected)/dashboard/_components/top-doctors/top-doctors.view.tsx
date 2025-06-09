import { Stethoscope } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getFirstLetterFromName } from "@/helper/getFirstLetterName";

import type { TopDoctorsProps } from "./top-doctors.types";

const TopDoctorsView = (props: TopDoctorsProps) => {
  const { doctors } = props;
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-muted-foreground" />
            <CardTitle className="text-base">Médicos</CardTitle>
          </div>
        </div>

        <div className="space-y-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gray-100 text-lg font-medium text-gray-600">
                    {getFirstLetterFromName(doctor.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm">{doctor.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground text-sm font-medium">
                  {doctor.appointments} agend.
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDoctorsView;

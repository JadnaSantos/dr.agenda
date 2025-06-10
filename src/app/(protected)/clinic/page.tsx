import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WithAuthentication from "@/hocs/WithAuthentication";

import ClinicFormComponent from "./_components/clinic-form";

const ClinicFormPage = () => {
  return (
    <WithAuthentication>
      <Dialog open>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar clínica</DialogTitle>
            <DialogDescription>
              Adicione uma clínica para continuar.
            </DialogDescription>
          </DialogHeader>
          <ClinicFormComponent />
        </DialogContent>
      </Dialog>
    </WithAuthentication>
  );
};

export default ClinicFormPage;

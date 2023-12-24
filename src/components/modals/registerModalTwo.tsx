import { useModal } from "@/hooks/useModal";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export const RegisterModalTwo = () => {
  const { isOpen, onClose, onOpen, type } = useModal();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const isModalOpen = isOpen && type === "registerTwo";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black text-white p-4 overflow-hidden   border-[0px]">
        <div className="text-center flex justify-start items-center w-full mb-4">
          <Button
            onClick={() => onOpen("registerOne")}
            variant={"ghost"}
            className="hover:bg-transparent hover:text-white"
          >
            {"<"}
          </Button>
          <p>Step 2 of 3</p>
        </div>
        <div className="px-20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-left font-bold pb-4">
              Create Your account
            </DialogTitle>
          </DialogHeader>
          <div className="bg-white/10 border-none text-white/40 py-2 px-3 rounded-md mb-4">
            hardik
          </div>
          <div className="bg-white/10 border-none text-white/40 py-2 px-3 rounded-md mb-4">
            hardik@gmail.com
          </div>
          <div className="bg-white/10 border-none text-white/40 py-2 px-3 rounded-md mb-20">
            25,Feb 2002
          </div>

          <div>
            <p className="text-[10px] text-white/40 mb-6">
              By signing up, you agree to the
              <span className="text-blue-500"> Terms of Service</span>
              and <span className="text-blue-500">Privacy Policy</span>,
              including <span className="text-blue-500">Cookie Use</span>. X may
              use your contact information, including your email address and
              phone number for purposes outlined in our Privacy Policy, like
              keeping your account secure and personalizing our services,
              including ads.
              <span className="text-blue-500"> Learn more</span>. Others will be
              able to find you by email or phone number, when provided, unless
              you choose otherwise
              <span className="text-blue-500"> here</span>.
            </p>
          </div>

          <div className="flex flex-col gap-4 pb-10">
            <Button
              variant="secondary"
              // className="w-full rounded-3xl font-semibold"
              className="text-[16px] rounded-3xl bg-blue-500 border-[0.4px] outline-none text-white border-white/40 hover:bg-blue-500/90"
              // disabled={}
              onClick={() => onOpen("registerThree")}
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

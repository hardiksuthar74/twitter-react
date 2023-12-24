import { useModal } from "@/hooks/useModal";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface formType {
  password: string;
}

export const RegisterModalThree = () => {
  const { isOpen, onClose, onOpen, type } = useModal();

  const form = useForm({
    defaultValues: {
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: formType) => {
    try {
      form.reset();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };
  const isModalOpen = isOpen && type === "registerThree";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black text-white p-4 overflow-hidden   border-[0px]">
        <div className="text-center flex justify-start items-center w-full mb-4">
          <Button
            onClick={() => onOpen("registerTwo")}
            variant={"ghost"}
            className="hover:bg-transparent hover:text-white"
          >
            {"<"}
          </Button>
          <p>Step 3 of 3</p>
        </div>
        <div className="px-20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-left font-bold">
              You'll need a password
            </DialogTitle>
            <p className="text-white/50 text-[12px] pb-6">
              Make sure it's 8 characters or more.
            </p>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500"
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-4 pb-10 pt-20">
                <Button
                  variant="secondary"
                  className="text-[16px] rounded-3xl bg-blue-500 border-[0.4px] outline-none text-white border-white/40 hover:bg-blue-500/90"
                  disabled={true}
                  onClick={() => onOpen("registerTwo")}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

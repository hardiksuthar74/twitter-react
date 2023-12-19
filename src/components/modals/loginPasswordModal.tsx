import { useModal } from "@/hooks/useModal";
import { useForm } from "react-hook-form";
import twitterLogo from "@/assets/twitterLogo.png";

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

export const LoginPasswordModal = () => {
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

  const isModalOpen = isOpen && type === "nextPassword";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black text-white p-4 overflow-hidden px-28 pb-20 border-[0px]">
        <DialogHeader className="">
          <div className="text-center flex justify-center items-center w-full mb-4">
            <img src={twitterLogo} className="w-6" alt="Logo" />
          </div>
          <DialogTitle className="text-2xl text-left font-bold pb-4">
            Enter your password
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="bg-white/10 border-none text-white/40 py-2 px-3 rounded-md mb-4">
              hardik
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-black border-2 mb-1 border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500"
                      placeholder="password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-blue-500 text-[12px] mb-6">Forgot password?</p>
            <Button
              variant="secondary"
              className="w-full rounded-3xl font-semibold"
              disabled={true}
            >
              Login
            </Button>

            <div className="text-[14px] text-white/60">
              <p>
                Don't have an account?
                <Button
                  variant={"link"}
                  onClick={() => onOpen("registerOne")}
                  className="text-blue-500 px-1"
                >
                  Sign up
                </Button>
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

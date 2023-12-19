import { useModal } from "@/hooks/useModal";
import twitterLogo from "@/assets/twitterLogo.png";

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
  email: string;
}

export const LoginModal = () => {
  const { isOpen, onClose, onOpen, type } = useModal();

  const form = useForm({
    defaultValues: {
      email: "",
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

  const isModalOpen = isOpen && type === "signIn";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black text-white p-4 overflow-hidden px-28 pb-20 border-[0px]">
        <DialogHeader className="">
          <div className="text-center flex justify-center items-center w-full mb-4">
            <img src={twitterLogo} className="w-6" alt="Logo" />
          </div>
          <DialogTitle className="text-2xl text-left font-bold pb-4">
            Sign in to X
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="secondary"
                className="w-full rounded-3xl font-semibold"
                disabled={isLoading}
                onClick={() => onOpen("nextPassword")}
              >
                Next
              </Button>
              <Button
                variant="default"
                className="w-full rounded-3xl font-semibold bg-transparent border-[0.4px] border-white/40 outline-none hover:bg-white/10 transition-all"
                disabled={isLoading}
              >
                Forgot password?
              </Button>
            </div>

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

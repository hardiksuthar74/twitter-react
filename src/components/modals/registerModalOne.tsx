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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface formType {
  email: string;
}

export const RegisterModalOne = () => {
  const { isOpen, onClose, onOpen, type } = useModal();

  const form = useForm({
    defaultValues: {
      name: "",
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

  const isModalOpen = isOpen && type === "registerOne";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black text-white p-4 overflow-hidden border-[0px]">
        <div className="text-center flex justify-start items-center w-full mb-4">
          <p>Step 1 of 3</p>
        </div>
        <div className="px-20">
          <DialogHeader className="">
            <DialogTitle className="text-2xl text-left font-bold pb-4">
              Create Your account
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <div className="pt-10">
                <p className="text-[16px]">Date of birth</p>
                <p className="text-[12px] text-white/40">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
              </div>
              <div className="flex gap-2 pb-10">
                <Select>
                  <SelectTrigger className="w-[45%] border-white/20 bg-black border-2 focus:border-none">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[25%] border-white/20 bg-black border-2 focus:border-none">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[30%] border-white/20 bg-black border-2 focus:border-none">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2  border-white/20 border-opacity-5 focus-visible:ring-0 text-white focus-visible:ring-offset-0 w-full focus:border-blue-500">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-4 pb-10">
                <Button
                  variant="secondary"
                  className="w-full rounded-3xl font-semibold"
                  // disabled={}
                  onClick={() => onOpen("registerTwo")}
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

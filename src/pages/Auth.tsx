import twitterLogo from "@/assets/twitterLogo.png";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";

const navBarLink = [
  {
    path: "#",
    name: "About",
  },
  {
    path: "#",
    name: "Download the X app",
  },
  {
    path: "#",
    name: "Help Center",
  },
  {
    path: "#",
    name: "Terms of Service",
  },
  {
    path: "#",
    name: "Privacy Policy",
  },
  {
    path: "#",
    name: "Cookie Policy",
  },
  {
    path: "#",
    name: "Accessibility",
  },
  {
    path: "#",
    name: "Ads info",
  },
  {
    path: "#",
    name: "Status",
  },
  {
    path: "#",
    name: "Careers",
  },
  {
    path: "#",
    name: "Brand Resources",
  },
  {
    path: "#",
    name: "Advertising",
  },
  {
    path: "#",
    name: "Marketing",
  },
  {
    path: "#",
    name: "X for Business",
  },
  {
    path: "#",
    name: "Developers",
  },
  {
    path: "#",
    name: "Directory",
  },
  {
    path: "#",
    name: "Settings",
  },
];

const Auth = () => {
  const { onOpen } = useModal();

  return (
    <div className="text-white">
      <div className="p-10 max-sm:flex-col flex-wrap flex justify-evenly items-center w-full min-h-screen max-sm:justify-center max-sm:items-start">
        <div className="w-72 max-sm:w-10">
          <img className="w-full" src={twitterLogo} alt="logo" />
        </div>
        <div>
          <h1 className="text-[60px] font-bold mb-4">Happening now</h1>
          <p className="text-[30px] font-bold mb-4">Join today.</p>
          <Button
            onClick={() => onOpen("registerOne")}
            variant={"secondary"}
            className="rounded-3xl mb-2 w-64 bg-blue-500 hover:bg-blue-500/90 text-white text-[16px]"
          >
            Create account
          </Button>
          <p className="text-[10px] mb-10 text-white/60">
            By signing up, you agree to the
            <span className="text-blue-500"> Terms of Service </span>
            and
            <span className="text-blue-500">
              Privacy <br /> Policy
            </span>
            , including
            <span className="text-blue-500"> Cookie Use.</span>
          </p>
          <p className="mb-4">Already have an account?</p>
          <Button
            onClick={() => onOpen("signIn")}
            className=" text-[16px] w-64 rounded-3xl bg-transparent border-[0.4px] outline-none text-blue-500 border-white/40"
          >
            Sign in
          </Button>
        </div>
      </div>
      <nav className="text-[10px] mb-4 text-white/50 flex flex-wrap justify-center items-center gap-3">
        {navBarLink.map((nav, index) => {
          return (
            <Button
              key={index}
              className="text-white/50 p-0 text-[12px]"
              variant={"link"}
            >
              {nav.name}
            </Button>
          );
        })}
        <p>© 2023 X Corp.</p>
      </nav>
    </div>
  );
};

export default Auth;

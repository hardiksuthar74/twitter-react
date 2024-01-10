import { Outlet } from "react-router-dom";
import SideBar from "../navigation/SideBar";

const AppLayout = () => {
  return (
    <div className="text-white flex justify-center h-screen overflow-hidden mx-16">
      <div className="w-[16%] h-full">
        <SideBar />
      </div>
      <div className="w-[50%]  border-x-[0.1px] border-x-[#363636] pt-4 pl-4">
        <Outlet />
      </div>
      <div className="w-[25%] ml-10 pt-4">Settings</div>
    </div>
  );
};

export default AppLayout;

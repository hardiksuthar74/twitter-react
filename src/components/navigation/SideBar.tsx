import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaBell,
  FaInbox,
  FaRegStickyNote,
  FaClipboardList,
  FaRegBookmark,
  FaUser,
} from "react-icons/fa";

import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import TwitterLogo from "@/assets/twitterLogo.png";
import { Button } from "../ui/button";

const sideBarData = [
  { label: "Home", icon: <FaHome /> },
  { label: "Explore", icon: <FaSearch /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Messages", icon: <FaInbox /> },
  { label: "Grok", icon: <FaRegStickyNote /> },
  { label: "Lists", icon: <FaClipboardList /> },
  { label: "Bookmarks", icon: <FaRegBookmark /> },
  { label: "Profile", icon: <FaUser /> },
  { label: "More", icon: <HiOutlineDotsCircleHorizontal /> },
];

const SideBar = () => {
  return (
    <ScrollArea className="w-full h-full mt-4 pr-2">
      <div className="mb-4 w-8 mx-4">
        <img src={TwitterLogo} className="w-full" alt="Logo" />
      </div>
      <div className="flex flex-col h-full text-[20px] gap-y-2 mb-4">
        {sideBarData.map((el) => (
          <Link className="" key={el.label} to={el.label}>
            <div className="flex justify-start">
              <div className="flex justify-start items-center gap-4 hover:bg-[#E7E9EA] hover:bg-opacity-[0.1] py-2 px-3 pr-5 rounded-3xl">
                <div className="text-2xl">{el.icon}</div>
                {el.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="">
        <Button className="text-white bg-blue-500 w-full rounded-3xl text-[16px] py-6 hover:bg-blue-500/90 mb-4">
          Post
        </Button>
        <Button className="text-white bg-transparent hover:bg-[#E7E9EA] hover:bg-opacity-[0.1]  rounded-[42px] text-[14px] py-8 flex justify-between items-center w-full">
          <div className="bg-blue-500 p-2 rounded-full w-10 h-10">H</div>
          <div>
            hardik suthar <br />
            <span className="text-white/60">@hardik616</span>
          </div>
          <div className="text-xl">...</div>
        </Button>
      </div>
    </ScrollArea>
  );
};

export default SideBar;

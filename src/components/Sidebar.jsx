import React from "react";
import { BsAmazon, BsLightningFill } from "react-icons/bs";
import { FaPoop, FaFire } from "react-icons/fa";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as ButsIcon } from "../icons/buts.svg";
import { ReactComponent as LogoutIcon } from "../icons/upload.svg";

const Sidebar = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-16 m-0 h-screen p-1
    flex flex-col bg-black text-secondary shadow-lg"
      >
        <SidebarIcon icon={<HomeIcon size={30} />} />
        <SidebarIcon icon={<MenuIcon size={25} />} />
        <SidebarIcon icon={<ButsIcon size={30} />} />
      </div>
      <div className="fixed bottom-3 left-0 mx-auto p-2 text-secondary ">
        <SidebarIcon icon={<LogoutIcon size={26} />} />
      </div>
    </>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;

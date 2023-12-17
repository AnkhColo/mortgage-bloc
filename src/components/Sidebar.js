import React from "react";
import { BsAmazon, BsLightningFill } from "react-icons/bs";
import { FaPoop, FaFire } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-16 m-0 h-screen p-1
    flex flex-col bg-primary text-secondary shadow-lg"
      >
        <SidebarIcon icon={<FaFire size={28} />} />
        <SidebarIcon icon={<FaPoop size={20} />} />
        <SidebarIcon icon={<BsAmazon size={30} />} />
      </div>
      <div className="fixed bottom-3 left-0 mx-auto p-2 text-secondary ">
        <SidebarIcon icon={<BsLightningFill size={26} />} />
      </div>
    </>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;

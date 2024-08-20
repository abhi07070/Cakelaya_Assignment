import React, { useState } from "react";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import MainContent from "./MainContainer";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          handleMenuClick={handleMenuClick}
        />
        <div className="flex flex-col w-full md:ml-[306px] transition-all">
          <Navbar toggleSidebar={toggleSidebar} currentRoute={"/dashboard"} />
          <MainContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

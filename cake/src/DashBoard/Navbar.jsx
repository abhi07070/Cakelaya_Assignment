import React from "react";
import profile from "../assets/Images/cakePerson.jpeg";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white text-black flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-10 shadow-md w-full md:w-[calc(100%-306px)] md:ml-[306px]">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-base">Hi, Davinder. Welcome back to Admin Panel!</p>
      </div>
      <div className="flex items-center gap-8">
        <div className="bg-[#F5F7FA] text-[#FF1616] p-2 rounded-full relative">
          <IoIosNotificationsOutline size={25} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-[#F5F7FA] rounded-full border border-[#FF1616] z-10"></span>
        </div>
        <img className="w-12 h-12 rounded-full" src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;

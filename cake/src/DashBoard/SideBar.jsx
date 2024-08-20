import React from "react";
import logo from "../assets/Images/cakeLogo.png";
import { GoHome } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import person from "../assets/Images/cakePerson.jpeg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, handleMenuClick }) => {
  const navigate = useNavigate();
  const handleMenuItemClick = (menu) => {
    handleMenuClick(menu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-[306px] bg-white transition-transform transform md:translate-x-0 z-20 shadow-lg text-sm md:text-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col justify-between`}
    >
      <div className="flex justify-between flex-col gap-2 px-4 items-start font-bold text-base">
        <a href="" className="flex items-center">
          <img className="w-32 h-32" src={logo} alt="" />
        </a>

        <ul className="w-full space-y-4">
          <li
            className={`p-4 cursor-pointer flex gap-3 items-center text-[#FF1616] bg-[#FFE0E0] rounded-md`}
            onClick={() => handleMenuItemClick("Home")}
          >
            <GoHome size={25} />
            Home
          </li>
          <li
            className={`p-4 cursor-pointer flex gap-3 items-center text-[#9197B3] rounded-md relative`}
          >
            <CiBank size={25} />
            Account Approval
            <span className="absolute right-4">
              <IoIosArrowForward size={20} />
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex gap-4 items-center text-[#9197B3] px-4 py-4 shadow-xl rounded-2xl text-base">
          <FiLogOut size={25} />
          <button onClick={handleLogout}>Log out</button>
        </div>

        <img className="w-12 h-12 rounded-full" src={person} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;

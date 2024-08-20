import React, { useState } from "react";
import bgImg from "../assets/Images/bgCake.jpeg";
import { BsStars } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const token = new URLSearchParams(location.search).get("token");

  const handleForgetPassword = async () => {
    if (newPassword && token) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/reset-password",
          {
            token,
            newPassword,
          }
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/dashboard");
        }
      } catch (error) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      } finally {
        setNewPassword("");
      }
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="relative w-[829px] h-full">
        <img
          className="w-full h-full object-cover"
          src={bgImg}
          alt="Background"
        />
        <div className="absolute inset-0 bg-[#FF1616] bg-opacity-50 text-white flex items-center justify-center flex-col">
          <div className="space-y-4">
            <span>
              <BsStars size={30} />
            </span>
            <h1 className="text-3xl font-semibold">Sign Up!</h1>
            <p>Create a free account and get full access to all features!</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="p-8 flex flex-col px-[64px] gap-[32px] justify-between">
          <h2 className="text-3xl font-bold mb-2">Reset Password!</h2>

          <div className="relative w-[399px]">
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              type="password"
              placeholder="New Password"
              className="peer p-4 w-full border border-[#9197B3] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-colors duration-200 peer-focus:text-blue-500">
              New Password
            </label>
            <div className="absolute inset-y-0 right-5 flex items-center">
              {newPassword === "" && <AiOutlineEyeInvisible size={20} />}
            </div>
          </div>

          <div className="w-[399px]">
            <button
              type="submit"
              onClick={handleForgetPassword}
              className="w-full bg-[#FF1616] text-white p-3 rounded-lg mt-2"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

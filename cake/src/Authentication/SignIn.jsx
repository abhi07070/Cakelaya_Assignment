import React, { useState } from "react";
import bgImg from "../assets/Images/bgCake.jpeg";
import { BsStars } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (password) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/signin",
          {
            email,
            password,
          }
        );
        if (response.data.token) {
          toast.success(response.data.message);
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      } catch (error) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      } finally {
        setEmail("");
        setPassword("");
      }
    }
  };

  const handleForgetPassword = async () => {
    if (email) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/forgot-password",
          {
            email,
          }
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          setIsForgetPassword(false);
        }
      } catch (error) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Side */}
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

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="p-8 flex flex-col px-[64px] gap-[32px] justify-between">
          <h2 className="text-3xl font-bold mb-2">
            {isForgetPassword ? "Forget Password!" : "Sign In!"}
          </h2>

          {/* Email Input with Label */}
          <div className="relative w-[399px]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email ID"
              className="peer p-4 w-full border border-[#9197B3] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-colors duration-200 peer-focus:text-blue-500">
              Email ID
            </label>
          </div>

          {/* Password or New Password Input with Label */}
          {!isForgetPassword && (
            <div className="relative w-[399px]">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="peer p-4 w-full border border-[#9197B3] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-colors duration-200 peer-focus:text-blue-500">
                Password
              </label>
              <div className="absolute inset-y-0 right-5 flex items-center">
                {password === "" && <AiOutlineEyeInvisible size={20} />}
              </div>
            </div>
          )}
          {/* 


          {/* Forget Password and Submit Button */}
          <div className="w-[399px]">
            {!isForgetPassword ? (
              <>
                <a
                  href="#"
                  className="text-blue-500"
                  onClick={() => setIsForgetPassword(true)}
                >
                  Forget Password?
                </a>
                <button
                  type="submit"
                  onClick={handleSignIn}
                  className="w-full bg-[#FF1616] text-white p-3 rounded-lg mt-2"
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  onClick={handleForgetPassword}
                  className="w-full bg-[#FF1616] text-white p-3 rounded-lg mt-2"
                >
                  Send Verification Email
                </button>
                <button
                  type="button"
                  onClick={() => setIsForgetPassword(false)}
                  className="w-full bg-gray-400 text-white p-3 rounded-lg mt-2"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

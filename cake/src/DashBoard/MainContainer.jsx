import React, { useEffect } from "react";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";

const MainContent = ({ selectedMenu }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  const renderContent = () => {
    switch (selectedMenu) {
      case "Home":
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pt-36 px-14 bg-[#F5F7FA] h-screen">{renderContent()}</div>
  );
};

export default MainContent;

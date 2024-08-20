import logo from "./logo.svg";
import "./App.css";
import DashboardLayout from "./DashBoard/Layout";
import SignIn from "./Authentication/SignIn";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Authentication/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;

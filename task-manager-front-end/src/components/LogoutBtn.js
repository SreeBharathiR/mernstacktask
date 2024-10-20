import React, { useContext } from "react";
import "./LogoutBtn.css";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LogoutBtn = () => {
  const { handleLogoutAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogoutSubmit = async () => {
    try {
      console.log("logout try");
      const response = await api.post("/auth/logout");
      console.log("Logged out");
      console.log(response);
      handleLogoutAuth();
      navigate("/login");
    } catch (e) {
      console.error(e.response?.data);
    }
  };
  return (
    <button id="logoutbtn" onClick={handleLogoutSubmit}>
      Logout
    </button>
  );
};

export default LogoutBtn;

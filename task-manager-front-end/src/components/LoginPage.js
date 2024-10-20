import React, { useContext, useState } from "react";
import "./LoginPage.css";
import img from "../assets/taskImgLogin.jpeg";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const LoginPage = () => {
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChanges = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };
  const { handleLoginAuth } = useContext(AuthContext);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", formDataLogin);

      console.log(response);
      console.log("Login");
      handleLoginAuth();
      navigate("/");
      // console.log(formData);
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Login Failed";
      alert(errorMsg);
    }
  };
  return (
    <div className="loginpage">
      <div className="login">
        <div className="firsthalf">
          <img src={img} alt="task management" id="taskimg"></img>
        </div>
        <form className="secondhalf" onSubmit={handleLoginSubmit}>
          <h2 id="loginH">Login</h2>
          <input
            type="text"
            placeholder="Enter your email"
            required
            name="email"
            id="emailLogin"
            onChange={handleChanges}
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            id="passwordLogin"
            onChange={handleChanges}
          ></input>
          <button id="loginBtn">Login</button>
        </form>
        <p>
          Don't have a account?<Link to="/signup"> Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

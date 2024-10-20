import React, { useEffect, useState } from "react";
import "./SignupPage.css";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPass, setMatchPass] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: 0,
    country: "",
    address: "",
    category: "",
    purpose: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    // setConfirmPassword(e.target.value);
    if (confirmPassword && confirmPassword !== formData.password) {
      setMatchPass("Password does not match");
    } else {
      setMatchPass("");
    }
  }, [confirmPassword, formData.password]);
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/signup", formData);
      console.log(response);
      console.log("Submitted");
      console.log(formData);
      navigate("/login");
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Login Failed";
      alert(errorMsg);
    }
  };
  return (
    <div className="signup">
      <form className="signbox" onSubmit={handleSignupSubmit}>
        <div className="firsthalfSignup">
          <h1 id="signupTitle">SignUp</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            id="name"
            name="name"
            className="inputSignup"
            onChange={handleChanges}
            autoComplete="name"
          ></input>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            className="inputSignup"
            required
            onChange={handleChanges}
            autoComplete="email"
          ></input>
          <input
            type="password"
            placeholder="Set Your Password"
            required
            name="password"
            id="password"
            className="inputSignup"
            onChange={handleChanges}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            id="confirmPassword"
            name="confirmPass"
            className="inputSignup"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <p id="match">{matchPass}</p>
          <select
            className="country selectBox"
            required
            name="country"
            onChange={handleChanges}
            defaultValue=""
            autoComplete="country"
          >
            <option value="" disabled>
              Country
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Africa">Africa</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <div className="secondhalfSignup">
          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            required
            name="age"
            className="inputSignup"
            onChange={handleChanges}
          ></input>
          <input
            type="text"
            placeholder="Purpose : Ex: Office use"
            id="purpose"
            name="purpose"
            className="inputSignup"
            onChange={handleChanges}
            required
          ></input>

          <div className="gender">
            <h4 id="genderLabel">Gender</h4>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChanges}
            ></input>
            <label htmlFor="male" className="gLabel">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChanges}
            ></input>
            <label htmlFor="female" className="gLabel">
              Female
            </label>
            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              onChange={handleChanges}
              required
            ></input>
            <label htmlFor="others" className="gLabel">
              Others
            </label>
          </div>
          <input
            type="text"
            placeholder="Address"
            id="address"
            name="address"
            className="inputSignup"
            onChange={handleChanges}
            required
            autoComplete="address-line1"
          ></input>
          <select
            className="category selectBox"
            required
            name="category"
            onChange={handleChanges}
            defaultValue=""
          >
            <option value="" disabled>
              Category
            </option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Others">Others</option>
          </select>
          <button id="signupBtn">Signup</button>
          <p>
            Already have a account?<Link to="/login"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

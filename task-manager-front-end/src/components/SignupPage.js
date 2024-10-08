import React from "react";
import "./SignupPage.css";
import img from "../assets/taskimg.png";
const SignupPage = () => {
  return (
    <div className="signup">
      <div className="signbox">
        <div className="firsthalf">
          <img src={img} alt="task management" id="taskimg"></img>
        </div>
        <div className="secondhalf"></div>
      </div>
    </div>
  );
};

export default SignupPage;

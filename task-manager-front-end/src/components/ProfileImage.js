import React from "react";
import "./ProfileImage.css";
import { useNavigate } from "react-router-dom";
const ProfileImage = ({ imgSrc }) => {
  const navigate = useNavigate();
  const moveTo = () => {
    navigate("/profile");
  };
  return (
    <img src={imgSrc} alt="Profile" id="profileImg" onClick={moveTo}></img>
  );
};

export default ProfileImage;

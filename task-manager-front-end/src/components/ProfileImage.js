import React from "react";
import "./ProfileImage.css";
const ProfileImage = ({ imgSrc }) => {
  return <img src={imgSrc} alt="Profile" id="profileImg"></img>;
};

export default ProfileImage;

import React from "react";
import "./Header.css";
import ProfileImage from "./ProfileImage";
import LogoutBtn from "./LogoutBtn";

const Header = ({ imgSrc }) => {
  return (
    <header>
      <p id="title">TaskTide</p>
      <div className="nav">
        <ProfileImage imgSrc={imgSrc} />
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;

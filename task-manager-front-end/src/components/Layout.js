import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const imgSrc =
    "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/1:1/w_741,h_741,c_limit/best-face-oil.png";
  return (
    <>
      {" "}
      <Header imgSrc={imgSrc} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Logo from "../../features/Logo";
import Navbar from "../Navbar";

import "./HeaderPageStyle.scss";

const HeaderPage = () => {
  return (
    <>
      <Logo />
      <div className="divider" />
      <Navbar />
    </>
  );
};

export default HeaderPage;

import React from "react";
import LogoImage from "./logo.svg";
import "./LogoStyle.scss";
const Logo = () => {
  return (
    <a href="/">
      <img src={LogoImage} alt="Logo" />
    </a>
  );
};

export default Logo;

import React from "react";
import LogoImage from "./logo.svg";
import "./LogoStyle.scss";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;

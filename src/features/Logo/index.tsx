import React from "react";
import LogoImage from "./logo.svg"
import "./LogoStyle.scss";

// import LogoImage from "./Logo";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      Logo
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;

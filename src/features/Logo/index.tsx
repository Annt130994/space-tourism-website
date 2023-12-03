import React from "react";
import LogoImage from "./logo.svg"
import "./LogoStyle.scss";
interface LogoProps {
  onClick: (itemId: string) => void;
}
const Logo: React.FC<LogoProps> = ({onClick}) => {
  return (
    <div className="logo" onClick={()=> onClick("00")}>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
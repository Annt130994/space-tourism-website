import React, { useState } from "react";
import Logo from "../../features/Logo";
import Navbar from "../Navbar";
import ToggleMenu from "../../features/ToggleMenu";
import "./HeaderPageStyle.scss";
import toggleOn from "./toggleOn.svg";
import toggleOff from "./toggleOff.svg";
interface DataProps {
  itemId: string;
  onClick: (itemId: string) => void;
}

const HeaderPage: React.FC<DataProps> = ({ itemId, onClick }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Logo onClick={onClick} />
      <div className="divider" />
      <Navbar itemId={itemId} onClick={onClick} />
      {/* Mobile */}
      {toggle ? (
        <>
          <div className="toggle" onClick={() => setToggle(false)}>
            <img src={toggleOff} alt="ToggleOff" />
          </div>
          <ToggleMenu itemId={itemId} onClick={onClick} />
        </>
      ) : (
        <div className="toggle" onClick={() => setToggle(true)}>
          <img src={toggleOn} alt="ToggleOn" />
        </div>
      )}
    </>
  );
};
export default HeaderPage;
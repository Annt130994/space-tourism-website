import React from "react";
import Logo from "../../features/Logo";
import Navbar from "../Navbar";

import "./HeaderPageStyle.scss";

interface DataProps {
  itemId: string;
  onClick: (itemId: string) => void;
}

const HeaderPage: React.FC<DataProps> = ({ itemId, onClick}) => {
  return (
    <>
      <Logo />
      <div className="divider" />
      <Navbar itemId={itemId} onClick={onClick} />
    </>
  );
};
export default HeaderPage;

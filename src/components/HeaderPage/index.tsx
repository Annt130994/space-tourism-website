import React from "react";
import Logo from "../../features/Logo";
import Navbar from "../Navbar";

import "./HeaderPageStyle.scss";

interface DataProps {
  onItemClick: (itemId: string) => void;
}

const HeaderPage: React.FC<DataProps> = (props, onClickBackHome) => {
  const handleItemClick = (itemId: string) => {
    props.onItemClick(itemId);
  };
  return (
    <>
      <Logo />
      <div className="divider" />
      <Navbar onItemClick={handleItemClick} />
    </>
  );
};
export default HeaderPage;

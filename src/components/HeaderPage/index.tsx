import React from "react";
import Logo from "../../features/Logo";
import Navbar from "../Navbar";

import "./HeaderPageStyle.scss";

interface DataProps {
  onItemClick: (itemId: string) => void;
}

const HeaderPage = (props: DataProps) => {
  const handleItemClick = (itemId: string) => {
    console.log("Item clicked:", itemId);
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

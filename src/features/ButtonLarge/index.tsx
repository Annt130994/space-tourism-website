import React from "react";
import "./ButtonLargeStyle.scss";

interface DataProps {
  onItemClick: (itemId: string) => void;
}

const ButtonLarge = (props: DataProps) => {
  const handleClick = (itemId: string) => {
    props.onItemClick(itemId);
  };
  return (
    <div className="container" onClick={() => handleClick("01")}>
      <h4 className="title">Explore</h4>
    </div>
  );
};

export default ButtonLarge;

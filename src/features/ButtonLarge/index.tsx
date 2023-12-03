import React from "react";
import "./ButtonLargeStyle.scss";

interface DataProps {
  onClick: (itemId: string) => void;
}

const ButtonLarge: React.FC<DataProps> = ({onClick}) => {
  return (
    <div className="container-button" onClick={() => onClick("01")}>
      <h4 className="title">Explore</h4>
    </div>
  );
};

export default ButtonLarge;

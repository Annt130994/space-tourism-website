import React from "react";
import "./DestinationStyle.scss";

interface DestinationProps {
  itemId: string;
}

const Destination: React.FC<DestinationProps> = ({ itemId }) => {
  return (
    <>
      <div className={itemId === "01" ? "body-content" : "hide"}>
        <div className="box-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <div className="bodyText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;

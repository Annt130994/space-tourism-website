import React from "react";
import "./ContentStyle.scss";
import ButtonLarge from "../ButtonLarge";

const Content = () => {
  return (
    <>
      <div className="body-content">
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
        <ButtonLarge />
      </div>
    </>
  );
};

export default Content;

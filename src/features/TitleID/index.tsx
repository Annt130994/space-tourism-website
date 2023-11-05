import React from "react";
import "./TitleIdStyle.scss";

interface TitleIdProps {
  itemId: string;
  tabId: string;
  activeTab: string;
  imagePlanet?: string;
}

const TitleId: React.FC<TitleIdProps> = ({
  itemId,
  tabId,
  imagePlanet,
  activeTab,
}) => {
  console.log(imagePlanet);
  return (
    <>
      <div className="container-title">
        <h5 className="title-id">{itemId}</h5>
        <h5 className="title-content">Pick your destination</h5>
        <img
          className={activeTab === tabId ? "container-image" : "hide"}
          src={imagePlanet}
          alt="Moon Planet"
        />
      </div>
    </>
  );
};

export default TitleId;

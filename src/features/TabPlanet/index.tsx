import React, { useState } from "react";
import "./TabPlanetStyle.scss";

interface TabPlanetProps {
  tabId: string;
  title: string;
  content: string;
  avg?: string;
  est?: string;
  activeTab?: string;
}

const TabPlanet: React.FC<TabPlanetProps> = ({
  tabId,
  title,
  content,
  avg,
  est,
  activeTab,
}) => {
  return (
    <>
      <div className={activeTab === tabId ? "activeTab tabPlanet" : "hide"}>
        <h2 className="tabPlanet-title">{title}</h2>
        <div className="bodyText">{content}</div>

        <div className="tabPlanet-divider" />

        <div className="container-subHeading">
          <span>
            <p className="subHeading2">Average Distance:</p>
            <p className="subHeading1">{avg}</p>
          </span>
          <span>
            <p className="subHeading2">Estimated Travel Time:</p>
            <p className="subHeading1">{est}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default TabPlanet;

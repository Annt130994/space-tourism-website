import React, { useState } from "react";
// Data
import ItemNavbar from "../../data/itemNavbar";

import SliderCommander from "../../features/SliderCommander";

import "./CrewStyle.scss";

interface CrewProps {
  itemId: string;
}

const Crew: React.FC<CrewProps> = ({ itemId }) => {
  const crewItem = ItemNavbar.find((item) => item.id === "02");
  const [activeSlider, setActiveSlider] = useState("commander");
  return (
    <>
      <div className="container-crew">
        <div className="container-title">
          <h5 className="title-id">{itemId}</h5>
          <h5 className="title-content">Meet your crew</h5>
        </div>

        <div className="crew-content">
          {/* Slider */}
          <div className="crew-slider">
            {crewItem &&
              crewItem.tab?.map((tabItem) => (
                <span
                  key={tabItem.id}
                  className={
                    activeSlider === tabItem.id
                      ? "active circle"
                      : "circle"
                  }
                  onClick={() => setActiveSlider(tabItem.id)}
                />
              ))}
          </div>
          {/* Content Slider */}
          <div className="container-slider-content">
            {crewItem &&
              crewItem.tab?.map((tabItem) => (
                <SliderCommander
                  key={tabItem.id}
                  tabId={tabItem.id}
                  titleSmall={tabItem.titleSmall}
                  title={tabItem.title}
                  content={tabItem.content}
                  activeTab={activeSlider}
                />
              ))}
          </div>
        </div>
        <div className="container-tab-image">
          {crewItem &&
            crewItem.tab?.map((tabItem) => (
              <div key={tabItem.id}>
                {activeSlider === tabItem.id &&
                <img
                  className="container-image"
                  src={tabItem.img}
                  alt={tabItem.title}
                />
}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Crew;

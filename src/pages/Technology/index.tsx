import React, { useState } from "react";
// Data
import ItemNavbar from "../../data/itemNavbar";

import ButtonTechnology from "../../features/ButtonTechnology";

import "./TechnologyStyle.scss";

interface TechnologyProps {
  itemId: string;
}

const Technology: React.FC<TechnologyProps> = ({ itemId }) => {
  const technologyItem = ItemNavbar.find((item) => item.id === "03");
  const [activeButton, setActiveButton] = useState("1");
  return (
    <>
      <div className="container-tech">
        
        <div className="container-title">
          <h5 className="title-id">{itemId}</h5>
          <h5 className="title-content">Space launch 101</h5>
        </div>

        <div className="tech-content">
          {/* Slider */}
          <div className="tech-button">
            {technologyItem &&
              technologyItem.tab?.map((tabItem) => (
                <span
                  key={tabItem.id}
                  className={
                    activeButton === tabItem.id
                      ? "active circle"
                      : "circle"
                  }
                  onClick={() => setActiveButton(tabItem.id)}
                >
                {tabItem.id}
                </span>
              ))}
          </div>
          {/* Content Button */}
          <div className="container-button-content">
            {technologyItem &&
              technologyItem.tab?.map((tabItem) => (
                <ButtonTechnology
                  key={tabItem.id}
                  tabId={tabItem.id}
                  titleSmall={tabItem.titleSmall}
                  title={tabItem.title}
                  content={tabItem.content}
                  activeTab={activeButton}
                />
              ))}
          </div>
        </div>
        <div className="container-tab-image">
          {technologyItem &&
            technologyItem.tab?.map((tabItem) => (
              <div key={tabItem.id}>
                {activeButton === tabItem.id &&
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

export default Technology;

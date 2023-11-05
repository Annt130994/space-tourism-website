import React, { useState } from "react";

import ItemNavbar from "../../data/itemNavbar";

import TitleId from "../../features/TitleId";
import TabPlanet from "../../features/TabPlanet";

import "./DestinationStyle.scss";

interface DestinationProps {
  itemId: string;
}

const Destination: React.FC<DestinationProps> = ({ itemId }) => {
  const destinationItem = ItemNavbar.find((item) => item.id === "01");
  const [activeTab, setActiveTab] = useState("moon");
  const handleTabClick = (item: string) => {
    setActiveTab(item);
  };
  return (
    <>
      <div className={itemId === "01" ? "container-destination" : "hide"}>
        <div className="container-content">
          {/* Tab */}
          <div className="container-tab">
            {destinationItem &&
              destinationItem.tab?.map((tabItem) => (
                <span
                  key={tabItem.id}
                  className={
                    activeTab === tabItem.id
                      ? "active subHeading3"
                      : "subHeading3"
                  }
                  onClick={() => handleTabClick(tabItem.id)}
                >
                  {tabItem.title}
                </span>
              ))}
          </div>
          {/* Content tab */}
          <div className="container-tab-content">
            {destinationItem &&
              destinationItem.tab?.map((tabItem) => (
                <TabPlanet
                  tabId={tabItem.id}
                  title={tabItem.title}
                  content={tabItem.content}
                  avg={tabItem.avg}
                  est={tabItem.est}
                  activeTab={activeTab}
                />
              ))}
          </div>
        </div>
        {destinationItem &&
          destinationItem.tab?.map((tabItem) => (
            <div key={tabItem.id}>
              <TitleId
                activeTab={activeTab}
                itemId={itemId}
                tabId={tabItem.id}
                imagePlanet={tabItem.img}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Destination;

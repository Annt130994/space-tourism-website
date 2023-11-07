import React, { useState } from "react";

import ItemNavbar from "../../data/itemNavbar";

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
        <div className="container-title">
          <h5 className="title-id">{itemId}</h5>
          <h5 className="title-content">Pick your destination</h5>
        </div>
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
                  key={tabItem.id}
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
        <div className="container-tab-image">
          {destinationItem &&
            destinationItem.tab?.map((tabItem) => (
              <div key={tabItem.id}>
                <img
                  className={
                    activeTab === tabItem.id ? "container-image" : "hide"
                  }
                  src={tabItem.img}
                  alt={tabItem.title}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Destination;

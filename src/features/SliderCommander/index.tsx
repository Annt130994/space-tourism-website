import React from "react";
import "./SliderCommanderStyle.scss";

interface SliderCommanderProps {
  tabId: string;
  titleSmall?: string;
  title: string;
  content: string;
  activeTab?: string;
}

const SliderCommander: React.FC<SliderCommanderProps> = ({
  tabId,
  titleSmall,
  title,
  content,
  activeTab,
}) => {
  return (
    <>
      <div
        className={activeTab === tabId ? "activeTab sliderCommander" : "hide"}
      >
        <h4 className="sliderCommander-titleSmall">{titleSmall}</h4>
        <h3 className="sliderCommander-title">{title}</h3>
        <div className="reversedSlider">
          <div className="bodyText">{content}d</div>
        </div>
      </div>
    </>
  );
};

export default SliderCommander;
